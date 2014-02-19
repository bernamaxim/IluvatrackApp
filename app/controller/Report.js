/**
 * Created by Ahmad Suhendri on 12/13/13.
 */
Ext.define("IluvatrackApp.controller.Report", {
    extend : 'IluvatrackApp.controller.Base',
    config : {
        routes : {
            report : "reportView"
        },
        // TODO : simple ref & control
        refs : {
            reportAlarmView : 'reportalarm',
            reportEventView : 'reportevent',
            reportFuelView : 'reportfuel',
            reportGeofenceView : 'reportgeofence',
            reportIdleView : 'reportidle',
            reportJourneyView: 'reportjourney',
            reportMaxSpeedView: 'reportmaxspeed',
            reportMonthlyFuel : 'reportmonthly',
            reportMonthlyMaxSpeed : 'reportmonthlymaxspeed',
            reportMonthlyOdo : 'reportmonthlyodo',
            reportOdo : 'reportodo',
            reportOverSpeed : 'reportoverspeed'
        },

        control : {
            reportAlarmView : {
                submitReport : "onSubmitReport"
            },
            reportEventView : {
                submitReport : "onSubmitReport"
            },
            reportFuelView : {
                submitReport : "onSubmitReport"
            },
            reportGeofenceView : {
                submitReport : "onSubmitReport"
            },
            reportIdleView : {
                submitReport : "onSubmitReport"
            },
            reportJourneyView: {
                submitReport : "onSubmitReport"
            },
            reportMaxSpeedView: {
                submitReport : "onSubmitReport"
            },
            reportMonthlyFuel : {
                submitReport : "onSubmitReport"
            },
            reportMonthlyMaxSpeed : {
                submitReport: "onSubmitReport"
            },
            reportMonthlyOdo : {
                submitReport : "onSubmitReport"
            },
            reportOdo : {
                submitReport : "onSubmitReport"
            },
            reportOverSpeed : {
                submitReport : "onSubmitReport"
            }
        }
    },

    reportView : function () {
        this.render("report");
    },

    showLoading : function () {
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Loading...'
        });
    },

    hideLoading : function () {
        Ext.Viewport.setMasked(false);
    },

    errorMsg: function (msg) {
        Ext.Msg.alert("", msg);
    },

    validImei: function (imei) {
        return (imei != null && imei != '' && imei.length == 16);
    },

    validStartEnd: function (startdate, enddate) {
        return (startdate <= enddate);
    },

    ucFirst : function (str) {
        str += '';
        var f = str.charAt(0).toUpperCase();
        return f + str.substr(1);
    },

    onSubmitReport : function (view, type, params) {
        var me = this;

        if (typeof params['imei'] != 'undefined') {
            if (!this.validImei(params['imei'])) {
                this.errorMsg('Error! Unit input not valid.');
                return;
            }
        }

        if (params['startdate'] && params ['enddate']) {
            if (!this.validStartEnd(params['startdate'], params['enddate'])) {
                this.errorMsg('Error! Start Date or End Date input not valid.');
                return;
            }
        }

        this.showLoading();

        var store = Ext.getStore('ReportStore'+me.ucFirst(type));

//        store.setModel('IluvatrackApp.model.report.'+me.ucFirst(type));
//        store.setProxy({url: IluvatrackApp.util.Config.getBaseUrl()+'/report/'+type});
        store.getProxy().setExtraParams(params);

        store.load ( function(records, operation, success) {
            me.hideLoading();
            if (success) {
                me.render('tablereport'+type);
            } else {
                me.errorMsg('Error Request! Please try again.');
            }
        }, this);
    }
});