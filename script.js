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