function requireUser(req, res, next) {
  if (!req.user) {
    next({
      name: "MissingUserError",
      message: "You must be logged in to perform this action",
    });
  }

  next();
}

function requireActiveUser(req, res, next) {
  if (req.user.active === false) {
    next({
      name: "InactiveUserError",
      message: "Your account must be active in to perform this action",
    });
  }
}

module.exports = {
  requireUser,
  requireActiveUser,
};
