/**
 * Created by Ahmad Suhendri on 12/10/13.
 */
Ext.define("IluvatrackApp.controller.Main", {
    extend : 'IluvatrackApp.controller.Base',
    requires: ['IluvatrackApp.util.Maps'],
    config : {
        routes : {
            main : "renderMain"
        },
        refs : {
            mainMenu : "mainmenu",
            mainView: 'main'
        },
        control: {
            "list#unitList" : {
                select: "onCheckUnit",
                deselect: "onUnCheckUnit"
            },
            "segmentedbutton#selectallBtn": {
                selectAllUnits: "onSelectAllUnits",
                deselectAllUnits: "onDeselectAllUnits"
            },
            "button#menu-btn" : {
                tap : "onMainMenuBtnTap"
            },
            "button[href]" : {
                tap : "onMenuBtnTap"
            },
            "searchfield[itemId=unitSearch]" : {
                clearicontap: 'onClearSearch',
                keyup: 'onSearchKeyup'
            }
        }
    },

    init: function() {
        this.control({
            'map#mapMonitor' : {
                maprender : 'onMapRender'
            }
        });
    },

    renderMain : function () {
        this.render("main");
    },

    onMainMenuBtnTap : function (a) {
        a.up("viewport").child("mainmenu").toggle()
    },

    onMenuBtnTap : function (a) {
        this.redirectTo(a.config.href.substr(1));
        a.up("viewport").child("mainmenu").setOpen(false)
    },

    onMapRender: function(comp, map) {
        var me = this;

        var repeat = function() {
            var task = Ext.create('Ext.util.DelayedTask', function() {
                var currentView = Ext.Viewport.getActiveItem();
                if (currentView.id == 'mainMonitorView') {
                    me.runChecked();
                }
                repeat.call(this);
            });
            task.delay(IluvatrackApp.util.Config.getDelayCheck());
        };
        repeat();

        //task.cancel();
    },

    runChecked: function () {
        var store =  Ext.getStore('UnitStore');
        var imei = [];

        store.findBy(function(rec) {
            if (rec.get('checked')) {
                imei.push(rec.get('imei'));
            }
        });

       if (imei.length > 0)
       {
           this.requestPosition(imei);
       } else {
           // Clear all markers
           var mapCmp = Ext.ComponentQuery.query('#mapMonitor')[0];
           IluvatrackApp.util.Maps.clearMarkers(mapCmp.config.markers);
       }
    },

    requestPosition: function (imei) {
        var me = this;
        Ext.Ajax.request({
            url: IluvatrackApp.util.Config.getBaseUrl() + '/position',
            method: 'post',
            params: {
                imei: Ext.encode(imei)
            },
            success: function (response) {
                var data = Ext.JSON.decode(response.responseText);

                if (data.status)
                {
                    me.plotMarker(data.result);
                }
            },
            failure: function () {
                // console.log("error request");
            }
        });
    },

    plotMarker: function (results) {
        var mapCmp = Ext.ComponentQuery.query('#mapMonitor')[0];

        IluvatrackApp.util.Maps.clearMarkers(mapCmp.config.markers);

        Ext.each(results, function (res){
            var lat = res.latitude;
            var lng = res.longitude;
            var title = res.name;
            var markericon = res.marker_icon;
            var content = '<div style="width:200px;">' +
                '<tr><div><b>'+ res.name + '</b></div><ul>' +
                '<td><li>Status: '+ res.status +'</li></td>' +
                '<td><li>Speed: ' + res.speed + ' km/h</li></td>' +
                '<td style="text-align:right;"><li>Date: ' + res.datetime + '</li></td>' +
                '<td><li>Telp: <a href="tel:' + res.phone_number + '">' + res.phone_number + '</a></li></td>' +
                '</ul></tr>' +
                '<tr><div>';

           IluvatrackApp.util.Maps.plotLocation(mapCmp, lat, lng, title, markericon, content);

            if(results.length == 1) {
                IluvatrackApp.util.Maps.centerMap(mapCmp.getMap(), lat, lng);
            }
        });
    },

    onCheckUnit : function (list, record) {
        var checked = Ext.getStore('UnitStore').getById(record.data.id);
        checked.set('checked', true);
        this.runChecked();

        if (list.getSelectionCount() == 1) {
            var mapCmp = Ext.ComponentQuery.query('#mapMonitor')[0];
            IluvatrackApp.util.Maps.zoomMap(mapCmp.getMap(), 12);
        }
    },

    onUnCheckUnit : function (list, record) {
        var unchecked = Ext.getStore('UnitStore').getById(record.data.id);
        unchecked.set('checked', false);
        this.runChecked();
    },

    onSelectAllUnits: function () {
        var store = Ext.getStore('UnitStore');
        var total = store.getAllCount();

        for (var i=0; i < total; i++) {
            var record = store.getAt(i);
            record.set('checked', true);
        }
        this.runChecked();
    },

    onDeselectAllUnits: function () {
        var store = Ext.getStore('UnitStore');
        var total = store.getAllCount();

        for (var i=0; i < total; i++) {
            var record = store.getAt(i);
            record.set('checked', false);
        }
        this.runChecked();
    },

    onClearSearch: function() {
        var store = Ext.getStore('UnitStore');
        store.clearFilter();
    },

    onSearchKeyup: function(searchField) {
        queryString = searchField.getValue();
        var store = Ext.getStore('UnitStore');
        store.clearFilter();

        if(queryString){
            var thisRegEx = new RegExp(queryString, "i");
            store.filterBy(function(record) {
                if (thisRegEx.test(record.get('name'))) {
                    return true;
                };
                return false;
            });
        }
    }
});