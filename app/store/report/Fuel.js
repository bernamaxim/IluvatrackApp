/**
 * Created by Ahmad Suhendri on 1/8/14.
 */
/**
 * Created by Ahmad Suhendri on 12/25/13.
 */
Ext.define('IluvatrackApp.store.report.Fuel', {
    extend: "Ext.data.Store",
    config: {
        storeId: 'ReportStoreFuel',
        model: "IluvatrackApp.model.report.Fuel",
        proxy : {
            type   : 'ajax',
            url    : IluvatrackApp.util.Config.getBaseUrl()+'/report/fuel',
            actionMethods: 'post',
            reader : {
                type         : 'json',
                rootProperty : 'data'
            }
        }
    }
});

