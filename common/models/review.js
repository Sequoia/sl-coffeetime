module.exports = function(Review) {
  Review.beforeRemote('create', function(context, user, next) {
    var req = context.req;
    req.body.date = Date.now();
    req.body.publisherId = req.accessToken.userId;
    console.log('new review created by accessToken: %s',
      req.accessToken.userId);
    next();
  });
};
