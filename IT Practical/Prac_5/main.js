function listener(btnid){
    let dat = document.getElementById("data");
    if (document.getElementById('red').id == btnid){
        dat.style.color = 'red';
    }
    else if (document.getElementById('blue').id == btnid){
        dat.style.color = 'blue';
    }
    else if (document.getElementById('green').id == btnid){
        dat.style.color = 'green';
    }
    else if (document.getElementById('s10').id == btnid){
        dat.style.fontSize = '10px';
    }
    else if (document.getElementById('s20').id == btnid){
        dat.style.fontSize = '20px';
    }
    else if (document.getElementById('s30').id == btnid){
        dat.style.fontSize = '30px';
    }
    else if (document.getElementById('calibri').id == btnid){
        dat.style.fontFamily = 'calibri';
    }
    else if (document.getElementById('ariel').id == btnid){
        dat.style.fontFamily = 'ariel';
    }
    else if (document.getElementById('algerian').id == btnid){
        dat.style.fontFamily = 'algerian';
    }
}

