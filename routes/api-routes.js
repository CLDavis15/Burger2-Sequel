
// Import the model to use its database functions.
var db = require("../models");

module.exports = function(app) {

    app.get("/", function(req, res) {
         db.Burger.findAll({

         }).then(function(burgers) {
          res.json(burgers);
        });
      });

    app.post("/api/burger", function(req, res) {
        db.Burger.create({

          burger_name: req.body.burger_name

        }).then(function(results) {
          res.json(results);

        })
      });

      app.put("/api/burger/:id", function(req, res) {
      
        db.Burgers.update({
          devoured: req.body.devoured,
        }, {
          where: {
            id: req.params.id
          }
        }).then(function(results) {
          res.json(results);
        });
    
      });
}

