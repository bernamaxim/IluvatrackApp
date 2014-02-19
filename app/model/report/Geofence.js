/**
 * Created by Ahmad Suhendri on 12/25/13.
 */
Ext.define("IluvatrackApp.model.report.Geofence", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            'name',
            'geofence',
            'event',
            'dateTime',
            'duration',
            'speed'
        ]
    }
});

