function decitobin(){
    let deci=parseInt
    (document.getElementById('deci').value);

    let bin= document.getElementById('bin');
    bin.innerHTML=deci.toString(2);

     
}