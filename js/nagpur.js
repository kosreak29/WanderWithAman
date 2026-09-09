/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("mobile-open");

    });


    /* Close mobile menu after clicking link */

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("mobile-open");

        });

    });

}


/* =====================================================
   NAGPUR AUTO RICKSHAW SCROLL ANIMATION
===================================================== */

const movingAuto = document.querySelector(".moving-auto");
const warningSection = document.querySelector(".warning-section");

if (movingAuto && warningSection) {

    function updateAutoRickshaw() {

        const rect =
            warningSection.getBoundingClientRect();

        const viewportHeight =
            window.innerHeight;


        /* =============================================
           ANIMATION RANGE
        ============================================= */

        const startPoint =
            viewportHeight * 0.95;

        const endPoint =
            viewportHeight * 0.15;


        let progress =
            (startPoint - rect.top) /
            (startPoint - endPoint);


        /* Keep progress between 0 and 1 */

        progress =
            Math.max(0, Math.min(1, progress));


        /* =============================================
           LEFT → RIGHT MOVEMENT
        ============================================= */

        const moveX =
            progress *
            (window.innerWidth * 0.40);


        /* =============================================
           ZOOM — ONLY AT VERY END
        ============================================= */

        let scale = 1;

        if (progress > 0.85) {

            const zoomProgress =
                (progress - 0.85) / 0.15;

            scale =
                1 + (zoomProgress * 0.8);

        }


        /* =============================================
           BLUR — ONLY LAST 10%
        ============================================= */

        let blur = 0;

        if (progress > 0.90) {

            const blurProgress =
                (progress - 0.90) / 0.10;

            blur =
                blurProgress * 10;

        }


        /* =============================================
           FADE — ONLY LAST 6%
        ============================================= */

        let opacity = 1;

        if (progress > 0.94) {

            const fadeProgress =
                (progress - 0.94) / 0.06;

            opacity =
                1 - fadeProgress;

        }


        /* =============================================
           APPLY ANIMATION

           NO BOUNCE
           NO ROTATION
        ============================================= */

        movingAuto.style.transform =
            `translate3d(${moveX}px, 0, 0) scale(${scale})`;

        movingAuto.style.filter =
            `blur(${blur}px)`;

        movingAuto.style.opacity =
            opacity;

    }


    /* =============================================
       PERFORMANCE OPTIMIZATION
    ============================================= */

    let ticking = false;

    window.addEventListener(
        "scroll",
        () => {

            if (!ticking) {

                window.requestAnimationFrame(() => {

                    updateAutoRickshaw();

                    ticking = false;

                });

                ticking = true;

            }

        },
        { passive: true }
    );


    /* Initial position */

    updateAutoRickshaw();

}


/* =====================================================
   POHA SECRET
===================================================== */

const secretBtn =
    document.getElementById("secretBtn");

const secretAnswer =
    document.getElementById("secretAnswer");

if (secretBtn && secretAnswer) {

    secretBtn.addEventListener("click", () => {

        secretAnswer.classList.toggle("active");


        if (
            secretAnswer.classList.contains("active")
        ) {

            secretBtn.textContent =
                "😂 Ab kahani secret nahi hai";

        } else {

            secretBtn.textContent =
                "Why was Aman crying? 👀";

        }

    });

}


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".timeline-card, .chaos-step, .science-card, .unexpected-list div, .ending-lines p"
    );


if (revealElements.length) {

    const revealObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

}


/* =====================================================
   HERO — MOUSE PARTICLES + SCROLL BLUR
===================================================== */

const hero = document.querySelector(".hero");
const heroBg = document.querySelector(".hero-bg");
const particleCanvas = document.getElementById("heroParticles");

