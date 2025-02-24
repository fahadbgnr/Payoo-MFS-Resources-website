// alert()

document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const pinNumber = document.getElementById ('pin-number').value;
    const convertPin =parseInt(pinNumber);
    // console.log(accountNumber,pinNumber)
    if(accountNumber.length === 11){
        if(convertPin === 1234){
            window.location.href ='./main.html';
        }
        else{
            alert('pin thik nai');
        }
    }
    else{
        alert('please valid account number');
    }

})