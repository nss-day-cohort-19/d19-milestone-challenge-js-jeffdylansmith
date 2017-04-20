var treedims = {
	h:document.getElementById("height"),
	c:document.getElementById("char") 
}
function treebuilder(height, character){
	height = parseInt(height);
	var tree = "";
	var space = " ";
	tree += character;
	var treespace = space.repeat(height * character.length + character.length * 2);
	console.log(treespace + tree);
	for (i = height; i > 1; i--){
		var tspace = space.repeat(i * character.length + character.length);
		tree += character + character;
		console.log(tspace + tree);
	}		
}
var submit = document.getElementById("submit");
submit.addEventListener("click", function(){
	var hei = treedims["h"].value;
	var cha = treedims["c"].value;	
	treebuilder(hei,cha);
});
document.addEventListener("keyup", function(event) {
	if (event.which === 13){
		var hei = treedims["h"].value;
		var cha = treedims["c"].value;
		treebuilder(hei,cha);
	}
});