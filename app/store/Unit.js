/**
 * Created by Ahmad Suhendri on 12/25/13.
 */
Ext.define('IluvatrackApp.store.Unit', {
    extend: "Ext.data.Store",
    requires: [
        'Ext.data.proxy.Ajax'
    ],
    config: {
        storeId: 'ServerUnit',
        autoLoad: false,
        model: "IluvatrackApp.model.Unit",
        proxy: {
            type: 'ajax',
            url: IluvatrackApp.util.Config.getBaseUrl() + '/unit',
            reader: {
                type: 'json',
                rootProperty: 'data',
                successProperty: 'status',
                idProperty: 'id',
                totalProperty: 'total'
            }
        },
        listeners: {
            load: function() {
                Ext.getStore('UnitStore').getProxy().clear();
                this.each(function(record) {
                    Ext.getStore('UnitStore').add(record.data);
                });

                Ext.getStore('UnitStore').sync();
                this.removeAll();
            },

            beforeload: function () {
                Ext.Viewport.setMasked({
                    xtype: 'loadmask',
                    message: 'Loading unit lists...'
                });
            }
        }
    }
});

