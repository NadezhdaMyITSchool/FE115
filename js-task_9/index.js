let doc = document;
let head = doc.head;

doc.querySelector('html').setAttribute('lang','en');

let metaCode = doc.createElement('meta');
metaCode.setAttribute('charset','UTF-8');
mataView = doc.createElement('meta');
metaView = doc.createAttribute('name','viewport');
metaView = doc.createAttribute('content','width=device-width, initial-scale=1.0');

let title = doc.createElement('title');
title.innerHTML = 'Document';

let headArr = [metaCode, mataView, title];
for (let i=0;i<headArr; i++) {
    head.appendChild(headArr[i]);
}

//style
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
`
 //body

let div = doc.createElement('div');

let divPage = div.cloneNode();
divPage.classList.add('page');

let script = doc.querySelector('script');
doc.body.insertBefore(divPage, script);

let header = doc.createElement('header');
let headerContainer = div.cloneNode();
divPage.appendChild(header).appendChild(headerContainer);
headerContainer.classList.add('container');

let ContainerH = doc.createElement('h1');
ContainerH.innerHTML = 'Choose Your Option';
let ContainerP = doc.createElement('p');
ContainerP.innerHTML = "But I must explain to you how all this mistaken idea of denouncing";
headerContainer.appendChild(ContainerH);
headerContainer.appendChild(ContainerP);

let section = doc.createElement('section');
section.classList.add('creator');
divPage.appendChild(section);

let sectionContainer = div.cloneNode();
section.appendChild(sectionContainer);
sectionContainer.classList.add('container');

let divWrapper = div.cloneNode();
divWrapper.classList.add('creator__wrapper');
let divBlock = div.cloneNode();
divBlock.classList.add('creator__block');
sectionContainer.appendChild(divWrapper).appendChild(divBlock);

let divName = div.cloneNode(),
    blockH = doc.createElement('h2'),
    blockP = doc.createElement('p');
    blockButton = doc. createElement('button');
divName.classList.add('creator_name');
divName.innerHTML = 'Freelancer';
blockH.innerHTML = 'Initially designed to';
blockP.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
blockButton.classList.add('button');
blockButton.innerHTML = 'Start here';

divBlock.appendChild(divName);
divBlock.appendChild(blockH);
divBlock.appendChild(blockP);

let divActiv = divBlock.cloneNode(true);
divWrapper.appendChild(divActiv);
divActiv.querySelector('divName').innerHTML = 'Studio';

// let creatorArr = [divName, blockH, blockP];
// for (i=0; i<creatorArr; i++) {
//     divBlock.appendChild(i);
// }

