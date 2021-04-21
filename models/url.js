// import { errorHandling } from "../utils/errorHandling.js";
const pool = require("../database/db");
const errorHandling = require("../utils/errorHandling");

// export const saveUrl = async (urlProp) => {
const saveUrl = async (urlProp) => {
  try {
    const { fullUrl, shortUrl, createdAt } = urlProp;
    const newUrl = await pool.query(
      "INSERT INTO urls (full_url, short_url, created_at) VALUES ($1, $2, $3) RETURNING *",
      [fullUrl],
      [shortUrl],
      [createdAt]
    );

    return newUrl.rows[0];
  } catch (error) {
    return { error: errorHandling(error.message) };
  }
};

// export const findUrl = async (urlArg) => {
const findUrl = async (urlArg) => {
  try {
    const url = await pool.query("SELECT * FROM urls WHERE url_id = $1", [
      urlArg,
    ]);
    return url.rows[0];
  } catch (error) {
    return { error: errorHandling(error.message) };
  }
};

module.exports = {
  saveUrl,
  findUrl,
};
