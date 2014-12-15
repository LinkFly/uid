/**
 * Created by LinkFly-user on 14.12.2014.
 */

///////////// Config ///////////
var uidFile = 'uid';

    ///// Node.js config //////
if(!require.isBrowser) {
    var nodejs_modules_dir = "C:/Program Files (x86)/nodejs/node_modules/";
//C:/data-from-d/my-js-libs/uid/uid.js
    var uidFile = __dirname + '\\' + uidFile + '.js';

    var getModuleDir = function(module_name) {
        return nodejs_modules_dir + module_name + "/";
    };}
    //////////////////////////

//////// Compatibility
if (!require.isBrowser) {
    //var requirejs = require("C:/Program Files (x86)/nodejs/node_modules/requirejs/");
    //var reqjs = require("C:/Program Files (x86)/nodejs/node_modules/r/");
    var require = require(getModuleDir("amdrequire"));
    require(uidFile);
}

////////////////// Config ///////////////////
///////////////////////////////////////////////
require([uidFile], function(uid) {
    test("Test uid", function (assert) {
        uid.setUidProp("_$uid");
        uid.setStartUid(101);
        var obj = {};
        var someObj = getSomeObj();

        assert.ok(101 == uid.getUid(obj), "PASSED Check setting unique identifier for new object");
        assert.ok(102 == uid.getUid(someObj), "PASSED Check setting unique identifier for existing object");
        assert.ok(101 == uid.getUid(obj), "PASSED Check return the same unique identifier for new object");
        assert.ok(102 == uid.getUid(someObj), "PASSED Check return the same unique identifier for existing object");

        function getSomeObj() {
            if (typeof window !== "undefined")
                return window;
            else if (typeof global !== "undefined")
                return global;
            else throw Error("Not found window(browsers) or global(nodejs)!");
        }
    });
});
