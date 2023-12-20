"use strict";function _toConsumableArray(a){
    if(Array.isArray(a)){
        for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];
        return c
    }
    return Array.from(a)
}

let playing = !0, timer = function() {
    return setInterval(function(){
        const counter = document.querySelector('#counter'),
        parseCounter = parseInt(counter.innerText);
        counter.innerText = parseCounter+1
    },1e3)
},
interval = timer(),
minus = document.querySelector('#minus'),
plus = document.querySelector('#plus'),
heart = document.querySelector('#heart'),
pause = document.querySelector('#pause'),
commentForm = document.querySelector('form')[0];

minus.addEventListener('click', () => {
    const counter = document.querySelector('#counter'),
    parseCounter = parseInt(counter.innerText);
    counter.innerText = parseCounter-1
    console.log(minus)
}),
plus.addEventListener('click', () => {
    const counter = document.querySelector('#counter'),
    parseCounter = parseInt(counter.innerText);
    counter.innerText = parseCounter+1
    console.log(plus)
}),
heart.addEventListener('click', () => {
    let counter = document.querySelector('#counter'),
    parseCounter = parseInt(counter.innerText),
    likes = document.querySelector('.likes'),
    hasLiked = void 0;
    if([].concat(_toConsumableArray(likes.children)).map(function(counter){
        return parseInt(counter.dataset.num)
    }).includes(parseCounter)){
        hasLiked = document.querySelector('[data-num="'+parseCounter+'"]');
        let pGraph = parseInt(hasLiked.children[0].innerText);
        hasLiked.innerHTML = parseCounter + " has been liked <span>"+(pGraph+1)+"</span> times"}
        else (hasLiked = document.createElement('li')).setAttribute("data-num",parseCounter),
        hasLiked.innerHTML = parseCounter + " has been liked <span>1</span> time",
        likes.appendChild(hasLiked)}),pause.addEventListener("click",function(){
            playing?(playing=!1,clearInterval(interval),this.innerText="resume"):(playing=!0,interval=timer(),this.innerText="pause"),[].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(a){"pause"!==a.id&&(a.disabled=!playing)})}),
                        commentForm.addEventListener("submit",function(a){a.preventDefault();var b=this.children[0],
                            c=b.value;
                            b.value="";var d=document.querySelector(".comments"),
                            e=document.createElement("p");e.innerText=c,d.appendChild(e)});
