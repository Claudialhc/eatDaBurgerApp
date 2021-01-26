const express = require("express");

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

const router = express.Router();