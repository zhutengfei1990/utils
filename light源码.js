var light = {
    //light.substitue('bla bla {placeholder} haha', {placeholder: 'test'})
    substitue: function (template, map) {
        if (!template) {
            return '';
        }
        if (!map) {
            return template;
        }
        if (typeof template !== 'string') {
            throw 'invalid template';
        }

        return template.replace(new RegExp('{\\w+}', 'gmi'), function (property) {
            var prop = property.substr(1, property.length - 2);
            return prop in map ? map[prop].toString() : '';
        });
    },
    register: function (path, root, obj) {
        var items = path.split('/'),
            // default root is window.light
            parent = root || light;

        // path starts with '/'
        if (!items[0]) {
            // just ignore the root
            parent = window;
            // remove the first item
            items.shift();
        }

        // build the hierarchy
        var name, me = parent;
        for (var i = 0, l = items.length - 1; i < l; i++) {
            if (!(name = items[i])) continue;
            parent = parent[name] = parent[name] || {};
        }

        // the last item
        name = items[i];
        if (name) {
            parent = parent[name] = obj === undefined ? {} : obj;
        }

        return parent;
    },
    isFunction: function (obj) {
        return light.type(obj) === "function";
    },
    type: function (obj) {
        return (obj === null || obj === undefined) ?
            String(obj) :
            class2type[Object.prototype.toString.call(obj)] || "object";
    },
    each: function (object, callback, args) {
        if (!object) return object;
        var length = object.length;

        if (length !== undefined && 'reverse' in object) {
            var i = 0;
            while (i < length) {
                if (callback.call(object[i], i, object[i], object) === false) break;
                i++;
            }
        } else {
            var name;
            for (name in object) {
                if (callback.call(object[name], name, object[name], object) === false) {
                    break;
                }
            }
        }

        return object;
    },
    module: function (name, obj) {
        var o = light.register(name, null, obj);
        if (light.isFunction(obj)) {
            o.constructor = obj;
        }
        return o;
    }
}
var class2type = {};
// Populate the class2type map
light.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
});
console.log(light.substitue('bla bla {placeholder} haha', {placeholder: 'test'}));