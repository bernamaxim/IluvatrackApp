/**
 * Created by Ahmad Suhendri on 12/16/13.
 */
Ext.define('IluvatrackApp.view.report.Geofence', {
    extend: 'Ext.Container',
    xtype: 'reportgeofence',
    config: {
        items: [
            {
                xtype: 'navtoolbar',
                title: 'Idle Report'
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
                        title: 'Select Geofence',
                        items: {
                            xtype: 'selectfield',
                            name: 'poi',
                            itemId: 'poiField',
                            autoSelect: false,
                            store: 'PoiStore',
                            displayField: 'name',
                            valueField: 'id'
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
                            dateTimeFormat : 'd M Y H:i',
                            picker: {
                                yearFrom: 2012,
                                useTitles: true,
                                cancelButton: false,
                                minuteInterval : 5,
                                ampm : false,
                                slotOrder: [ 'day', 'month', 'year','hour','minute']
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
                            dateTimeFormat : 'd M Y H:i',
                            picker: {
                                yearFrom: 2012,
                                useTitles: true,
                                cancelButton: false,
                                minuteInterval : 5,
                                ampm : false,
                                slotOrder: [ 'day', 'month', 'year','hour','minute']
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

    initialize : function () {
        var store = Ext.getStore('PoiStore');
        store.load();
    },

    onReportButtonTap : function () {
        var me = this;

        var imei = me.down('#imeiField').getValue(),
            poi = me.down('#poiField').getValue(),
            startdate = Ext.util.Format.date(me.down('#startdateField').getValue(), 'ymdHis'),
            enddate = Ext.util.Format.date(me.down('#enddateField').getValue(), 'ymdHis');

        var params = {
            imei : imei,
            poi: poi,
            startdate: startdate,
            enddate: enddate
        };

        me.fireEvent('submitReport', me, 'geofence', params);
    }

});