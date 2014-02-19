Ext.define("IluvatrackApp.store.UnitLocal", {
    extend: "Ext.data.Store",
    requires: "Ext.data.proxy.LocalStorage",
    config: {
        storeId: 'UnitStore',
        model: "IluvatrackApp.model.Unit",
        sorters: 'name',
        grouper: {
            groupFn: function(record) {
                return record.get('name')[0];
            }
        },
        proxy: {
            type: 'localstorage',
            id: 'unit-local-storage'
        }
    }
});