/**
 * Created by Ahmad Suhendri on 12/18/13.
 */
Ext.define('IluvatrackApp.controller.Login', {
    extend: 'IluvatrackApp.controller.Base',
    config: {
        routes : {
            login : "loginRender"
        },

        refs: {
            loginView: 'login',
            mainView: 'main',
            mainMenuView: 'mainmenu'
        },

        control: {
            loginView: {
                signInCommand: 'onSignInCommand'
            },
            mainMenuView: {
                onSignOffCommand: 'onSignOffCommand'
            }
        }
    },

    init: function () {
        // check login
        Ext.ModelManager.getModel('IluvatrackApp.model.User').load(1, {
            scope : this,
            success : function(cachedLoggedInUser) {
                var me = this;
                delete cachedLoggedInUser.phantom;

                var store = Ext.getStore('User');
                store.add(cachedLoggedInUser);

                var key = cachedLoggedInUser.get('key');

                if (undefined != key) {
                    Ext.Ajax._defaultHeaders = {
                        'X-API-KEY': key
                    };

                    me.logUserIn();
                } else {
                    Ext.Viewport.add(Ext.create('IluvatrackApp.view.Login'));
                }

            },
            failure : function() {
                Ext.Viewport.add(Ext.create('IluvatrackApp.view.Login'));
            }
        });
    },

    loginRender: function () {
        this.render("login");
    },

    // Transitions
    getSlideLeftTransition: function () {
        return { type: 'slide', direction: 'left' };
    },

    onSignInCommand: function (view, username, password) {
        var me = this,
            loginView = me.getLoginView();

        if (username.length === 0 || password.length === 0) {
            loginView.showSignInFailedMessage('Please enter your username and password.');
            return;
        }

        loginView.setMasked({
            xtype: 'loadmask',
            message: 'Signing In...'
        });

        Ext.Ajax.request({
            url: IluvatrackApp.util.Config.getBaseUrl() + '/auth',
            method: 'post',
            params: {
                username: username,
                password: password
            },
            success: function (response) {
                var credentials = Ext.JSON.decode(response.responseText);

                if (credentials.status) {
                    me.signInSuccess(credentials);
                } else {
                    me.signInFailure(credentials.error);
                }
            },
            failure: function () {
                me.signInFailure('something wrong, try again.');
            }
        });
    },

    signInSuccess: function (credentials) {
        var me = this;
        var user = Ext.create('IluvatrackApp.model.User', {
            id: 1,
            user_id: credentials.data.user_id,
            username: credentials.data.username,
            email: credentials.data.email,
            fullname: credentials.data.fullname,
            company: credentials.data.company,
            company_address: credentials.data.company_address,
            key: credentials.key,
            loginTime: (new Date()).valueOf()
        });

        user.save({
            success: function() {
                Ext.Ajax._defaultHeaders = {
                    'X-API-KEY': credentials.key
                };
                var loginView = me.getLoginView();
                loginView.setMasked(false);
                me.logUserIn();
            }
        }, this);
    },

    logUserIn : function() {
        var me = this;

        // load units store
        Ext.getStore('ServerUnit').load( function(records, operation, success) {
            if (success) {
                Ext.Viewport.setMasked(false);
            } else {
                Ext.Viewport.setMasked(false);
                Ext.Msg.alert("", "Loading unit lists failed. Please reload application!");
            }
        }, this);

        // create and show monitor view
        Ext.Viewport.add(Ext.create('IluvatrackApp.view.Main'));
        Ext.Viewport.add(Ext.create('IluvatrackApp.view.Menu'));
        var mainView = me.getMainView();
        Ext.Viewport.animateActiveItem(mainView, me.getSlideLeftTransition());
    },

    signInFailure: function (message) {
        var loginView = this.getLoginView();
        loginView.showSignInFailedMessage(message);
        loginView.setMasked(false);
    },

    onSignOffCommand: function () {
        var a = this;
        Ext.Viewport.child("mainmenu").setOpen(false);
        Ext.ModelManager.getModel('IluvatrackApp.model.User').load(1, {
                success: function(user) {
                    Ext.Msg.confirm('Confirm', 'Are you sure you want to log out?', function(confirmed) {
                        if (confirmed == 'yes') {
                            this.doLogout(user);
                        }
                    }, this);
                },

                failure: function() {
                    a.redirectTo('login');
                }

            },
            this
        );
    },

    doLogout: function(user) {
        var a = this;
        user.erase({
            success: function() {
                a.redirectTo('login');
            }
        });

        // remove units store
        var localUnit = Ext.getStore('UnitStore');
        localUnit.removeAll();
        localUnit.sync();
    }
});