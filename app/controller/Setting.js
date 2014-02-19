/**
 * Created by Ahmad Suhendri on 12/13/13.
 */

Ext.define("IluvatrackApp.controller.Setting", {
    extend : 'IluvatrackApp.controller.Base',
    config : {
        routes : {
            setting : "settingView"
        },

        refs : {
            settingView : "setting"
        },

        control: {
            settingView : {
                initialize : "onInitSetting"
            },
            "button#submit_setting" : {
                tap: "onSubmitSetting"
            }
        }
    },

    onInitSetting: function () {
        var user = Ext.getStore('User').getById(1);
        var form = Ext.ComponentQuery.query('#form_setting')[0];
        form.setRecord(user);
    },

    settingView : function () {
        this.render("setting");
    },

    onSubmitSetting : function () {
        var form = Ext.ComponentQuery.query('#form_setting')[0];
        form.submit({
            url: IluvatrackApp.util.Config.getBaseUrl()+'/user/edit',
            method: 'POST',
            success: function(response) {
                Ext.Msg.alert("", "Success");
            },
            failure: function (response, opts) {
                Ext.Msg.alert("", "Failed! Please try again.");
            }
        })
    }
});