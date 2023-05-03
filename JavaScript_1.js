// 1. Ways to print in JavaScript
console.log("Hello World");
alert("me");
document.write("this is document write")

// 2. Javascript console API
console.log("Hello World", 4 + 6, "Another log");
console.warn("this is warning");
console.error("This is an error");

// 3. JavaScript Variables
// What are Variables? - Containers to store data values

/*
multi 
line 
commment
*/



var number1 = 34;
var number2 = 56;
console.log(number1 + number2);



/////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Data types in JavaScript

// At a very high level, there are two types of data types in JavaScript
// 1. Primitive data types: undefined, null, number, string, boolean, symbol

// Numbers
var num1 = 455;
var num2 = 56.76;

// String
var str1 = "This is a string";
var str2 = 'This is also a string';

// Booleans
var a = true;
var b = false;
// console.log(a, b);

// var und = undefined;
var und;
// console.log(und);

// null
var n = null;
// console.log(n);


//---------------------------------------------------//


// 2. Reference data types: Arrays and Objects

// Objects
var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.977
}
// console.log(marks);


// Arrays
var arr = [1, 2, "bablu", 4, 5]
// console.log(arr)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Operators in JavaScript

// Arithmetic Operators
var a = 100;
var b = 10;
console.log("The value of a + b is ", a+b);
console.log("The value of a - b is ", a-b);
console.log("The value of a * b is ", a*b);
console.log("The value of a / b is ", a/b);

// Assignment Operators
var c = b;
c += 2; // c = c + 2;
c -= 2; // c = c - 2;
c *= 2; // c = c * 2;
c /= 2; // c = c / 2;


// Comparison Operators
var x = 34;
var y = 56;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x > y);
console.log(x < y);

// Logical Operators
// Logical and
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

//--------------------------------------------//

// Logical or
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

//--------------------------------------------//

// Logical not
console.log(!false);
console.log(!true);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function in JavaScript
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
// DRY = Do not repeat yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1, c2);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Conditionals in JavaScript

var age = 41;

// Single if statement

if(age > 18){
    console.log('You can drink rasna water');
}

//----------------------------------------------------// 

// if - else statement


if(age > 18){
    console.log('You can drink rasna water');
}
else{
    console.log('You cannot drink rasna water');
}

//----------------------------------------------------//

age = 25;

// if-else Ladder

if(age > 32){
    console.log("You are not a kid");
}
else if(age >26){
    console.log("Bachhe nahi rahe");
}
else if(age >22){
    console.log("Yes Bachhe nahi rahe");
}
else if(age >18){
    console.log("18 Bachhe nahi rahe");
}
else{
    console.log("Bachhe rahe");
}
console.log("End of ladder");

//----------------------------------------------------//

// Loop

var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
for(var i=0;i<arr.length;i++){
    if(i==2){
        // break;
        continue;
    }
    console.log(arr[i])
}

//---------------------------------------------------------------//

// forEach

arr.forEach(function(element){
    console.log(element);
})

//--------------------------------------------------------------//

// while loop

// const ac = 0;
// ac++;
// ac = ac +1;
let j = 0;
while(j<arr.length){
    console.log(arr[j]);
    j ++;
}

// --------------------------------------------------------------//

// Do while

do{
    console.log(arr[j]);
    j++;
} while (j < arr.length);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Array Methods in JavaScript

let myArr = ["Fan", "Camera", 34, null, true];
// Array Methods
console.log(myArr.length);
myArr.pop();
myArr.push("harry");
myArr.shift();
myArr.sort();
myArr.toString();
// const newLen = myArr.unshift("Harry")
// console.log(newLen);
// console.log(myArr);

///////////////////////////////////////////////////////////////////////////////////////////////////

// String Methods in JavaScript

let myLovelyString = "Harry is a good boy good good Harry";

console.log(myLovelyString.length) 
console.log(myLovelyString.indexOf("good")) // --> 11
console.log(myLovelyString.lastIndexOf("good")) // -> 29

/--------------------------------------/

console.log(myLovelyString.slice(1,4))   // -> arr
d = myLovelyString.replace("Harry", "Rohan"); // raplace the element
d = d.replace("good", "bad");
// console.log(d, myLovelyString)

///////////////////////////////////////////////////////////////////////////////////
// Date Time
// Assigning  the date info to variable
let myDate = new Date();

// calling the time / year / day / Minutes / Hours
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());
 
/////////////////////////////////////////////////////////////////////////////////////

//--- IMP-------- DOM Manipulation ( Document Object model )-------IMP---//

//-------------------getElementById------------------------//

let elem = document.getElementById('click');
// console.log(elem);

//-------------------getElementByClassName------------------//


let elemClass = document.getElementsByClassName("container")

// console.log(elemClass);

elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")

console.log(elem.innerHTML);
console.log(elem.innerText); 

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText); 

//--------------------getElementByTagName------------------//

tn = document.getElementsByTagName('div')
// console.log(tn)

createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); ---> removes an element
 

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//------------------ Selecting using Query----------------//

sel = document.querySelector('.container')
// console.log(sel)
sel = document.querySelectorAll('.container')
// console.log(sel)

//----------------- function clicked()-------------------//

// <button onclick = clicked() >button</button>

function clicked(){
    console.log('The button was clicked')
}

// execute at the time of relode()

window.onload = function(){
    console.log('The document was loaded')
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Events in JavaScript

firstContainer.addEventListener
(   'click',
    function()
    {
        document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
        console.log("Clicked on Container")
    }
)


firstContainer.addEventListener
(
    'mouseover', 
    function()
    { console.log("Mouse on Container")
    }
)

firstContainer.addEventListener('mouseout', function(){ console.log("Mouse out of Container");})

let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup', function(){
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log("Mouse up when clicked on Container");
})

firstContainer.addEventListener('mousedown', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
    console.log("Mouse down when clicked on Container");
})




///////////////////////////////////////////////////////////////////////////////////////////////////////////

//-----------------------Arrow Functions---------------------//

function summ(a, b){
    return a+b;
}

summ = (a,b) => {
    return a+b;
}

logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
    console.log("I am your log")
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//------------------------ SetTimeout and setinterval--------------------------//

clr = setTimeout(logKaro, 5000); /// 5000 -> time we need to skip , logKaro -> is fuction that we need to call after time
clr2 = setInterval(logKaro, 2000); /// set execute after every 2000 ms;
// To stop the above life-time execution after 2000 ms
clearTimeout(clr2)

// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout


// ----------------------- JavaScript localStorage ----------------------------//

localStorage.setItem('name','harry') 
localStorage // show the local storage { name : "harry", length:1}

localStorage.getItem('name') // get iteam from storage
localStorage.removeItem('name') // remove iteam from storage
localStorage.clear(); // clear the all element from storage

// ------------------------------- Json------------------------------------// 

obj = {name: "harry", length: 1, a: {this: 'tha"t'}}
jso = JSON.stringify(obj);
console.log(typeof jso) // ->
console.log(jso) // -> 
parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
console.log(parsed);

// Template literals - Backticks
a = 34;
console.log(`this is my ${a}`)
