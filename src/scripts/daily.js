let clickCount = 0
let timer = null
const timeout = 500
const hogeElement = document.getElementById('daily-image')

// クリック回数によって動作を分岐
hogeElement.addEventListener('click', () => {
    clickCount += 1
    if (clickCount === 1) {
        timer = setTimeout(() => {
            if (clickCount >= 5) {
                window.location.href = '/unknown';
            }
            timer = null
            clickCount = 0
        }, timeout)
    }
})
