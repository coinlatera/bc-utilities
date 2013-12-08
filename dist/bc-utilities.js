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

}).call(this);
