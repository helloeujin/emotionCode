/*
 * routes/index.js
 * Routes contains the functions (callbacks) associated with request urls.
 */

var request = require('request'); // library to make requests to remote urls

var moment = require("moment"); // date manipulation library
// var astronautModel = require("../models/astronaut.js"); //db model
var emotionModel = require("../models/emotion.js");

exports.index = function(req, res) {
	console.log("main page requested");
	res.render('index2.html');
}

exports.firstEmotion = function(req, res) {
	console.log("firstEmotion page requested");
	console.log(req.body);

	if(req.body.id == 'test') {
		console.log("render firstEmotion");
		res.render('firstEmotion.html');
	} else {
		console.log("wrong name");
	}
}

// exports.checkStatus = function(req, res) {
// 	console.log("checkStatus requested");
// 	if(req.body.name == "test") {
// 		console.log("render firstEmotion");
// 		res.render('firstEmotion.html');
// 	} else {
// 		console.log("wrong name");
// 	}
// }

exports.createFirstEmotion = function(req, res) {
	console.log("createFirstEmotion requested");
	console.log(req.body);
	var date = moment(this.date), formatted = date.format('YY[-]MM[-]DD[_]HH[:]mm[:]ss[_]');
 
	var newEmotion = new emotionModel({
		// slug : formatted + req.body.id.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'_'),
		// name : req.body.id,
		// state : '0',
		properties : {
			state : '0',
			surprise : req.body.surprise,
			sadness : req.body.sadness,
			fear : req.body.fear,
			anger : req.body.anger,
			disgust : req.body.disgust,
			serenity : req.body.serenity,
			happiness : req.body.happiness,
			freedom : req.body.freedom
		}
	});

	console.log(newEmotion);

	// newEmotion.save(function(err){
	// 	if (err) {
	// 		console.error("Error on saving new emotion data");
	// 		console.error(err); // log out to Terminal all errors
	// 		// res.render('water_form.html', templateData);
	// 		// return res.send("There was an error when creating a new astronaut");
	// 	} else {
	// 		console.log("Created a new emotion!");
	// 		console.log(newEmotion);
	// 		// res.redirect('/quality/'+ newEmotion.slug);
	// 		// res.redirect('/password_err');
	// 	}
	// });
}

exports.firstEmotionCode = function(req, res) {
	console.log("firstEmotionCode page requested");
	res.render("firstEmotionCode.html");
}

exports.secondEmotion = function(req, res) {
	console.log("secondEmotion page requested");
	res.render('secondEmotion.html');
}

exports.secondEmotionCode = function(req, res) {
	console.log("secondEmotionCode page requested");
	res.render("secondEmotionCode.html");
}

exports.view = function(req, res) {
	console.log("view page requested");
	res.render("viewEmotionCode.html");
}


// /*
// 	GET /
// */
// exports.index = function(req, res) {
	
// 	console.log("main page requested");

// 	// query for all astronauts
// 	// .find will accept 3 arguments
// 	// 1) an object for filtering {} (empty here)
// 	// 2) a string of properties to be return, 'name slug source' will return only the name, slug and source returned astronauts
// 	// 3) callback function with (err, results)
// 	//    err will include any error that occurred
// 	//	  allAstros is our resulting array of astronauts
// 	astronautModel.find({}, 'name slug source', function(err, allAstros){

// 		if (err) {
// 			res.send("Unable to query database for astronauts").status(500);
// 		};

// 		console.log("retrieved " + allAstros.length + " astronauts from database");

// 		//build and render template
// 		var templateData = {
// 			astros : allAstros,
// 			pageTitle : "NASA Astronauts (" + allAstros.length + ")"
// 		}

// 		res.render('index.html', templateData);

// 	});

// }

// exports.data_all = function(req, res) {

// 	astroQuery = astronautModel.find({}); // query for all astronauts
// 	astroQuery.sort('-birthdate');
	
// 	// display only 3 fields from astronaut data
// 	astroQuery.select('name photo birthdate');
	
// 	astroQuery.exec(function(err, allAstros){
// 		// prepare data for JSON
// 		var jsonData = {
// 			status : 'OK',
// 			astros : allAstros
			
// 		}

// 		res.json(jsonData);
// 	});

// }

// /*
// 	GET /astronauts/:astro_id
// */
// exports.detail = function(req, res) {

// 	console.log("detail page requested for " + req.params.astro_id);

// 	//get the requested astronaut by the param on the url :astro_id
// 	var astro_id = req.params.astro_id;

// 	// query the database for astronaut
// 	var astroQuery = astronautModel.findOne({slug:astro_id});
// 	astroQuery.exec(function(err, currentAstronaut){

// 		if (err) {
// 			return res.status(500).send("There was an error on the astronaut query");
// 		}

// 		if (currentAstronaut == null) {
// 			return res.status(404).render('404.html');
// 		}

