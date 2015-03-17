/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    
    templateDidLoad: {
        value: function() {
            this.addPathChangeListener("templateObjects.rep.selection.0.data", this, "handleSelection");
            
            var script = document.createElement("script");
            script.src = "http://www.reddit.com/reddits.json?jsonp=subfn";

            var component = this;
            window["subfn"] = function(jsonData) {
                component.subs = jsonData.data.children;
            };

            document.head.appendChild(script);
        }
    },

    subs: { value: [] },
    
    handleSelection: {
        value: function(selected) {
            if (selected) {
                var script = document.createElement("script");
                script.src = "http://www.reddit.com/" + selected.url + ".json?sort=top&t=month&jsonp=storyfn";

                var component = this;
                window["storyfn"] = function(jsonData) {
                    component.stories = jsonData.data.children;
                };

                document.head.appendChild(script);
            }
        }
    },

    stories: { value: [] }
});
