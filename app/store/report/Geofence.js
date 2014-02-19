/**
 * Created by Ahmad Suhendri on 1/8/14.
 */
/**
 * Created by Ahmad Suhendri on 12/25/13.
 */
Ext.define('IluvatrackApp.store.report.Geofence', {
    extend: "Ext.data.Store",
    config: {
        storeId: 'ReportStoreGeofence',
        model: "IluvatrackApp.model.report.Geofence",
        proxy : {
            type   : 'ajax',
            url    : IluvatrackApp.util.Config.getBaseUrl()+'/report/geofence',
            actionMethods: 'post',
            reader : {
                type         : 'json',
                rootProperty : 'data'
            }
        }
    }
});

