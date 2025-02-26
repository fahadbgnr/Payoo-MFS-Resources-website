// alert()

document.getElementById('transaction-box')
.addEventListener('click', function(event){
    event.preventDefault();
    handleToggle('Add-money', 'none');
    handleToggle('chasout', 'none');
    handleToggle('transaction-history', 'block');

})