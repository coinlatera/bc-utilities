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


root.isEmpty = (obj) ->
  return true if not obj? or obj.length is 0

  return false if obj.length? and obj.length > 0

  for key of obj
    return false if Object.prototype.hasOwnProperty.call(obj,key) 

  return true


root.keyForValue = (needle, haystack) ->
  for k,v of haystack
    return k if v is needle
  return undefined