// 		console.log("Found astro");
// 		console.log(currentAstronaut.name);

// 		// formattedBirthdate function for currentAstronaut
// 		currentAstronaut.formattedBirthdate = function() {
// 			// formatting a JS date with moment
// 			// http://momentjs.com/docs/#/displaying/format/
//             return moment(this.birthdate).format("dddd, MMMM Do YYYY");
//         };
		
// 		//query for all astronauts, return only name and slug
// 		astronautModel.find({}, 'name slug', function(err, allAstros){

// 			console.log("retrieved all astronauts : " + allAstros.length);

// 			//prepare template data for view
// 			var templateData = {
// 				astro : currentAstronaut,
// 				astros : allAstros,
// 				pageTitle : currentAstronaut.name
// 			}

// 			// render and return the template
// 			res.render('detail.html', templateData);


// 		}) // end of .find (all) query
		
// 	}); // end of .findOne query

// }

// exports.data_detail = function(req, res) {

// 	console.log("detail page requested for " + req.params.astro_id);

// 	//get the requested astronaut by the param on the url :astro_id
// 	var astro_id = req.params.astro_id;

// 	// query the database for astronaut
// 	var astroQuery = astronautModel.findOne({slug:astro_id});
// 	astroQuery.exec(function(err, currentAstronaut){

// 		if (err) {
// 			return res.status(500).send("There was an error on the astronaut query");
// 		}

// 		if (currentAstronaut == null) {
// 			return res.status(404).render('404.html');
// 		}


// 		// formattedBirthdate function for currentAstronaut
// 		currentAstronaut.formattedBirthdate = function() {
// 			// formatting a JS date with moment
// 			// http://momentjs.com/docs/#/displaying/format/
//             return moment(this.birthdate).format("dddd, MMMM Do YYYY");
//         };
		
// 		//prepare JSON data for response
// 		var jsonData = {
// 			astro : currentAstronaut,
// 			status : 'OK'
// 		}

// 		// return JSON to requestor
// 		res.json(jsonData);

// 	}); // end of .findOne query

// }

// /*
// 	GET /create
// */
// exports.astroForm = function(req, res){

// 	var templateData = {
// 		page_title : 'Enlist a new astronaut'
// 	};

// 	res.render('create_form.html', templateData);
// }

// /*
// 	POST /create
// */
// exports.createAstro = function(req, res) {
	
// 	console.log("received form submission");
// 	console.log(req.body);

// 	// accept form post data
// 	var newAstro = new astronautModel({
// 		name : req.body.name,
// 		photo : req.body.photoUrl,
// 		source : {
// 			name : req.body.source_name,
// 			url : req.body.source_url
// 		},
// 		slug : req.body.name.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'_')

// 	});

// 	// you can also add properties with the . (dot) notation
// 	if (req.body.birthdate) {
// 		newAstro.birthdate = moment(req.body.birthdate).toDate();
// 	}

// 	newAstro.skills = req.body.skills.split(",");

// 	// walked on moon checkbox
// 	if (req.body.walkedonmoon) {
// 		newAstro.walkedOnMoon = true;
// 	}
	
// 	// save the newAstro to the database
// 	newAstro.save(function(err){
// 		if (err) {
// 			console.error("Error on saving new astronaut");
// 			console.error(err); // log out to Terminal all errors

// 			var templateData = {
// 				page_title : 'Enlist a new astronaut',
// 				errors : err.errors, 
// 				astro : req.body
// 			};

// 			res.render('create_form.html', templateData);
// 			// return res.send("There was an error when creating a new astronaut");

// 		} else {
// 			console.log("Created a new astronaut!");
// 			console.log(newAstro);
			
// 			// redirect to the astronaut's page
// 			res.redirect('/astronauts/'+ newAstro.slug)
// 		}
// 	});
// };

// exports.editAstroForm = function(req, res) {

// 	// Get astronaut from URL params
// 	var astro_id = req.params.astro_id;
// 	var astroQuery = astronautModel.findOne({slug:astro_id});
// 	astroQuery.exec(function(err, astronaut){

// 		if (err) {
// 			console.error("ERROR");
// 			console.error(err);
// 			res.send("There was an error querying for "+ astro_id).status(500);
// 		}

// 		if (astronaut != null) {

// 			// birthdateForm function for edit form
// 			// html input type=date needs YYYY-MM-DD format
// 			astronaut.birthdateForm = function() {
// 					return moment(this.birthdate).format("YYYY-MM-DD");
// 			}

// 			// prepare template data
// 			var templateData = {
// 				astro : astronaut
// 			};

// 			// render template
// 			res.render('edit_form.html',templateData);

// 		} else {

// 			console.log("unable to find astronaut: " + astro_id);
// 			return res.status(404).render('404.html');
// 		}

// 	})

// }

