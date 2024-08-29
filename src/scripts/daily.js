let clickCount = 0
const hogeElement = document.getElementById('daily-image')

hogeElement.addEventListener('click', () => {
    clickCount += 1
    if (clickCount === 10) {
        window.location.href = '/unknown';
    }
})
