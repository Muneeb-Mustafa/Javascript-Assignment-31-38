var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Get Name of today
function getName(){
  
  let date = new Date();
  console.log(date);
  let day = date.getDay();
  console.log(day);
  let today = days[day];
  console.log(today);
  getOutput(today);
  
}

// Calculate Days passed since I born

function CalculateDays(){
  let dob = document.getElementById("input").value;
  let today = new Date();

  if(!dob){
    Toastify({
        text: "Enter date to calculate the days since you born",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "bottom-right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #0D6EFD, #DC3545)",
        },
      }).showToast();
    return;
  } else if(new Date(dob) > today){
    Toastify({
      text: "Enter correct value to calculate days passed.",
      duration: 3000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "bottom-right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #0D6EFD, #DC3545)",
      },
    }).showToast();
    return;
  } else {
    let bornDate = new Date(dob);
    let todayTime = today.getTime();
    let bornTime = bornDate.getTime();
    let msdiff = todayTime - bornTime;
    let daysdiff = msdiff / (1000 * 60 * 60 * 24);
    let floatdiff = Math.floor(daysdiff);
    console.log(floatdiff);
    getOutput(`You have passed ${floatdiff} days since you born.`);
  }  
}


// Nex Birthday Calculation

function nextBirthday(){
  let dob = document.getElementById("input").value;
  let today = new Date();
  if(!dob){
    Toastify({
        text: "Enter value to calculate days",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "bottom-right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #0D6EFD, #DC3545)",
        },
      }).showToast();
    return
}else if(new Date(dob) < today){
  Toastify({
    text: "Enter correct value to calculate next birthday.",
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "bottom-right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #0D6EFD, #DC3545)",
    },
  }).showToast();
return

}else{
  let today = new Date();
  // console.log(today)
  let bornTime = new Date(dob);
  // console.log(bornTime)
  let msdiff =  bornTime.getTime() - today.getTime();
  // console.log(msdiff)
  let daysdiff = msdiff / (1000 * 60 * 60 * 24);
  // console.log(daysdiff)
  let floatdiff = Math.floor(daysdiff);
  // console.log(floatdiff)
  getOutput ( `Your next Birthday is ${floatdiff} days away.`);
  
}
}

// Greet Users

function greetingUser() {
  let input = prompt("Enter your time (in hours): ");
  if (!input) {
    Toastify({
      text: "Please enter your time",
      duration: 3000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "bottom-right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #0D6EFD, #DC3545)",
      },
    }).showToast();
    return;
  }
  
  let hours = parseFloat(input); // Convert input to a floating-point number

  let greetingMessage = "Good ";
  
  if (hours >= 4 && hours < 12) {
    greetingMessage += "Morning";
  } else if (hours >= 12 && hours < 17) {
    greetingMessage += "Afternoon";
  } else if (hours >= 17 && hours < 20) {
    greetingMessage += "Evening";
  } else {
    greetingMessage += "Night";
  }
  
  let message = greetingMessage + "!";
  getOutput(message);
}


// Tell time 

function tellTime(){
  let now = new Date();
  let hours = now.getHours();
  console.log(hours)
  let minutes = now.getMinutes();
  let Seconds = now.getSeconds();
  console.log(Seconds)
  
  getOutput(`You clicked the button @ ${hours} : ${minutes} : ${Seconds}`)
}
// Tell time 1
function tellTime1(){
  tellTime()


}
// Tell time 2
function tellTime2(){
  tellTime()


}
// Tell time 3
function tellTime3(){
  tellTime()


}

// Calculate Tax

function calculateTaxbtn(){
  let price = +prompt("Enter price: ");
  if (!price) {
    Toastify({
      text: "Please enter a valid value",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "bottom-right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #0D6EFD, #DC3545)",
      },
    }).showToast();
    return;
  }
  let taxRate = 18;
  
  let tax = calculateTax(price, taxRate);
  let html = "Tax: " + tax;
  getOutput(html)
}
function calculateTax(price, taxRate){
  return Math.round(price * taxRate /100);
}


// Total Tax
function Total(price) {
  var taxRate;
  if (price < 1000) {
    taxRate = 7;
  } else {
    taxRate = 19;
  }

  var tax = (price * taxRate) / 100; // Calculate tax
  var total = tax + price;
  return total;
}

function calculateTotal() {
  var price = +prompt("Enter price: ");
  if (!price) {
    Toastify({
      text: "Please enter a valid value",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "bottom-right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #0D6EFD, #DC3545)",
      },
    }).showToast();
    return;
  }
  var total = Total(price); // Call Total function instead of calculateTotal
  var html = "Total: " + Math.round(total);
  getOutput(html);
}


function getOutput(value){
  document.getElementById("result").innerHTML = "<h4>" + value + "<h4>";
}



// Clear Input

function clearInput() {
    document.getElementById('input').value = "";
}

document.getElementById("clear_input").onclick = function(){
    document.getElementById('input').value = '';
}

// Clear Output

function clearOutput() {
    document.getElementById('result').innerHTML = "";
}

document.getElementById("clear_output").onclick = function(){

    document.getElementById('result').innerHTML = ('');
}
