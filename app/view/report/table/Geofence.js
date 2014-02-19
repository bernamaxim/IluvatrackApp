/**
 * Created by Ahmad Suhendri on 1/1/14.
 */
Ext.define ('IluvatrackApp.view.report.table.Geofence', {
    extend : 'Ext.Container',
    requires: [
        'Ext.ux.touch.grid.List',
        'Ext.ux.touch.grid.feature.Feature',
        'Ext.ux.touch.grid.feature.Sorter',
        'Ext.ux.touch.grid.feature.Paging'
    ],
    xtype: 'tablereportgeofence',
    config: {
        fullscreen : true,
        scrollable : {
            direction     : 'horizontal',
            directionLock : true
        },
        layout     : {
            type : 'hbox'
        },
        items: [
            {
                xtype: 'navtoolbar',
                title: 'Geofence Report'
            }
        ]
    },
    // TODO : Scroll lock horizontal
    initialize : function() {
        var me = this;
        me.add(Ext.create('Ext.ux.touch.grid.List', {
            store     : 'ReportStoreGeofence',
            fullscreen : true,
            calcWidth : true,
            height: "100%",
            width: Ext.os.is.Phone ?  700 : '100%',
            features  : [
                {
                    ftype    : 'Ext.ux.touch.grid.feature.Sorter',
                    launchFn : 'initialize'
                },
                {
                    ftype    : 'Ext.ux.touch.grid.feature.Paging',
                    launchFn : 'initialize'
                }
            ],
            columns  : [
                {
                    header    : 'Name',
                    dataIndex : 'name',
                    width     : Ext.os.is.Phone ? 150 : '15%',
                    flex : 1,
                    filter    : { type : 'string' }
                },
                {
                    header    : 'Geofence',
                    dataIndex : 'geofence',
                    width     : Ext.os.is.Phone ? 300 : '30%',
                    flex : 1,
                    filter    : { type : 'string' }
                },
                {
                    header    : 'Event',
                    dataIndex : 'event',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 150 : '15%'
                },
                {
                    header    : 'Date Time',
                    dataIndex : 'dateTime',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 150 : '15%'
                },
                {
                    header    : 'Duration',
                    dataIndex : 'duration',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 150 : '15%'
                },
                {
                    header    : 'Speed',
                    dataIndex : 'speed',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 100 : '10%'
                }
            ]
        })
        );

        me.callParent();
    }
});