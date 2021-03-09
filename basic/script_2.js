function submitData() {
    // var first_name = document.forms["output"]["first_name"].value;
   var first_name=document.getElementById("first_name").value;
   
    // var last_name = document.forms["output"]["last_name"].value;
    var last_name=document.getElementById("last_name").value;

   
     var select = document.getElementById("select").value;
    // var age=document.forms["output"]["age"].value;
    var age=document.getElementById("age").value;

/*you must convert the variables into numbers, otherwise the + operator will concatenate them as strings*/
    var age=Number(age);
    var output =`${first_name} ${last_name}'s age is ${age} and he/she is working in ${select}.`;


    var container = document.getElementById('container');

    container.innerHTML = '<h2>Details: ' + output + ' </h2>';
}

document.getElementById("submit").addEventListener("click",submitData);





// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''