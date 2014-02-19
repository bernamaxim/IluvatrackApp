/**
 * Created by Ahmad Suhendri on 12/12/13.
 */

Ext.define('IluvatrackApp.view.playback.Form', {
    extend: 'Ext.Container',
    requires: ['Ext.field.Select', 'Ext.ux.field.DateTimePicker'],
    xtype: 'playback',
    config: {
        items: [
            {
                xtype: 'navtoolbar',
                title: 'Playback'
            },
            {
                xtype: 'formpanel',
                height: '100%',
                layout: "vbox",
                itemId: 'form_playback',
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
                            dateTimeFormat : 'd M Y H:i',
                            picker: {
                                yearFrom: 2010,
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
                                yearFrom: 2010,
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
                            text: 'View Playback',
                            itemId: 'playbackButton'
                        }]
                    }
                ]
            }
        ],

        listeners: [{
            delegate: '#playbackButton',
            event: 'tap',
            fn: 'onPlaybackTap'
        }]
    },

    onPlaybackTap : function () {
        var me = this;

        var imeiField = me.down('#imeiField'),
            stardateField = me.down('#startdateField'),
            enddateField = me.down('#enddateField');

        var imei = imeiField.getValue(),
            startdate = Ext.util.Format.date(stardateField.getValue(), 'ymdHis'),
            enddate = Ext.util.Format.date(enddateField.getValue(), 'ymdHis');

        me.fireEvent('playbackCommand', me, imei, startdate, enddate);
    }
});