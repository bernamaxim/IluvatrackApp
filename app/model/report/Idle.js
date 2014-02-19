/**
 * Created by Ahmad Suhendri on 12/25/13.
 */
Ext.define("IluvatrackApp.model.report.Idle", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            'name',
            'starTime',
            'stopTime',
            'idleDuration'
        ]
    }
});

