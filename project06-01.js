"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Ezri King
      Date:   4/10/2025

      Filename: project06-01.js
*/


// Step 3: Declare variables to hold the submit button and both passwords
let submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");

// Step 4: run an anonymous function when the submit button is clicked
submitButton.addEventListener("click", function() {
      // Step 5: add if else struction to the anonymous function

      // 5.a: if the first password field fails the pattern match, display message
      if (pwd.validity.patternMismatch == true) {
            pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
      }
      // 5.b: if the passwords are not the same, tell user they must match
      else if (pwd.value != pwd2.value) {
            pwd.setCustomValidity("Your passwords must match");
      }
      // 5.c: If all is valid, there is no validity message
      else {
            pwd.setCustomValidity("");
      }
})



// Step 6:


// Step 7: