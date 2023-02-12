
// step 1 - add event handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step 2 - get the withdraw amount from the withdraw input field
    const withdrawFeild = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawFeild.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);
    // clear the input field
    withdrawFeild.value = '';

    if(isNaN(newWithDrawAmount)){
        alert('please provide a valid number');
        return;
    }


    // step 3 - get previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    
    // step 5 - get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    

    if(newWithDrawAmount>previousBalanceTotal){
        alert('You cant withdraw more than your current balance')
        return;
    }
    // step 4 calculate total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;

    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step 6 - calculate current total balance
    const currentBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    
})