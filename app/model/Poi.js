/**
 * Created by Ahmad Suhendri on 12/25/13.
 */
Ext.define("IluvatrackApp.model.Poi", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            {name: "id", type:"int"},
            {name: "name", type: "string"}
        ]
    }
});

