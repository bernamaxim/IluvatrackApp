Ext.define('IluvatrackApp.store.report.MonthlyOdo', {
    extend: "Ext.data.Store",
    config: {
        storeId: 'ReportStoreMonthlyodo',
        model: "IluvatrackApp.model.report.Monthlyodo",
        proxy: {
            type: 'ajax',
            url: IluvatrackApp.util.Config.getBaseUrl() + '/report/monthlyodo',
            actionMethods: 'post',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    }
});

