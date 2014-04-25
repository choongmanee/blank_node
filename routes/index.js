module.exports = function Routes (app) {

	///// go to start page
	app.get('/',function(req,res){
		res.render(
			'index',
			{title:'blank node'}
		);
	});

};