// test the button
const button = document.querySelector(".btn");

function beforeCalc(e) {
  document.getElementById("results").innerHTML = "";
  document.getElementById("resultsFiller").innerHTML = "";
}

document.getElementById("profitCalc").addEventListener("submit", function (e) {
  e.preventDefault();
  beforeCalc();
  // hide results
  document.getElementById("results").style.display = "none";
  document.getElementById("profitHeader").style.display = "none";

  // show loader
  document.getElementById("loading").style.display = "block";
  setTimeout(calculate, 2000);
});

// calculate function
function calculate() {
  //   displayShow();
  let formData = document.getElementById("userInput").value;
  const value1 = 100;
  const profPercentage = 0;
  const profPercentage5 = 5;
  const profPercentage10 = 10;
  const profPercentage15 = 15;
  const profPercentage20 = 20;
  const profPercentage25 = 25;
  const flatFee = 0.3;
  const feePercent = 12.9;
  const feePercentDecimal = 0.129;

  if (formData < 0) {
    //   alert("thats whack")
    console.log("Must be greater than 0");
  } else {
    //Calculation Break Even:

    // first calc
    const firstCalc = value1 + profPercentage;
    // second calc
    const secondCalc = firstCalc + flatFee;
    // thrid calc
    const thirdCalc = formData * secondCalc;
    // fourth calc
    const fourthCalc = value1 - feePercent;
    // final calc
    const finalCalc = thirdCalc / fourthCalc;
    // console.log("$" + parseFloat(finalCalc).toFixed(2));

    //Calculation 5%:

    // first calc
    const firstCalc5 = value1 + profPercentage5;
    // second calc
    const secondCalc5 = firstCalc5 + flatFee;
    // thrid calc
    const thirdCalc5 = formData * secondCalc5;
    // fourth calc
    const fourthCalc5 = value1 - feePercent;
    // final calc
    const finalCalc5 = thirdCalc5 / fourthCalc5;
    // console.log("$" + parseFloat(finalCalc5).toFixed(2));

    //$ Amount for 5%:

    // first calc
    const firstDollarCalc5 = finalCalc5 - formData - flatFee;
    // second calc
    const secondDollarCalc5 = feePercentDecimal * finalCalc5;
    // final calc
    const finalDollarCalc5 = firstDollarCalc5 - secondDollarCalc5;
    // console.log("$" + parseFloat(finalDollarCalc5).toFixed(2));

    //Calculation 10%:

    // first calc
    const firstCalc10 = value1 + profPercentage10;
    // second calc
    const secondCalc10 = firstCalc10 + flatFee;
    // thrid calc
    const thirdCalc10 = formData * secondCalc10;
    // fourth calc
    const fourthCalc10 = value1 - feePercent;
    // final calc
    const finalCalc10 = thirdCalc10 / fourthCalc10;
    // console.log("$" + parseFloat(finalCalc10).toFixed(2));

    //$ Amount for 10%:

    // first calc
    const firstDollarCalc10 = finalCalc10 - formData - flatFee;
    // second calc
    const secondDollarCalc10 = feePercentDecimal * finalCalc10;
    // final calc
    const finalDollarCalc10 = firstDollarCalc10 - secondDollarCalc10;
    // console.log("$" + parseFloat(finalDollarCalc10).toFixed(2));

    //Calculation 15%:

    // first calc
    const firstCalc15 = value1 + profPercentage15;
    // second calc
    const secondCalc15 = firstCalc15 + flatFee;
    // thrid calc
    const thirdCalc15 = formData * secondCalc15;
    // fourth calc
    const fourthCalc15 = value1 - feePercent;
    // final calc
    const finalCalc15 = thirdCalc15 / fourthCalc15;
    // console.log("$" + parseFloat(finalCalc15).toFixed(2));

    //$ Amount for 15%:

    // first calc
    const firstDollarCalc15 = finalCalc15 - formData - flatFee;
    // second calc
    const secondDollarCalc15 = feePercentDecimal * finalCalc15;
    // final calc
    const finalDollarCalc15 = firstDollarCalc15 - secondDollarCalc15;
    // console.log("$" + parseFloat(finalDollarCalc15).toFixed(2));

    //Calculation 20%:

    // first calc
    const firstCalc20 = value1 + profPercentage20;
    // second calc
    const secondCalc20 = firstCalc20 + flatFee;
    // thrid calc
    const thirdCalc20 = formData * secondCalc20;
    // fourth calc
    const fourthCalc20 = value1 - feePercent;
    // final calc
    const finalCalc20 = thirdCalc20 / fourthCalc20;
    // console.log("$" + parseFloat(finalCalc15).toFixed(2));

    //$ Amount for 20%:

    // first calc
    const firstDollarCalc20 = finalCalc20 - formData - flatFee;
    // second calc
    const secondDollarCalc20 = feePercentDecimal * finalCalc20;
    // final calc
    const finalDollarCalc20 = firstDollarCalc20 - secondDollarCalc20;
    // console.log("$" + parseFloat(finalDollarCalc15).toFixed(2));


    //Calculation 25%:

    // first calc
    const firstCalc25 = value1 + profPercentage25;
    // second calc
    const secondCalc25 = firstCalc25 + flatFee;
    // thrid calc
    const thirdCalc25 = formData * secondCalc25;
    // fourth calc
    const fourthCalc25 = value1 - feePercent;
    // final calc
    const finalCalc25 = thirdCalc25 / fourthCalc25;
    // console.log("$" + parseFloat(finalCalc15).toFixed(2));

    //$ Amount for 20%:

    // first calc
    const firstDollarCalc25 = finalCalc25 - formData - flatFee;
    // second calc
    const secondDollarCalc25 = feePercentDecimal * finalCalc25;
    // final calc
    const finalDollarCalc25 = firstDollarCalc25 - secondDollarCalc25;
    // console.log("$" + parseFloat(finalDollarCalc15).toFixed(2));

    // render card



      let calculations = [
        {
          title: "Break Even",
          percent : parseFloat(finalCalc).toFixed(2),
          profit:    0,
          profText: "Profit ", 
          sellText: "Sell Price ", 
        },
        {
          title: "5%",
          percent: parseFloat(finalCalc5).toFixed(2),
          profit: parseFloat(finalDollarCalc5).toFixed(2),
          profText: "Profit ", 
          sellText: "Sell Price ", 
        },
        {
          title: "10%",
          percent: parseFloat(finalCalc10).toFixed(2), 
          profit: parseFloat(finalDollarCalc10).toFixed(2),
          profText: "Profit ", 
          sellText: "Sell Price ", 
        },
        {
          title: "15%",
          percent: parseFloat(finalCalc15).toFixed(2),
          profit: parseFloat(finalDollarCalc15).toFixed(2),
          profText: "Profit ", 
          sellText: "Sell Price ", 
        },
        {
          title: "20%",
          percent: parseFloat(finalCalc20).toFixed(2),
          profit: parseFloat(finalDollarCalc20).toFixed(2),
          profText: "Profit ", 
          sellText: "Sell Price ", 
        },
        {
          title: "25%",
          percent: parseFloat(finalCalc25).toFixed(2),
          profit: parseFloat(finalDollarCalc25).toFixed(2),
          profText: "Profit ", 
          sellText: "Sell Price ", 
        },
      ]
      

      let count = 0 
    for(i = 0; i < calculations.length; i++){
      
      let card = document.createElement('div');
      let body = document.createElement('div');
      let cardTextDiv = document.createElement('div');
      let title = document.createElement('h1');
      let sell = document.createElement('div');
      let prof = document.createElement('div');
      let profText = document.createElement('div');
      let sellText = document.createElement('div');
      let line = document.createElement('hr');

      // Convert numbers to Currency
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })

      card.classList.add('card');
      cardTextDiv.classList.add('textDiv');
      body.classList.add('card-body');
      title.classList.add('card-title');
      sell.classList.add('card-text');
      prof.classList.add('card-prof');
      profText.classList.add('card-profText');
      sellText.classList.add('card-sellText');

      title.innerText = calculations[count].title;
      sell.innerText = formatter.format(calculations[count].percent);
      prof.innerText = formatter.format(calculations[count].profit);
      profText.innerText = calculations[count].profText;
      sellText.innerText = calculations[count].sellText;


      card.appendChild(body);
      body.appendChild(title);
      title.appendChild(line);
      body.appendChild(cardTextDiv)
      cardTextDiv.appendChild(sell);
      cardTextDiv.appendChild(prof);
      prof.appendChild(profText);
      sell.appendChild(sellText);
      
      document.getElementById('results').append(card);

      count++

     

    }
    document.getElementById("results").style.display = "flex";
    document.getElementById("profitHeader").style.display = "block";
    // hide loader
    document.getElementById("loading").style.display = "none";
  }

}


