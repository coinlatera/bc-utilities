root = exports ? this


root.type = (obj) ->
  if obj == undefined or obj == null
    return String obj

  classToType = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regexp',
    '[object Object]': 'object'
  }

  return classToType[Object.prototype.toString.call(obj)]


root.exist = (obj) ->
  if typeof obj is 'undefined' or obj is null or obj == undefined
    return false
  return true


root.number = (n) ->
  return !isNaN(parseFloat(n)) && isFinite(n)