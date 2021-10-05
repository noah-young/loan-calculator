/**
 * Noah Young
 * Script containing a simple calculate function that takes the values from the 
 * input boxes on the site and calculates the resulting monthly payments and
 * total cost of the loan.
 */
var t = setInterval(calculate, 100);

function calculate() {
    var loanAmnt = document.getElementById("loanamnt").value;
    var interest = document.getElementById("interest").value / 1200;
    var months = document.getElementById("months").value;
    var result = (loanAmnt * (interest * Math.pow(1 + interest, months)) / (Math.pow(1 + interest, months) - 1));

    if (!isNaN(result)) {
        document.getElementById("amnt").innerHTML = "$" + Math.round(result);
        document.getElementById("tframe").innerHTML = "Per month for " + months + " months";
        document.getElementById("tinterest").innerHTML = "Total interest paid - $" + Math.round((months * result) - loanAmnt);
        document.getElementById("total").innerHTML = "Total cost of the loan - $" + Math.round(months * result);
    } else {
        document.getElementById("amnt").innerHTML = "$" + 0;
        document.getElementById("tframe").innerHTML = "Per month for " + 0 + " months";
        document.getElementById("tinterest").innerHTML = "Total interest paid - $" + 0;
        document.getElementById("total").innerHTML = "Total cost of the loan - $" + 0;
    }
}
