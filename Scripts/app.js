let myGlobalVariable = 0;
"use strict";
// Self-Executing Anonymous function
// IIFE - Immedialtely Invoked FunctionExpression
//Imeediately execute whatever inside it
(function(){

    let myFunctionVariable = 0;
    
    function Start(){

        let startVariable = 0;
        let myFunctionVariable = 5
        console.log(`%cApp started  ${myFunctionVariable}`, "font-size:20px;color:blue;");

    }

    window.addEventListener("load",Start);
    //when windows finish loading this calls the function inside it
})();