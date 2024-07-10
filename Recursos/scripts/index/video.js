document.addEventListener('DOMContentLoaded', function() {
    var iframe = document.getElementById('videoFrame');
    var src = iframe.getAttribute('src');
    iframe.setAttribute('src', src + '?autoplay=1');
});
