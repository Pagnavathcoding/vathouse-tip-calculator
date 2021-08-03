let bill = document.getElementById("bill");
let range = document.getElementById("range");
let people = document.getElementById("people");
let totalRange = document.getElementById("total-range");
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");
let tipAmount = document.getElementById("tip-amount");
let errContainer = document.getElementById("err-container");
let rangeTotal;
let totalAmount = document.getElementById("total-amount");
let totalTip = document.getElementById("total-tip");
range.addEventListener("input", (e) => {
    rangeTotal = e.target.value;
    totalRange.innerHTML = rangeTotal + '%';
});
let ranges = parseInt(rangeTotal);
submit.addEventListener("click", () => {
    if (bill.value === '' || people.value === '') {
        errContainer.style.display = "flex";
        document.getElementById("err").innerHTML = "Please input Value!";
    }
    else if (range.value === "0") {
        errContainer.style.display = "flex";
        document.getElementById("err").innerHTML = "Please increase your service range!";
        document.getElementById("total").style.display = "none";
    }
    else {
        errContainer.style.display = "none";
        let rangeService = parseInt(rangeTotal);
        let totalBill = bill.value;
        let totalPeople = people.value;
        let calculate = ((totalBill / totalPeople) * rangeService) / 100;
        tipAmount.innerHTML = "$" + calculate;
        document.getElementById("total").style.display = "flex";
        totalTip.innerHTML = "$" + calculate * people.value;
        // total amount
        let total = (calculate * people.value) + parseInt(bill.value);
        totalAmount.innerHTML = "$" + total;
    }
});

reset.addEventListener("click", () => {
    bill.value = '';
    people.value = '';
    range.value = 0;
    totalRange.innerHTML = '0%';
    document.getElementById("total").style.display = "none";
})