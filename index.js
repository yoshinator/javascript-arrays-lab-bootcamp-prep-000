// Add your functions and code here

function destructivelyAppendKitten(name){
  window.kittens.push(name);
}

function destructivelyPrependKitten(name){
  window.kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  window.kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  window.kittens.shift();
}