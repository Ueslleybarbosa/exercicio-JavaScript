
var texn1 = window.document.querySelector('#n1');
var texn2 = window.document.querySelector('#n2');
var res = window.document.querySelector('#res');
var isoma = window.document.querySelector('#isoma');

isoma.addEventListener('click', somar);

function somar() {
    var n1 = Number(texn1.value);
    var n2 = Number(texn2.value);
    var s = n1 + n2;
    res.innerHTML = `A soma de ${n1} + ${n2} é igual <strong>${s}</strong>`;
}
