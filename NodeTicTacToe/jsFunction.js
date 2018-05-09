// if JavaScript, functinos are first class objects
// You can do almost anything to them that you can do to an object,
//  - Pass them around 
//  - store them in variables

let callback = function(){
    console.log("Ev3ery Trhhee Seconds");   
}
setTimeout(callback, 3000);


function a(x){
    return function(y){
        console.log(x+y);
        return(x+y+1);
    }
}
console.log(a(2)(3));

// SETTIMEOUT
// const setTimeout = function(callbackToRunLater, timeToWait){
//     if (timeToWait has passed){
//         callbackToRunLater()
//     }
// }