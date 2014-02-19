Ext.define('IluvatrackApp.store.report.MonthlyFuel', {
    extend: "Ext.data.Store",
    config: {
        storeId: 'ReportStoreMonthlyfuel',
        model: "IluvatrackApp.model.report.Monthlyfuel",
        proxy: {
            type: 'ajax',
            url: IluvatrackApp.util.Config.getBaseUrl() + '/report/monthlyfuel',
            actionMethods: 'post',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    }
});

