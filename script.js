const trousers = document.getElementById("trousers");
const skirts = document.getElementById("skirts");
const blouses = document.getElementById("blouses");
const sweaters = document.getElementById("sweaters");
const dresses = document.getElementById("dresses");
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

document.querySelector(".btn_result").addEventListener('click', () => {
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
    document.querySelector('.btn_recyclingCenter').innerHTML = config.uiText.accordionTitle;
}

const getStyledResults = () => {
    setResultsValues()
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity .7s ease-in-out;';
    preloaderBox.classList.remove('magic');
    preloaderBox.classList.add('resultFields');
    const allNeededDivs = document.querySelector(".result").querySelectorAll("div")
    allNeededDivs.forEach((div) => {
        div.classList.add('visibility')
    })
}

document.querySelector(".btn_recyclingCenter").addEventListener('click', () => {
    getRecyclingCentersInfo()
});

const getRecyclingCentersInfo = () => {
    document.querySelector(".result").style.opacity = '0';
    document.querySelector(".result").style.transition = 'opacity .7s ease-in-out;';
    document.querySelector(".fields-container").style.display = 'none';
    const accordion = document.querySelector(".accordion");
    accordion.classList.add('position', 'visibility', 'fields-container');
    const blackBoxForShopNames = document.createElement("div");
    blackBoxForShopNames.classList.add('wrap_shopName');
    accordion.appendChild(blackBoxForShopNames);

    config.uiText.recyclingCenters.forEach((center) => {
        // add wrap
        const newCenter = document.createElement("div");
        newCenter.classList.add('center');
        accordion.appendChild(newCenter);
        // add btn
        const centerBtn = document.createElement("a");
        centerBtn.href = center.url;
        centerBtn.classList.add('btn_center_accordion');
        centerBtn.innerHTML = center.title;
        newCenter.appendChild(centerBtn);
        // add btn for navi
        const navCenterBtn = document.createElement("button");
        navCenterBtn.classList.add('btn_center_nav');
        navCenterBtn.innerHTML = center.title;
        blackBoxForShopNames.appendChild(navCenterBtn);

        const top = newCenter.getBoundingClientRect().top
        navCenterBtn.addEventListener('click', () => {
            window.scrollTo({
                top: top,
                behavior: "smooth"
            });
        });
        // add descr
        const centerDescription = document.createElement("div");
        centerDescription.classList.add('description_recyclingCenter')
        centerDescription.innerHTML = center.description
        newCenter.appendChild(centerDescription)
    })

    const article = document.createElement("a");
    article.innerHTML = config.uiText.article;
    article.href = config.uiText.articleUrl;
    article.classList.add('link');
    accordion.appendChild(article);
}

