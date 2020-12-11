const question = 'ゲーム史上、最も売れたゲーム機は次のうちどれ？';
const answers = [
    'スーパーファミコン',
    'プレイステーション2',
    'ニンテンドースイッチ',
    'ニンテンドーDS'
];
const correct = 'ニンテンドーDS';

// 何度も出てくるものは変数, 定数に入れてしまう
// HTMLのオブジェクトをとってくる場合、変数/定数名の頭に$をつける
const $button = document.getElementsByTagName('button');

// クイズの問題文、選択肢を定義
const setUpQuiz = () => {
    document.getElementById('js-question').textContent = question;
    let buttonIndex = 0;
    let buttonLength = $button.length;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = answers[buttonIndex];
        buttonIndex++;
    }
}
setUpQuiz();


//正誤判定をするための関数
/*
const judge(arg) => {
    if(document.getElementsByTagName('button')[arg].textContent == correct){
        alert('正解です');        
    } else {
        alert('間違っています');
    };
};
*/

// ボタンをクリックしたら正誤判定
$button[0].addEventListener('click', () => {
    if($button[0].textContent === correct){
        alert('正解です');        
    } else {
        alert('間違っています');
    };
});