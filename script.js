function Personalizedgreeting(){
    let nname = document.getElementById('Name').value;
    let ccolor = document.getElementById('Color').value;
    if(nname === '' || ccolor === ''){
        alert('Please fill in your details');
        return
    }
    alert(`My warmest regards ${nname}. I think ${ccolor} is an excellent choice.`)

}