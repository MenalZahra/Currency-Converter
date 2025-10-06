//  const base_URL = 'https://api.currencyfreaks.com/v2.0/rates/latest?apikey=3bfc3c2f34754c21aa3d5b84d2f2192c';


// const dropdowns=document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromcurr = document.querySelector(".from select");
// const tocurr = document.querySelector(".TO select");
// const msg = document.querySelector(".msg");


// for(let select of dropdowns){
//     for (let currcode in countryList){
//     let newOption = document.createElement("option");
//     newOption.innerHTML=currcode;
//     newOption.value=currcode;
//     if(select.name === "from" && currcode === "USD"){
//         newOption.selected = "selected";
//     }
//     if(select.name === "to" && currcode === "PKR"){
//         newOption.selected="selected";
//     }
//     select.append(newOption);
//    }

//     select.addEventListener("change",(evt) =>{
//     updateFlag(evt.target);
//     });
// }
// const updateFlag = (element) =>{
//     let currcode =element.value;
//     let countrycode =countryList[currcode];
//     console.log(countrycode);
//     let newSrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
//     let img = element.parentElement.querySelector("img");
//     img.src = newSrc;
// };

// btn.addEventListener("click", async (evt) => {
//    evt.preventDefault();
//    let amount =document.querySelector(".amount input");
//    let amtVal=amount.value;
//    console.log(amtVal);
//    if(amtVal === "" || amtVal < 1){
//     amtVal=1;
//      amount.value="1";
//    }
//      const URL = `${base_URL}/${fromcurr.value.toLowerCase()}.json`;
//     let response =await fetch(URL);
//     let data = await response.json();
//     let rate = data[fromcurr.value.toLowerCase()][tocurr.value.toLowerCase()];

//     let finalAmount = amtVal*rate;
//     msg.innerHTML = `${amtVal} ${fromcurr.value} = ${finalAmount} ${tocurr.value}`;
// });
const base_URL = "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=3bfc3c2f34754c21aa3d5b84d2f2192c";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".TO select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (let currcode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerHTML = currcode;
    newOption.value = currcode;
    if (select.name === "from" && currcode === "USD") {
      newOption.selected = "selected";
    }
    if (select.name === "TO" && currcode === "PKR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {
  let currcode = element.value;
  let countrycode = countryList[currcode];
  let newSrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();

  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  const URL = base_URL;
  const response = await fetch(URL);
  const data = await response.json();

  const fromRate = parseFloat(data.rates[fromcurr.value]);
  const toRate = parseFloat(data.rates[tocurr.value]);
  const finalAmount = (amtVal * (toRate / fromRate)).toFixed(2);

  msg.innerHTML = `${amtVal} ${fromcurr.value} = ${finalAmount} ${tocurr.value}`;
});
