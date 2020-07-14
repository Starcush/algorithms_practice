/*

한 개의 회의실. 이를 사용하고자 하는 N개의 회의
각 회의마다 시작시간, 끝나는 시간이 주어짐
회의실을 사용할 수 있는 최대 개수

*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    let count = 0;
    input.shift(); // input[0]은 안씀
    let meetings = [];
    input.forEach((meeting) => {
        meetings.push(meeting.split(' ').map((el) => parseInt(el)));
    });

    // 순서대로 있지는 않을 때를 구분해야 한다.
    // sorting해줘야 할 듯
    meetings.sort((a, b) => {
        // 시작 시간을 기준으로 나열하면 하나가 엄청 길 경우는 제대로 안 될 것 같음
        // 끝나는 시간을 기준으로
        // 끝나는 시간이 같으면? 짧은 것을 반환해야 한다. -> a[0] > b[0]인 경우에 반환
        if(a[1] === b[1]) {
            return a[0] - b[0];
        } else {
            return a[1] - b[1];
        }

    });
    let time = 0;
    meetings.forEach((times) => {
        if(times[0] >= time) {
            time = times[1];
            count++;
        }
    });

    console.log(count);
    process.exit();
});