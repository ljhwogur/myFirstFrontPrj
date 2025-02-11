let maxNum = prompt('여기에 값을 입력해라! (종료: "q")');
console.log(`입력한 값은 ${maxNum} 입니다!`)
while (!parseInt(maxNum)) {
    if (maxNum === "q") {
        alert('게임 실행을 취소합니다!')
        break;
    }
    maxNum = prompt('추측 게임 최대값을 유효한 숫자로 입력하세요! (종료: "q")')
}

let correctNum = Math.floor(Math.random() * maxNum) + 1;
let userGuess = undefined;
let userAttemptCnt = 0;
let gameContinue = true; // (반복) 제어용 falg 변수
while (maxNum !== 'q' && gameContinue) {
    // 유저 추측 숫자 받기
    userGuess = prompt('숫자 추측값을 입력해 보세요 (종료 "q"):');
    // 1) gameContinue 검사
    if (userGuess === 'q') {
        gameContinue = false;
    }
    // 2) 입력값이 숫자가 아니면 가이드
    if (!parseInt(userGuess)) {
        // 1) gameContinue 검사
        if (userGuess === q) {
            gameContinue = false;
        } else {
            alert('추측값은 숫자로 입력해야 합니다!')
            userGuess = undefined;
            continue;
        }
    }

    // 정답 검사
    if (parseInt(userGuess) !== correctNum) {
        alert('땡')
        userAttemptCnt++
    } else {
        // 3) 입력값 범위 검사 (너무 크거나 작은 숫자 입력시 가이드)
        alert('정답')
        userAttemptCnt++
        break;
    }
    userGuess = undefined;

}
// 최소 도전 회수
minAttemptCnt = Math.min(minAttemptCnt, userAttemptCnt);

// 화면상에 기록 출력
let screenParagraph = document.querySelector('p')
screenParagraph.textContent = `현재기록 : ${userAttemptCnt}`;


// ###### 숫자 맞추기 게임
// 1) 유저로부터 임의의 최초 입력을 숫자로 입력받기
// 2) 0에서 해당 넘버 사이의 랜덤 숫자를  프로그램이 지정
// 3) 반복적으로 유저 입력을 받으며 프로그램이 지정한 정답 숫자를 맞출 경우 게임 종료
// 3-1) 시도횟수를 화면에 표시
// 4) 현재까지의 최고 기록도 화면에 표시


// ###### 스무고개 게임 ######## (배열)
// 1) 단어들을 20여개 올려주고 힌트 (약 10개) 세트를 단어별로 넣어주기
// 2) 시작할 때 랜덤한 단어 선택되게 해주기
// 3) '초기 힌트를 화면에 표시하고 유저가 오답을 제시하면 힌트 하나씩 추가 공개'
// 4) 맞추면 기록을 표시하고 종료, 힌트 소진까지 다 틀리면 게임오버로 종료