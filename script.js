function header(){
    let tl = gsap.timeline();
tl.from("#cred-logo",{
    duration: 0.5,
    delay: 1,  
    scale : 0,
    opacity : 0,
    y: -100,
})
tl.from("#nav-right-a1",{
    duration: 0.5,
    scale : 0,
    opacity : 0,
    y: -100,
})
tl.from("#nav-right-a2",{
    duration: 0.5,
    scale : 0,
    opacity : 0,
    y: -100,
})
tl.from(".page1-H1",{
    duration: 0.5,
    scale : 0,
    opacity : 0,
    y: 200,
})
// tl.from("#h1first",{
//     duration: 0.5,
//     scale : 0,
//     opacity : 0,
//     y: 200,
// })
// tl.from("#h1second",{
//     duration: 0.5,
//     scale : 0,
//     opacity : 0,
//     y: 200,
// })
tl.from("#page1-para",{
    duration: 0.5,
    scale : 0,
    opacity : 0,
    y: 200,
})
tl.from("#page1-btn",{
    duration: 0.5,
    scale : 0,
    opacity : 0,
    y: 200,
})
}
header();

// page2 mobile images gsap code
function page2_Mobile_IMgs(){
gsap.from(".page2-Mobile-IMgs",{
    y: "100%",
    duration :1, 
    // delay: 1, 
    scale: 0.2,
    // opacity: 0,
    scrollTrigger:{
        trigger : ".page2-Mobile-IMgs",
        scroller : "body",
        // markers: true,
        start : "top 75%",  
        end : "top 30%",
        scrub :2,
    }
})
}
page2_Mobile_IMgs();


let tl2 = gsap.timeline({
    // duration: 3,
    scrollTrigger: {
        trigger: "#page5",
        scroller: "body",
        pin: true,
        scrub: 2,
        markers: true,
        start: "top 0",
        end: "top -100%",
    }   
});
tl2.to("#scroll-1",{
    bottom:"30vh",
})
tl2.to("#scroll-1",{
    opacity: 0,
})
tl2.to("#neopop-fold1",{
    marginLeft:"-100%"
})
tl2.to("#scroll-2",{
    delay:0.5,
    opacity: 1,
})
tl2.to("#scroll-2",{
    bottom:"30vh"
})
tl2.to("#scroll-2",{
    opacity: 0,
})
tl2.to("#neopop-fold2",{
    marginLeft:"-100%"
})
tl2.to("#scroll-3",{
    delay:0.5,
    opacity: 1,
})
tl2.to("#scroll-3",{
    bottom:"30vh"
})
tl2.to("#scroll-3",{
    opacity: 0,
})
tl2.to("#scroll-4",{
    delay:0.5,
    opacity: 1,
})
tl2.to("#neopop-fold3",{
    marginLeft:"-100%"
})
