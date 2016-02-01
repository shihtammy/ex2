window.onload = function () {
    //check that js is working
    console.log("reading js");

    //capture the submit event
    document.f.onsubmit = processForm;

    //capture the reset event
    document.f.onreset = resetPage;

    //define process function
    function processForm() {

        //store user name in a variable
        var name = document.f.name.value;
        //store user color in a variable
        var adjective1 = document.f.adjective1.value;
        var number1 = document.f.number1.value;
        var place = document.f.place.value;
        var occupation = document.f.occupation.value;
        var number2 = document.f.number2.value;
        var animal = document.f.animal.value;
        var adjective2 = document.f.adjective2.value;
        //error detection
        if (name == "" || adjective1 == "" || number1 == "" || place == "" || occupation == "" || number2 == "" || animal == "" || adjective2 == "") {
            alert("You might've missed some boxes... let's go back and double check!");

        } else {

            //capture the msg element to change it's text and html
            var myMsg = document.getElementById("myMsg");

            myMsg.innerHTML = "Congratulations <em>" + name + "</em> ! A little birdie told me that you are graduating college soon. Just as a little treat from a <em>" + adjective1 + "</em> fortune-teller like me, I will read your future for free! <br/><br/>Here we go...<br/><br/> In <em>" + number1 + "</em> years, you will be living in <em>" + place + "</em> working as a <em>" + occupation + "</em>. You will have <em>" + number2 + "</em> dollars in your bank account and own 3 <em>" + animal + "s</em>. You will be <em>" + adjective2 + "</em>.";
            myMsg.className = "show";
        }

        //prevent page from reloading
        return false;
    }

    //if user chooses "reset"
    function resetPage() {
        //remove any text from myMsg
        myMsg.innerHTML = "";
        //change the class name
        myMsg.className = "hide";
        //reset the userName field
        name.value = "";
        adjective1.value = "";
        number1.value = "";
        place.value = "";
        occupation.value = "";
        number2.value = "";
        animal.value = "";
        adjective2.value = "";
        return false;
    }
}