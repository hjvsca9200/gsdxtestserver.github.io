var swfobject = {};
const buttons = document.querySelectorAll('.filter-buttons button');
const items = document.querySelectorAll('.item');

swfobject.embedSWF = function(url, cont, width, height){
    var ruffle = window.RufflePlayer.newest(),
        player = Object.assign(document.getElementById(cont).appendChild(ruffle.createPlayer()), {
            width: width,
            height: height,
            style: 'width: ' + width + 'px; height: ' + height + 'px',
        });

    player.load({ url: url });
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const category = button.getAttribute('data-category');
        items.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});
