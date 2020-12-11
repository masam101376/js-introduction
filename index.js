// 全3問のクイズを定義
const quiz = [
    {
        question: 'ゲーム史上、最も売れたゲーム機は次のうちどれ？',
        answers: [
            'スーパーファミコン',
            'プレイステーション2',
            'ニンテンドースイッチ',
            'ニンテンドーDS'
        ],
        correct: 'ニンテンドーDS'
    }, {
        question: '糸井重里が企画にかかわった、任天堂の看板ゲームといえば？',
        answers: [
            'MOTHER2',
            'スーパーマリオブラザーズ3',
            'スーパードンキーコング',
            '星のカービィ'
        ],
        correct: 'MOTHER2'
    }, {
        question: 'ファイナルファンタジー4の主人公の名前は？',
        answers: [
            'フリオニール',
            'クラウド',
            'ティーダ',
            'セシル'
        ],
        correct: 'セシル'
    }
]


// 何度も出てくるものは変数, 定数に入れてしまう
// HTMLのオブジェクトをとってくる場合、変数/定数名の頭に$をつける
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setUpQuiz = () => {
    document.getElementById('js-question').textContent = question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = answers[buttonIndex];
        buttonIndex++;
    }
}
setUpQuiz();

// 正誤判定する関数を定義
const judgeAnswer = (e) => {
        if(e.target.textContent === correct){
            window.alert('正解です');        
        } else {
            window.alert('間違っています');
        };
    }

// ボタンをクリックしたら正誤判定
let judgeAnswerIndex = 0;
while(judgeAnswerIndex < buttonLength){
    $button[judgeAnswerIndex].addEventListener('click', (e) => {
        judgeAnswer(e);
    });
    judgeAnswerIndex++;
}