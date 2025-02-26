document.getElementById('cashout-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const pinNumber = document.getElementById('cashout-pin').value;
    const convertPin = parseInt(pinNumber);
    const amountNumber = document.getElementById('cashout-amount').value;
    const convertedAmount = parseFloat(amountNumber);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if(convertedAmount> convertedMainBalance){
        alert('tui abar aisot');
        return;

    }

    if(convertPin === 1234){
       const sum = convertedMainBalance - convertedAmount;
       document.getElementById('main-balance').innerText = sum;

       const container = document.getElementById('transaction-container');

        const p = document.createElement('p');
        p.innerText = `
        CashOut ${convertedAmount} from ${accountNumber} accountNumber
        `
        container.appendChild(p);
    }
    else{
        alert('pin thik nai');
    }
})