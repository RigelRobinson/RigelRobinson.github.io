function loadBg(tagId, url) {
    var loaded = false;
    var image = new Image();

    image.onload = function () {
        loaded = true;
        var div = document.getElementById(tagId);
        div.style.backgroundImage = "url('" + url + "')";
        window.dispatchEvent(new Event('resize'));
    }
    image.src = url;
}
