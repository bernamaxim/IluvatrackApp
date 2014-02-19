/**
 * Created by Ahmad Suhendri on 12/12/13.
 */

Ext.define("IluvatrackApp.view.base.NavToolbar", {
    extend : Ext.Toolbar,
    xtype : "navtoolbar",
    config : {
        docked : Ext.isSpace ? "bottom" : "top"
    },
    constructor : function (a) {
        a = a || {};
        a.items = a.items || [];
        if (Ext.isSpace) {
            a.items.push({
                iconCls : "ico-menu-top",
                ui : "plain",
                cls : "menu-btn-top",
                itemId : "menu-btn",
                iconAlign : "right",
                centered : true,
                text : a.title
            });
            delete a.title
        } else {
            a.items.unshift({
                iconCls : "ico-menu",
                ui : "plain",
                itemId : "menu-btn"
            })
        }
        this.callParent([a])
    }
});