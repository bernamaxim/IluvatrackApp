/**
 * Created by Ahmad Suhendri on 12/13/13.
 */

Ext.define("IluvatrackApp.controller.Feedback", {
    extend : 'IluvatrackApp.controller.Base',
    config : {
        routes : {
            feedback : "feedbackView"
        },

        refs : {
            feedbackView : "feedback"
        },

        control: {
            "button#submit_feedback" : {
                tap: "onSubmitFeedback"
            }
        }
    },

    feedbackView : function () {
        this.render("feedback");
    },

    onSubmitFeedback : function () {
        var form = Ext.ComponentQuery.query('#form_feedback')[0];
        var values = form.getValues();

        if (values.message == '') {
            Ext.Msg.alert("", "Please fill your feedback.");
            return;
        }

        Ext.Ajax.request({
            url: IluvatrackApp.util.Config.getBaseUrl()+'/feedback',
            method: 'post',
            params: values,
            success: function() {
                Ext.Msg.alert("", "Success");
            },
            failure: function () {
                Ext.Msg.alert("", "Failed!. Please try again.");
            }
        });
    }
});