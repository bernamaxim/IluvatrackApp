/**
 * Created by Ahmad Suhendri on 12/24/13.
 */
Ext.define('IluvatrackApp.store.User', {
    extend: 'Ext.data.Store',

    config: {
        model: 'IluvatrackApp.model.User',
        autoLoad: false
    }
});