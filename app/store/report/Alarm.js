/**
 * Created by Ahmad Suhendri on 12/25/13.
 */
Ext.define('IluvatrackApp.store.report.Alarm', {
    extend: "Ext.data.Store",
    config: {
        storeId: 'ReportStoreAlarm',
        model: "IluvatrackApp.model.report.Alarm",
        proxy : {
            type   : 'ajax',
            url    : IluvatrackApp.util.Config.getBaseUrl()+'/report/alarm',
            actionMethods: 'post',
            reader : {
                type         : 'json',
                rootProperty : 'data'
            }
        }
    }
});

