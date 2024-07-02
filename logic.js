const one=document.getElementById("1");
const two=document.getElementById("2");
const three=document.getElementById("3");
const four=document.getElementById("4");
const five=document.getElementById("5");
const six=document.getElementById("6");
const seven=document.getElementById("7");
const eight=document.getElementById("8");
const nine=document.getElementById("9");
const zero=document.getElementById("0");
const clear=document.getElementById("clear");
const deleted=document.getElementById("delete");
const on=document.getElementById("on");
const off=document.getElementById("off");
const equal=document.getElementById("=");
const addition=document.getElementById("+");
const subtract=document.getElementById("-");
const multiply=document.getElementById("*");
const division=document.getElementById("/");
const ans=document.getElementById("ans");
const exp=document.getElementById("exp");
const innerframe=document.getElementById("innerframe");

var flagCl = false;
var flagOFF = false;
var Answer;

function clicked(id){
    if(flagOFF){

    }else{
    if(flagCl){
        flagCl=!flagCl;
        if(id=='+'||id=='-'||id=='/'||id=='*'){
            innerframe.innerframe = Answer + id;
        }else{
        innerframe.innerText = '';
        }
    }
    innerframe.innerText += id;
}
}

off.addEventListener('click',()=>{
    innerframe.innerText = '';
    flagOFF = true;
})

on.addEventListener('click',()=>{
    innerframe.innerText = '0';
    flagOFF = false;
    flagCl = true;
})
clear.addEventListener('click',()=>{
    if(flagOFF){

    }else{
    innerframe.innerText = '0';
    flagCl = true;
    }
})

equal.addEventListener('click',function(){
    if(flagOFF){

    }else{
    innerframe.innerText = eval(innerframe.innerText);
    flagCl =!flagCl;
    Answer = innerframe.innerText;
    }
});

function Delete(){
    if(flagOFF||flagCl){

    }else{
    innerframe.innerText = innerframe.innerText.slice(0,-1)
    }
}

ans.addEventListener('click',()=>{
    if(flagOFF){

    }else{
    AnsShow();
    }
})

function AnsShow(){
    if(flagOFF){

    }else{
    innerframe.innerText += Answer;
    }
}