/**
 * Created by Ahmad Suhendri on 1/1/14.
 */
Ext.define ('IluvatrackApp.view.report.table.OverSpeed', {
    extend : 'Ext.Container',
    requires: [
        'Ext.ux.touch.grid.List',
        'Ext.ux.touch.grid.feature.Feature',
        'Ext.ux.touch.grid.feature.Sorter',
        'Ext.ux.touch.grid.feature.Paging'
    ],
    xtype: 'tablereportoverspeed',
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
                title: 'Over Speed Report'
            }
        ]
    },
    // TODO : Scroll lock horizontal
    initialize : function() {
        var me = this;
        me.add(Ext.create('Ext.ux.touch.grid.List', {
            store     : 'ReportStoreOverspeed',
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
                    width     : Ext.os.is.Phone ? 100 : '10%',
                    flex : 1,
                    filter    : { type : 'string' }
                },
                {
                    header    : 'Start Time',
                    dataIndex : 'startTime',
                    width     : Ext.os.is.Phone ? 250 : '25%',
                    flex : 1,
                    filter    : { type : 'string' }
                },
                {
                    header    : 'Stop Time',
                    dataIndex : 'stopTime',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 250 : '25%'
                },
                {
                    header    : 'Distance',
                    dataIndex : 'distance',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 100 : '10%'
                },
                {
                    header    : 'Travel Duration',
                    dataIndex : 'travelDuration',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 100 : '10%'
                },
                {
                    header    : 'Stop Duration',
                    dataIndex : 'stopDuration',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 100 : '10%'
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