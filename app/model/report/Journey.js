/**
 * Created by Ahmad Suhendri on 12/25/13.
 */
Ext.define("IluvatrackApp.model.report.Journey", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            'name',
            'startTime',
            'stopTime',
            'distance',
            'travelDuration',
            'stopDuration',
            'speed'
        ]
    }
});

