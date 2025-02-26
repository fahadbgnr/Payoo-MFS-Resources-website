// alert()

document.getElementById('add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;

    const amountNumber = document.getElementById('amount-number').value; 
    // (input field tai value add kora hoice)
    const convertedAmount = parseFloat(amountNumber);
    const pinNumber = document.getElementById('pin-number').value;
    const convertedPin =parseInt (pinNumber);

    const mainBalance = document.getElementById('main-balance').innerText;  
    // (ata ekta element tai element er vitorer text ke pawar jonno akahne innertext add kora hoice)
    const convertedMainBalance = parseFloat(mainBalance);
    const selectedBank = document.getElementById('all-bank').value;
    console.log(selectedBank);

if(convertedAmount <0){
    alert('tui pola chalu');
    return;

}

    if(convertedPin === 1234){
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById('main-balance').innerText = sum;  

        const container = document.getElementById('transaction-container');

        const p = document.createElement('p');
        p.innerText = `
        added ${convertedAmount} from ${accountNumber} accountNumber
        `
        container.appendChild(p);
            
        
    }
    else{
        console.log('pin thik nai');
    }
})