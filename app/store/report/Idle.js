/**
 * Created by Ahmad Suhendri on 1/8/14.
 */
/**
 * Created by Ahmad Suhendri on 12/25/13.
 */
Ext.define('IluvatrackApp.store.report.Idle', {
    extend: "Ext.data.Store",
    config: {
        storeId: 'ReportStoreIdle',
        model: "IluvatrackApp.model.report.Idle",
        proxy : {
            type   : 'ajax',
            url    : IluvatrackApp.util.Config.getBaseUrl()+'/report/idle',
            actionMethods: 'post',
            reader : {
                type         : 'json',
                rootProperty : 'data'
            }
        }
    }
});

