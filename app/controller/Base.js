/**
 * Created by Ahmad Suhendri on 12/10/13.
 */
Ext.define("IluvatrackApp.controller.Base", {
    extend : Ext.app.Controller,
    render : function (b) {
        // checking internet connection
        if(Ext.device.Connection.isOnline() == false) {
            Ext.Msg.alert("Error Loading", "No internet connection.");
        }

        var a = Ext.Viewport.child(b) || Ext.Viewport.add({
            xtype : b
        });
        if (a.isInnerItem()) {
            Ext.Viewport.setActiveItem(a)
        } else {
            a.show()
        }
        return a
    },

    isLogin: function () {
        Ext.ModelManager.getModel('IluvatrackApp.model.User').load(1, {
            scope : this,
            success : function(user) {
                return undefined != user.get('key');
            },
            failure : function() {
               return false;
            }
        });
    }
});
