Ext.define('IluvatrackApp.store.report.MonthlyMaxSpeed', {
    extend: "Ext.data.Store",
    config: {
        storeId: 'ReportStoreMonthlymaxspeed',
        model: "IluvatrackApp.model.report.Monthlymaxspeed",
        proxy: {
            type: 'ajax',
            url: IluvatrackApp.util.Config.getBaseUrl() + '/report/monthlymaxspeed',
            actionMethods: 'post',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    }
});

