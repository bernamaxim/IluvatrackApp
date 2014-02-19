/**
 * Created by Ahmad Suhendri on 12/13/13.
 */

Ext.define('IluvatrackApp.view.Setting', {
    extend: 'Ext.Container',
    xtype: 'setting',
    requires: ['Ext.field.Password', 'Ext.field.Email'],
    config: {
        items: [
            {
                xtype: 'navtoolbar',
                title: 'Setting'
            },
            {
                xtype: 'formpanel',
                height: '100%',
                layout: "vbox",
                itemId: 'form_setting',
                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Username',
                        items: [
                            {
                                xtype: 'textfield',
                                name: 'username',
                                value: 'administrator',
                                disabled: true
                            }
                        ]

                    },
                    {
                        xtype: 'fieldset',
                        title: 'Full name',
                        items: [
                            {
                                xtype: 'textfield',
                                name: 'fullname',
                                value: ''
                            }
                        ]

                    },
                    {
                        xtype: 'fieldset',
                        title: 'Company',
                        items: [
                            {
                                xtype: 'textfield',
                                name: 'company',
                                value: ''
                            }
                        ]

                    },
                    {
                        xtype: 'fieldset',
                        title: 'Company Address',
                        items: [
                            {
                                xtype: 'textfield',
                                name: 'company_address',
                                value: ''
                            }
                        ]

                    },
                    {
                        xtype: 'fieldset',
                        title: 'Email',
                        items: [
                            {
                                xtype: 'emailfield',
                                name: 'email',
                                value: ''
                            }
                        ]

                    },
                    {
                        xtype: 'fieldset',
                        title: 'Password',
                        items: [
                            {
                                xtype: 'passwordfield',
                                name: 'password',
                                value: ''
                            }
                        ]

                    },
                    {
                        xtype: 'fieldset',
                        title: 'Confirm Password',
                        items: [
                            {
                                xtype: 'passwordfield',
                                name: 'password2',
                                value: ''
                            }
                        ]

                    },
                    {
                        layout : {
                            type : 'vbox',
                            align : 'center'
                        },
                        items : [{
                            xtype: 'button',
                            text: 'Submit',
                            itemId: "submit_setting",
                            width : 100
                        }]
                    }
                ]
            }
        ]
    }


});