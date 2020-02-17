let addR = document.querySelector("#addR");
let delR = document.querySelector("#delR");
let contRow = document.querySelector("#contRow");

let contador = 0;

addR.addEventListener('click', ()=>{
    contador++;
    let divRow = document.createElement("div");
    let divCol = document.createElement("div");
    let input = document.createElement("input");

    divRow.setAttribute("class", "row");
    divRow.setAttribute("id", "mi"+contador);
    divCol.setAttribute("class", "col-6");
    input.setAttribute("type", "text");
    input.setAttribute("class", "inp");
    input.setAttribute("id", "accesorio"+contador);

    divRow.appendChild(divCol);
    divCol.appendChild(input);
    contRow.appendChild(divRow);

    let divCol2 = document.createElement("div");
    let input2 = document.createElement("input");
    divCol2.setAttribute("class", "col-6");
    input2.setAttribute("type", "text");
    input2.setAttribute("class", "inp");
    input2.setAttribute("id", "precio"+contador);
    divRow.appendChild(divCol2);
    divCol2.appendChild(input2);
});


delR.addEventListener('click', ()=>{
    let row = document.querySelector("#mi"+contador);
    row.remove();
    contador--;
});