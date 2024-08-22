//textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');
//btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

//HTML要素がクリックされたときに非同期処理をする

btn.addEventListener('click',() => {
  setTimeout(() => {
    text.textContent='ボタンをクリックしました';
  }, 2000);

});




  



  

  
