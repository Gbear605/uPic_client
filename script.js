var images;
var index = 0;

Parse.initialize("wvQUX0mYhNb3pl0AznV8iTslSWPLSjStPQPKvrgd", "kuPoQfcvFIF0H4ez18fzwZ2QQ7Lx6zBJRlNOqBPQ");

var Polls = Parse.Object.extend("Polls");
var query = new Parse.Query(Polls);
//query.equalTo("playerName", "Dan Stemkoski");
query.find({
  success: function(results) {
    //alert("Successfully retrieved " + results.length + " items in the queue.");
    // Do something with the returned Parse.Object values
    images = results;
    for (var i = 0; i < results.length; i++) { 
      var object = results[i];
      console.log(object);
      //alert(object.id + ' - ' + object.get('imageOne') + ' - ' + object.get('imageTwo') + ' - ' + object.get('description'));
    }
    var image1 = document.getElementById("img1");
    image1.src = images[0].get('imageOne');
    var image2 = document.getElementById("img2");
    image2.src = images[0].get('imageTwo');
    var description = document.getElementById("info");
    description.innerHTML =images[0].get('description');
  },
  error: function(error) {
    console.log("Error: " + error.code + " " + error.message);
  }
});


//what happend when your mouse enters the images.
$(document).ready(function(){
	$("#img1").mouseenter(function(){
		$("#voteQ").fadeTo("slow", 1)
	});
	$("#img1").mouseleave(function(){
		$("#voteQ").fadeTo("slow", 0)
	});
	$("#img2").mouseenter(function(){
		$("#voteQ").fadeTo("slow", 1)
	});
	$("#img2").mouseleave(function(){
		$("#voteQ").fadeTo("slow", 0)
	});

	/*var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  //alert("yay! it worked");
});*/


});


//What happend when you click on the images
$(document).ready(function(){
	$("#img1").click(function(){
<<<<<<< HEAD
		//$("#img2").fadeTo("slow", 0);
		//$("#img1").fadeTo("slow", 0);
		incrementVote("imageOneVotes");
=======
>>>>>>> 946d51e1f03184862eace534c3a88ef245c815a6
		cycle();

	});
	$("#img2").click(function(){
<<<<<<< HEAD
		//$("#img2").fadeTo("slow", 0);
		//$("#img1").fadeTo("slow", 0);
		incrementVote("imageTwoVotes");
		cycle();

=======
		cycle();
>>>>>>> 946d51e1f03184862eace534c3a88ef245c815a6
	});
});

//increments the vote for the inputed string (imageOneVotes or imageTwoVotes)
function incrementVote(vote){
	var query = new Parse.Query(Polls);
	query.equalTo("objectId", images[index].id);
	query.first({
		success: function (Result) {
			Result.save(null, {
				success: function (result) {
					var currentVotes = result.get(vote);
					result.set(vote, currentVotes+1);

					result.save();
				}
			})
		}
	});
}

//cycles to the next images
function cycle(){
	index++;
	var image1 = document.getElementById("img1");
    image1.src = images[index].get('imageOne');
	var image2 = document.getElementById("img2");
	image2.src = images[index].get('imageTwo');
	var description = document.getElementById("info");
	description.innerHTML = images[index].get('description');	
}

