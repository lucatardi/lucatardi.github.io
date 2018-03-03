const button = document.getElementsByTagName("button");

for(let i=0; i < button.length; i++) {
  button[i].addEventListener("click",(event) => {
    let link = event.target.getAttribute("value");
    if(link.length < 35) {
      window.open(`http://www.lucatardito.com/${link}`,'_blank','resizable=yes');
    } else {
      window.open(link,'_blank','resizable=yes');
    }
  });
}
