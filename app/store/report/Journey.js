/**
 * Created by Ahmad Suhendri on 1/8/14.
 */
/**
 * Created by Ahmad Suhendri on 12/25/13.
 */
Ext.define('IluvatrackApp.store.report.Journey', {
    extend: "Ext.data.Store",
    config: {
        storeId: 'ReportStoreJourney',
        model: "IluvatrackApp.model.report.Journey",
        proxy : {
            type   : 'ajax',
            url    : IluvatrackApp.util.Config.getBaseUrl()+'/report/journey',
            actionMethods: 'post',
            reader : {
                type         : 'json',
                rootProperty : 'data'
            }
        }
    }
});

