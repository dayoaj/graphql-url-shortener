// import { UserInputError } from "apollo-server-express";
const nanoid = "nanoid";
const saveUrl = "../models/url";

function CreateUrlObj(row) {
  return {
    id: row.url_id,
    shortUrl: `${process.env.BASE_URL}/${row.short_url}`,
    createdAt: row.short_url,
    expiredAt: "",
    fullUrl: row.full_url,
  };
}

module.exports = {
  Mutation: {
    async shortenUrl(_, { url }) {
      const newShortUrl = {
        fullUrl: url,
        shortUrl: nanoid(6),
        createdAt: new Date().toISOString(),
      };

      const urlRow = {};

      try {
        urlRow = await saveUrl(newShortUrl);
      } catch {
        errorHandling(error.message);
      }

      return CreateUrlObj(urlRow);
    },
  },
};
