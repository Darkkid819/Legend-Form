document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('submitBtn');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    let toggle = false;

    function canMoveButton() {
        return username.value.trim() !== '' && password.value.trim() !== '';
    }

    btn.addEventListener('mouseover', function(e) {
        if (canMoveButton()) {
            const container = btn.parentElement;
            const containerWidth = container.offsetWidth;
            const btnWidth = btn.offsetWidth;
            const space = (containerWidth - btnWidth) / 2;
            btn.style.left = toggle ? `calc(0% + ${space}px)` : `calc(0% - ${space}px)`;
            toggle = !toggle;
        }
    });

    btn.addEventListener('click', function(e) {
        if (canMoveButton()) {
            alert(username.value + " is a legend!");
        }
    });
});
