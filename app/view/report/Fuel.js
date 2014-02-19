/**
 * Created by Ahmad Suhendri on 12/16/13.
 */
Ext.define('IluvatrackApp.view.report.Fuel', {
    extend: 'Ext.Container',
    xtype: 'reportfuel',
    config: {
        items: [
            {
                xtype: 'navtoolbar',
                title: 'Fuel Report'
            },
            {
                xtype: 'formpanel',
                height: '100%',
                layout: "vbox",
                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Select Unit',
                        items: {
                            xtype: 'selectfield',
                            name: 'imei',
                            itemId: 'imeiField',
                            autoSelect: false,
                            store: 'UnitStore',
                            displayField: 'name',
                            valueField: 'imei'
                        }
                    },
                    {
                        xtype: 'fieldset',
                        title: 'Start Date',
                        items: {
                            xtype: 'datetimepickerfield',
                            name: 'startdate',
                            itemId: 'startdateField',
                            value: new Date(),
                            dateTimeFormat : 'd M Y',
                            picker: {
                                yearFrom: 2012,
                                useTitles: true,
                                cancelButton: false,
                                slotOrder: [ 'day', 'month', 'year']
                            }
                        }
                    },
                    {
                        xtype: 'fieldset',
                        title: 'End Date',
                        items: {
                            xtype: 'datetimepickerfield',
                            name: 'enddate',
                            itemId: 'enddateField',
                            value: new Date(),
                            dateTimeFormat : 'd M Y',
                            picker: {
                                yearFrom: 2012,
                                useTitles: true,
                                cancelButton: false,
                                slotOrder: [ 'day', 'month', 'year']
                            }
                        }
                    },
                    {
                        xtype: 'fieldset',
                        title: 'All Vehicle',
                        items: {
                            xtype: 'checkboxfield',
                            name: 'allunit',
                            itemId: 'allUnitField'
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

        var imei = me.down('#imeiField').getValue(),
            startdate = Ext.util.Format.date(me.down('#startdateField').getValue(), 'ymd'),
            enddate = Ext.util.Format.date(me.down('#enddateField').getValue(), 'ymd'),
            allunit = me.down('#allUnitField').getValue();

        var params = {
            imei : imei,
            startdate: startdate,
            enddate: enddate,
            allunit : allunit
        };

        me.fireEvent('submitReport', me, 'fuel', params);
    }

});