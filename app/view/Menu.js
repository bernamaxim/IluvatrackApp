/**
 * Created by Ahmad Suhendri on 12/9/13.
 */
var menu_items = [{
        text: 'Monitor',
        ui: 'mainmenu',
        href: '#main',
        iconCls: 'ico-monitor'
    },{
        text: 'Playback',
        ui: 'mainmenu',
        href: '#playback',
        iconCls: 'ico-playback'
    },{
        text: 'Report',
        ui: 'mainmenu',
        href: '#report',
        iconCls: 'ico-report'
    }, {
        xtype : "component",
        cls : "divider",
        html : ""
    },{
        text: 'Setting',
        ui: 'mainmenu',
        href: '#setting',
        iconCls: 'ico-setting'
    }, {
        text: 'Feedback',
        ui: 'mainmenu',
        href: '#feedback',
        iconCls: 'ico-feedback'
    },{
        ui : "login",
        text : "Logout",
        itemId : "logOutButton",
        iconCls : "ico-user"
    },{
        xtype:'list',
        ui: 'status',
        itemId: 'statusList',
        disableSelection: true,
        height: 160,
//      bottom: 0,
        itemHeight: 25,
        store: 'StatusStore',
        itemTpl: new Ext.XTemplate(
            '<div class="statusName">',
                '{status:this.ucStatus}',
                '<span class="statusTotal">{total}</span>',
            '</div>',
            {
                ucStatus: function(status){
                    status += '';
                    var f = status.charAt(0).toUpperCase();

                    return f + status.substr(1);
                }
            }
        )
    }];

Ext.define('IluvatrackApp.view.Menu',{
    extend: 'Ext.Container',
    xtype: 'mainmenu',
    config: {
        cls: 'mainmenu',
        docked: 'left',
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 0,
        width: 266,
        padding: '75 0 0 0',
        open: false,
        scrollable: 'vertical',
        defaultType: 'button',
        defaults: {
            textAlign: 'left'
        },
        items: menu_items,

        listeners: [{
            delegate: '#logOutButton',
            event: 'tap',
            fn: 'onLogOffButtonTap'
        }]
    },

    initialize : function () {
        var a = this;
        if (Ext.isSpace) {
            a.setRight(0);
            a.setLeft(0);
            a.setTop(60);
            a.setSize(null, Ext.Viewport.getWindowHeight() - 60)
        } else {
            a.setWidth(266);
            a.setTop(0)
        }
        a.callParent(arguments)
    },
    setParent: function(parent) {
        this.callParent(arguments);
        this.maskCmp = parent.add({
            xtype   : 'component',
            cls     : 'mainmenu-mask',
            top     : 0,
            zIndex  : 5000,
            hidden  : true,
            width   : 9999,
            left    : this.getWidth(),
            bottom  : 0
        });
        if (Ext.isSpace) {
            this.maskCmp.setConfig({
                height : 60,
                left : 0,
                right : 0
            })
        } else {
            this.maskCmp.setConfig({
                width : 9999,
                left : this.getWidth(),
                bottom : 0
            })
        }
        this.maskCmp.element.on({
            scope   : this,
            touchend: 'onMaskRelease'
        });
    },

    onMaskRelease: function() {
        this.setOpen(false);
    },

    onDestroy: function() {
        var o = this;
        o.maskCmp.destroy();
        delete o.maskCmp;

        o.callParent(arguments);
    },

    toggle: function() {
        var ak = this;
        ak.setOpen(!ak.getOpen());

        if(ak.getOpen()) {
            Ext.getStore('StatusStore').load();
        }
    },

    updateOpen: function(a) {
        var c,
            b = this.up();
        if (!b) {
            return
        }
        c = b.innerElement;
        if (a) {
            if (Ext.isSpace) {
                c.translate(0, this.getHeight() * -1, 0)
            } else {
                c.translate(this.getWidth(), 0, 0)
            }
            this.maskCmp.show()
        } else {
            c.translate(0, 0, 0);
            this.maskCmp.hide()
        }
    },

    onLogOffButtonTap: function () {
        var me = this;
        me.fireEvent('onSignOffCommand');
    }

});