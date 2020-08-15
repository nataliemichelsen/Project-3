// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req) {
  if (req.user) {
    return true;
  }
  return false;
};