if (hero && heroBg && particleCanvas) {

    const ctx = particleCanvas.getContext("2d");

    let particles = [];

    let mouseX = 0;
    let mouseY = 0;

    let lastMouseX = 0;
    let lastMouseY = 0;

    let heroRect;

    let ticking = false;


    /* =================================================
       CANVAS RESIZE
    ================================================= */

    function resizeParticleCanvas() {

        heroRect =
            hero.getBoundingClientRect();

        const dpr =
            Math.min(
                window.devicePixelRatio || 1,
                2
            );

        particleCanvas.width =
            heroRect.width * dpr;

        particleCanvas.height =
            heroRect.height * dpr;

        particleCanvas.style.width =
            heroRect.width + "px";

        particleCanvas.style.height =
            heroRect.height + "px";

        ctx.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );
    }


    /* =================================================
       CREATE PARTICLE
    ================================================= */

    function createParticle(x, y, velocityX, velocityY) {

        particles.push({

            x: x,
            y: y,

            vx:
                velocityX * 0.15 +
                (Math.random() - 0.5) * 0.4,

            vy:
                velocityY * 0.15 +
                (Math.random() - 0.5) * 0.4,

            size:
                Math.random() * 2.2 + 0.6,

            life: 1,

            decay:
                Math.random() * 0.018 + 0.012,

            rotation:
                Math.random() * Math.PI * 2

        });
    }


    /* =================================================
       MOUSE MOVE
    ================================================= */

    hero.addEventListener(
        "mousemove",
        (event) => {

            heroRect =
                hero.getBoundingClientRect();

            mouseX =
                event.clientX -
                heroRect.left;

            mouseY =
                event.clientY -
                heroRect.top;


            const velocityX =
                mouseX - lastMouseX;

            const velocityY =
                mouseY - lastMouseY;


            const speed =
                Math.sqrt(
                    velocityX * velocityX +
                    velocityY * velocityY
                );


            /*
             * Particles only when mouse moves
             */

            if (speed > 2) {

                const amount =
                    Math.min(
                        5,
                        Math.ceil(speed / 5)
                    );


                for (
                    let i = 0;
                    i < amount;
                    i++
                ) {

                    createParticle(
                        mouseX,
                        mouseY,
                        velocityX,
                        velocityY
                    );

                }
            }


            lastMouseX = mouseX;
            lastMouseY = mouseY;

        }
    );


    /* =================================================
       PARTICLE DRAW
    ================================================= */

    function drawParticles() {

        ctx.clearRect(
            0,
            0,
            heroRect.width,
            heroRect.height
        );


        particles.forEach(
            particle => {

                particle.x +=
                    particle.vx;

                particle.y +=
                    particle.vy;

                particle.vx *= 0.98;
                particle.vy *= 0.98;

                particle.life -=
                    particle.decay;

                particle.rotation +=
                    0.02;


                /*
                 * Soft glowing particle
                 */

                const alpha =
                    Math.max(
                        0,
                        particle.life
                    );


                ctx.save();

                ctx.translate(
                    particle.x,
                    particle.y
                );


                ctx.rotate(
                    particle.rotation
                );


                ctx.globalAlpha =
                    alpha * 0.75;


                ctx.fillStyle =
                    "rgba(255,255,255,0.9)";


                ctx.shadowBlur = 10;

                ctx.shadowColor =
                    "rgba(255,255,255,0.8)";


                ctx.beginPath();

                ctx.arc(
                    0,
                    0,
                    particle.size,
                    0,
                    Math.PI * 2
                );

                ctx.fill();

                ctx.restore();

            }
        );


        /*
         * Remove dead particles
         */

        particles =
            particles.filter(
                particle =>
                    particle.life > 0
            );


        requestAnimationFrame(
            drawParticles
        );

    }


    /* =================================================
       SCROLL — BLUR + ZOOM + PARALLAX
    ================================================= */

    function updateHeroScroll() {

        const scrollY =
            window.scrollY;

        const heroHeight =
            hero.offsetHeight;


        let progress =
            scrollY / heroHeight;


        progress =
            Math.max(
                0,
                Math.min(
                    1,
                    progress
                )
            );


        /*
         * Slow vertical movement
         */

        const moveY =
            scrollY * 0.08;


        /*
         * Zoom
         */

        const scale =
            1.03 +
            progress * 0.10;


        /*
         * Blur
         *
         * Starts slowly,
         * becomes stronger while
         * leaving hero.
         */

        const blur =
            Math.pow(
                progress,
                1.7
            ) * 9;


        heroBg.style.transform =
            `
            translate3d(
                0,
                ${moveY}px,
                0
            )
            scale(${scale})
            `;


        heroBg.style.filter =
            `blur(${blur}px)`;

    }


    /* =================================================
       SCROLL PERFORMANCE
    ================================================= */

    window.addEventListener(
        "scroll",
        () => {

            if (!ticking) {

                requestAnimationFrame(
                    () => {

                        updateHeroScroll();

                        ticking =
                            false;

                    }
                );

                ticking = true;

            }

        },
        {
            passive: true
        }
    );


    /* =================================================
       RESIZE
    ================================================= */

    window.addEventListener(
        "resize",
        resizeParticleCanvas
    );


    /* =================================================
       INITIALIZE
    ================================================= */

    resizeParticleCanvas();

    updateHeroScroll();

    drawParticles();

}
/* =====================================================
   SCIENCE GALLERY SLIDER
===================================================== */