// exports.updateAstro = function(req, res) {

// 	// Get astronaut from URL params
// 	var astro_id = req.params.astro_id;

// 	// prepare form data
// 	var updatedData = {
// 		name : req.body.name,
// 		photo : req.body.photoUrl,
// 		source : {
// 			name : req.body.source_name,
// 			url : req.body.source_url
// 		},
// 		birthdate : moment(req.body.birthdate).toDate(),
// 		skills : req.body.skills.split(","),

// 		walkedOnMoon : (req.body.walkedonmoon) ? true : false
		
// 	}


// 	// query for astronaut
// 	astronautModel.update({slug:astro_id}, { $set: updatedData}, function(err, astronaut){

// 		if (err) {
// 			console.error("ERROR: While updating");
// 			console.error(err);			
// 		}

// 		if (astronaut != null) {
// 			res.redirect('/astronauts/' + astro_id);

// 		} else {

// 			// unable to find astronaut, return 404
// 			console.error("unable to find astronaut: " + astro_id);
// 			return res.status(404).render('404.html');
// 		}
// 	})
// }

// exports.postShipLog = function(req, res) {

// 	// Get astronaut from URL params
// 	var astro_id = req.params.astro_id;

// 	// query database for astronaut
// 	astronautModel.findOne({slug:astro_id}, function(err, astronaut){

// 		if (err) {
// 			console.error("ERROR");
// 			console.error(err);
// 			res.send("There was an error querying for "+ astro_id).status(500);
// 		}

// 		if (astronaut != null) {

// 			// found the astronaut

// 			// concatenate submitted date field + time field
// 			var datetimestr = req.body.logdate + " " + req.body.logtime;

// 			console.log(datetimestr);
			
// 			// add a new shiplog
// 			var logData = {
// 				date : moment(datetimestr, "YYYY-MM-DD HH:mm").toDate(),
// 				content : req.body.logcontent
// 			};

// 			console.log("new ship log");
// 			console.log(logData);

// 			astronaut.shiplogs.push(logData);
// 			astronaut.save(function(err){
// 				if (err) {
// 					console.error(err);
// 					res.send(err.message);
// 				}
// 			});

// 			res.redirect('/astronauts/' + astro_id);


// 		} else {

// 			// unable to find astronaut, return 404
// 			console.error("unable to find astronaut: " + astro_id);
// 			return res.status(404).render('404.html');
// 		}
// 	})
// }

// exports.deleteAstro = function(req,res) {

// 	// Get astronaut from URL params
// 	var astro_id = req.params.astro_id;

// 	// if querystring has confirm=yes, delete record
// 	// else display the confirm page

// 	if (req.query.confirm == 'yes')  {  // ?confirm=yes
	
// 		astronautModel.remove({slug:astro_id}, function(err){
// 			if (err){ 
// 				console.error(err);
// 				res.send("Error when trying to remove astronaut: "+ astro_id);
// 			}

// 			res.send("Removed astronaut. <a href='/'>Back to home</a>.");
// 		});

// 	} else {
// 		//query astronaut and display confirm page
// 		astronautModel.findOne({slug:astro_id}, function(err, astronaut){

// 			if (err) {
// 				console.error("ERROR");
// 				console.error(err);
// 				res.send("There was an error querying for "+ astro_id).status(500);
// 			}

// 			if (astronaut != null) {

// 				var templateData = {
// 					astro : astronaut
// 				};
				
// 				res.render('delete_confirm.html', templateData);
			
// 			}
// 		})

// 	}
// };

// exports.remote_api = function(req, res) {

// 	var remote_api_url = 'http://itpdwdexpresstemplates.herokuapp.com/data/astronauts';
// 	// var remote_api_url = 'http://localhost:5000/data/astronauts';

// 	// make a request to remote_api_url
// 	request.get(remote_api_url, function(error, response, data){
		
// 		if (error){
// 			res.send("There was an error requesting remote api url.");
// 			return;
// 		}

// 		// Step 2 - convert 'data' to JS
// 		// convert data JSON string to native JS object
// 		var apiData = JSON.parse(data);

// 		console.log(apiData);
// 		console.log("***********");


// 		// STEP 3  - check status / respond
// 		// if apiData has property 'status == OK' then successful api request
// 		if (apiData.status == 'OK') {

// 			// prepare template data for remote_api_demo.html template
// 			var templateData = {
// 				astronauts : apiData.astros,
// 				rawJSON : data, 
// 				remote_url : remote_api_url
// 			}

// 			return res.render('remote_api_demo.html', templateData);
// 		}	
// 	})
// };

// exports.set_session = function(req, res) {

// 	// set the session with the submitted form data
// 	req.session.userName = req.body.name;
// 	req.session.userColor = req.body.fav_color;

// 	// redirect back to where they came from
// 	console.log(req.referrer);
// 	res.redirect('/');

// }
