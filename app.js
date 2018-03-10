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

// https://github.com/jlmakes/scrollreveal for scroll control element.
window.sr = ScrollReveal({ reset: true });
sr.reveal('.info-project',{ duration: 800 });
sr.reveal('.more-info',{ duration: 1400 });
sr.reveal('article',{ duration: 500 });
