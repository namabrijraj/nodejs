module.exports = {
	getHomePage: (req,res) => {
		let query = "SELECT * from players";
		db.query(query,(err,result) => {
			if(err){
				res.redirect('/');
			}
			res.render('index.ejs',{
				players : result
			})
		});
	}
}