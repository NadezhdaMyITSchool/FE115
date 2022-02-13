document.querySelector("html").setAttribute("lang","en");
let head = document.querySelector("head");
let metaCode = document.createElement("meta");
metaCode.setAttribute("charset", "UTF-8");

let metaView = document.createElement("meta");
metaView.setAttribute("name", "viewport");
metaView.setAttribute("content", "width=device-width", "initial-scale=1.0");

let link = document.createElement("link");
link.setAttribute("href", "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");
link.setAttribute("rel", "stylesheet");

let title = document.createElement("title");
title.innerHTML = "Document JS9";

let style = document.createElement("style");
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
let headArr = [metaCode, metaView, link, title, style];
for (let i = 0; i < headArr.length; i++) {
    head.appendChild(headArr[i]);
}

// body
let body = document.body;
let div = document.createElement("div");
divPage = div.cloneNode();
divPage.classList.add("page");

let script = document.querySelector("script");
script.before(divPage);

let header = document.createElement("header");
header.classList.add("header");
let headerContainer = document.createElement("div");
headerContainer.classList.add("container");

divPage.appendChild(header).appendChild(headerContainer);

let h1 = document.createElement("h1");
h1.innerHTML = "Choose Your Option";
let pContainer = document.createElement("p");
pContainer.innerHTML = "But I must explain to you how all this mistaken idea of denouncing";

headerContainer.appendChild(h1);
headerContainer.appendChild(pContainer);

let section = document.createElement("section");
section.classList.add("creator");
divPage.appendChild(section);

let sectionContainer = document.createElement("div");
sectionContainer.classList.add("container");
section.appendChild(sectionContainer);

let divWrapper = document.createElement("div");
divWrapper.classList.add("creator__wrapper");
sectionContainer.appendChild(divWrapper);

let divBlock = document.createElement("div");
divBlock.classList.add("creator__block");
divWrapper.appendChild(divBlock);

let divName = document.createElement("div");
divName.classList.add("creator_name");
divName.innerHTML = "Freelancer";
divBlock.appendChild(divName);

let h2 = document.createElement("h2");
h2.innerHTML = "Initially designed to";
divBlock.appendChild(h2);

let pCrBlock = document.createElement("p");
pCrBlock.innerHTML = "But I must explain to you how all this mistaken idea of denouncing";
divBlock.appendChild(pCrBlock);

let button = document.createElement("button");
button.classList.add("button");
button.innerHTML = "Start here";
divBlock.appendChild(button);

let divBlockActive = document.createElement("div");
divBlockActive.classList.add("creator__block", "creator__block_active");
divWrapper.appendChild(divBlockActive);

let divNameActive = document.createElement("div");
divNameActive.classList.add("creator_name");
divNameActive.innerHTML = "Studio";
divBlockActive.appendChild(divNameActive);

let h2Active = document.createElement("h2");
h2Active.innerHTML = "Initially designed to";
divBlockActive.appendChild(h2Active);

let pActive = document.createElement("p");
pActive.innerHTML = "But I must explain to you how all this mistaken idea of denouncing";
divBlockActive.appendChild(pActive);

let buttonActive = document.createElement("button");
buttonActive.classList.add("button");
buttonActive.innerHTML = "Start here";
divBlockActive.appendChild(buttonActive);

