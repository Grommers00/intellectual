var listofsites = ["BigPurchases.html", "Insurances.html", "Clothing.html"]
var description = ["Clicking here can provide some insight on whether or not to make a big purchase.", "Have no idea how insurance works? or perhaps how to even approach the situation? Click here", "You gotta look good, and good is subjective, so click here to find out more."]

window.onload = function() {
for (var i = 1; i < 4; ++i){
    
var create = document.getElementById("w" + i);
var header = document.createElement("h4");
header.innerHTML = listofsites[i-1];
create.appendChild(header);
var paragraph = document.createElement("p")
paragraph.innerHTML =description[i-1];
paragraph.innerHTML += '<a href =' + listofsites[i-1] + '> Click here</a>';
create.appendChild(paragraph)
}
}






