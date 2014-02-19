Ext.define('IluvatrackApp.util.Config', {
    singleton : true,
    config : {
        baseUrl : 'http://app.iluvatrack.com/api/v1',
        delayCheck : 10000,
        delayPlayback : 1500
    },

    constructor : function(config) {
        this.initConfig(config);
        this.callParent([config]);
    }
});