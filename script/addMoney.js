// alert()

document.getElementById('add-money')
.addEventListener('click', function(event){
    event.preventDefault();

    const amountNumber = document.getElementById('amount-number').value; 
    // (input field tai value add kora hoice)
    const convertedAmount = parseFloat(amountNumber);
    const pinNumber = document.getElementById('pin-number').value;
    const convertedPin =parseInt (pinNumber);

    const mainBalance = document.getElementById('main-balance').innerText;  
    // (ata ekta element tai element er vitorer text ke pawar jonno akahne innertext add kora hoice)
    const convertedMainBalance = parseFloat(mainBalance);



    if(convertedPin === 1234){
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById('main-balance').innerText = sum;  
            
        
    }
    else{
        console.log('pin thik nai');
    }
})