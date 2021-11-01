/*=============== SHOW MODAL ===============*/
const showModal = (openButton, modalContent) => {
    const openBtn = document.getElementById(openButton);
    const modalContainer = document.getElementById(modalContent);

    if (openBtn && modalContainer) {
        openBtn.addEventListener("click", () => {
            modalContainer.classList.add("show-modal")
        });
    };
};

showModal("open-modal", "modal-container");

/*=============== CLOSE MODAL ===============*/
const closeBtn = document.querySelectorAll(".close-modal");

function closeModal() {
    const modalCOntainer = document.getElementById("modal-container");

    modalCOntainer.classList.remove("show-modal");
}

closeBtn.forEach(c => c.addEventListener("click", closeModal));

/*=============== SLIDER ===============*/
var clickCounter = 0;

document.querySelector(".background_changer").addEventListener("change", function() {
    clickCounter += 1;
    // console.log(clickCounter);

    // Effect 2
    if (clickCounter == 1) {
        document.getElementById("slider").classList.toggle("move_1");

        document.getElementById("modal-content").classList.remove("effect_1");
        document.getElementById("modal-content").classList.add("effect_2");
    }

    // Effect 3
    if (clickCounter == 2) {
        document.getElementById("slider").classList.toggle("move_2");
        
        document.getElementById("modal-content").classList.remove("effect_2");
        document.getElementById("modal-content").classList.add("effect_3");
    }
    
    // Effect 1
    if (clickCounter == 3) {
        document.getElementById("slider").classList.remove("move_2");
        document.getElementById("slider").classList.remove("move_1");
        clickCounter = 0;

        document.getElementById("modal-content").classList.remove("effect_3");
        document.getElementById("modal-content").classList.add("effect_1");
    }  
});