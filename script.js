m = 0;
var y;
let audioEle = new Audio('audio1.mp3');

function start() {
    y = setInterval(run, 100);
    audioEle.play();

    function run() {
        if (m == 1200) {
            clearInterval(x);
            m = 0;
        }
        else {
            m += 5;
            var x = document.getElementById("img");
            x.style.marginLeft = m + 'px';
        }
    }
}

function stop() {
    audioEle.pause();
    clearInterval(y);
}






// function reverse() {
//     w = setInterval(rev, 100);

//     function rev() {
//         if (m == 20) {
//             clearInterval(z);
//             m = 20;
//         }
//         else {
//             m -= 5;
//             var z = document.getElementById("img");
//             z.style.marginRight = m + 'px';
//         }
//     }
// }



