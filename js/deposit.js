
//step 1 -  add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step 2 - get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const NewDepositAmountString = depositField.value;

    const NewDepositAmount = parseFloat(NewDepositAmountString);

    // clear the deposit field
    depositField.value = '';

    if(isNaN(NewDepositAmount)){
        alert('please provide a valid number');
        return;
    }

    // step 3 - get the current deposit total
    const depositTotalElemnt = document.getElementById('deposit-total');
    const PreviousDepositTotalString = depositTotalElemnt.innerText;

    const PreviousDepositTotal = parseFloat(PreviousDepositTotalString);

    // step 4 - add numbers to set the total deposit
    const currentDepositTotal = PreviousDepositTotal + NewDepositAmount;

    depositTotalElemnt.innerText = currentDepositTotal;


    // step 5 - get balance current total

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 6 - calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + NewDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    
})