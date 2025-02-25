document.getElementById('cashout-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    const pinNumber = document.getElementById('cashout-pin').value;
    const convertPin = parseInt(pinNumber);
    const amountNumber = document.getElementById('cashout-amount').value;
    const convertedAmount = parseFloat(amountNumber);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);


    if(convertPin === 1234){
       const sum = convertedMainBalance - convertedAmount;
       document.getElementById('main-balance').innerText = sum;
    }
    else{
        alert('pin thik nai');
    }
})