/**
 * Created by Ahmad Suhendri on 12/16/13.
 */
Ext.define('IluvatrackApp.view.report.MonthlyFuel', {
    extend: 'Ext.Container',
    xtype: 'reportmonthlyfuel',
    config: {
        items: [
            {
                xtype: 'navtoolbar',
                title: 'Monthly Max Speed Report'
            },
            {
                xtype: 'formpanel',
                height: '100%',
                layout: "vbox",
                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Select Year',
                        items: {
                            xtype: 'datetimepickerfield',
                            name: 'year',
                            itemId: 'yearField',
                            value: new Date(),
                            dateTimeFormat : 'Y',
                            picker: {
                                yearFrom: 2012,
                                useTitles: true,
                                cancelButton: false,
                                slotOrder: ['year']
                            }
                        }
                    },
                    {
                        xtype: 'fieldset',
                        title: 'End Date',
                        items: {
                            xtype: 'datetimepickerfield',
                            name: 'month',
                            itemId: 'monthField',
                            value: new Date(),
                            dateTimeFormat : 'F',
                            picker: {
                                useTitles: true,
                                cancelButton: false,
                                slotOrder: ['month']
                            }
                        }
                    },
                    {
                        layout : {
                            type : 'vbox',
                            align : 'center'
                        },
                        items : [{
                            xtype: 'button',
                            itemId: 'reportButton',
                            text: 'Show Report'
                        }]
                    }
                ]
            }
        ],

        listeners: [{
            delegate: '#reportButton',
            event: 'tap',
            fn: 'onReportButtonTap'
        }]
    },

    onReportButtonTap : function () {
        var me = this;

        var year = Ext.util.Format.date(me.down('#yearField').getValue(), 'y'),
            month = Ext.util.Format.date(me.down('#monthField').getValue(), 'm');

        var params = {
            year : year,
            month: month
        };

        me.fireEvent('submitReport', me, 'monthlyfuel', params);
    }

});