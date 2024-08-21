//textというidを持つHTML要素を取得し、定数に代入する
const h2Text = document.getElementById('text');
//btnというidを持つHTML要素を取得し、定数に代入する
const Btn = document.getElementById('btn');




//HTML要素がクリックされたときにイベント処理を実行する
Btn.addEventListener('click', () => {
  //文字列を取得する
  const childText = document.createElement('h2');

  //作成したh2要素に「ボタンをクリックしました」というテキストを追加する
  childText.textContent ='ボタンをクリックしました';

  

  //作成したh2要素を置き換える
 h2Text.replaceWith(childText);



  

  
});