let cl = console.log;
let div = document.createElement('div');
let p = document.createElement('p');

let head = () => {
  let metaChar = document.createElement('meta'),
      metaContent = document.createElement('meta'),
      title = document.createElement('title'),
      font = document.createElement('link'),
      style = document.createElement('style');

  let head = document.querySelector('head');

  let arrHead = [];

  metaChar.setAttribute('charset', 'UTF-8');
  metaContent.setAttribute('name', 'viewport');
  metaContent.setAttribute('content', 'width=device-width, initial-scale=1.0');
  title.innerHTML = 'JS-9';
  font.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
  font.setAttribute('rel', 'stylesheet');
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

  arrHead.push(metaChar, metaContent, title, font, style);

  arrHead.forEach(item => {
    head.appendChild(item);
  });
}

let divMainWrapper = () => {
  let divPage = document.createElement('div'),
      scriptFirst = document.body.querySelector('script');
  divPage.setAttribute('class', 'page');
  scriptFirst.before(divPage);
}

let createHeader = () => {
  let header = document.createElement('header'),
      headerDivWrapper = document.createElement('div'),
      headerdivWrapperH1 = document.createElement('h1'),
      headerdivWrapperP = document.createElement('p'),
      arrHeader = [];
  
  header.setAttribute('class', 'header');
  headerDivWrapper.setAttribute('class', 'container');
  headerdivWrapperH1.innerHTML = 'Choose Your Option';
  headerdivWrapperP.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
  
  arrHeader.push(headerdivWrapperH1, headerdivWrapperP);
  
  document.querySelector('.page').appendChild(header);
  header.appendChild(headerDivWrapper);
  
  arrHeader.forEach(item => {
    headerDivWrapper.appendChild(item);
  });
}

let sectionCreator = () => {
  let section = document.createElement('section'),
      divContainer = document.createElement('div'),
      divCreatorWrapper = document.createElement('div'),
      divCreatorBlock = document.createElement('div'),
      divCreatorBlockSec,
      divCreatorName = document.createElement('div'),
      h2 = document.createElement('h2'),
      p = document.createElement('p'),
      button = document.createElement('button');

  let header = document.querySelector('header');

  let arrContent = [],
      arrCreatorWrapper,
      arrCreatorName;

  section.setAttribute('class', 'creator');
  divContainer.setAttribute('class', 'container');
  divCreatorWrapper.setAttribute('class', 'creator__wrapper');
  divCreatorBlock.setAttribute('class', 'creator__block');
  divCreatorName.setAttribute('class', 'creator_name');
  divCreatorName.innerHTML = 'Freelancer';
  h2.innerHTML = 'Initially designed to';
  p.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
  button.setAttribute('class', 'button');
  button.innerHTML = 'Start here';


  arrContent.push(divCreatorName, h2, p, button);

  arrContent.forEach(item => {
    divCreatorBlock.appendChild(item);
  });

  header.after(section);
  section.appendChild(divContainer);
  divContainer.appendChild(divCreatorWrapper);

  divCreatorBlockSec = divCreatorBlock.cloneNode(true);
  
  divCreatorWrapper.appendChild(divCreatorBlock);
  divCreatorWrapper.appendChild(divCreatorBlockSec);

  arrCreatorWrapper = document.querySelectorAll('.creator__block');
  arrCreatorName = document.querySelectorAll('.creator_name');
  arrCreatorWrapper[1].classList.add('creator__block_active');
  arrCreatorName[1].innerHtml = 'Studio';

}


head();
divMainWrapper();
createHeader();
sectionCreator();
