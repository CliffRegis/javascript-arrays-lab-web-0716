const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']
var destructivelyAppendKitten = function (name){
	kittens.push(name)
	return kittens
}   

var destructivelyRemoveLastKitten = function (name){
	kittens.pop(name)
	return kittens
}   

var destructivelyPrependKitten = function (name){
	kittens.unshift(name)
	return kittens
}

var destructivelyRemoveFirstKitten = function (name){
	kittens.shift(name)
	return kittens
}


function appendKitten(name){
    var fox = []
	 fox.push(kittens[0])
	 fox.push(kittens[1])
	 fox.push(kittens[2])
	 fox.push(name)
    return fox


 //    var kittens = ['Milo', 'Otis', 'Garfield', 'Broom']
	// var newkittens = kittens        
	// // var fox = newkittens.push(name)
	  
 //    return kittens
} 	


function prependKitten(name){
 //    var kittens = ['Milo', 'Otis', 'Garfield', 'Broom']
	// var newkittens = kittens        
	// var fox = newkittens.push(name) 

	 var fox = []
	 fox.push(kittens[0])
	 fox.push(kittens[1])
	 fox.push(kittens[2])
	 fox.unshift(name)
    return fox
} 

function removeLastKitten(name){

var fox = []
	 fox.push(kittens[0])
	 fox.push(kittens[1])
    return fox
}

function removeFirstKitten(name){

var fox = []
	 fox.push(kittens[1])
	 fox.push(kittens[2])
    return fox
}

