var $ = window.$ || window.jQuery || require('jquery')
/**
 * Shorthand for posting JSON
 *
 * @param  {[type]}   url      [description]
 * @param  {[type]}   data     [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
module.exports = function (url, data, callback) {
  var settings = {
    url: url,
    contentType: 'application/json',
    type: 'POST',
    data: JSON.stringify(data)
  }
  if (callback) {
    settings.success = callback
  }
  return $.ajax(settings)
}

if ($) {
  $.postJSON = module.exports
}