const scienceSlides = document.querySelectorAll(".science-slide");
const scienceDots = document.querySelectorAll(".science-gallery-dots button");
const sciencePrev = document.querySelector(".science-prev");
const scienceNext = document.querySelector(".science-next");

let scienceIndex = 0;
let scienceTimer = null;

function showScienceSlide(index) {

    if (!scienceSlides.length) return;

    scienceIndex =
        (index + scienceSlides.length) %
        scienceSlides.length;


    scienceSlides.forEach((slide, i) => {

        slide.classList.toggle(
            "active",
            i === scienceIndex
        );


        const video =
            slide.querySelector("video");


        if (video) {

            if (i === scienceIndex) {

                video.currentTime = 0;

                const playPromise =
                    video.play();

                if (playPromise !== undefined) {

                    playPromise.catch(() => { });

                }

            } else {

                video.pause();

                video.currentTime = 0;

            }

        }

    });


    scienceDots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === scienceIndex
        );

        dot.setAttribute(
            "aria-current",
            i === scienceIndex
                ? "true"
                : "false"
        );

    });

}


function nextScienceSlide() {

    showScienceSlide(
        scienceIndex + 1
    );

}


function prevScienceSlide() {

    showScienceSlide(
        scienceIndex - 1
    );

}


function startScienceSlider() {

    if (!scienceSlides.length) return;


    if (scienceTimer) {

        clearInterval(
            scienceTimer
        );

    }


    scienceTimer =
        setInterval(
            nextScienceSlide,
            4500
        );

}


if (scienceSlides.length) {


    /* NEXT BUTTON */

    scienceNext?.addEventListener(
        "click",
        () => {

            nextScienceSlide();

            startScienceSlider();

        }
    );


    /* PREVIOUS BUTTON */

    sciencePrev?.addEventListener(
        "click",
        () => {

            prevScienceSlide();

            startScienceSlider();

        }
    );


    /* DOT NAVIGATION */

    scienceDots.forEach(
        (dot, index) => {

            dot.addEventListener(
                "click",
                () => {

                    showScienceSlide(
                        index
                    );

                    startScienceSlider();

                }
            );

        }
    );


    /* PAUSE WHILE HOVERING */

    const scienceGallery =
        document.querySelector(
            ".science-gallery"
        );


    scienceGallery?.addEventListener(
        "mouseenter",
        () => {

            if (scienceTimer) {

                clearInterval(
                    scienceTimer
                );

                scienceTimer = null;

            }

        }
    );


    /* RESUME AFTER HOVER */

    scienceGallery?.addEventListener(
        "mouseleave",
        () => {

            startScienceSlider();

        }
    );


    /* INITIAL SLIDE */

    showScienceSlide(0);

    startScienceSlider();

}


/* =====================================================
   IMAGE LIGHTBOX
===================================================== */

const lightbox =
    document.getElementById(
        "imageLightbox"
    );

const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );

const lightboxClose =
    document.querySelector(
        ".lightbox-close"
    );

const lightboxPrev =
    document.querySelector(
        ".lightbox-prev"
    );

const lightboxNext =
    document.querySelector(
        ".lightbox-next"
    );


