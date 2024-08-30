gsap.from(".peace",{
    opacity: 0,
    y: 20,
    
    duration: 2,
    stagger: 0.1,
    delay: (index, total) => index * 0.5,
    ease: "elastic.out(1, 0.3)"
})

gsap.from(".box-mng button",{
    opacity: 0,
    y: 20,
    duration: 2,
    stagger: 0.1,
    delay: (index, total) => index * 0.3,
    ease: "elastic.out(1, 0.3)"
   
})


 