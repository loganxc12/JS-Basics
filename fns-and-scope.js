//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  function isTyler(name) {
      if (name === 'Tyler') {
          return true;
      } else {
          return false;
      }
  }
          

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  function getName() {
      var name = prompt('What is your name?');
      return name;
  }


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  function welcome() {
      var name = getName();
      alert("Welcome, " + name);
}

//Next problem




//What is the difference between arguments and parameters?

    //Parameters are the names included in the function declaration (between the parenthases), whereas arguments are used when calling or invoking a function. Arguments are passed into (and recieved by) the function. Arguements are the REAL VALUES, parameters are placeholders.


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //All the falsy values in Javascript are: undefined, null, NaN, '', 0, false. You can check to see if something is falsy by making it a boolean value (by inverting it with !, or printing the original boolean value with !!).



//Next Problem



//Create a function called myName that returns your name

  var myName = function() {
      return "Logan";
  }
  


//Now save the function definition of myName into a new variable called newMyName

  var newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName);

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  function outerFn() {
        return function() {
            return "Logan";
        }
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn();

//Now invoke innerFn.

innerFn();

