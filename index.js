const bill=document.getElementById("bill");
const tip=document.getElementById("tip");
const btnEl=document.getElementById("calculate");
const total=document.getElementById("total");



function calculateTotal(){
  const billValue=bill.value;
  const tipValue=tip.value;
const totalValue=billValue*(1+tipValue/100);
total.innerText=totalValue.toFixed(2);
  

  console.log(totalValue);
}


btnEl.addEventListener("click",calculateTotal)
