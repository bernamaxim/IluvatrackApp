/**
 * Created by Ahmad Suhendri on 12/11/13.
 */
Ext.define("IluvatrackApp.controller.Playback", {
    extend : 'IluvatrackApp.controller.Base',
    requires: ['IluvatrackApp.util.Maps'],
    config : {
        pbStop: false,
        delay: IluvatrackApp.util.Config.getDelayPlayback(),
        paused: false,
        routes : {
            playback : "playbackView"
        },

        refs : {
            playbackView : "playback",
            playbackMapsView: "playbackmaps"
        },

        control: {
            playbackView : {
                playbackCommand : "onPlaybackCommand"
            },
            playbackMapsView: {
                playbackBack : "onStopPlayback"
            },
            "button#btn-stop" : {
                tap : "onStopPlayback"
            },
            "button#btn-pause" : {
                tap : "onPausePlayback"
            },
            "button#btn-forward" : {
                tap : "onForwardPlayback"
            }
        }
    },

    playbackView : function () {
        this.render("playback");
    },

    onPlaybackCommand : function (view, imei, startdate, enddate) {
        var me = this,
            playbackView = me.getPlaybackView();

        if (imei === null || imei.length !== 16) {
            Ext.Msg.alert("", "Please select unit.");
            return;
        }

        if (startdate > enddate) {
            Ext.Msg.alert("", "Check your input date.");
            return;
        }

        playbackView.setMasked({
            xtype: 'loadmask',
            message: 'Please wait...'
        });

        Ext.Ajax.request({
            url: IluvatrackApp.util.Config.getBaseUrl() + '/playback',
            method: 'post',
            params: {
                imei: imei,
                startdate: startdate,
                enddate: enddate
            },
            success: function (response) {
                var res = Ext.JSON.decode(response.responseText);

                playbackView.setMasked(false);
                if (res.status) {
                    me.setPbStop(false);
                    me.playbackMap (res.data);
                } else {
                    Ext.Msg.alert("", res.error);
                }
            },
            failure: function () {
                Ext.Msg.alert("", "Something wrong! Please try again..");
                playbackView.setMasked(false);
            }
        });
    },

    playbackMap : function (data) {
        var me = this;

        Ext.Viewport.add(Ext.create('IluvatrackApp.view.playback.Maps'));
        Ext.Viewport.animateActiveItem(me.getPlaybackMapsView(), { type: 'slide', direction: 'left' });

        var mapCmp = Ext.ComponentQuery.query('#mapPlayback')[0];

        IluvatrackApp.util.Maps.clearMarkers(mapCmp.config.markers);
        var i = 0;
        var repeat = function() {
            var task = Ext.create('Ext.util.DelayedTask', function() {
                if (data[i] !== undefined) {
                    me.plotPb(mapCmp, data[i]);
                    me.updateMarker (mapCmp, i-2);
                    me.createPolyLines (mapCmp, data[i-1].latitude, data[i-1].longitude, data[i].latitude, data[i].longitude);
                }
                repeat.call(this);
            });

            if (i > data.length-2 ||  me.getPbStop() == true) {
                task.cancel();

                IluvatrackApp.util.Maps.clearMarkers(mapCmp.config.markers);
                IluvatrackApp.util.Maps.clearPolylines(mapCmp.config.polyLines);

                me.setBtnPause('ico-pause');
                me.setBtnForward('ico-forward');
            } else if (me.getPaused() == true) {
                task.delay(36000000);       // pause
            } else {
                task.delay(me.getDelay());
            }
            console.log(i);
            i++;
        };
        repeat();
    },

    plotPb : function (mapCmp, item) {
        var map = mapCmp.getMap();

        var lat = item.latitude;
        var lng = item.longitude;
        var markericon = item.marker_icon;
        var content = '<div style="width:200px;"><tr><ul><td><li>Status: '+ item.status +'</li></td><td><li>Speed: ' + item.speed + ' km/h</li></td><td><li>Latitude: ' + item.latitude + '</li></td><td><li>Longitude: ' + item.longitude + ' </li></td><td style="text-align:right;"><li>Datetime: ' + item.datetime + '</li></td></ul></tr><tr><div>';

        IluvatrackApp.util.Maps.plotLocation(mapCmp, lat, lng, '', markericon, content);
        IluvatrackApp.util.Maps.centerMap (map, lat, lng);
    },

    onStopPlayback : function () {
        var me = this;
        me.setPbStop(true);
    },

    onPausePlayback: function () {
        var me = this;
        if (!me.getPaused()) {
            me.setBtnPause('ico-play2');
        } else {
            me.setBtnPause('ico-pause');
        }
        me.setPaused(!me.getPaused());
    },

    onForwardPlayback: function () {
        var me = this;
        var delay = IluvatrackApp.util.Config.getDelayPlayback();
        if (me.getDelay() == delay) {
            me.setDelay(500);
            me.setBtnForward('ico-backward');
        } else {
            me.setDelay(delay);
            me.setBtnForward('ico-forward');
        }
    },

    updateMarker : function (mapCmp, posBef) {
        if (posBef < 0 ) {
            posBef = 0;
        }
        mapCmp.config.markers[posBef].setIcon('resources/images/marker/playback.png');
    },

    setBtnPause: function (iconcls) {
        var btnPause = Ext.ComponentQuery.query('#btn-pause')[0];
        btnPause.setIconCls(iconcls);
    },

    setBtnForward: function (iconcls) {
        var btnForward = Ext.ComponentQuery.query('#btn-forward')[0];
        btnForward.setIconCls(iconcls);
    },

    createPolyLines : function (mapCmp, latitude1, longitude1, latitude2, longitude2) {
        IluvatrackApp.util.Maps.createPolyline(mapCmp, latitude1, longitude1, latitude2, longitude2);
    }

});