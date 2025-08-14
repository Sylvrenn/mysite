// Make windows draggable
document.querySelectorAll('.window').forEach(win => {
    const bar = win.querySelector('.title-bar');
    let offsetX = 0, offsetY = 0, isDown = false;

    bar.addEventListener('mousedown', e => {
        isDown = true;
        offsetX = e.clientX - win.offsetLeft;
        offsetY = e.clientY - win.offsetTop;
        win.style.zIndex = 10;
    });

    document.addEventListener('mouseup', () => { isDown = false; });
    document.addEventListener('mousemove', e => {
        if (!isDown) return;
        win.style.left = (e.clientX - offsetX) + 'px';
        win.style.top = (e.clientY - offsetY) + 'px';
    });
});
