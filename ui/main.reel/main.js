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
            var script = document.createElement("script");
            script.src = "http://www.reddit.com/reddits.json?jsonp=subfn";

            var component = this;
            window["subfn"] = function(jsonData) {
                component.subs = jsonData.data.children;
            };

            document.head.appendChild(script);
        }
    },

    subs: { value: [] }
});
