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

 // radio buttons with name menuToggle
        const radios = document.querySelectorAll('input[name="menuToggle"]');
        
        // dropdown wrapper containers
        const nwshortContainer = document.getElementById('nwshortContainer');
        const nwlongContainer = document.getElementById('nwlongContainer');
        const lwshortContainer = document.getElementById('lwshortContainer');
        const lwlongContainer = document.getElementById('lwlongContainer');
        const hwshortContainer = document.getElementById('hwshortContainer');
        const hwlongContainer = document.getElementById('hwlongContainer');
        const gwshortContainer = document.getElementById('gwshortContainer');
        const gwlongContainer = document.getElementById('gwlongContainer');

        nwshortContainer.addEventListener("change", handleDropdownChange);
        nwlongContainer.addEventListener("change", handleDropdownChange);
        lwshortContainer.addEventListener("change", handleDropdownChange);
        lwlongContainer.addEventListener("change", handleDropdownChange);
        hwshortContainer.addEventListener("change", handleDropdownChange);
        hwlongContainer.addEventListener("change", handleDropdownChange);
        gwlongContainer.addEventListener("change", handleDropdownChange);
        gwlongContainer.addEventListener("change", handleDropdownChange);

        // handle toggles
        function toggleDropdowns() {
            // radio button currently checked
            let checkedRadio = document.querySelector('input[name="menuToggle"]:checked').value;

            if (checkedRadio === 'nwshort') {
                nwshortContainer.classList.add('active');
                nwlongContainer.classList.remove('active');
                lwlongContainer.classList.remove('active');
                lwlongContainer.classList.remove('active');
                hwlongContainer.classList.remove('active');
                hwlongContainer.classList.remove('active');    
                gwlongContainer.classList.remove('active');
                gwlongContainer.classList.remove('active');                    
            } else if (checkedRadio === 'nwlong') {
                nwshortContainer.classList.remove('active');
                nwlongContainer.classList.add('active');
                lwlongContainer.classList.remove('active');
                lwlongContainer.classList.remove('active');
                hwlongContainer.classList.remove('active');
                hwlongContainer.classList.remove('active');
                gwlongContainer.classList.remove('active');
                gwlongContainer.classList.remove('active');  
             } else if (checkedRadio === 'lwshort') {
                nwshortContainer.classList.remove('active');
                nwlongContainer.classList.remove('active');
                lwlongContainer.classList.add('active');
                lwlongContainer.classList.remove('active');
                hwlongContainer.classList.remove('active');
                hwlongContainer.classList.remove('active');
                gwlongContainer.classList.remove('active');
                gwlongContainer.classList.remove('active');                  
              } else if (checkedRadio === 'lwlong') {
                nwshortContainer.classList.remove('active');
                nwlongContainer.classList.remove('active');
                lwlongContainer.classList.remove('active');
                lwlongContainer.classList.add('active');
                hwlongContainer.classList.remove('active');
                hwlongContainer.classList.remove('active');
                gwlongContainer.classList.remove('active');
                gwlongContainer.classList.remove('active');                  
            } else if (checkedRadio === 'hwshort') {
                nwshortContainer.classList.remove('active');
                nwlongContainer.classList.remove('active');
                lwlongContainer.classList.remove('active');
                lwlongContainer.classList.remove('active');
                hwlongContainer.classList.add('active');
                hwlongContainer.classList.remove('active');
                gwlongContainer.classList.remove('active');
                gwlongContainer.classList.remove('active');                  
             } else if (checkedRadio === 'hwlong') {
                nwshortContainer.classList.remove('active');
                nwlongContainer.classList.remove('active');
                lwlongContainer.classList.remove('active');
                lwlongContainer.classList.remove('active');
                hwlongContainer.classList.remove('active');
                hwlongContainer.classList.add('active');
                gwlongContainer.classList.remove('active');
                gwlongContainer.classList.remove('active');                  
            } else if (checkedRadio === 'gwshort') {
                nwshortContainer.classList.remove('active');
                nwlongContainer.classList.remove('active');
                lwlongContainer.classList.remove('active');
                lwlongContainer.classList.remove('active');
                hwlongContainer.classList.remove('active');
                hwlongContainer.classList.remove('active');
                gwlongContainer.classList.add('active');
                gwlongContainer.classList.remove('active');                  
             } else if (checkedRadio === 'gwlong') {
                nwshortContainer.classList.remove('active');
                nwlongContainer.classList.remove('active');
                lwlongContainer.classList.remove('active');
                lwlongContainer.classList.remove('active');
                hwlongContainer.classList.remove('active');
                hwlongContainer.classList.remove('active');
                gwlongContainer.classList.remove('active');
                gwlongContainer.classList.add('active');                  
            }
        }

        // Attach a change event listener to every radio button in the group
        radios.forEach(radio => {
            radio.addEventListener('change', toggleDropdowns);
        });

function setYgene(dadray) {
    dadray[1] = 'y';
}

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

function handleDropdownChange(event) {
    const selectedValue = event.target.value;
    let checkedParent = document.querySelector('input[name="parent"]:checked').value;
    if (parent == "father" )
          fatherGenes.value = selectedValue;
        else 
          motherGenes.value = selectedValue;
}

function generateRandomBaby(motherString, fatherString) {
  let momgenes = makeSingleLetters(motherString);
  let dadgenes = makeSingleLetters(fatherString);
  let momdex = momgenes.split(" ").map( str => [...str]);
  let daddex = dadgenes.split(" ").map( str => [...str]);
  let babydex = new Array(10);
  let defdex = "BB DD OO AA μμ LL WW II CC GG".split(" ").map( str => [...str]);
  for (let i = 0; i < 10; i++){
     setUnderscoresToDefault(momdex[i], defdex[i]);
     setUnderscoresToDefault(daddex[i], defdex[i]);
     if (i == 2) {
         setYgene(daddex[i]);
     }
     babydex[i] = momdex[i][random01()] + daddex[i][random01()];
  }

  return makeXanjeLetters(babydex.join(" "));
  
}
  

generateBtn.addEventListener('click', () => {
    babyGenes.textContent = generateRandomBaby(motherGenes.value, fatherGenes.value);

});

resetBtn.addEventListener('click', () => {
    motherGenes.value = "__ __ __ __ __ L_ W_ ii C_ G_";
    fatherGenes.value = "__ __ __ __ __ L_ W_ ii C_ G_";
    babyGenes.textContent = "__ __ __ __ __ L_ W_ ii C_ G_";
});






