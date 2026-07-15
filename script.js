let count = 0;

const motherGenes = document.getElementById('mother-input').querySelector('input');
const fatherGenes = document.getElementById('father-input').querySelector('input');
const babyGenes = document.getElementById('baby-genetics');
const generateBtn = document.getElementById('generate-btn');
const resetBtn = document.getElementById('reset-btn');

const singles = {
    "Mc" : "μ",
    "Sp" : "ψ",
     "b1" : "β",
      "cb": "κ",
     "cs" : "ξ",
     "Ws" : "ω",
      "ws" : "ω",
      "wg" : "α"
};

const xanjes = {
    "μ" : "Mc",
    "ψ" :  "Sp",
     "β" : "b1",
     "κ" : "cb",
      "ξ" : "cs",
      "ω" : "ws",
      "α" : "wg"
};

function random01() {
  return Math.floor(Math.random() * 2);
}

function setUnderscoresToDefault(myarray, defaultarray) {
  if (myarray.length < 2) {
    if (myarray.length == 0) {
      myarray[0] = defaultarray[0];
      myarray[1] = defaultarray[1];
    } else {
      myarray[1] = defaultarray[1];
    }
  } else if (myarray.length > 2) {
    myarray.length = 2;
  }
  if (myarray[0] == "_") myarray[0] = defaultarray[0];
  if (myarray[1] == "_") myarray[1] = defaultarray[1];
  return myarray;
}

function makeSingleLetters(basicString) { 
   let mystring = basicString.replaceAll("/", "");
   Object.entries(singles).forEach(([key, value]) => {
      mystring = mystring.replaceAll(key, value);
   });
  return mystring;
}

function makeXanjeLetters(singleString) {
     let mystring = singleString.replaceAll("/", "");
     Object.entries(xanjes).forEach(([key, value]) => {
       mystring = mystring.replaceAll(key, value);
   });
  return mystring;
}

function generateRandomBaby(motherString, fatherString) {
  let momgenes = makeSingleLetters(motherString);
  let dadgenes = makeSingleLetters(fatherString);
  let momdex = momgenes.split(" ").map( str => [...str]);
  let daddex = dadgenes.split(" ").map( str => [...str]);
  let babydex = new Array(10);
  let defdex = "BB DD OO AA μμ LL WW II CC GG".split(" ").map( str => [...str]);
  for (let i = 0; i < 10; i++){
     if (i == 2) {
         setYgene(daddex[i]);
     }
     setUnderscoresToDefault(momdex[i], defdex[i]);
     setUnderscoresToDefault(daddex[i], defdex[i]);
     babydex[i] = momdex[i][random01()] + daddex[i][random01()];
  }

  return makeXanjeLetters(babydex.join(""));
  
}
  

generateBtn.addEventListener('click', () => {
    babyGenes.textContent = generateRandomBaby(motherGenes.value, fatherGenes.value);
});

resetBtn.addEventListener('click', () => {
    motherGenes.value = "__ __ __ __ __ L_ W_ ii C_ G_";
    fatherGenes.value = "__ __ __ __ __ L_ W_ ii C_ G_";
    babyGenes.textContent = "__ __ __ __ __ L_ W_ ii C_ G_";
});
