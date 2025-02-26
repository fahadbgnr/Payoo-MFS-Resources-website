
document.getElementById('chasout').style.display = 'none';
document.getElementById('transaction-history').style.display = 'none';



document.getElementById('add-money-box')
.addEventListener('click', function(){
    document.getElementById('chasout').style.display = 'none';
    document.getElementById('transaction-history').style.display = 'none';
    document.getElementById('Add-money').style.display = 'block';
})


document.getElementById('cashout-box')
.addEventListener('click', function(){
    document.getElementById('chasout').style.display = 'block';
    document.getElementById('Add-money').style.display = 'none';
    document.getElementById('transaction-history').style.display = 'none';
})