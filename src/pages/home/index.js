
var template = require('./template.marko');

module.exports = function(req, res) {
  return res.marko(template);
};
