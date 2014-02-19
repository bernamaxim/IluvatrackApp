/**
 * Created by Ahmad Suhendri on 1/1/14.
 */
Ext.define ('IluvatrackApp.view.report.table.Journey', {
    extend : 'Ext.Container',
    requires: [
        'Ext.ux.touch.grid.List',
        'Ext.ux.touch.grid.feature.Feature',
        'Ext.ux.touch.grid.feature.Sorter',
        'Ext.ux.touch.grid.feature.Paging'
    ],
    xtype: 'tablereportjourney',
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
                title: 'Journey Report'
            }
        ]
    },
    // TODO : Scroll lock horizontal
    initialize : function() {
        var me = this;
        me.add(Ext.create('Ext.ux.touch.grid.List', {
            store     : 'ReportStoreJourney',
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
                    header    : 'Start Time',
                    dataIndex : 'startTime',
                    width     : Ext.os.is.Phone ? 150 : '15%',
                    flex : 1,
                    filter    : { type : 'string' }
                },
                {
                    header    : 'Stop Time',
                    dataIndex : 'stopTime',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 150 : '15%'
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
                    width     : Ext.os.is.Phone ? 154 : '15%'
                },
                {
                    header    : 'Stop Duration',
                    dataIndex : 'stopDuration',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 150 : '15%'
                },
                {
                    header    : 'Speed',
                    dataIndex : 'speed',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 150 : '15%'
                }
            ]
        })
        );

        me.callParent();
    }
});