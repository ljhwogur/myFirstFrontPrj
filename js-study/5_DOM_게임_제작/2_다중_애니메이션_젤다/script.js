'use strict' // 코드가 복잡해지고 구조가 여러가지 중첩될 때, 실수 방지

const $zeldalink = document.querySelector('#zelda-link');
const imgPrefix = ['front', 'back', 'left', 'right'];
let imgDir = 'img/zelda-link';
document.addEventListener('DOMContentLoaded', () => {
    // 캐릭터 이미지 사전 로드하기
    // 10개 이미지 * 4 방향
    for (let direction of imgPrefix) {
        for (let idx of Array.from({length: 10}, (_, i))) {
            let imgFilename = `${imgDir}${direction}_walk${idx}.png`
            console.log(imgFilename);
            $zeldalink.setAttribute('style', `url("${imgFilename}") `);
        }
    }


})