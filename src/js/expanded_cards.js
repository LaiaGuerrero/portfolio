document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.overlay-text').forEach(item => {
        item.addEventListener('click', function () {
            const parent = item.parentElement;
            parent.classList.toggle('expanded');
        });
    });
});