let clickCount = 0
let timer = null
const timeout = 700
const hogeElement = document.getElementById('daily-image')

hogeElement.addEventListener('click', () => {
    clickCount += 1
    if (clickCount === 1) {
        timer = setTimeout(() => {
            if (clickCount >= 7) {
                window.location.href = '/unknown';
            }
            timer = null
            clickCount = 0
        }, timeout)
    }
})
