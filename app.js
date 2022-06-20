// const input = document.querySelector(".input-text").valuelet inputValue = 'initial' ;
let setOfChars = new Array;
// setOfChars = ['i'];
let inputToArray; //! for space counting and most frequent
let vowelsArray = "aeiouüıö".split("");
let consonantsArray = "qwrtypğsdfghjklşzxcvbnmç".split("");
let othersArray = "!'^+%&/()=?_>£#$½{[]}|.,:;`~¨|<>@æß€".split("");

let counterVowels = 0;
let counterConsonant = 0;
let counterOthers = 0;
let counterWords =  0;


let button = document.querySelector('.input-btn');
let inputBtn = document.querySelector('.input-text');

let resultDomUl = document.querySelector('.result-ul');
let newEntryLi = document.createElement('li');

// const getValueInput = () => {
button.addEventListener('click', () => {
	inputValue = document.querySelector(".input-text").value; 
	inputToArray = inputValue.split(""); 

	// assign each input char to the set and inrease related counter
	for (let i = 0 ; i<inputValue.length ; i++) {
		if (!setOfChars.includes(inputValue[i]) && consonantsArray.includes(inputValue[i])) {
			setOfChars.push(inputValue[i]);
			counterConsonant++;
		} else if (!setOfChars.includes(inputValue[i]) && vowelsArray.includes(inputValue[i])) {
			setOfChars.push(inputValue[i]);
			counterVowels++;
		} else if (!setOfChars.includes(inputValue[i]) && othersArray.includes(inputValue[i])) {
			setOfChars.push(inputValue[i]);
			counterOthers++;
		}
	};

	// word (space) counting
	for (let i=0; i<inputToArray.length ; i++) {
		if (inputToArray[i] == ' '){
			counterWords++;
		}
	};

	console.log('Sesli harf adeti : ' + counterVowels + '\nSessiz harf adeti : ' + counterConsonant + '\nNoktalama işareti ve sembol adeti : ' + counterOthers );
	
	
	// newEntryLi.appendChild( "fdhdf");
	resultDomUl.innerHTML =  `
	<li class="result-li">Total number of chars <span class="colon"> : </span> <span class="result-value">${inputValue.length}</span></li>
	<li class="result-li">Total number of words <span class="colon"> : </span> <span class="result-value">${counterWords}</span></li>
	<li class="result-li">Number of vowels 		<span class="colon"> : </span> <span class="result-value">${counterVowels}</span></li>
	<li class="result-li">Number of consonants  <span class="colon"> : </span> <span class="result-value">${counterConsonant}</span></li>
	<li class="result-li">Number of symbols 	<span class="colon"> : </span> <span class="result-value">${counterOthers}</span></li>
	`;
});

//! Calling click function of add button by pressing enter key from the keyboard
inputBtn.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		button.click();
	}
  });