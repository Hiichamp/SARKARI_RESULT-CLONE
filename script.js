gsap.from(".peace",{
    opacity: 0,
    y: 20,
    
    duration: 2,
    stagger: 0.2,
    delay: (index, total) => index * 0.6,
    ease: "elastic.out(1, 0.3)",
    scrollTrigger:{
        scroll:"body",
        trigger:".footer-container"
    }
})

gsap.from(".box-mng button",{
    opacity: 0,
    y: 20,
    duration: 2,
    stagger: 0.1,
    delay: (index, total) => index * 0.3,
    ease: "elastic.out(1, 0.3)",
 
})


//  gsap.from(".footer-container",{
//     opacity: 0,
//     y: -20,
//     delay:1,
  
//     scrollTrigger:{
//         scroll:"body",
//         trigger:".footer-container"
//     }
 
 