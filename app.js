/*
    Iluvatrack monitor application for android
    Created by : Ahmad Suhendri <ahmad@suhendri.com>
    Date: 24/11/2013
*/
Ext.Loader.setPath({
    'Ext.plugin': 'app/plugins',
    'Ext.ux.touch.grid' : 'app/plugins/Ext.ux.touch.grid'
});
Ext.application({
    name: 'IluvatrackApp',

    requires: [
        'Ext.device.Connection',
        'Ext.MessageBox',
        'IluvatrackApp.util.Config'
    ],

    controllers: [
        'Base',
        'Login',
        'Main',
        'Playback',
        'Report',
        'Setting',
        'Feedback'
    ],

    models: [
        'User',
        'Unit',
        'Status',

        'report.Alarm',
        'report.Event',
        'report.Fuel',
        'report.Geofence',
        'report.Idle',
        'report.Journey',
        'report.Maxspeed',
        'report.Monthlyfuel',
        'report.Monthlymaxspeed',
        'report.Monthlyodo',
        'report.Odo',
        'report.Overspeed',

        'Poi'
    ],

    stores: [
        'User',
        'Unit',
        'Status',
        'UnitLocal',

        'report.Alarm',
        'report.Event',
        'report.Fuel',
        'report.Geofence',
        'report.Idle',
        'report.Journey',
        'report.MaxSpeed',
        'report.MonthlyFuel',
        'report.MonthlyMaxSpeed',
        'report.MonthlyOdo',
        'report.Odo',
        'report.OverSpeed',

        'Poi'
    ],

    views: [
        'base.NavToolbar',
        'Login',

        'Main',

        'Menu',

        'playback.Form',
        'playback.Maps',

        'report.Main',
        'report.Odo',
        'report.MonthlyOdo',
        'report.MaxSpeed',
        'report.MonthlyMaxSpeed',
        'report.Fuel',
        'report.MonthlyFuel',
        'report.OverSpeed',
        'report.Idle',
        'report.Geofence',
        'report.Event',
        'report.Alarm',
        'report.Journey',

        'report.table.Alarm',
        'report.table.Event',
        'report.table.Fuel',
        'report.table.Geofence',
        'report.table.Idle',
        'report.table.Journey',
        'report.table.MaxSpeed',
        'report.table.MonthlyFuel',
        'report.table.MonthlyMaxSpeed',
        'report.table.MonthlyOdo',
        'report.table.Odo',
        'report.table.OverSpeed',

        'Setting',
        'Feedback'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
