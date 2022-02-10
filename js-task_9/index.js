let doc = document;
let head = doc.head;

doc.querySelector("html").setAttribute("lang", "en");

let metaCode = doc.createElement('meta');
metaCode.setAttribute('charset', 'UTF-8');
let metaView = doc.createElement('meta');
metaView.setAttribute('name', 'viewport');
metaView.setAttribute('content', 'width=device-width, initial-scale=1.0');

let title = doc.createElement("title");
title.innerHTML = "Document";
head.appendChild(title);
let headArray = [metaCode, metaView];
for (let i = 0; i < headArray.length; i++) {
    head.appendChild(headArray[i]);
}

let style = doc.createElement('style');

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
}
`;
head.appendChild(style);

//body
let div = doc.createElement('div');


let divPage = div.cloneNode();
divPage.classList.add('page');

let script = document.querySelector('script');
doc.body.insertBefore(divPage, script);

let header = doc.createElement('header');
header.classList.add('header')
let headerContainer = div.cloneNode();
headerContainer.classList.add('container')

divPage.appendChild(header).appendChild(headerContainer);

let h1 = doc.createElement('h1');
h1.innerHTML = "Choose Your Option";
headerContainer.appendChild(h1);
let pageP = doc.createElement('p');
pageP.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
headerContainer.appendChild(pageP);

let section = doc.createElement('section');
section.classList.add('creator');
divPage.appendChild(section);

let sectionContainer = div.cloneNode();
sectionContainer.classList.add('container')
section.appendChild(sectionContainer);

let wrapper = div.cloneNode();
wrapper.classList.add('creator__wrapper');
sectionContainer.appendChild(wrapper);

let block = div.cloneNode();
block.classList.add('creator__block');
wrapper.appendChild(block);

let active = div.cloneNode();
active.classList.add('creator__block');
active.classList.add('creator__block_active');
wrapper.appendChild(active);

let creatorName = div.cloneNode();
creatorName.classList.add('creator_name');
block.appendChild(creatorName);
creatorName.innerHTML = 'Freelancer';

let h2 = doc.createElement('h2');
h2.innerHTML = 'Initially designed to';
block.appendChild(h2);

let blockP = doc.createElement('p');
blockP.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
block.appendChild(blockP);

let buttonBlock = doc.createElement('button');
buttonBlock.classList.add('button');
buttonBlock.innerHTML = 'Start here';
block.appendChild(buttonBlock);

let activeName = div.cloneNode();
activeName.classList.add('creator_name');
active.appendChild(activeName);
activeName.innerHTML = 'Studio';

let h2Active = doc.createElement('h2');
h2Active.innerHTML = 'Initially designed to';
active.appendChild(h2Active);

let activeP = doc.createElement('p');
activeP.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
active.appendChild(activeP);

let buttonActive = doc.createElement('button');
buttonActive.classList.add('button');
buttonActive.innerHTML = 'Start here';
active.appendChild(buttonActive);