const galleryImages =
    Array.from(
        document.querySelectorAll(
            ".gallery img, .photo-gallery img, .memory-card img, .food-gallery img"
        )
    );


let lightboxIndex = 0;


function openLightbox(index) {

    if (
        !lightbox ||
        !lightboxImage ||
        !galleryImages.length
    ) {

        return;

    }


    lightboxIndex =
        (index + galleryImages.length) %
        galleryImages.length;


    const image =
        galleryImages[
        lightboxIndex
        ];


    lightboxImage.src =
        image.currentSrc ||
        image.src;


    lightboxImage.alt =
        image.alt || "";


    lightbox.classList.add(
        "active"
    );


    document.body.classList.add(
        "lightbox-open"
    );

}


function closeLightbox() {

    if (!lightbox) return;


    lightbox.classList.remove(
        "active"
    );


    document.body.classList.remove(
        "lightbox-open"
    );

}


function nextLightboxImage() {

    openLightbox(
        lightboxIndex + 1
    );

}


function prevLightboxImage() {

    openLightbox(
        lightboxIndex - 1
    );

}


/* IMAGE CLICK */

galleryImages.forEach(
    (image, index) => {

        image.style.cursor =
            "zoom-in";


        image.addEventListener(
            "click",
            () => {

                openLightbox(
                    index
                );

            }
        );

    }
);


/* LIGHTBOX BUTTONS */

lightboxClose?.addEventListener(
    "click",
    closeLightbox
);


lightboxNext?.addEventListener(
    "click",
    nextLightboxImage
);


lightboxPrev?.addEventListener(
    "click",
    prevLightboxImage
);


/* CLOSE BY CLICKING BACKDROP */

lightbox?.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            lightbox
        ) {

            closeLightbox();

        }

    }
);


/* KEYBOARD CONTROLS */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            !lightbox?.classList.contains(
                "active"
            )
        ) {

            return;

        }


        if (
            event.key ===
            "Escape"
        ) {

            closeLightbox();

        }


        if (
            event.key ===
            "ArrowRight"
        ) {

            nextLightboxImage();

        }


        if (
            event.key ===
            "ArrowLeft"
        ) {

            prevLightboxImage();

        }

    }
);


/* =====================================================
   SMOOTH SCROLL
===================================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#" ||
                        targetId.length < 2
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) return;


                    event.preventDefault();


                    target.scrollIntoView({

                        behavior:
                            "smooth",

                        block:
                            "start"

                    });

                }
            );

        }
    );
/* =====================================================
   PLANET WEIGHT — CLICK TO REVEAL
===================================================== */

const planetSunWeight =
    document.getElementById(
        "planetSunWeight"
    );

const earthWeightReveal =
    document.getElementById(
        "earthWeightReveal"
    );


if (
    planetSunWeight &&
    earthWeightReveal
) {

    planetSunWeight.addEventListener(
        "click",
        () => {

            const isRevealed =
                earthWeightReveal.classList.contains(
                    "active"
                );


            if (!isRevealed) {

                earthWeightReveal.classList.add(
                    "active"
                );

                planetSunWeight.classList.add(
                    "revealed"
                );

                planetSunWeight.setAttribute(
                    "aria-expanded",
                    "true"
                );

                earthWeightReveal.setAttribute(
                    "aria-hidden",
                    "false"
                );


                const hint =
                    planetSunWeight.querySelector(
                        ".planet-click-hint"
                    );

                if (hint) {
                    hint.textContent =
                        "CLICK TO HIDE";
                }


            } else {

                earthWeightReveal.classList.remove(
                    "active"
                );

                planetSunWeight.classList.remove(
                    "revealed"
                );

                planetSunWeight.setAttribute(
                    "aria-expanded",
                    "false"
                );

                earthWeightReveal.setAttribute(
                    "aria-hidden",
                    "true"
                );


                const hint =
                    planetSunWeight.querySelector(
                        ".planet-click-hint"
                    );

                if (hint) {
                    hint.textContent =
                        "CLICK TO REVEAL";
                }

            }

        }
    );

}
/* =====================================================
   VIDEO HANDLING
===================================================== */

