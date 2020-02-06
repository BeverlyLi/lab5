var data = require("../data.json");

exports.addFriend = function(request, response) {   
	var nameToShow = request.query.name;
   var descr = request.query.description;
   var newFriend = { "name":nameToShow, "description":descr, "imageURL":"http://lorempixel.com/400/400/people"};
   data.friends.push(newFriend);
   response.render('index', data);
   
}
