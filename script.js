function hidechat(){
    var chat = document.querySelector(".chat-box");
    chat.style.display = 'none';
    var chat_svg = document.querySelector(".close-box-svg");
    chat_svg.style.display = 'none';
}

function popUp(){
    var chat = document.querySelector(".chat-box");
    chat.style.display = 'none';
    var chat_svg = document.querySelector(".close-box-svg");
    chat_svg.style.display = 'none';
    var go = document.querySelector(".chat");
    go.style.display = 'none';
    var pop = document.querySelector(".chat-pop");
    pop.style.display = 'block';   
}

function popdown(){
    var pop = document.querySelector(".chat-pop");
    pop.style.display = 'none'; 
    var go = document.querySelector(".chat");
    go.style.display = 'block';
    go.style.display = 'flex';
}

function navpop() {
    var menu = document.querySelector('.menuBar');
    var close = document.querySelector('.xBar');
    var drop = document.querySelector('.drop600');
    menu.style.transform = 'rotate(180deg)';
    
    setTimeout(function() {
        menu.style.display = 'none';
        close.style.display = 'block';
        drop.style.display = 'block';
        menu.style.transform = 'rotate(0deg)';
    }, 500);
   
}
function navgo(){
    var menu = document.querySelector('.menuBar');
    var close = document.querySelector('.xBar');
    var drop = document.querySelector('.drop600');
    close.style.transform = 'rotate(-180deg)';

    setTimeout(function(){
        close.style.display = 'none';
        menu.style.display = 'block';
        drop.style.display = 'none';
        close.style.transform = 'rotate(0deg)';
    },500);
}


window.addEventListener('resize', checkWidth);
window.addEventListener('load', checkWidth);

function checkWidth(){
    var off = document.querySelector('.drop600');

    if(window.innerWidth >= 650){
        off.style.display = 'none';
        navgo();
    }
}