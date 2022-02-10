let doc = document;
let head = doc.head;
doc.querySelector("html").setAttribute("lang", "en");

let  metaCode = doc.createElement("meta")
metaCode.setAttribute("charset", "UTF-8")

let metaView = doc.createElement("meta");
 metaView.setAttribute("name", "viewport");
 metaView.setAttribute("content", "width=device-width, initial-scale=1.0");


 let link = doc.createElement("link");
link.setAttribute("href", "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap%22");
link.setAttribute("rel", "stylesheet");

let title = doc.createElement("title");
title.innerHTML = "Document";








 //style
 let style = doc.createElement("style");
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
let headArr = [ metaCode, metaView, title, link, style]
for (let i = 0; i < headArr.length; i++) {
    head.appendChild(headArr[i]);

}




 //body
 
 let div = doc.createElement("div");
 let divPage = div.cloneNode();

 divPage.classList.add("page");
 
 let script = doc.querySelector("script");
 doc.body.insertBefore(divPage, script);

 let header = doc.createElement("header");
  header.classList.add("header");
     
 let headerContainer = doc.createElement("div");
  headerContainer.classList.add("container" ) ;
  

  divPage.appendChild(header).appendChild(headerContainer);

  let h1 =doc.createElement("h1");
  h1.innerHTML = "Choose Your Option";
  
  let pContainer = doc.createElement("p");
  pContainer.innerHTML = "But I must explain to you how all this mistaken idea of denouncing";
  
  headerContainer.appendChild(h1);
  headerContainer.appendChild(pContainer);
 
//section


let section = doc.createElement("section");
    section.classList.add("creator");

    let  sectionContainer = doc.createElement("div")
     sectionContainer.classList.add("container")

 
        let sectionWrapper = doc.createElement("wrapper")
        sectionWrapper.classList.add("creator__wrapper")
      
        let sectionBlock = doc.createElement("div")
        sectionBlock.classList.add("creator__block")
       
        let sectionName = doc.createElement("div")
        sectionName.classList.add("creator__name")
        sectionName.innerHTML = "Freelancer"
       
        let h2 =doc.createElement("h2");
        h2.innerHTML = "Initially designed to ";

        let pcont =doc.createElement("p");
        pcont.innerHTML = "But I must explain to you how all this mistaken idea of denouncing  ";
        
let button = doc.createElement("button");
button.classList.add("button");
button.innerHTML = "Start here";
        
       
        divPage.appendChild(section).appendChild(sectionContainer)
         sectionContainer.appendChild(sectionWrapper)
         sectionWrapper.appendChild(sectionBlock)

         sectionBlock.appendChild(sectionName)

         sectionBlock.appendChild(h2)
         sectionBlock.appendChild(pcont)
         sectionBlock.appendChild(button)


          
         let divBlock2= doc.createElement("div")
         divBlock2.classList.add("creator__block");
         divBlock2.classList.add("creator__block_active");

         let Name2 = doc.createElement("div")
         Name2.classList.add("creator__name")
         Name2.innerHTML = "Studio"


         let h2Blok =doc.createElement("h2");
        h2Blok.innerHTML = "Initially designed to ";


        
        let pcont2 =doc.createElement("p");
        pcont2.innerHTML = "But I must explain to you how all this mistaken idea of denouncing  ";
        
        
        let button2 = doc.createElement("button");
          button2.classList.add("button");
         button2.innerHTML = "Start here";

         sectionWrapper.appendChild(divBlock2)
         divBlock2.appendChild(Name2)
         divBlock2.appendChild(h2Blok)
         divBlock2.appendChild(pcont2)
         divBlock2.appendChild(button2)


 



 



