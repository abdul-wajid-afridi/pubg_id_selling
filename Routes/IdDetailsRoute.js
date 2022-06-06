const express = require("express");
const path = require("path");

const {
  postIdDetails,
  getIdDetails,
  deleteIdDetails,
  updateIdDetails,
} = require("../Controllers/IdDetailsController");
const upload = require("../UploadFile");

const routes = express.Router();

// getting id details data
routes.get("/idDetails", getIdDetails);

// posting id details data
routes.post("/idDetails", upload, postIdDetails);

// updating id details data
routes.put("/idDetails/update/:id", upload, updateIdDetails);

// deleting id details data
routes.delete("/idDetails/delete/:id", deleteIdDetails);

module.exports = routes;
