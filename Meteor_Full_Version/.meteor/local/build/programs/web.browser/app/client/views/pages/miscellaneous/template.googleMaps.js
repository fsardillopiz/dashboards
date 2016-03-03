(function(){
Template.__checkName("googleMaps");
Template["googleMaps"] = new Template("Template.googleMaps", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Google maps"),
      category: Spacebars.call("Miscellaneous")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), HTML.Raw('\n\n    <div class="wrapper wrapper-content  animated fadeInRight">\n\n        <div class="row">\n            <div class="col-md-6">\n                <div class="ibox ">\n                    <div class="ibox-title">\n                        <h5>Google Maps Basic example</h5>\n                    </div>\n                    <div class="ibox-content">\n                        <p>\n                            With google maps <a href="https://developers.google.com/maps/documentation/javascript/reference#MapOptions">API</a> You can easy customize your map.\n                        </p>\n                        <div class="google-map" id="map1"></div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-md-6">\n                <div class="ibox ">\n                    <div class="ibox-title">\n                        <h5>Custom theme 1</h5>\n                    </div>\n                    <div class="ibox-content">\n                        <p>\n                            This is a custom theme for Google map.\n                        </p>\n                        <div class="google-map" id="map2"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div class="col-md-6">\n                <div class="ibox ">\n                    <div class="ibox-title">\n                        <h5>Map Type</h5>\n                    </div>\n                    <div class="ibox-content">\n                        <p>\n                            You can also change a map type.\n                        </p>\n                        <div class="google-map" id="map3"></div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-md-6">\n                <div class="ibox ">\n                    <div class="ibox-title">\n                        <h5>Custom theme 2</h5>\n                    </div>\n                    <div class="ibox-content">\n                        <p>\n                            This is a custom theme for Google map.\n                        </p>\n                        <div class="google-map" id="map4"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div class="col-md-12">\n                <div class="ibox ">\n                    <div class="ibox-title">\n                        <h5>Street View</h5>\n                    </div>\n                    <div class="ibox-content">\n                        <p>\n                            You can also initial turn on Street View in Google maps.\n                        </p>\n                        <div class="google-map" id="pano" style="height: 500px"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>') ];
}));

}).call(this);
