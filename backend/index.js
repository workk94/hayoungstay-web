const express = require("./config/express");
const { logger } = require("./config/winston"); // log

const port = 3001;
express().listen(port);
console.log(`API Server Start At Port ${port}`);
