/* Google-Maps-util-for-Sencha-2-
* https://github.com/JensVerneuer/Google-Maps-util-for-Sencha-2-
*/

Ext.define("IluvatrackApp.util.Maps", {
    statics : {

        echo : function() {
            console.log(arguments);
        },

        addLayer:function(map, url){
            var ctaLayer = new google.maps.KmlLayer(url);
            ctaLayer.setMap(map);
            return ctaLayer; // Return an Instance of the Layer
        },

        hideLayer:function(layerInstance){
            layerInstance.setMap(null);
        },

        addTraffic: function (gMap) {
            var controlDiv = new Ext.Element(document.createElement('div'));
            controlDiv.addCls('gmap-control-container')
                .addCls('gmnoprint');

            var controlUI = new Ext.Element(document.createElement('div'));
            controlUI.addCls('gmap-control');
            controlUI.setText('Traffic');
            controlDiv.append(controlUI);

            var legend = '<ul>'
                + '<li><span style="background-color: #30ac3e">&nbsp;&nbsp;</span><span style="color: #30ac3e"> &gt; 80 km per hour</span></li>'
                + '<li><span style="background-color: #ffcf00">&nbsp;&nbsp;</span><span style="color: #ffcf00"> 40 - 80 km per hour</span></li>'
                + '<li><span style="background-color: #ff0000">&nbsp;&nbsp;</span><span style="color: #ff0000"> &lt; 40 km per hour</span></li>'
                + '<li><span style="background-color: #c0c0c0">&nbsp;&nbsp;</span><span style="color: #c0c0c0"> No data available</span></li>'
                + '</ul>';

            var controlLegend = new Ext.Element(document.createElement('div'));
            controlLegend.addCls('gmap-control-legend');
            controlLegend.setHtml(legend);
            controlLegend.hide();
            controlDiv.append(controlLegend);

            // Set hover toggle event
            controlUI
                .on({
                    mouseenter: function() {
                        controlLegend.show();
                    },
                    mouseleave: function() {
                        controlLegend.hide();
                    }
                });

            var trafficLayer = new google.maps.TrafficLayer();

            google.maps.event.addDomListener(controlUI, 'click', function() {
                if (typeof trafficLayer.getMap() == 'undefined' || trafficLayer.getMap() === null) {
                    controlUI.addCls('gmap-control-active');
                    trafficLayer.setMap(gMap);
                } else {
                    trafficLayer.setMap(null);
                    controlUI.removeCls('gmap-control-active');
                }
            });
//            gMap.controls[google.maps.ControlPosition.TOP_RIGHT].push(controlDiv);

        },

        addKmlLayer: function(map, url){
            var ctaLayer = new google.maps.KmlLayer(url);
            ctaLayer.setMap(map);
            return ctaLayer; // Retun an Instance of the Layer
        },

        drawCircles:function(map, center, radius, strokeColor, strokeOpacity, strokeWeight, fillColor, fillOpacity){  // be carefull untested
            var circleOptions = {
                strokeColor: strokeColor, // Hex Value
                strokeOpacity: strokeOpacity, // Value between 0 and 1
                strokeWeight: strokeWeight,
                fillColor: fillColor,	// Hex Value
                fillOpacity: fillOpacity, // Value between 0 and 1
                map: map,
                center: center,
                radius: radius
            };
            return(new google.maps.Circle(circleOptions))
        },

        changeMapType:function(){
            //todo
        },

        clearMarkers : function (markers) {
            for (var i = 0; i < markers.length; i++ ) {
                markers[i].setMap(null);
            }
            markers.length=0;
        },

        centerMap : function(gMap, lat, lng) {
            var latlng = new google.maps.LatLng(lat, lng);
            gMap.setCenter(latlng);
        },

        zoomMap : function(gMap, level) {
            gMap.setZoom(level);
        },

        reversGeoCodeLatLng : function(map, lat, lng, callback ) { // be careful ..untested
            var lat = parseFloat(lat);
            var lng = parseFloat(lng);
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({'latLng': latlng}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        this.plotLocation(map, latlng, results[1].formatted_address);
                        callback(results[0].geometry.location, results[0].formatted_address);
                    }
                    else {
                        Ext.Msg.alert("No results found");
                    }
                } else {
                    Ext.Msg.alert("Geocoder failed due to: " + status);
                }
            })
        },

        geoCodeAddress : function(address, callback) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({'address' : address},function(results, status) {
                if(status != google.maps.GeocoderStatus.OK) {
                    Ext.Msg.alert("Address not found", status);
                } else {
                    callback(results[0].geometry.location, results[0].formatted_address);
                }
            });
        },

        plotLocation : function(mapCmp, lat, lng, title, markericon, content) {
            var latlng = new google.maps.LatLng(lat, lng);
            var objMap = mapCmp.getMap();

            var cx = 25;
            var cy = 25;
            if (markericon == 'inactive.png' || markericon == 'stop.png' || markericon == 'idle.png' || markericon == 'alarm.gif') {
                cx = 10;
                cy = 10;
            }

            if (markericon == 'playback.png') {
                cx = 7;
                cy = 7;
            }

            var pinIcon = new google.maps.MarkerImage(
                'resources/images/marker/'+markericon,
                null, /* size is determined at runtime */
                null, /* origin is 0,0 */
                new google.maps.Point(cx, cy), /* anchor is bottom center of the scaled image */
                null
            );
            var marker = new google.maps.Marker({
                position : latlng,
                map : objMap,
                title : title,
                icon: pinIcon
            });
            var marketArr = mapCmp.config.markers;
            marketArr.push(marker);

            if( typeof content == 'string' && content != '') {
                var infoWindow = new google.maps.InfoWindow({
                    content : content
                });
                google.maps.event.addListener(marker, 'click', function() {
                    infoWindow.open(objMap, marker);
                })
            } else if( typeof content == 'object') {
                google.maps.event.addListener(marker, 'click', content)
            }
        },

        createPolyline : function (mapCmp, lat1, lng1, lat2, lng2) {
            var map = mapCmp.getMap();
            var pointA = new google.maps.LatLng(lat1, lng1),
                pointB = new google.maps.LatLng(lat2, lng2);
            var shortlines = [pointA, pointB];
            var mapLine = new google.maps.Polyline({
                path: shortlines,
                strokeColor: "#FF0000",
                strokeOpacity: 1.0,
                strokeWeight: 4
            });
            mapCmp.config.polyLines.push(mapLine);
            mapLine.setMap(map);
        },

        clearPolylines : function (polyLines) {
            for (var i = 0; i < polyLines.length; i++ ) {
                polyLines[i].setMap(null);
            }
            polyLines.length=0;
        },

        getDirections : function(origin, destination, travelMode, callback) {

            var travelModes = [google.maps.TravelMode.DRIVING, google.maps.TravelMode.WALKING, google.maps.TravelMode.BICYCLING];

            var directionsService = new google.maps.DirectionsService();
            var request = {
                origin : origin,
                destination : destination,
                travelMode : travelModes[travelMode]
            };
            directionsService.route(request, function(response, status) {
                if(status == google.maps.DirectionsStatus.OK) {
                    callback(response);
                }
            });
        },
        streetView : function(pos, domID) {
            var panoramaOptions = {
                position : pos,
                pov : {
                    heading : 34,
                    pitch : 10,
                    zoom : 1
                }
            };
            var panorama = new google.maps.StreetViewPanorama(document.getElementById(domID), panoramaOptions);
        }
    }
});