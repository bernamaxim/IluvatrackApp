/**
 * Created by Ahmad Suhendri on 11/27/13.
 */
Ext.define('IluvatrackApp.view.Main', {
    extend: 'Ext.Container',
    requires: ['Ext.plugin.DropdownMenu',
        'Ext.Map',
        'IluvatrackApp.util.Maps',
        'Ext.field.Search',
        'Ext.SegmentedButton'
    ],
    xtype: 'main',
    id: 'mainMonitorView',
    config: {
        plugins:[{
            xclass:'Ext.plugin.DropdownMenu',
            toolbarRetriever:function(){
                return this.getMenuContainer().down('navtoolbar#monitorToolbar');
            },
            menu:{
                xtype:'list',
                itemId: 'unitList',
                mode: 'MULTI',
                multiSelect: true,
                store: 'UnitStore',
                emptyText: 'No Matching Unit',
                itemTpl: new Ext.XTemplate(
                    '{name}',
                    '<div class="checkitem">&nbsp;</div>'
                ),
                items: [{
                    docked: 'top',
                    xtype: 'toolbar',
                    width: 175,
                    items: [
                        {
                            xtype: 'searchfield',
                            cls: 'unit-search',
                            itemId: 'unitSearch',
                            width: 173,
                            margin: '0.1em',
                            placeHolder: 'Search',
                            name: 'searchfield'
                        }
                    ]
                },
                {
                    docked: 'bottom',
                    xtype: 'toolbar',
                    width: 175,
                    items: [
                        {
                            xtype: 'spacer'
                        },
                        {
                            xtype: 'segmentedbutton',
                            allowDepress: true,
                            itemId: 'selectallBtn',
                            items: [
                                {text: 'All'},
                                {text: 'None'}
                            ],
                            listeners: {
                                toggle: function(container, button, pressed){
                                    var me = this;
                                    var unitList = me.up('#unitList');

                                    if (button.getText() == 'All' && pressed == true) {
                                        unitList.selectAll(true);
                                        me.fireEvent('selectAllUnits');
                                    } else if (button.getText() == 'None' && pressed == true) {
                                        unitList.deselectAll(true);
                                        me.fireEvent('deselectAllUnits');
                                    }
                                }
                            }
                        },
                        {
                            xtype: 'spacer'
                        }
                    ]
                }
                ]
            },
            menuButton:{
                iconCls:'ico-arrow-down',
                ui : "plain",
                cls : "menu-btn-top"
            },
            menuWrapper: {
                width: 190
            }
        }],
        items: [
            {
                xtype: 'mainmenu'
            }, {
                xtype: 'navtoolbar',
                itemId: 'monitorToolbar',
                title: 'Monitor'
            }, {
                xtype: 'map',
                itemId: 'mapMonitor',
                height: '100%',
                markers: [],
                mapOptions: {
                    center: new google.maps.LatLng (-1.740607,117.169436),
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoom: 4,
                    maxZoom: 17
                }
            }
        ]
    },

    initialize: function() {
        var me = this;
        me.callParent(arguments);

        // wait 100 ms
        Ext.Function.defer(this.initMap,100,this);
    },
    initMap: function() {
        var me = this;
        var mapPanel = me.down('#mapMonitor');
        var mapMon = mapPanel.getMap();

    //    IluvatrackApp.util.Maps.addTraffic(mapMon);

        if (mapMon == null) {
            Ext.Function.defer(this.initMap,250,this);
        }
    }
});
