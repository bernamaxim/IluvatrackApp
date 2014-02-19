/**
 * Created by Ahmad Suhendri on 12/13/13.
 */
Ext.define('ReportItem', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['text']
    }
});

var reportMenuStore = Ext.create('Ext.data.TreeStore', {
    model: 'ReportItem',
    defaultRootProperty: 'items',
    root: {
        items: [
            {
                text: 'Statistics',
                items: [{
                    text: 'Odo',
                    leaf: true,
                    href: 'odo'
                }, {
                    text: 'Monthly Odo',
                    leaf: true,
                    href: 'monthlyodo'
                }, {
                    text: 'Max Speed',
                    leaf: true,
                    href: 'maxspeed'
                }, {
                    text: 'Monthly Max Speed',
                    leaf: true,
                    href: 'monthlymaxspeed'
                }, {
                    text: 'Fuel',
                    leaf: true,
                    href: 'fuel'
                }, {
                    text: 'Monthly Fuel',
                    leaf: true,
                    href: 'monthlyfuel'
                }, {
                    text: 'Over Speed',
                    leaf: true,
                    href: 'overspeed'
                }, {
                    text: 'Idle',
                    leaf: true,
                    href: 'idle'
                }, {
                    text: 'Geofence',
                    leaf: true,
                    href: 'geofence'
                }]
            },
            {
                text: 'Events',
                items: [{
                    text: 'Events',
                    leaf: true,
                    href: 'event'
                }, {
                    text: 'Alarm',
                    leaf: true,
                    href: 'alarm'
                }]
            },
            {
                text: 'Summary',
                items: [{
                    text: 'Journey',
                    leaf: true,
                    href: 'journey'
                }]
            }
        ]
    }
});

Ext.define('IluvatrackApp.view.report.Main', {
    extend: 'Ext.NestedList',
    xtype: 'report',
    config : {
        itemTpl : "{text}",
        title: 'Report',
        useTitleAsBackText: false,
        store: reportMenuStore,
        fullscreen: true,
        toolbar: {
            docked: 'top',
            xtype: 'navtoolbar',
            inline: true
        },
        listeners: {
            itemtap: function(list, index, target, record) {
               Ext.select('.ico-menu').hide();
            },
            back: function(list, index, target, record) {
                Ext.select('.ico-menu').show();
            },
            leafitemtap: function (me, list, index, item) {
                var c = list.getStore().getAt(index).data.href;
                var b = "report"+c;
                var a = Ext.Viewport.child(b) || Ext.Viewport.add({
                    xtype : b
                });
                if (a.isInnerItem()) {
                    Ext.Viewport.setActiveItem(a)
                } else {
                    a.show()
                }
                return a
            }
        }
    }
});