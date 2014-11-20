var Cuenta = require('./models/cuentaDBO');
var Libro = require('./models/libroDBO');

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get cuentas
	app.get('/cuentas', function(req, res) {

		// use mongoose to get all todos in the database
        Cuenta.find(function(err, cuentasList) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(cuentasList); // return all todos in JSON format
		});
	});


    // get libros
    app.get('/libros', function(req, res) {

        // use mongoose to get all todos in the database
        Libro.find(function(err, librosList) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(librosList); // return all todos in JSON format
        });
    });

    app.get('/libros/EAN/:ean', function(req, res) {
        var param = req.params;
        var query= Libro.find({'EAN':param.ean});
        if (param.ean === "undefined"){
            query = Libro.find({});
        }
       query.exec(function(err, librosList) {
            if (err)
                res.send(err)

            res.json(librosList);
        });
    });


    // application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};