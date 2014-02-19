Ext.define('IluvatrackApp.store.report.OverSpeed', {
    extend: "Ext.data.Store",
    config: {
        storeId: 'ReportStoreOverspeed',
        model: "IluvatrackApp.model.report.Overspeed",
        proxy: {
            type: 'ajax',
            url: IluvatrackApp.util.Config.getBaseUrl() + '/report/overspeed',
            actionMethods: 'post',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    }
});

