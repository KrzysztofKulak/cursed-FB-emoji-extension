window.setInterval(replace, 100);

var smile = 'img/cursedsmile.png'
var smile_file = "1f642.png"
var sad = 'img/cursedsadface.png'
var sad_file = "1f641.png"
var cowboy = 'img/cursedcowboy.png'
var cowboy_file = "1f920.png"
var flushed = 'img/cursedflushed.png'
var flushed_file = "1f633.png"

function replace() {
    replace_emoji(smile, smile_file)
    replace_emoji(sad, sad_file)
    replace_emoji(cowboy, cowboy_file)
    replace_emoji(flushed, flushed_file)
}

function replace_emoji(emoji, emoji_file){
    let imgs = getImagesBySrcs(emoji_file)
    for (imgElt of imgs) {
        imgElt.src = chrome.extension.getURL(emoji);
    }
}

function getImagesBySrcs(src) {
    var allImages = document.getElementsByTagName("img");
    var images = [];
    for (var i = 0, len = allImages.length; i < len; ++i) {
        if (allImages[i].src.endsWith(src)) {
            images.push(allImages[i]);
        }
    }
    return images;
}