$(document).ready(function(){
    
   $('.venobox').venobox({
       
       spinner:"wave",
       spinColor:"#af3349"
   }); 
    
});






//form validation

//  variable decler

var name= document.getElementById("name");

var nameErr= document.getElementById("nameErr");

//submit err function

function subm(){
    
    if (name.value == "") {

        name.style.border = "1px dashed #801111";
        nameErr.innerHTML = "Please Enter Your Name";
        name.focus();
        return false;

    }
}