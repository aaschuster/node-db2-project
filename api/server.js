const express = require("express")

const server = express();

server.use(express.json());

const carsRouter = require("./cars/cars-router");
server.use("/api/cars", carsRouter);

server.use( (err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server
