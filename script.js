let dialogs = 
    [   document.getElementById('myDialogAuto'),
        document.getElementById('myDialogCoden'),
        document.getElementById('myDialogDoener'),
        document.getElementById('myDialogGalaxie'),
        document.getElementById('myDialogGym'),
        document.getElementById('myDialogJapan'),
        document.getElementById('myDialogMacbook'),
        document.getElementById('myDialogPizza'),
        document.getElementById('myDialogSpaghetti'),
        document.getElementById('myDialogSpazieren'),
        document.getElementById('myDialogVogel'),
        document.getElementById('myDialogWeltraum')
    ];

let buttons = document.querySelectorAll(".img-btn");

function openDialog(button) {
    let i = Array.from(buttons).indexOf(button);
    if(dialogs[i]){
        dialogs[i].showModal();
        dialogs[i].classList.add("opened");
    }

}

function closeDialog() {
    for(let i = 0; i < dialogs.length; i++){
        if(dialogs[i]){
            dialogs[i].close();
            dialogs[i].classList.remove("opened");
        }
    }
}