document
    .querySelectorAll("video")
    .forEach(
        video => {


            /* Mobile inline playback */

            video.setAttribute(
                "playsinline",
                ""
            );


            /* Don't load entire video immediately */

            video.setAttribute(
                "preload",
                "metadata"
            );


            /* Play active science video */

            video.addEventListener(
                "loadedmetadata",
                () => {

                    if (
                        video.closest(
                            ".science-slide.active"
                        )
                    ) {

                        const playPromise =
                            video.play();


                        if (
                            playPromise !==
                            undefined
                        ) {

                            playPromise.catch(
                                () => { }
                            );

                        }

                    }

                }
            );

        }
    );


/* =====================================================
   CONTACT / NEWSLETTER FORMS
===================================================== */

document
    .querySelectorAll("form")
    .forEach(
        form => {

            form.addEventListener(
                "submit",
                event => {


                    const action =
                        (
                            form.getAttribute(
                                "action"
                            ) || ""
                        ).trim();


                    /*
                     * Keep normal forms functional
                     * when an action is supplied.
                     *
                     * For placeholder/demo forms,
                     * prevent useless page reload.
                     */

                    if (
                        !action ||
                        action === "#"
                    ) {

                        event.preventDefault();


                        const success =
                            form.querySelector(
                                ".form-success, .success-message"
                            );


                        if (success) {

                            success.classList.add(
                                "active"
                            );

                        }

                    }

                }
            );

        }
    );


/* =====================================================
   PAGE VISIBILITY — PAUSE SCIENCE SLIDER
===================================================== */

document.addEventListener(
    "visibilitychange",
    () => {


        /* Nothing to do if gallery doesn't exist */

        if (
            !scienceSlides.length
        ) {

            return;

        }


        /* =============================================
           PAGE / TAB NOT VISIBLE
        ============================================= */

        if (
            document.hidden
        ) {


            /* Stop slider timer */

            if (scienceTimer) {

                clearInterval(
                    scienceTimer
                );

                scienceTimer = null;

            }


            /* Pause active video */

            const activeVideo =
                document.querySelector(
                    ".science-slide.active video"
                );


            activeVideo?.pause();


        } else {


            /* =========================================
               PAGE / TAB VISIBLE AGAIN
            ========================================= */


            /* Restart slider */

            startScienceSlider();


            /* Resume active video */

            const activeVideo =
                document.querySelector(
                    ".science-slide.active video"
                );


            if (activeVideo) {

                const playPromise =
                    activeVideo.play();


                if (
                    playPromise !==
                    undefined
                ) {

                    playPromise.catch(
                        () => { }
                    );

                }

            }

        }

    }
);


/* =====================================================
   DEBUG / STATUS
===================================================== */

console.log(
    "Nagpur Chapter 03 JS loaded successfully."
);
/* =====================================================
   WANDER WITH AMAN
   LANGUAGE TRANSLATOR
===================================================== */


/* =====================================================
   GOOGLE TRANSLATE INITIALIZATION
===================================================== */

function googleTranslateElementInit() {

    new google.translate.TranslateElement(
        {
            pageLanguage: "en",

            includedLanguages:
                "en,hi,mr,bn,ta,te,gu,kn,ml,pa,es,fr",

            autoDisplay: false
        },

        "google_translate_element"
    );

}


/* =====================================================
   LANGUAGE SWITCHER
===================================================== */

const languageSwitcher =
    document.getElementById("languageSwitcher");

const languageBtn =
    document.getElementById("languageBtn");

const languageMenu =
    document.getElementById("languageMenu");

const languageCurrent =
    document.getElementById("languageCurrent");


/* =====================================================
   LANGUAGE NAMES
===================================================== */

const languageNames = {

    en: "EN",

    hi: "हि",

    mr: "मर",

    bn: "বা",

    ta: "த",

    te: "తె",

    gu: "ગુ",

    kn: "ಕ",

    ml: "മ",

    pa: "ਪੰ",

    es: "ES",

    fr: "FR"

};


