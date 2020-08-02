let bottomBodyClothesValues = 0
let topBodyClothesValues = 0
let fullBodyClothesValue = 0

const renderFields = () => {
    const fieldsBox = document.querySelector(".fields");
    config.uiText.clothesTypes.forEach((clothesType) => {
        const clothes = document.createElement("label");
        clothes.innerHTML = clothesType.title
        fieldsBox.appendChild(clothes);

        const clothesField = document.createElement("input");
        clothesField.value = clothesType.defaultValue;

        clothesField.classList.add('field');
        clothesField.dataset.id = clothesType.id;
        clothesField.dataset.dataClothesType = clothesType.type;
        clothes.appendChild(clothesField);
    })
}
renderFields()

const getAllFieldsData = () => {
    const allFields = document.querySelectorAll(".field");
    const allData = []
    allFields.forEach((field) => {
        allData.push({
            id: field.dataset.id,
            value: parseFloat(field.value) || 0,
            type: field.dataset.dataClothesType,
        })
    })
    return allData
}

const setAmountsByGroups = (groupsData) => {
    groupsData.forEach((data) => {
        if (data.type === 'bottom') {
            bottomBodyClothesValues += data.value
        } else if (data.type === 'top') {
            topBodyClothesValues += data.value
        } if (data.type === 'fullBody') {
            fullBodyClothesValue += data.value
        }
    })
}

function getUniqueCombos() {
    const groupsData = getAllFieldsData()
    setAmountsByGroups(groupsData)
    return bottomBodyClothesValues * topBodyClothesValues + fullBodyClothesValue
}

document.querySelector(".btn_result").addEventListener('click', () => {
    getAnimation()
});

const preloaderBox = document.querySelector(".fields-container");
const preloader = document.querySelector(".preloader");

const getAnimation = () => {
    const allFields = document.querySelector(".fields");
    document.querySelector('.btn_result').style.display = 'none';
    allFields.style.display = 'none';
    preloader.style.backgroundImage = 'url(assets/magic.png)';
    preloader.style.opacity = '1';
    preloaderBox.classList.add('magic');
    setTimeout(() => {
        preloader.style.opacity = '0';
        getStyledResults();
    }, 250);
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