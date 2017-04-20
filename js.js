var treedims = {
	h:document.getElementById("height"),
	c:document.getElementById("char") 
}
function treebuilder(height, character){
//	console.log("working");
	height = parseInt(height);
	var tree = "";
	var space = " ";
//	var initial = (height - 1);
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
//  console.log(event.which);
	if (event.which === 13){
		var hei = treedims["h"].value;
		var cha = treedims["c"].value;
		treebuilder(hei,cha);
	}
});
///////////////////////////////////////////////////////////////////

// Height = 7
// Base = 2 * Height - 1
// Initial Treehead = Height - 1

// 1. Print Space = height -1 then print tree string
// 	// var tree = "";
// 	// var space = " ";
// 	// var initial = (height * character.length - 1 );
// 	// var treespace = space.repeat(initial);
// 	// console.log(treespace + tree);
// 	// for (i = height; i > 0; i--){
// 	// 	tree += character + character;
// 	// 	height -= 1; 
// 	// }

// 2. Add two characters to the tree string and reduce space count by 1 
// 3. print space and string then back to 1 

// function treebuilder(height, character){
// //	console.log("working");
// 	height = parseInt(height);
// 	var tree = "";
// 	var treehead = " ";
// 	if (height === "" || character === "" ){
// 		alert("Both feilds must have a Value.");
// 	} else {
// 		tree += character;
// 		console.log(treehead.repeat(height * character.length - 1) + tree);
// 		for (i = height; i > 0;){
// 			tree += character);
// 			tree += character;
// 			height -= 1;
// 			if (height > 0) {
// 			console.log(treehead.repeat(height * character.length - 1) + tree);
// 		//		}
// 		}
//     }	
// }

// //////////////////////////////////////////////////////////////////////






