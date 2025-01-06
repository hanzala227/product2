let mm2=gsap.matchMedia()

mm2.add("(min-width:800px)",()=>{
    gsap.to(".product h4",{
        fontSize:"6rem",
        opacity:.9,
        scrollTrigger:{
            trigger:".product",
            start:"top 0%",
            end:"top -100%",
            
            scrub:true
        }
        
        })
        gsap.to(".product",{
        backgroundColor:"black",
        scrollTrigger:{
            trigger:".gallery",
            start:"top 85%",
            end:"top -10%",
          
            scrub:true
        }
        
        })
})



var mm= gsap.matchMedia()

mm.add("(max-width:800px)",()=>{
    gsap.to(".product h4",{
        fontSize:"3rem",
        opacity:.7,
        scrollTrigger:{
            trigger:".product",
            start:"top 0%",
            end:"top -100%",
            
            scrub:true
        }
        
        })
        gsap.to(".product",{
        backgroundColor:"black",
        scrollTrigger:{
            trigger:".gallery",
            start:"top 85%",
            end:"top -10%",
          
            scrub:true
        }
        
        })
})