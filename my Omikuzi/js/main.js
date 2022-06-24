'use strict';


{
    const btn = document.getElementById('btn');
    // const results = {0:"吉", 1:"小吉", 2:"中吉", 3:"大吉", 4:"凶"}
    const results = ["凶", "吉", "小吉", "中吉", "大吉"]

    btn.addEventListener('click', () => {

        const n = Math.floor(Math.random() * results.length);
        // const result = Object.keys(results).filter((m) => Number(m) === n);
        btn.textContent = results[n];
    })
}