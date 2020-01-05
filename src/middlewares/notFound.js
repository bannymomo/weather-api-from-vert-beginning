const responseFormatter = require("../utils/responseFormatter");

module.exports = function(req, res) {
  responseFormatter(res, 404, "Not Found", null);
};
