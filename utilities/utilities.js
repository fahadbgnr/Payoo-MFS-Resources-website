function setInnerTextByIDandValue (id, value){
    document.getElementById(id).innerText = value;

}

function handleToggle(id, status){
    document.getElementById(id).style.display = status;
}