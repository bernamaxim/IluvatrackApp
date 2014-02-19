/**
 * Created by Ahmad Suhendri on 12/18/13.
 */

Ext.define('IluvatrackApp.view.playback.Maps', {
    extend : 'Ext.Container',
    requires: ['Ext.Map'],
    xtype : 'playbackmaps',
    config : {
        items : [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Playback',
                items : [{
                    ui : "back",
                    text : "Back",
                    href : "#playback",
                    itemId : "btn-playback-back"
                }
                ]
            },
            {
                xtype: 'map',
                height: '100%',
                itemId: 'mapPlayback',
                markers: [],
                polyLines: [],
                mapOptions: {
                    center: new google.maps.LatLng (-1.740607,117.169436),
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoom: 5,
                    maxZoom: 17
                }
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items : [
                    {
                        xtype: 'spacer'
                    },
                    {
                        itemId: "btn-stop",
                        iconCls: 'ico-stop'
                    },
                    {
                        itemId: "btn-pause",
                        iconCls: 'ico-pause'
                    },
                    {
                        itemId: "btn-forward",
                        iconCls: 'ico-forward'
                    },
                    {
                        xtype: 'spacer'
                    }
                ]
            }
        ],
        listeners: [{
            delegate: '#btn-playback-back',
            event: 'tap',
            fn: 'onBackPlayback'
        }]
    },

    initialize: function() {
        var me = this;
        me.callParent(arguments);

        // wait 100 ms
        Ext.Function.defer(this.initMap,100,this);
    },
    initMap: function() {
        var me = this;
        var mapPanel = me.down('#mapPlayback');
        var mapMon = mapPanel.getMap();

        if (mapMon == null) {
            Ext.Function.defer(this.initMap,250,this);
        }
    },

    onBackPlayback : function () {
        var me = this;
        me.fireEvent('playbackBack');
    }
});