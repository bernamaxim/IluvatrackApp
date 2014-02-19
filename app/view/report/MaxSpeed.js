/**
 * Created by Ahmad Suhendri on 12/16/13.
 */
Ext.define('IluvatrackApp.view.report.MaxSpeed', {
    extend: 'Ext.Container',
    xtype: 'reportmaxspeed',
    config: {
        items: [
            {
                xtype: 'navtoolbar',
                title: 'Max Speed Report'
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
                            name: 'date',
                            itemId: 'dateField',
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
                            itemId: 'allUnitField',
                            value : true
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
            date = Ext.util.Format.date(me.down('#dateField').getValue(), 'ymd'),
            allunit = me.down('#allUnitField').getValue();

        var params = {
            imei : imei,
            date : date,
            allutni : allunit
        };

        me.fireEvent('submitReport', me, 'maxspeed', params);
    }

});