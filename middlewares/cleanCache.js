const { clearHash } = require('../services/cache');

module.exports = async (req, res, next) => {
  // Let the routehandler do its work before we clean the cache
  await next();

  clearHash(req.user.id);
};
