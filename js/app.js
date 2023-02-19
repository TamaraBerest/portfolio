gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    })

    gsap.fromTo('.hero-section', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: '820',
            scrub: true
        }
    })

    let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

    itemsL.forEach(item => {
        gsap.fromTo(item, { x: -50, opacity: 0 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '-100',
                scrub: true
            }
        })
    })

    let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

    itemsR.forEach(item => {
        gsap.fromTo(item, { x: 50, opacity: 0 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '-100',
                scrub: true
            }
        })
    })

}

const menuBtn = document.querySelector(".page__menu");
const menu = document.querySelector(".page__menu_bg");
menuBtn.addEventListener("click", () => {
    if (!menu.classList.contains("page__menu_bg-active")) {
        menu.classList.toggle("page__menu_bg-pre-active");
        setTimeout(() => {
            menu.classList.toggle("page__menu_bg-active");
            document.body.classList.toggle("_lock");
        }, 54);
    } else {
        menu.classList.toggle("page__menu_bg-active");
        document.body.classList.toggle("_lock");
        setTimeout(() => {
            menu.classList.toggle("page__menu_bg-pre-active");
        }, 1054);
    }
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});
