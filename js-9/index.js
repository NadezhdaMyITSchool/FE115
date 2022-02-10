let doc = document;
let head = doc.head;

doc.querySelector("html").setAttribute("lang", "en");

let metaCode = doc.createElement("meta");
metaCode.setAttribute("charset", "UTF-8");

let metaView = doc.createElement("meta");
metaView.setAttribute("name", "viewport");
metaView.setAttribute("content", "width-device-width,initial scale-1.0")

let title = doc.createElement("title");
title.innerHTML = "Document";

let link = doc.createElement("link");
link.setAttribute("href", "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");
link.setAttribute("rel", "stylesheet");


let headArray = [metaCode,metaView,title,link];
for (let i=0; i<headArray.length; i++) {
    head.appendChild(headArray[i])
};



//body
let div = doc.createElement("div");

let divPage = div.cloneNode();
divPage.classList.add("page");

let script = doc.querySelector("script");

doc.body.insertBefore(divPage, script);


let header = doc.createElement("header");
let headerContainer = doc.createElement("div");

divPage.appendChild(header).appendChild(headerContainer);


header.classList.add("header");
headerContainer.classList.add("container");

let h1 =doc.createElement("h1");
h1.innerHTML = "Choose Your Option";

let pContainer = doc.createElement("p");
pContainer.innerHTML = "But I must explain to you how all this mistaken idea of denouncing";

headerContainer.appendChild(h1);
headerContainer.appendChild(pContainer);


let sectionCreat = doc.createElement("section");
sectionCreat.classList.add("creator");
divPage.appendChild(sectionCreat);


let creatContainer = doc.createElement("div");
creatContainer.classList.add("container");

let creatWrapp = div.cloneNode();
creatWrapp.classList.add("creator__wrapper");

let creatBlock = div.cloneNode();
creatBlock.classList.add("creator__block");

sectionCreat.appendChild(creatContainer).appendChild(creatWrapp).appendChild(creatBlock);



//creator-block
let creatName = div.cloneNode();
creatName.classList.add("creator_name");
creatName.innerHTML = "Freelancer";


let h2Creat =doc.createElement("h2");
h2Creat.innerHTML = "Initially designed to";

let pCreat =doc.createElement("p");
pCreat.innerHTML = "But I must explain to you how all this mistaken idea of denouncing";

let butCreat =doc.createElement("button");
butCreat.classList.add("button");
butCreat.innerHTML = "Start here";

creatBlock.appendChild(creatName);
creatBlock.appendChild(h2Creat);
creatBlock.appendChild(pCreat);
creatBlock.appendChild(butCreat);



//creator-block active
let creatBlockAct = div.cloneNode();
creatBlockAct.classList.add("creator__block");
creatBlockAct.classList.add("creator__block_active");

let creatNameAct = div.cloneNode();
creatNameAct.classList.add("creator_name");
creatNameAct.innerHTML = "Studio";


let h2CreatAct =doc.createElement("h2");
h2CreatAct.innerHTML = "Initially designed to";

let pCreatAct =doc.createElement("p");
pCreatAct.innerHTML = "But I must explain to you how all this mistaken idea of denouncing";


let butCreatAct =doc.createElement("button");
butCreatAct.classList.add("button");
butCreatAct.innerHTML = "Start here";

creatBlockAct.appendChild(creatNameAct);
creatBlockAct.appendChild(h2CreatAct);
creatBlockAct.appendChild(pCreatAct);
creatBlockAct.appendChild(butCreatAct);


creatWrapp.appendChild(creatBlockAct);



//style
let style = doc.createElement("style");
style.innerHTML = ` * {
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