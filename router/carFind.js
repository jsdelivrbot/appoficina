var router = require('express').Router();
var express = require("express");
var db = require('../controller/dbConnections');
var bodyParser = require('body-parser');

var querySql = db.querySql;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/batata", function(req,res){
  res.status(200).json('ok');
});

router.get("/carfind", function (req, res) {
    // return db.Hash(req.headers.authorization)
    //   .then(function (valid) {
    //     if (valid.length == 0) {
    //       res.status(500).json('unauthorized');
    //     }
    //     else {
          var cliQuery = "SELECT * ";
          cliQuery += "FROM Cliente C "
          cliQuery += "LEFT JOIN Garantia G  ON  C.idWarranty = G.idGarantia ";
          return querySql(cliQuery, '')
            .then(function (rows) {
              res.status(200).json({ rows });
            });
    //     }
    //   });
  });

  module.exports = router;