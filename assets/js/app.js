// for navbar

let menuicon = document.querySelector(".menuicon");
let lg_view = document.querySelector(".max_lg_view");
let body = document.body;
let first_line = document.querySelector(".first_line")
let second_line = document.querySelector(".second_line")
let third_line = document.querySelector(".third_line")
let nav_link = document.querySelectorAll(".nav_link");

// we are going to use this function to make cross whenever the navmenu is clicked

function cross() {
    second_line.style.display = "none";
    first_line.style.transform = "rotate(45deg)";
    first_line.style.top = "15px";
    first_line.style.left = "1px";
    first_line.classList.add("position-relative");
    third_line.style.transform = "rotate(-45deg)";
    third_line.style.top = "-11px";
    third_line.classList.add("position-relative");
}

// we are going to use this function to remove the cross again when the menuicon is clicked

function remove_cross() {
    second_line.style.display = "block";
    first_line.style.transform = "rotate(0deg)";
    first_line.classList.remove("position-relative");
    third_line.style.transform = "rotate(0deg)";
    third_line.classList.remove("position-relative");
}

menuicon.addEventListener("click", () => {
    lg_view.classList.toggle("show");
    nav_link.forEach(other => {
        other.addEventListener("click", () => {
            lg_view.classList.remove("show");
            body.style.overflow = "auto";
            remove_cross();
        });
    });
    if (lg_view.classList.contains("show")) {
        body.style.overflow = "hidden";
        cross();
    } else {
        body.style.overflow = "auto";
        remove_cross();
    }
});

// accoridon

let accordion_item = document.querySelectorAll(".accoridon_items");
let svg_icon = document.querySelector(".svg_icon");
let disp_text = document.querySelector(".disp_text");
disp_text.style.display = "flex";
svg_icon.style.transform = "rotate(180deg)";

accordion_item.forEach(otherElement => {
    let svg_icon = otherElement.querySelector(".svg_icon");
    let disp_text = otherElement.querySelector(".disp_text");
    let clickBtn = otherElement.querySelector(".click_btn");
    clickBtn.addEventListener("click", () => {
        accordion_item.forEach(itm => {
            if (itm !== otherElement) {
                let svg_icon = itm.querySelector(".svg_icon");
                let disp_text = itm.querySelector(".disp_text");
                disp_text.style.display = "none";
                svg_icon.style.transform = "rotate(0deg)";
            }
        });
        let text_prop = window.getComputedStyle(disp_text).display;
        if (text_prop === "none") {
            disp_text.style.display = "flex";
            svg_icon.style.transform = "rotate(180deg)";
        } else {
            disp_text.style.display = "none";
            svg_icon.style.transform = "rotate(0deg)";
        }
    });

});