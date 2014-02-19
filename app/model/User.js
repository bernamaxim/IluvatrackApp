/**
 * Created by Ahmad Suhendri on 12/24/13.
 */
Ext.define('IluvatrackApp.model.User', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'id', type: 'int'},
            {name: 'user_id', type: 'int'},
            {name: 'username', type: 'string'},
            {name: 'email', type: 'string'},
            {name: 'fullname', type: 'string'},
            {name: 'company', type: 'string'},
            {name: 'company_address', type: 'string'},
            {name: 'key', type: 'string'},
            {name: 'loginTime', type: 'int'}
        ],

        proxy: {
            type: 'localstorage',
            id: 'user-data'
        }
    }
});