/*console.log("hello world")
1)

let firstName = "John";
let lastName = "Smith";

console.log(firstName);
console.log(lastName);

let person = 'instructor';
console.log(person);

person = 'teacher'
console.log(person);

let firstName = 'John',
lastName = 'Doe',
age = 35; */

// 2)


//                        Primitative Data Types
//-------------------------------------------------------------------------
/*                                Strings
let str = 'John is an "instructor"'; // JavaScript Engine reads Left to Right

console.log(str);

let num = '27';
console.log(num);
//-----------------------------------------------------------------------
//                                Booleans
let num1 = 5;
let num2 = 10;

const boo = (num1, num2) => {
   return num1 <= num2
}

console.log(boo("1",3));
// -------------------------------------------------------------------

let num3 = 5;
let num4 = 10;
let a = null;

console.log(a);  */
//----------------------------------------------------------------
//                                Operators
/* +, -, *, / ,
let a = (5 + 5) * 5;
console.log(a);  */
//-----------------------------------------------------------
//                              Comparison Operators
// !=/==/ strict ===, Strict !==
/*
let a = 5;
let b = "5";

// ------------------------------------------------------------------
//                                   Coercion
/*
let a = 10 + "5";  //  Engine doesCOERCION!!  comes out to 105 -- String concantenates them
console.log(a);

//but

let c = 10 * "5"; // Engine will multpily because * is only for math
console.log(c);

let b = "Hello " + "dear " + "student";
console.log(b)

let d = 5 + 10 + 'b';  // coercion occurs here is 15b
console.log(d);

/* Be careful for Booleans here.... For Example
   5 === 5 === 5 should equal true right? in correct. Computer sees this as the following
   5 === 5 === 5
      T === 5
        false

        5 === 5 is converted in a boolean true. True === 5 are not equal, in the console it
        it will give the answer "false"; */
// -----------------------------------------------------------------------------------

//                                 Conditional Statements
 /* if.... else statements

 if(condition) {
   block of code to be executed if this condition is true
 } else {
   block of code if condition false
 }
 */
/*
let myChild = 'Alexis';
let gender = 'male';

if(gender === 'male'){
    console.log(myChild + " is my son");
} else {
   console.log(myChild + "is my daughter");
}

//---------------------------------------------------------------------
/*                    If .... else if ... else... statements
let prof ='Doctor';
if (prof === 'instructor'){
  console.log(prof + " teaches students");
} else if(prof === 'Doctor'){
  console.log(prof + " Treats People")
} else if(prof === 'composer'){
  console.log(prof + ' creates music')
} else {
  console.log(' Profressions do not match')
}
*/
/*
if(5===5 && 4===4){
  console.log('condition is true');
} else {
  console.log('condition is false');
}

if(5===5 || 4===4){
  console.log('condition is true');
} else {
  console.log('condition is false');
}
*/
//                                      Coding Challenge 1
/*
let John = 49;
let Nick = 95;

let pass = 51;

if(John >= pass  && Nick >= pass) {
  console.log("Congrats you both passed!");
} else if(John >= pass  || Nick >= pass) {
  console.log("One of these students passed");

  if(John > Nick ) {

    console.log("and it is John with " + John + " points");


  } else {
    console.log("and it is Nick with " + Nick + " points")
  }

} else {
  console.log('Both students have failed the exam')
}
*/




//                             Intermediate JavaScript Part I

//                                         Functions

/*
function funName(par) {
  //code block - Statements
  console.log("Hello World");
};
funName();*/
/*
function passExam(name, score){
  let passUni = 71;
  let passColl = 51;

  if(score >= passUni) {
    console.log(name + " has enrolled in University with " +  score + " points");
  } else if(score >= passColl){
    console.log(name + " has enrolled in college with " + score + " points" )
  } else {
    console.log(name + " has failed")
  }
};
// ------------------------------------------------------------

function calcScore(quizScore, essayScore){
    let score = quizScore + essayScore;
    return score
};



passExam("Mike", calcScore(30,60));
passExam("John", 80);
passExam("Timmy", 70);
*/
// ----------------------------------------------------------------------
//                                      Function Expressions

