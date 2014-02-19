/**
 * Created by Ahmad Suhendri on 12/13/13.
 */
Ext.define('IluvatrackApp.view.Feedback', {
    extend: 'Ext.Container',
    xtype: 'feedback',
    config: {
        items: [
            {
                xtype: 'navtoolbar',
                title: 'Feedback'
            },
            {
                xtype: 'formpanel',
                height: '100%',
                layout: "vbox",
                itemId: 'form_feedback',
                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Message',
                        items: {
                            xtype: 'textareafield',
                            name: 'message'
                        }
                    },
                    {
                        layout : {
                            type : 'vbox',
                            align : 'center'
                        },
                        items : [{
                            xtype: 'button',
                            text: 'Submit',
                            itemId: 'submit_feedback',
                            width : 100
                        }]
                    }
                ]
            }
        ]
    }
});