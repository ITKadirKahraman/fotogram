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
        {id: 2, name: "Mein Ziel: Coden.", link: "img/coden.svg", alt: "Programmierer programmiert"},
        {id: 3, name: "Döner Kebab.", link: "img/doener.svg", alt: "Dönertasche"},
        {id: 4, name: "Das ist meine Galaxie.", link: "img/galaxie.svg", alt: "Galaxie"},
        {id: 5, name: "Mein Traumkörper: Sixpack.", link: "img/gym.svg", alt: "Gym"},
        {id: 6, name: "Das Land der Träume.", link: "img/japan.svg", alt: "Japan"},
        {id: 7, name: "Ein MacBook für die Arbeit.", link: "img/macbook.svg", alt: "MacBook"},
        {id: 8, name: "Teigware: Nudel & Pizza.", link: "img/pizza.svg", alt: "Pizza"},
        {id: 9, name: "Italien? Spaghetti!", link: "img/spaghetti.svg", alt: "Spaghetti"},
        {id: 10, name: "Jeden Tag 10K Schritte.", link: "img/spazieren.svg", alt: "Spazieren"},
        {id: 11, name: "Ich liebe Vögel.", link: "img/vogel.svg", alt: "Vogel"},
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

function renderPhoto(photoId) {
    for (let i = 0; i < allImages.length; i++) {
        if (photoId === allImages[i].id) {
            dialogIndex = i;
            dialogHeadline.innerText = allImages[i].name;
            dialogPhoto.src = allImages[i].link;
            dialogPhoto.alt = allImages[i].alt;
            dialogPageNumber.innerText = `${i + 1} / ${allImages.length}`;
        }
    }
}

function openDialog(photoId) {
    renderPhoto(photoId);
    dialogREF.showModal();
}

closeDialog.addEventListener("click", () => {
    dialogREF.close();
});

dialogREF.addEventListener("click", (event) => {
    if(event.target === dialogREF){
        dialogREF.close();
    }
});

function initPhoto(photoId) {
    renderPhoto(photoId);
    openDialog(photoId);
}

dialogRight.addEventListener("click", () => {
    dialogIndex++;
    if (dialogIndex >= allImages.length) {
        dialogIndex = 0;
    }
    updateDialog();
});

dialogLeft.addEventListener("click", () => {
    dialogIndex--;
    if (dialogIndex < 0) {
        dialogIndex = allImages.length - 1;
    }
    updateDialog();
});

function updateDialog() {
    let img = allImages[dialogIndex];

    dialogHeadline.innerText = img.name;
    dialogPhoto.src = img.link;
    dialogPhoto.alt = img.alt;
    dialogPageNumber.innerText = `${dialogIndex + 1} / ${allImages.length}`;
}