/* =====================================================
   OPEN / CLOSE DROPDOWN
===================================================== */

if (
    languageSwitcher &&
    languageBtn &&
    languageMenu
) {

    languageBtn.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            const isOpen =
                languageSwitcher.classList.contains(
                    "open"
                );

            languageSwitcher.classList.toggle(
                "open"
            );

            languageBtn.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );

            languageMenu.setAttribute(
                "aria-hidden",
                String(isOpen)
            );

        }
    );


    /* =================================================
       CLOSE WHEN CLICKING OUTSIDE
    ================================================= */

    document.addEventListener(
        "click",
        function (event) {

            if (
                !languageSwitcher.contains(
                    event.target
                )
            ) {

                languageSwitcher.classList.remove(
                    "open"
                );

                languageBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

                languageMenu.setAttribute(
                    "aria-hidden",
                    "true"
                );

            }

        }
    );

}


/* =====================================================
   GET GOOGLE TRANSLATE SELECT
===================================================== */

function getGoogleTranslateSelect() {

    return document.querySelector(
        ".goog-te-combo"
    );

}


/* =====================================================
   WAIT FOR GOOGLE TRANSLATE
===================================================== */

function waitForGoogleTranslate(
    callback,
    attempts = 0
) {

    const select =
        getGoogleTranslateSelect();

    if (select) {

        callback(select);

        return;

    }


    if (attempts >= 30) {

        console.warn(
            "Google Translate could not be initialized."
        );

        return;

    }


    setTimeout(
        function () {

            waitForGoogleTranslate(
                callback,
                attempts + 1
            );

        },
        300
    );

}


/* =====================================================
   CHANGE LANGUAGE
===================================================== */

function changeWebsiteLanguage(
    language
) {

    waitForGoogleTranslate(
        function (select) {

            /* -----------------------------------------
               English = original website
            ----------------------------------------- */

            if (language === "en") {

                select.value = "en";

            } else {

                select.value = language;

            }


            /* -----------------------------------------
               Trigger Google Translate
            ----------------------------------------- */

            select.dispatchEvent(
                new Event(
                    "change",
                    {
                        bubbles: true
                    }
                )
            );


            /* -----------------------------------------
               Update button
            ----------------------------------------- */

            if (languageCurrent) {

                languageCurrent.textContent =
                    languageNames[language] ||
                    language.toUpperCase();

            }


            /* -----------------------------------------
               Save language
            ----------------------------------------- */

            localStorage.setItem(
                "wanderLanguage",
                language
            );


            /* -----------------------------------------
               Active option
            ----------------------------------------- */

            document
                .querySelectorAll(
                    ".language-menu button"
                )
                .forEach(
                    button => {

                        button.classList.toggle(
                            "active",
                            button.dataset.lang ===
                            language
                        );

                    }
                );


            /* -----------------------------------------
               Close menu
            ----------------------------------------- */

            if (languageSwitcher) {

                languageSwitcher.classList.remove(
                    "open"
                );

            }

            if (languageBtn) {

                languageBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

            if (languageMenu) {

                languageMenu.setAttribute(
                    "aria-hidden",
                    "true"
                );

            }

        }
    );

}


/* =====================================================
   LANGUAGE BUTTONS
===================================================== */

document
    .querySelectorAll(
        ".language-menu button"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                function () {

                    const language =
                        this.dataset.lang;

                    if (!language) {
                        return;
                    }

                    changeWebsiteLanguage(
                        language
                    );

                }
            );

        }
    );


/* =====================================================
   RESTORE PREVIOUS LANGUAGE
===================================================== */

window.addEventListener(
    "load",
    function () {

        const savedLanguage =
            localStorage.getItem(
                "wanderLanguage"
            );


        if (
            savedLanguage &&
            savedLanguage !== "en"
        ) {

            setTimeout(
                function () {

                    changeWebsiteLanguage(
                        savedLanguage
                    );

                },
                1200
            );

        }


        if (
            savedLanguage &&
            languageCurrent
        ) {

            languageCurrent.textContent =
                languageNames[savedLanguage] ||
                "EN";

        }

    }
);