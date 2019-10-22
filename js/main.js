function openprofileimage() {
    try {
        let profilepic = document.getElementById('profile-pic');
        let close_icon = document.getElementById('profile-icon-close');
        profilepic.classList.add('enlarge-profile-pic');
        close_icon.classList.add('show');
        let proPicCvr = document.getElementById('profile-pic-cvr');
        proPicCvr.classList.add('profile-pic-cvr')
        debugger
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
    debugger
    let selectedFrame = document.getElementById(id)
    window.scrollTo({
        top: selectedFrame.offsetTop - 114,
        left: 0,
        behavior: 'smooth'
    });
}

function openLinkNewtab(link) {
    debugger
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