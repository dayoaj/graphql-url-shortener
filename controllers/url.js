const { findUrl, saveUrl } = require("../models/url");

const redirectURL = async (req, res) => {
  try {
    const shortUrl = req.params.shortUrl;

    const url = await findUrl(shortUrl);
    if (url) {
      return res.status(301).redirect(url.full_url);
    }
    return res.status(404).json(errorHandling("Url does not exists"));
  } catch (error) {
    return res.status(500).json(errorHandling(error.message));
  }
};

module.exports = redirectURL;