/*Expressions ALWAYS PROUCE VALUE


 let sum = (a,b) => {
   console.log(a+b);
 }

 sum(10,15);
 */

 // ----------------------------------------------------------------------
 /*                                      ARRAYS
let arr = [
  "john",
   "bob",
  "mary",
      32,
    true,
  [1,2,3],
function(name) {
  return "Hello " + name;
}
];
// This is an array literal Best Practice
console.log(arr[6](arr[0]));
*/
/* ---------------------------------------------------------------------
                                   ARRAY CONSTRUCTOR METHOD
let arr = new Array(1, "John", false);

console.log(arr);
*/

/*  --------------------------------------------------------------------
                                    ARRAY METHODS

let colors = [ "white", "black", "red"];

colors[1] = "green";

colors.push("blue");         // Adds blue to end of the array - push method
colors.pop();               // Removes item at end of the array

colors.shift();            //removes item at beginning of array
colors.unshift("purple");    //adds purple to beginning of the array - same as push but for beginning of the array

console.log(colors.indexOf('pink'));
console.log(colors);

if(colors.indexOf("blue") === -1){
  colors.push("blue");

  console.log(colors);
};
 */

 // -------------------------------------------------------------------
/*                                          OBJECTS


BREAK DOWN ON OBJECTS

  Person              Properties                            METHODS
                  person.firstName = "Mike"              person.speak()
                  person.lastName  = "Torres"            person.run()
  Person          person.age = 35                        person.work()
                  person.profession = "developer"        person.sing()
                  person.height = 5'11                   person.read()
  */
/*  ----------------------------------------------------------------------
let person = new Object();
let job = "profession";
let name = "firstname";

person.name = "Mike";
person.name ="Bob" // change it on the fly dynamically Bob will overwrite Mike

person["lastname"] = "Torres";

person[job] = "Instructor";


console.log(person);
console.log(person.firstName);
console.log(person["lastname"]);

let person = new Object();

person.firstName = "Mike";
person.lastName = "Torres";

person.son = new Object();
person.son.name = "Anthony";
person.son.age = "10";


console.log(person);
*/

 //                           OBJECTS LITERAL NOTATION - BEST PRACTICE


/*Literal Notation
 let person = {
   firstname: "Mike",
   lastname: "Torres",
   age: 35,
   height: "5'11",
   weight: 250,
   son: {
     name: "Anthony",
     age: 10,
   },
   myFunc: function(sonName, fatherName, sonAge){
     console.log(sonName + " is the son of "
     +fatherName+ " who is " +sonAge+ " years old.");
   }
};
console.log(person);
console.log(person.son.name);
person.myFunc(person.son.name, person.firstname, person.son.age);
*/
/* literal notations changing parameters
let person = {
  firstname: "Mike",
  lastname: "Torres",
  age: 35,
  height: "5'11",
  weight: 250,
  son: {
    name: "Anthony",
    age: 10,
  },

  myFunc: function(par) {
    console.log(par.sonName + " is the son of " + par.fatherName+ " who is " + par.sonAge+ " years old.");
  }
};

 person.myFunc({sonName: "Brian",fatherName:"Tony", sonAge: "13"});

/* Constructor Method
 let person1 = new Object();

 person1.firstname = "Mike";
 person1.lastname = "Torres";
 person1.age = 35;
 person1.height = "5'11";
 person1.weight = 250;

 console.log(person1);
 */
 // -------------------------------------------------------------------------------



 /*                                         For Loops

let arr = ['Mike', 'John', 'kim', 'nelson', 'anthony'];

for(var i = 0; i < arr.length; i++){    // i++ =   num = num + 1

if(arr[i] === 'kim'){
  console.log(arr[i] + " is my older sister.")
  // break - stops the loop after array index is found
  // continue - includes all of array items except the one that we were looking for.
  //      Break iteration and continues to next iterations
  continue;
}
  console.log(arr[i]);
};
 */

 //                                         While Loops- Part 2
//While loops keep everything outside of the function compared to for loops
 /*

  This is the formal way of setting this up!!!!!! IMPORTANT!!!!
 let i = 0;

 while (i <= 10){
   console.log(i);
   i++;
 }
 */
/*
 let colors = ["white", "red", 'green', 'blue'];

let i = 0;

while(i < colors.length){
  console.log(colors[i]);
  i++;
}
*/

//                                  Do WHILE LOOP
/* The only different is the while goes at the end.
     While Loop
while(i < colors.length){
  console.log(colors[i]);
  i++;
}
       VS
 Do While Loop Set up
   do {
     console.log(varName[i]);
     i++;
  } while(i < varName.length);



let colors = ["white", "red", 'green', 'blue'];

let i = 0;

do{
 console.log(colors[i]);
 i++;

} while(i < colors.length);

*/
// -------------------------------------------------------------------

