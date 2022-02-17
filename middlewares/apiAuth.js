module.exports = {
  verifyUserApiKey: (req, res, next) => {
    const userApiKey = req.headers.apikey || req.query.apikey;
    const serverApiKey = process.env.API_KEY;
    if (userApiKey && userApiKey === serverApiKey) {
      next();
    } else {
      res.json({ status: false, error: "unauthorized" });
    }
  }
}