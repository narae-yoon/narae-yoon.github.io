window.addEventListener('DOMContentLoaded', function () {

    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


    });

    gsap.to('#section01 .fix-this-01', {

        scrollTrigger: {
            trigger: "#section01 .trigger-this-01",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            pinSpacing: false,
            scrub: true,
            // markers: true
        }
    });

    gsap.to('#section01 .page_home', {

        x: -1920,
        scrollTrigger: {
            trigger: "#section01",
            start: "top top",
            end: () => "+=" + 600,
            // end: 'bottom bottom',
            scrub: 1,
        }
    })

    gsap.to('#section02', {

        x: 0,
        scrollTrigger: {
            trigger: "#section01",
            start: "0 top",
            end: () => "+=" + 600,
            // end: 'bottom bottom',
            scrub: 1,
        }
    })

    // gsap.to('#section03 .flow_group', {

    //     x: -3400,
    //     scrollTrigger: {
    //         trigger: "#section03",
    //         start: "top top",
    //         end: () => "+=" + 1000,
    //         // end: 'bottom bottom',
    //         scrub: 1,
    //     }
    // });

    // gsap.to('#section03 .swiper_flow', {

    //     x: 0,
    //     scrollTrigger: {
    //         trigger: "#section03",
    //         start: "1000 top",
    //         end: () => "+=" + 1500,
    //         // end: 'bottom bottom',
    //         scrub: 1,
    //         onEnter:()=>{
    //             // preventDefault();
    //             // swiper.mousewheel.enable();
    //         }
    //     }
    // });


    /*  slide,click event section */

    

















})


