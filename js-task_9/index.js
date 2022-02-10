
// html.setAttribute('lang','ru');

let metaName = document.createElement('meta');
metaName.setAttribute('name','viewport');
metaName.setAttribute('content','width=device-width, initial-scale=1.0');

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset','UTF-8');

let title = document.createElement('title');
title.innerHTML = 'JS 9';

let linkFont = document.createElement('link');
linkFont.setAttribute('href','https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
linkFont.setAttribute('rel','stylesheet');

let style = document.createElement('style');
style.innerHTML = `
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    color: #9FA3A7;
}
h1, h2 {
    font-size: 36px;
    line-height: 48px;
    color: #212121;
} 
h1 {margin-bottom: 10px;}
h2 {margin-bottom: 25px;} 
button {
    background: none;
    border: 0;
}
.button {
    font-family: "Open Sans", sans-serif;
    border: 3px solid #FFC80A;
    padding: 17px 33px;
    font-weight: bold;
    color: #212121;
    text-transform: uppercase;
    border-radius: 50px;
}      
.page {
    min-width: 800px;
}
.container {
    width: 800px;
    margin: 0 auto;
    text-align: center;
}
.header {
    margin-top: 122px;
    margin-bottom: 55px;
}
.creator {
    margin-bottom: 122px;
}
.creator__wrapper {
    display: flex;
}
.creator__block {
    border: 1px solid #E8E9ED;
    padding: 81px;
}
.creator__block:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
.creator__block:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
.creator__block_active {
    border-color: #8F75BE;
    background: #8F75BE;
    color: #FFFFFF;
}
.creator_name {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 19px;
}
.creator__block_active .creator_name {
    color: #FFC80A;
}
.creator__block_active .button {
    color: #fff;
}
.creator__block p {
    margin-bottom: 58px;
}`;

document.head.appendChild(metaUtf8);
document.head.appendChild(metaName);
document.head.appendChild(title);
document.head.appendChild(linkFont);
document.head.appendChild(style);

let div1 = document.createElement('div');
div1.classList.add('page');

document.body.appendChild(div1);

let header = document.createElement('header');
header.classList.add('header');

div1.appendChild(header);

let div2 = document.createElement('div');
div2.classList.add('container');

header.appendChild(div2);


let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';

let p1 = document.createElement('p');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';

div2.appendChild(h1);
div2.appendChild(p1);

let section1 = document.createElement('section');
section1.classList.add('creator');

div1.appendChild(section1);

let div3 = document.createElement('div');
div3.classList.add('container');

section1.appendChild(div3);

let div4 = document.createElement('div');
div4.classList.add('creator__wrapper');

div3.appendChild(div4);

let div5 = document.createElement('div');
div5.classList.add('creator__block');

div4.appendChild(div5);


let div5_el1 = document.createElement('div');
div5_el1.classList.add('creator_name');

div5.appendChild(div5_el1);

let h2 = document.createElement('h2');
h2.innerHTML = 'Initially designed to';

div5.appendChild(h2);

let p2 = document.createElement('p');
p2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';

div5.appendChild(p2);

let button = document.createElement('button');
button.innerHTML = 'Start here';
button.classList.add('button');

div5.appendChild(button);

let divActive = document.createElement('div');
divActive.classList.add('creator__block creator__block_active');

div4.appendChild(divActive);


let divName = document.createElement('div');
divName.classList.add('creator_name');

divActive.appendChild(divName);

let h2New = document.createElement('h2');
h2New.innerHTML = 'Initially designed to';

divActive.appendChild(h2New);

let p2New = document.createElement('p');
p2New.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';

divActive.appendChild(p2New);

let buttonNew = document.createElement('button');
buttonNew.innerHTML = 'Start here';
buttonNew.classList.add('button');

divActive.appendChild(buttonNew);