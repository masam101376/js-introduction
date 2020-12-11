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

console.log(quiz[0].question);

// 何度も出てくるものは変数, 定数に入れてしまう
// HTMLのオブジェクトをとってくる場合、変数/定数名の頭に$をつける
const $question = document.getElementById('js-question');
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
let score = 0;

// 正誤判定する関数を定義
const judgeAnswer = (e) => {
    if(quiz[0].correct === e.target.textContent){
        score += 1;        
    } else {
        score += 0
    }
    console.log(score);
}

// 簡易フローチャート
    // 一問目のクイズをセットアップする
    const setUpQuiz = () => {
        // 質問文を定義
        $question.textContent = quiz[0].question;

        let buttonIndex = 0;
        while(buttonIndex < buttonLength){
            $button[buttonIndex].textContent = quiz[0].answers[buttonIndex];
            buttonIndex++;
        }
    }
    setUpQuiz();

    // 一問目のクイズに答える
        // 不正解 → アラートで不正解とする
        // 正解 → 次へ
    // 二問目のクイズに答える
        // 不正解 → アラートで不正解とする
        // 正解 → 次へ
    // 3問目のクイズに答える
        // 不正解 → アラートで不正解とする
        // 正解 → 点数と戻るボタンを表示する
    // 戻るボタンを押すと一問目のクイズの画面に戻る


// ボタンをクリックしたら正誤判定
let judgeAnswerIndex = 0;
while(judgeAnswerIndex < buttonLength){
    $button[judgeAnswerIndex].addEventListener('click', (e) => {
        judgeAnswer(e);
    });
    judgeAnswerIndex++;
}