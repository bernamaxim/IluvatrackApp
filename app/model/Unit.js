/**
 * Created by Ahmad Suhendri on 12/25/13.
 */
Ext.define("IluvatrackApp.model.Unit", {
    extend: "Ext.data.Model",
    dirty: true,
    phantom: true,
    config: {
        fields: [
            {name: "id", type:"int"},
            {name: "imei", type:"auto"},
            {name: "name", type: "string"},
            {name: "last_position", type: "int", defaultValue: 0},
            {name: "checked", type: 'boolean', defaultValue: false}
        ],
        identifier: 'uuid'     // needed to avoid console warnings!
    }
});

