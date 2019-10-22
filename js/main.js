function openprofileimage() {
    try {
        let profilepic = document.getElementById('profile-pic');
        let close_icon = document.getElementById('profile-icon-close');
        profilepic.classList.add('enlarge-profile-pic');
        close_icon.classList.add('show');
        let proPicCvr = document.getElementById('profile-pic-cvr');
        proPicCvr.classList.add('profile-pic-cvr')
        document.getElementById('content').classList.add('no-scroll');
    } catch (e) {

    }
}

function closeProfilePic() {

    try {
        let profilepic = document.getElementById('profile-pic');
        let close_icon = document.getElementById('profile-icon-close');
        profilepic.classList.remove('enlarge-profile-pic');
        close_icon.classList.remove('show');
        let proPicCvr = document.getElementById('profile-pic-cvr');
        proPicCvr.classList.remove('profile-pic-cvr')
        document.getElementById('content').classList.remove('no-scroll');

    } catch (e) {

    }
}

function scrollToThis(id) {
    let selectedFrame = document.getElementById(id)
    window.scrollTo({
        top: selectedFrame.offsetTop - 79,
        left: 0,
        behavior: 'smooth'
    });
}

function openLinkNewtab(link) {
    var win = window.open(link, '_blank');
    win.focus();
}

window.onscroll = function() { stickyHeader() };

var header = document.getElementById("header-profile");
var sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

//Circular menu
var items = document.querySelectorAll('.circle a');

for (var i = 0, l = items.length; i < l; i++) {
    items[i].style.left = (50 - 45 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";

    items[i].style.top = (50 + 45 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
}

document.querySelector('.menu-button').onclick = function(e) {
    e.preventDefault();
    document.querySelector('.circle').classList.toggle('open');
}