document.addEventListener("DOMContentLoaded", function () {
let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
menuToggle.onclick = function(){
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}
//Função para mostrar o select no elemento selecionado no nav
let list = document.querySelectorAll('.list');
for (let i=0; i<list.length; i++){
  list[i].onclick = function(){
    let j = 0;
    while(j < list.length){
      list[j++].className = 'list';
    }
    list[i].className = 'list active';
  }
}
});