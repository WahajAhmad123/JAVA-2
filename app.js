var a = ["a","b","c","d","e","f","g","h"]
a. push ("x","y");
console.log(a);
a. pop();
console.log(a);
a. shift();
console.log(a);
a. unshift();
console.log(a);
var b = a.slice(0,3)
console.log (b)
a.splice(3,0,"x","y","z");
console.log(a);
var i = a.indexOf("f")
console.log(i)
console.log(a[i])
for (var i = 11 ; i <= 20 ; i++){
    console.log("Wahaj Ahmad" , +i)
}

for ( var i = 0 ; i < 10 ; i++ ){
    console.log(" 5 X " + [i+ 1] + " = " + 5*[i + 1])
}