const trousers = document.getElementById("trousers");
const skirts = document.getElementById("skirts");
const blouses = document.getElementById("blouses");
const sweaters = document.getElementById("sweaters");
const dresses = document.getElementById("dresses");
const btnResults = document.querySelector(".btn_result");
const allFields = document.querySelector(".fields");
const preloaderBox = document.querySelector(".fields-container");
const preloader = document.querySelector(".preloader");

const bottomBodyClothes = document.querySelectorAll('[data-clothes-type="bottom"]');
const topBodyClothes = document.querySelectorAll('[data-clothes-type="top"]');
const fullBodyClothes = document.querySelector('[data-clothes-type="fullBody"]');

const inputs = [trousers, dresses, skirts, blouses, sweaters]

const defaultTrousersValue = parseInt(trousers.value)
const defaultBlousesValue = parseInt(blouses.value)
const defaultSweatersValue = parseInt(sweaters.value)
const defaultSkirtsValue = parseInt(skirts.value)
const defaultDressesValue = parseInt(dresses.value)

// state
let trousersAmount = defaultTrousersValue;
let blousesAmount = defaultBlousesValue;
let sweatersAmount = defaultSweatersValue;
let skirtsAmount = defaultSkirtsValue;

const topBodyClothesValues = {
    blousesAmount,
    sweatersAmount
}
const bottomBodyClothesValues = {
    skirtsAmount,
    trousersAmount
}
let fullBodyClothesValue = defaultDressesValue

topBodyClothes.forEach(clothes => clothes.addEventListener('keyup', () => {
    clothes.id === 'blouses' ?
        topBodyClothesValues.blousesAmount = clothes.valueAsNumber || 0 :
        topBodyClothesValues.sweatersAmount = clothes.valueAsNumber || 0
}));

bottomBodyClothes.forEach(clothes => clothes.addEventListener('keyup', () => {
    clothes.id === 'skirts' ?
        bottomBodyClothesValues.skirtsAmount = clothes.valueAsNumber || 0 :
        bottomBodyClothesValues.trousersAmount = clothes.valueAsNumber || 0
}));

fullBodyClothes.addEventListener('keyup', () => {
    fullBodyClothesValue = fullBodyClothes.valueAsNumber || 0
});

inputs.forEach(input => input.addEventListener('keyup', () => {
    changeAmount(input.id)
    setValueOfUniqueCombinations()
}));

// todo redo to map
function changeAmount(clothesType) {
    if (clothesType === 'blouses') {
        blousesAmount = parseInt(event.target.value) || 0
    } else if (clothesType === 'skirts') {
        skirtsAmount = parseInt(event.target.value) || 0
    } else if (clothesType === 'trousers') {
        trousersAmount = parseInt(event.target.value) || 0
    } else if (clothesType === 'sweaters') {
        sweatersAmount = parseInt(event.target.value) || 0
    } else if (clothesType === 'dresses') {
        fullBodyClothesValue = parseInt(event.target.value) || 0
    }
}

/* find unique combos */
function getUniqueCombos() {
    const bottom = Object.values(bottomBodyClothesValues).reduce((sum, current) => {
        return sum + current
    })
    const top = Object.values(topBodyClothesValues).reduce((sum, current) => {
        return sum + current
    })
    return bottom * top + fullBodyClothesValue
}

btnResults.addEventListener('click', () => {
    getAnimation()
});

const getAnimation = () => {
    allFields.classList.remove('fields');
    allFields.style.display = 'none';
    preloader.style.backgroundImage = 'url(assets/magic.png)';
    preloader.style.opacity = '1';
    preloaderBox.classList.add('magic');
    setTimeout(() => {
        preloader.style.opacity = '0';
        getStyledResults();
    }, 2500);
}

function setResultsValues() {
    document.querySelector('.result_number').innerHTML = getUniqueCombos();
    document.querySelector('.result_text').innerHTML = config.uiText.result;
    document.querySelector('.result_conclusion').innerHTML = config.uiText.conclusion;
    document.querySelector('.btn_clothesProcessing').innerHTML = config.uiText.accordionTitle;
}

const getStyledResults = () => {
    setResultsValues()
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity .7s ease-in-out;';
    preloaderBox.classList.remove('magic');
    preloaderBox.classList.add('resultFields');
    const allNeededDivs = document.querySelector(".result").querySelectorAll("div")
    allNeededDivs.forEach((div) => {
        div.classList.add('result_appearance')
    })
}


