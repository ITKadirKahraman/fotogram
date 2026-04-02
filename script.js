let dialogREF = document.getElementById("fullPhoto");
let dialogInitPhoto = document.getElementById('photoGallary');
let columnLayout = document.getElementById('gridLayout');
let closeDialog = document.getElementById('closeDialog');
let dialogHeadline = document.getElementById('dialogHeadline');
let dialogPhoto = document.getElementById('dialogPhoto');
let dialogPageNumber = document.getElementById('dialogPageNumber');
let dialogLeft = document.getElementById('arrowLeft');
let dialogRight = document.getElementById('arrowRight');
let dialogID = 0;
let dialogIndex = 0;

let allImages = 
    [
        {id: 1, name: "Mein Traumauto.", link: "img/auto.svg", alt: "Traumauto"},
        {id: 2, name: "Mein Ziel ist es zu Coden.", link: "img/coden.svg", alt: "Programmierer programmiert"},
        {id: 3, name: "Das was ich sehr gerne Essen.", link: "img/doener.svg", alt: "Dönertasche"},
        {id: 4, name: "Das ist meine Galaxie, mein Wohnort der Zukunft.", link: "img/galaxie.svg", alt: "Galaxie"},
        {id: 5, name: "Mein Traumkörper ist es ein Sixpack zu haben.", link: "img/gym.svg", alt: "Gym"},
        {id: 6, name: "Das Land, was ich gerne bereisen möchte.", link: "img/japan.svg", alt: "Japan"},
        {id: 7, name: "Ein MacBook für die Arbeit.", link: "img/macbook.svg", alt: "MacBook"},
        {id: 8, name: "Wenn es um Teigwaren geht, esse ich gerne Pizza.", link: "img/pizza.svg", alt: "Pizza"},
        {id: 9, name: "Italien? Spaghetti!", link: "img/spaghetti.svg", alt: "Spaghetti"},
        {id: 10, name: "Jeden Tag 10.000 Schritte ist ein muss.", link: "img/spazieren.svg", alt: "Spazieren"},
        {id: 11, name: "Ich spitzere sehr gerne und bin der Typ dafür.", link: "img/vogel.svg", alt: "Vogel"},
        {id: 12, name: "Der Raum der sich ausdehnt.", link: "img/weltraum.svg", alt: "Weltraum"}
    ];

function initGallary() {
    dialogInitPhoto.innerHTML = "";
    for(let index = 0; index < allImages.length; index++){
        dialogInitPhoto.innerHTML += photoTemplet(index);
    }
    updateLayout();
}

function updateLayout() {
    if(allImages.length > 7){
        dialogInitPhoto.classList.add("gridLayout");
    }
}

function photoTemplet(index){
    return `<section>
                <div>
                    <button onclick="openDialog(${allImages[index].id})" aria-haspopup="dialog">
                        <img src="${allImages[index].link}" alt="${allImages[index].alt}">
                    </button>
                </div>
            </section>`
}

function openDialog() {
    dialogREF.showModal();
}
