/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var llamaAlerta = function()
{
    alert("Presiono el boton");
};
window.onload= function (){
var btn= document.getElementById("btn");
btn.onclick=llamaAlerta;
};
