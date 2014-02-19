Ext.define('IluvatrackApp.store.report.Odo', {
    extend: "Ext.data.Store",
    config: {
        storeId: 'ReportStoreOdo',
        model: "IluvatrackApp.model.report.Odo",
        proxy: {
            type: 'ajax',
            url: IluvatrackApp.util.Config.getBaseUrl() + '/report/odo',
            actionMethods: 'post',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    }
});