//                                      DATA OBJECT
/*               Get Methods
getDate() ------------> Get the day as a number (1-31)
getDay() -------------> Get the weekday as a number (0-6)
getFullYear()---------> Get the four digit year (yyyy)
getHours() -----------> Get the hour (0-23)
getMilliseconds() ----> Get the milliseconds (0-999)
getMinutes()----------> Get the minutes (0-59)
getMonth() -----------> Get the month (0-11)
getSeconds()----------> Get the seconds (0-59)

setDate() ------------> Set the day as a number (1-31)
setFullYear()---------> Set the four digit year (YYYY)
setHours() -----------> Set the hour (0-23)
setMilliseconds()-----> Set the milliseconds(0-999)
setMinutes()----------> Set the minutes (0-59)
setMonth() -----------> Set the month (0-11)
setSeconds() ---------> Set the seconds (0-59)
*/
/*
let date = new Date; // fixed time

let year = date.getFullYear();

let month = date.getMonth();

date.setFullYear(1990);
date.setMonth(11);

console.log(date);
console.log(year);
console.log(month);
*/
/*
const add = (num1, num2) => {
  sum = num1 + num2;
  return sum;
}
console.log(add(8,43));
*/

/*                             Behind the Scenes  VERY IMPORTANT !!!!!
Syntax partner read code character by character

the word this always refers global window object......
frequently used in JS*/

/*
const name = 'John';

function a(){
  return 'Hello';
}


const obj = {
  name: "Nick",
  b: function(){
    return "Hi";
  }
*/
// ----------------------------------------------------------------------------
/*                                         Execution Stack
HTML ------> Webrowser (Global Execution CONTENT is created)
          Web Brower
              |
              |
    Global Execution CONTENT
              |
              |
   Global Object & this are created.   Global object = this keyword


const firstName = 'John';
console.log(firstName);

function a(){
   console.log('Hello');
   b();
};

function b(){
  console.log('Hi');
}

a();

const lastName = 'Smith';
console.log(lastName);
*/
/*
function a(){
  const name = 'John';
  b();
  console.log(name);
}

function b(){
  const name = 'Bob';
  c();
  console.log(name);
}

function c(){
  const name = 'Nick';
  console.log(name);
}
a();

function a() {  //limit to execution stack - will cause console.error();
   a();
}
a();
*/

/*                                      Scope and Scope Chain
SCOPE - tells you where in your program you are allowed to use
variables and functions that you have defined / Accessibility & Visiability
*

let num1 = 5; // Global Level Scope.
//console.log(num3 + num2 + num1); num2 would come out undefined outside scope
function a(){

  let num2 = 10;  //local scope
  //console.log(num3 + num2 + num1); num3 would come out undefined outside scope
  function b(){  //local scope again
    let num3 = 15;
    console.log(num3 + num2 + num1);
  }
  b();
}
a();



let num1 = 5;
console.log(num1);    //parent

function a(){
let num1 = 10;       //child
//console.log(num1);

function b(){        //Grandchild
let num1 = 15;
//console.log(num1);

  }
  b();
}
a();

console.log(num1);

*/

// ----------------------------------------------------------------------
//
//                                             HOISTING
// in creation stage variables and fucntions are put into memory
// execution state JS engine executes line by line
/* always invoke functions after declarations
console.log(a);
console.log(b);
var a = 10;

var b = function b(){
  return 20;
};
console.log(a);
*/
/*
if(true) {
  var a = 10;
} else {
  var b = 20;
}
console.log(a);
console.log(b);  // comes out as undefined - Creation stage defines these as undefined
//console.log(b) never executed */
/*
var a = 10;
var b = a;

var a = 20;
console.log(a);
console.log(b);


var c = {
   name: 'john'
};
var d = c;
c.name = 'Nick';

c = {
  name: "bob"
}
*/

