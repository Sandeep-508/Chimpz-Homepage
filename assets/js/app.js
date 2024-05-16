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
let accordion_item_1 = document.querySelector(".accoridon_items");
let svg_icon = document.querySelector(".svg_icon");
let disp_text = document.querySelector(".disp_text");
let svg_arrow = document.querySelector(".svg_fill");
let text_1 = document.querySelector(".color_change");
let text_2 = document.querySelector(".color_change_2");
disp_text.style.display = "flex";
svg_icon.style.transform = "rotate(180deg)";
accordion_item_1.classList.add("bordr_change");
svg_arrow.classList.add("fill_change");
text_1.classList.add("text_change");
text_2.classList.add("text_change");

accordion_item.forEach(otherElement => {
    let svg_icon = otherElement.querySelector(".svg_icon");
    let disp_text = otherElement.querySelector(".disp_text");
    let clickBtn = otherElement.querySelector(".click_btn");
    let text_1 = otherElement.querySelector(".color_change");
    let text_2 = otherElement.querySelector(".color_change_2");
    let svg_arrow = otherElement.querySelector(".svg_fill");
    clickBtn.addEventListener("click", () => {
        accordion_item.forEach(itm => {
            if (itm !== otherElement) {
                let svg_icon = itm.querySelector(".svg_icon");
                let disp_text = itm.querySelector(".disp_text");
                disp_text.style.display = "none";
                svg_icon.style.transform = "rotate(0deg)";
                let text_1 = itm.querySelector(".color_change");
                let text_2 = itm.querySelector(".color_change_2");
                let svg_arrow = itm.querySelector(".svg_fill");
                itm.classList.remove("bordr_change");
                text_1.classList.remove("text_change");
                text_2.classList.remove("text_change");
                svg_arrow.classList.remove("fill_change");
            }
        });
        let text_prop = window.getComputedStyle(disp_text).display;
        if (text_prop === "none") {
            disp_text.style.display = "flex";
            svg_icon.style.transform = "rotate(180deg)";
            otherElement.classList.add("bordr_change");
            text_1.classList.add("text_change");
            text_2.classList.add("text_change");
            svg_arrow.classList.add("fill_change");
        } else {
            disp_text.style.display = "none";
            svg_icon.style.transform = "rotate(0deg)";
            otherElement.classList.remove("bordr_change");
            text_1.classList.remove("text_change");
            text_2.classList.remove("text_change");
            svg_arrow.classList.remove("fill_change");
        }
    });

});


// scroll to top

let scroll_btn = document.querySelector(".scroll_top");
let scroll_pt = 200;

scroll_btn.classList.add("d-none");
window.addEventListener("scroll", () => {
    if (window.scrollY > scroll_pt) {
        scroll_btn.classList.remove("d-none");
    } else {
        scroll_btn.classList.add("d-none");
    }
    scroll_btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});


// preloader

let preloader = document.querySelector(".preloader");
body.style.overflow = "hidden";
setTimeout(() => {
    preloader.classList.add("-top-105");
    body.style.overflow = "auto";
}, 2000);

// comeback notification

let title = document.title;
window.addEventListener("blur", () => {
    document.title = "Come back 🤞";
});

window.addEventListener("focus", () => {
    document.title = title;
});