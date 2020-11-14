
function minus(){
    let x = document.getElementById("num");
    let y = document.getElementById("num").value;
    if(y == 1){
        x.setAttribute("value", 1);
    }
    else{
        x.setAttribute("value", document.getElementById("num").value - 1 + "");
    }
}

function plus(){
    let x = document.getElementById("num").setAttribute("value", parseInt(document.getElementById("num").value) + parseInt('1') +"");
    
}

function move(){
  let a = document.getElementById("size")
  a.scrollIntoView({behavior: "smooth", block: "start"});
}