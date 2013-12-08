(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.type = function(obj) {
    var classToType;
    if (obj === void 0 || obj === null) {
      return String(obj);
    }
    classToType = {
      '[object Boolean]': 'boolean',
      '[object Number]': 'number',
      '[object String]': 'string',
      '[object Function]': 'function',
      '[object Array]': 'array',
      '[object Date]': 'date',
      '[object RegExp]': 'regexp',
      '[object Object]': 'object'
    };
    return classToType[Object.prototype.toString.call(obj)];
  };

  root.exist = function(obj) {
    if (typeof obj === 'undefined' || obj === null || obj === void 0) {
      return false;
    }
    return true;
  };

  root.number = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  root.isEmpty = function(obj) {
    var key;
    if ((obj == null) || obj.length === 0) {
      return true;
    }
    if ((obj.length != null) && obj.length > 0) {
      return false;
    }
    for (key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return false;
      }
    }
    return true;
  };

  root.keyForValue = function(needle, haystack) {
    var k, v;
    for (k in haystack) {
      v = haystack[k];
      if (v === needle) {
        return k;
      }
    }
    return void 0;
  };

  root.capitalize = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

}).call(this);
