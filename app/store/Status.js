Ext.define('IluvatrackApp.store.Status', {
    extend: "Ext.data.Store",
    config: {
        storeId: 'StatusStore',
        model: "IluvatrackApp.model.Status",
        proxy: {
            type: 'ajax',
            url: IluvatrackApp.util.Config.getBaseUrl() + '/status',
            reader: {
                type: 'json',
                successProperty: 'status',
                rootProperty: 'data'
            }
        }
    }
});

