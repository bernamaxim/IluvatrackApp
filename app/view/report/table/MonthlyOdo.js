/**
 * Created by Ahmad Suhendri on 1/1/14.
 */
Ext.define ('IluvatrackApp.view.report.table.MonthlyOdo', {
    extend : 'Ext.Container',
    requires: [
        'Ext.ux.touch.grid.List',
        'Ext.ux.touch.grid.feature.Feature',
        'Ext.ux.touch.grid.feature.Sorter',
        'Ext.ux.touch.grid.feature.Paging'
    ],
    xtype: 'tablereportmonthlyodo',
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
                title: 'Monthly Odo Report'
            }
        ]
    },
    // TODO : Scroll lock horizontal
    initialize : function() {
        var me = this;
        me.add(Ext.create('Ext.ux.touch.grid.List', {
            store     : 'ReportStoreMonthlyodo',
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
                    header    : '1',
                    dataIndex : 'day1',
                    width     : Ext.os.is.Phone ? 30 : '3%',
                    flex : 1,
                    filter    : { type : 'string' }
                },
                {
                    header    : '2',
                    dataIndex : 'day2',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '3',
                    dataIndex : 'day3',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '4',
                    dataIndex : 'day4',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '5',
                    dataIndex : 'day5',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '6',
                    dataIndex : 'day6',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '7',
                    dataIndex : 'day7',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '8',
                    dataIndex : 'day8',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '9',
                    dataIndex : 'day9',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '10',
                    dataIndex : 'day10',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '11',
                    dataIndex : 'day11',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '12',
                    dataIndex : 'day12',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '13',
                    dataIndex : 'day13',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '14',
                    dataIndex : 'day14',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '15',
                    dataIndex : 'day15',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '16',
                    dataIndex : 'day16',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '17',
                    dataIndex : 'day17',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '18',
                    dataIndex : 'day18',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '19',
                    dataIndex : 'day19',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '20',
                    dataIndex : 'day20',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '21',
                    dataIndex : 'day21',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '22',
                    dataIndex : 'day22',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '23',
                    dataIndex : 'day23',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '24',
                    dataIndex : 'day24',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '25',
                    dataIndex : 'day25',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '26',
                    dataIndex : 'day26',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '27',
                    dataIndex : 'day27',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '28',
                    dataIndex : 'day28',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '29',
                    dataIndex : 'day29',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '30',
                    dataIndex : 'day30',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                },
                {
                    header    : '31',
                    dataIndex : 'day31',
                    flex : 1,
                    width     : Ext.os.is.Phone ? 30 : '3%'
                }
            ]
        })
        );

        me.callParent();
    }
});