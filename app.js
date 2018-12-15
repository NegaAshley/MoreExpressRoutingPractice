//Run npm install express
//Run node app.js
var express = require("express");
var app = express();

app.get("/", function(request, response){
    console.log("Someone made a request to root!");
    response.send("Hi there, welcome to my assignment!");
});

//Speak routing
app.get("/speak/:animal", function(request, response){
    var animal = request.params.animal;
    var animalNoise;
    
    switch(animal){
        case "pig":
            animalNoise = "Oink";
            break
        case "cow":
            animalNoise = "Moo";
            break;
        case "dog":
            animalNoise = "Woof Woof!";
            break;
        case "cat":
            animalNoise = "Meow";
            break;
        case "sheep":
            animalNoise = "Baaah";
            break;
        default:
            animalNoise = "?";
    }
    
    console.log("Request for " + animal + " speaking");
    response.send("The " + animal +  " says '" + animalNoise + "'");
});

//Repeat routing
app.get("/repeat/:word/:timesRepeated", function(request, response){
    var word = request.params.word;
    var timesRepeated = request.params.timesRepeated;
    var repeatedWord = "";
    
    for(var i = 0; i < timesRepeated; i++){
        repeatedWord += word + " ";
    }
    
    console.log("Request word repeat for " + word);
    response.send(repeatedWord);
});

//Undefined route
app.get("*", function(request, response){
    console.log("Undefined route requested");
    response.send("Sorry, page not found...What are you doing with your life?");
});

//Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});