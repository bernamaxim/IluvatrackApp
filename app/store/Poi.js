/**
 * Created by Ahmad Suhendri on 12/25/13.
 */
Ext.define('IluvatrackApp.store.Poi', {
    extend: "Ext.data.Store",
    requires: [
        'Ext.data.proxy.Ajax'
    ],
    config: {
        storeId: 'PoiStore',
        autoLoad: false,
        model: "IluvatrackApp.model.Poi",
        proxy: {
            type: 'ajax',
            url: IluvatrackApp.util.Config.getBaseUrl() + '/poi',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    }
});

