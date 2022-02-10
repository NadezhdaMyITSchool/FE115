let doc = document;
let head = doc.head;
let body = doc.body;

let html = doc.querySelector('html');
html.setAttribute('lang', 'en');

let metaCharset = doc.createElement('meta');
let metaViewport = metaCharset.cloneNode();

metaCharset.setAttribute('charset', 'UTF-8');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');

let title = doc.createElement('title');
title.innerHTML = 'Document';

let link = doc.createElement('link');
link.setAttribute('href', "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");
link.setAttribute('rel', "stylesheet");

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
        }`;

let headScript = doc.createElement('script');
headScript.setAttribute('async', '');
headScript.setAttribute('src', '/cdn-cgi/bm/cv/669835187/api.js');

let headArr = [metaCharset, metaViewport, title, link, style, headScript];

for (let i = 0; i < headArr.length; i++) {
 head.appendChild(headArr[i]);
}

let div = doc.createElement('div');
let h1 = doc.createElement('h1');
let p = doc.createElement('p');
let h2 = doc.createElement('h2');
let btn = doc.createElement('button');

let divPage = div.cloneNode();
divPage.classList.add('page');

let container = div.cloneNode();
let sectionContainer = div.cloneNode();
let cloneDiv = [container, sectionContainer];
for (let i = 0; i < cloneDiv.length; i++) {
 cloneDiv[i].classList.add('container');
}

let header = doc.createElement('header');
header.classList.add('header');

h1.innerHTML = 'Choose Your Option';
let h1Desc = p.cloneNode();
h1Desc.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';

let headerContainerDOM = divPage.appendChild(header).appendChild(container);
let headerContainer = [h1, h1Desc];

for (let i = 0; i < headerContainer.length; i++) {
 headerContainerDOM.appendChild(headerContainer[i]);
}

let section = doc.createElement('section');
section.classList.add('creator');

let creatorWrapper = div.cloneNode();
creatorWrapper.classList.add('creator__wrapper');

let sectionContainerDOM = divPage.appendChild(section).appendChild(sectionContainer).appendChild(creatorWrapper);

let creatorBlock = div.cloneNode();
let creatorBlockActive = div.cloneNode();
let creatorArr = [creatorBlock, creatorBlockActive];
for (let i = 0; i < creatorArr.length; i++) {
 creatorArr[i].classList.add('creator__block');
}
creatorBlockActive.classList.add('creator__block_active');

let creatorName = div.cloneNode();
let creatorNameActive = div.cloneNode();
let nameArr = [creatorName, creatorNameActive];
for (let i = 0; i < nameArr.length; i++) {
 nameArr[i].classList.add('creator_name');
}
creatorName.textContent = "Freelancer";
creatorNameActive.textContent = "Studio";

let h2Desc = h2.cloneNode();
let h2DescActive = h2.cloneNode();
h2Desc.innerHTML = 'Initially designed to';
h2DescActive.innerHTML = 'Initially designed to';

let pBlock = p.cloneNode();
let pBlockActive = p.cloneNode();
pBlock.innerHTML = 'But I must explain to you how all this mistaken idea of denouncingg';
pBlockActive.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';

let btnBlock = btn.cloneNode();
btnBlock.classList.add('button');
btnBlock.innerHTML = 'Start here';

let btnBlockActive = btnBlock.cloneNode(true);

let creatorBlockArr = [creatorName, h2Desc, pBlock, btnBlock];
for (let i = 0; i < creatorBlockArr.length; i++) {
 creatorBlock.appendChild(creatorBlockArr[i]);
}

sectionContainerDOM.appendChild(creatorBlock);

let creatorBlockActiveArr = [creatorNameActive, h2DescActive, pBlockActive, btnBlockActive];
for (let i = 0; i < creatorBlockActiveArr.length; i++) {
 creatorBlockActive.appendChild(creatorBlockActiveArr[i]);
}

sectionContainerDOM.appendChild(creatorBlockActive);

let bodyMainScript = body.querySelector('script');
body.insertBefore(divPage, bodyMainScript);

let bodyScript = doc.createElement('script');
bodyScript.setAttribute('type', "text/javascript");
bodyScript.innerHTML = `(function(){window['__CF$cv$params']={r:'6da40d31dfba7905',m:'zYE_rQgXrN4_4fQ91WFb6jIYOMzXB9bDsWU.XABY_hU-1644314852-0-Adzf4I+LF277+qsB7Fg9yI6t+V/0dbsLjHTDif3DXTLYG/xaQXeLtJYNLs4DuAJCRpsn5W1bbu5D/DmYe/tEDHyN+X8Ey99qPSwZVTLTXPl/9SKL0FUHNE0dmKJnMfGZUecH4byRmkdi9ky7XPuoSwT/pdpyJn3bplnx3lIte2MVmIznYjclcrFrRJoS400yTQ==',s:[0x714eb78444,0x56dd5cc53f],}})();`;
body.appendChild(bodyScript);
