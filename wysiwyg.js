
var cardHolder = document.getElementById("people");




var famedPeople = [
{
  title: "Lizard King",
  name: "Jim Morrison",
  bio: "Singer, songwriter, and poet.  Regarded as an iconic frontman in rock music history.",
  image: "img/jmor.jpg"
  // lifespan: {
  //   birth: 1943,
  //   death: 1971
  // }
},

{
  title: "Summertime",
  name: "Janis Joplin",
  bio: "American singer-songwriter best known for her performances and recordings in the psychadelic soul genre",
  image: "img/janis.jpg"
  // lifespan: {
  //   birth: 1943,
  //   death: 1970
  // }
},

{
  title: "Purple Haze",
  name: "Jimi Hendrix",
  bio: "Widely regarded as one of the most influential guitarists in the history of rock music",
  image: "img/jimi.jpg"
  // lifespan: {
  //   birth: 1942,
  //   death: 1970
  // }
},

{
  title: "SAMO",
  name: "Jean-Michel Basquiat",
  bio: "American artist first known for his street art, and later for using social commentary in his neo-expressionist paintings",
  image: "img/Basquiat.jpg"
  // lifespan: {
  //   birth: 1960,
  //   death: 1988
  // }
},

{
  title: "Nevermind",
  name: "Kurt Cobain",
  bio: "American musician known for pioneering the grunge movement",
  image: "img/kurt.jpg"
  // lifespan: {
  //   birth: 1967,
  //   death: 1994
  // }
},

{
  title: "Back to Black",
  name: "Amy Winehouse",
  bio: "English singer/songwriter known for deep vocals and eclectic genre crossover",
  image: "img/amy.jpg"
  // lifespan: {
  //   birth: 1983,
  //   death: 2011
  // }
},

];

for (var i = 0; i < famedPeople.length; i++) {
	famedPeople[i]
	cardHolder.innerHTML += '<person class="fames">' + '<header class="heads">' + "Title: " + famedPeople[i].title + '<p>' + "Name: " + famedPeople[i].name + '</header>' + '<section class="sections">' + "<p id= 'bio'> Bio: " + famedPeople[i].bio + '</p>' + '<img src="' + famedPeople[i].image + '">' + '</section>' +  '</person>' 
};


var newBio = document.getElementById("bioChange");
var bioNew = document.getElementsByClassName("sections");
var dottedUp = document.getElementsByClassName("fames");
var replaceBio;

function selectBio (event) {
	replaceBio = event.target.closest(".fames").childNodes[1].childNodes[0];
  newBio.focus();  
  var myBio = newBio.addEventListener("keyup", changeBio);  
};

function changeBio (event) {
  replaceBio.innerHTML = newBio.value;
}



function addDots (event) {
  event.target.closest(".fames").style.border = "2px dotted black";
};


for (var i = 0; i < dottedUp.length; i++) {
  dottedUp[i].addEventListener("click", addDots);
  dottedUp[i].addEventListener("click", selectBio);
};












