var trendingNow = document.querySelectorAll("#trendingol span");
var mainTitle = document.getElementById("mainstorytitle");
var mainText = document.getElementById("mainstorytext");

var trends = [
	"Trump",
	"Obama",
	"Xbox",
	"Sony",
	"Marvel",
	"Disney",
	"Fox",
	"Travel",
	"Plane tickets",
	"Facebook",
	"Starbucks",
	"Microsoft",
	"Bill Gates",
	"Steve Jobs",
	"Pixar",
	"Bob Iger",
	"Disneyland",
	"Weather",
	"Tyson",
	"ABC News",
	"Six Flags",
	"Gardening",
	"Hillary Clinton",
	"Florida",
	"Texas",
	"Arkansas",
	"Walmart",
	"Amazon",
	"Coffee"
]

var stories = [
	["Real Estate", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
	["Manhattan", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
	["New York", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
	["Skyscrapers", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
]

for(var i = 0; i < trendingNow.length; i++) {
	var random = trends[Math.floor(Math.random() * trends.length)];
	trendingNow[i].textContent = random;
}

function assignTitle() {
	var i = Math.floor(Math.random() * stories.length);
	mainTitle.textContent = stories[i][0];
}

function assignText() {
	var i = Math.floor(Math.random() * stories.length);
	mainText.textContent = stories[i][1];
}

assignTitle();
assignText();
