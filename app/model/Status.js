/**
 * Created by Ahmad Suhendri on 2/19/14.
 */
Ext.define("IluvatrackApp.model.Status", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            {name: "status", type:"string"},
            {name: "total", type:"int", defaultValue: 0}
        ]
    }
});

