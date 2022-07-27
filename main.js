
let customersFromLocalStorage;
// restore files from localStorage once window is loaded
onload = function(){
  // if(JSON.parse(localStorage.getItem("customers")) !== []){
    let customersFromLocalStorage = JSON.parse(localStorage.getItem("customers"));
      console.log(customersFromLocalStorage);
  // }
};

let phoneNumber = document.getElementById("phone-number");
let simNetwork = document.querySelector("#sim-network");
let cardPin = document.querySelector("#card-pin");
let generateInput = document.querySelectorAll(".generate-input");
let pin = "";
let pinDate;

// Create list for customers
const customers = [];
customers.concat(customersFromLocalStorage)
console.log(customers)

let temp = {
  phoneNumber: "",
  simNetwork: "",
  pinGenerated: [],
  pinLoaded: []
};

const tempGenerated = {
  pin: "",
  date: ""
};

const currentLoaded = {
  pin: "",
  date: ""
};

let newlyGenerated = { meter: "", token: "", date: 0, time: 0 };
let loadedToken = { meter: { token: "", date: 0, time: 0 } };
let randomGeneratedToken = "";
let newToken;
let alphabet = " abcdefghijklmnopqrstuvwxyz ";
let letter = [...alphabet];

let eraseGeneratedValues = () =>{
  temp = {
    phoneNumber: "",
    simNetwork: "",
    pinGenerated: [],
    pinLoaded: []
  };
  pin = "";
  phoneNumber.value = "";
  simNetwork.value = "Select Sim Network...";
}

function createPin(phoneLine, network) {
  let phone_sim_array = (phoneLine + network).split("");
  let n = phone_sim_array.length;

  for (let i = 0; i < n; i++) {
    pin += phone_sim_array[i];
    if (pin.length === 16) {
      break;
    }
  }
  pinDate = new Date();
  tempGenerated.date = pinDate;
  tempGenerated.pin = pin;

  let currentGenerated = Object.assign({}, tempGenerated);

  for(let item of customers){
    if(item.phoneNumber === phoneLine){
      // console.log("Phone number already exist");
    item.pinGenerated.push(currentGenerated);
    eraseGeneratedValues();
      return;
    }
  }

    temp.pinGenerated.push(currentGenerated);
    temp.phoneNumber = phoneLine;
    temp.simNetwork = network;

    let customer = Object.assign({}, temp);

    customers.push(customer);
    localStorage.setItem("customers", JSON.stringify(customers));
    eraseGeneratedValues();
}

function getPin() {
  createPin(phoneNumber.value, simNetwork.value);
}

function generatePin() {
      if (phoneNumber.value.length === 11 &&
      Number(phoneNumber.value) &&
      simNetwork.value !== "Select Sim Network..."){
          getPin();
  } else {
    console.log("Enter valid input");
  }
}

generateInput.forEach(item => {
  item.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      generatePin();
    }
  });
});

function loadPin() {
  cardPin.value !== ""
    ? console.log(cardPin.value)
    : console.log("No Pin entered");
}
