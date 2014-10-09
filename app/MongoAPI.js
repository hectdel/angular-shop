var Cuenta = require('./models/cuentaDBO');

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

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};