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
const quizLength = quiz.length;
let quizIndex = 0;

const $question = document.getElementById('js-question');
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
let score = 0;

// クイズをセットアップする
const setUpQuiz = () => {
    // 質問文を定義
    $question.textContent = quiz[quizIndex].question;

    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setUpQuiz();

// 正誤判定する関数を定義
const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        // 正解ならばこちらを実行
        score += 1;
    } else {
        // 不正解ならばこちらを実行
        score += 0;
    }

    quizIndex++;

    if(quizIndex < quizLength){
        // 問題数がまだあればこちらを実行
        setUpQuiz();
    } else {
        // 問題数がもうなければこちらを実行
        window.alert('終了！');
        window.alert(score);
    }
    console.log(score);
}


// ボタンをクリックしたら正誤判定
let clickHandlerIndex = 0;
while(clickHandlerIndex < buttonLength){
    $button[clickHandlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    clickHandlerIndex++;
}