/*                                            Keyword This
function a(){
  console.log(this);
}
a();
*/
/*
var per = {        //this in this case due to local execution
  firstName: 'John',
  lastName: 'Smith',
  getFullName(){
    return this.firstName + ' ' + this.lastName;
  }
}
console.log(per.getFullName());
*/
/*
var per = {
  firstName: 'John',
  lastName: 'Smith',
  getFullName(){
    var that = this;
    console.log(this.firstName + ' ' + this.lastName)

      function greet(){
      console.log('Hi ' + that.firstName);
    }
    greet();
  }
};
var per1 = {
  firstName: 'Nick',
  lastName: 'Doe'
};
  per1.getFullName = per.getFullName;

per.getFullName();
per1.getFullName();
*/

/*
function a(){
  console.log(this);
  //console.log(this === window);
  function b(){
    console.log(this);
    //console.log(this === window);
  };
  b();
};
a();
*/
/*    aaa
const brianMerkel = "doesn't know football";
const jerrodPaul = "is an instigator";
const love = "truly loves UCF on the inside";

let football = {
    name1: 'FSU',
    name2: 'Miami',
    name3: 'UCF',
    IhateyouMerkelgit(){
      console.log("Jerrod Paul " + jerrodPaul + " and "
      + love + " !");
      console.log("Brian Merkel " + brianMerkel + ", "
      + jerrodPaul + " and " + love + " !");
    }
};
football.IhateyouMerkel();
console.log("-------------------------------------------");
console.log("Eat that big Dick Merk!!, Let's go Knights!")
*/
// -------------------------------------------------------------
/*                         Document Object Mode DOM
DOM is a collection of Nodes
Everything in HTML document is Nodes
*/

/* getElementByID('#IDNAME') - returns the element that has ID attribute
ID is a strong which can be used to identify the element found in HTML id attribute
*/

/*                                 part 1
Main Properties of DOM
.textContent = Property set or returns the textual
               content of specified node.

innerHTML = property set or returns the HTML cotent of an Elements

                                  part 2
querySelector('selector') method

returns the first element that matches a specified CSS
selector n the document.
String argument must all follow CSS syntax
*/

/*                      Get And Manipulate Mulitple Elements
getElementByClassName('class')
returna a collection of all elemenet in the docuyment
with specified class name

return an array type collection but is not an array
var icons = document.getElementsByClassName('fa');

for(var i = 0; i < icons.length; i++){
  console.log(icons[i]);
}

var iconsArr = Array.from(icons);
console.log(iconsArr);
console.log(icons);

iconsArr.push("hello");
console.log(iconsArr);

                  Get And Manipulate Mulitple Elements Part 2
forEach() = method executes a provided function once
for each array element.  USES FUNCTION AS A PARAMETER.

General Structure forEach method is as follows:
it follows an IIA method function Meaning: (Item, Index, array)
--------------------------------------------------------------
var icons = document.getElementsByClassName('fa'); this is HTML collection
Not an array
so if we run into this and use the below method for ARRAY
we will get an error.  must user Arrayfrom method.

Array.from(varName).forEach(function(item, index, array){
   console.log(varName, index, array)
});
----------------------------------------------------------------
var icons = document.getElementsByClassName('fa');

//normal set up forEach(function(Value, Index, Array itself))

Array.from(icons).forEach(function(icon, index, arr){
  console.log(icon, index, arr);
});

GetElementsByTagName("tag"); = Returns collection of all elements
in the documents with the specified tag name.
*/
/*  MOST FREQUENTLY USED
                     Get And Manipulate Mulitple Elements Part 3
querySelectorAll('selector');
Returns all Elements in the document that matches the
specified CSS Selector.

var lis = document.querySelectorAll('li, h2, #hide-list');
console.log(lis);


//lis.push("Hello"); Not an Array will get error - Need to
// transform into array using Array.from

Array.from(lis).forEach(function(li){
  li.textContent = "Hello World";
});
*/
    //                   DOM STYLES & Classes
