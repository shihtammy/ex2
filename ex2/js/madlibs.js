window.onload = function() {
  //check that js is working
  console.log("reading js");

  //capture the submit event
  document.f.onsubmit = processForm;

  //capture the reset event
  document.f.onreset = resetPage;

  //define process function
  function processForm() {

    //store user name in a variable
    var userName = document.f.userName.value;
    //store user number in a variable
    var userNumber = document.f.number.value;
    var userPlace = document.f.place.value;
    var userBignumber = document.f.bignumber.value;
    var userMajor = document.f.major.value;
    var userOccupation = document.f.occupation.value;
    
    //error detection
    if (userName == "" || userNumber == "" || userPlace == "" || userBignumber == "" || userMajor == "" || userOccupation == "") {
      alert("fill out the form!");

    } else {

      //capture the msg element to change it's text and html
      var myMsg = document.getElementById("myMsg");

      myMsg.innerHTML = "Congratulations <em>" + userName + "</em>! You did it! You survived <em>" + userNumber + "</em> years of college. You moved all the way from <em>" + userPlace + "</em> to spend <em>" + userBignumber + "</em> dollars to get a degree in <em>" + userMajor + "</em>. That way you can hopefully get a great job as a(n) <em>" + userOccupation + "</em> because you already have life all figured out, right? Oh, and about those student loans..."; 
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
    userName.value = "";
    //reset the userColor field
    userColor.value = "";

    return false;
  }
}