/*
className = Get and set the value of class attribute
of the specified element.
Return String Value
var h2 = document.querySelector('header h2');

h2.className = 'changeBg'

h2.className += ' changeFt';
// assigned 2nd className - Removes first so background color in this case :
// was removed and the heading font was created

//var a = 10;
// a += 20;
//a = a + 20; same results inside
console.log(typeof h2.className);

/*
var h2 = document.querySelector('header h2');
h2.className = 'changeBg'

h2.className += ' changeFt';
// assigned 2nd className - Removes first so background color in this case :
// was removed and the heading font was created
HOW DO WE FIX THIS SO WE CAN HAVE BOTH... .EASY
ClassName += 'tag name' - will combine them

classList = returns the class names(s) of an element,
DOMTokenList object.
Userful to add remove and toggle CSS classes on an element.
classList property is read-only

var h2 = document.querySelector('header h2');

h2.className = 'changeBg'

h2.classList.add('changeFt');
// doesn't make us use += property
h2.classList.remove('changeBg');

h2.classList.toggle('changeBg');

console.log(h2.classList);
*/
/*                     EVENTS - EXTREMELY IMPORTANT!!!!!!!

Actions that happen on a web page you are programing.
Event make web pages more interactive and dynamic.
.onclick() one of the most frequently used events.

var h2 = document.querySelector('header h2');

h2.onclick = function() {
  console.log('Clicked')
}

h2.onmouseover = function() {
  console.log('Mouseover')
}
var h2 = document.querySelector('header h2');


// Don't use this approach this is outdated.... only for legacy code.
function a(){
  console.log("Clicked");
}

function b(){
  console.log("Mouseover");
}


                      EVENTS part 2 - EXTREMELY IMPORTANT!!!!!!!

addEventListener() = Attaches an event handler to the specified element.
var h2 = document.querySelector('header h2');

h2.addEventListener("click", a);
h2.addEventListener("click", b);
  console.log('Clicked')


function a(){
  console.log('Clicked a');
}
function b(){
  console.log('Clicked b');
}
*/
/*
Event Object = When an event occurs, the event object is created.
in most cases, Event objects is expressed as (e);

var h2 = document.querySelector('header h2');

h2.addEventListener("click", a);

function a() {
  console.log(this);
}

or function a(e) {
  console.log(e.target);
}
*/
/*
var div = document.querySelector('div.wrapper');
var header = document.querySelector('header');
var h2 = document.querySelector('header h2');


div.addEventListener('click', function(){
    var delay = new Date().getTime() + 1000;
    while(new Date() < delay){}
    console.log('From div');
});

header.addEventListener('click', function(){
    var delay = new Date().getTime() + 1000;
    while(new Date() < delay){}
    console.log('From header')
});

h2.addEventListener('click', function(){
    var delay = new Date().getTime() + 1000;
    while(new Date() < delay){}
    console.log('From h2')
});
*/
/*
var h2 = document.querySelector('header h2');

h2.addEventListener('click', function() {
    console.log('From click event')
});

function a() {
  var delay = new Date().getTime() + 3000;
  while(new Date() < delay){}
  console.log("from function a")
};
a();

console.log("global code is executed");
*/

/*                     GET AND SET ATTRIBUTES

getAttribute("attr") = Returns the value of the ATTRIBUTE
with the specified name of the element.

setAttribute('attr', 'value') = two parameters
Sets the value of an attrivute on the specified element
If the attribute already exists, the value is updated.

var btn = document.getElementById('add-btn');
var input = document.getElementById('add-input');

btn.addEventListener('click', function(e){
  e.preventDefault();
   console.log("Hello World");
});
*/

// --------------------------------------------------------------
/*                           Creating Elements
var newEl = document.createElement('button');

var text = document.createTextNode('Click');


newEl.appendChild(text);
newEl.setAttribute('style', 'display: block; margin: 10px auto; padding: 5px 10px; background: coral; color: #fff;')

console.log(newEl);

var form = document.getElementById('add');

//form.appendChild(newEl);

form.insertBefore(newEl, form.children[0]);

newEl.parentElement.removeChild(newEl);
*/
// --------------------------------------------------------------
/*                           Everything is an Object

function a(){
  console.log("hello")
};

a['prop'] = 'Hi';

a.obj = {
  greet: 'Hey'
}

a.myFunc = function() {
  console.log('Hola')
}
*/
 //                               FUnction Constructors

 const person1 = {};
 person1.firstName = "John";
 person1.lastName = "Smith";

 const person2 = {};
 person2.firstName = "Nick";
 person2.lastName = "Doe";

 /*function createPerson(firstName, lastName){
   const newPerson = {};
   newPerson.firstName = firstName;
   newPerson.lastName = lastName;
   return newPerson;
  */

function Person(firstName, lastName){

  this.firstName = firstName;
  this.lastName = lastName;

}

 const person3 = new Person("Bob", "Brown");
 const person4 = new Person("Derek", "Henderson");

 console.log(person1);
 console.log(person2);
 console.log(person3);
 console.log(person4);
