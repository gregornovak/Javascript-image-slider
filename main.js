window.onload = function(){

    var userOptions = {
        numOfSlides: 3
    };

    var slide = {
        nextBtn: document.querySelector("#next"),
        prevBtn: document.querySelector("#previous"),
        slide: document.querySelector("ul"),
        slideCount: 1,
        slideMaxLimit: userOptions.numOfSlides,
        slideLowLimit: 1,
        margin: 0
    };

    var nextSlide = function(){
        if(slide.slideCount < slide.slideMaxLimit) {
            function moveRight(){
                var timeout = requestAnimationFrame(moveRight);
                slide.margin -= 20;
                slide.slide.style.marginLeft = slide.margin + "px";
                if(slide.margin == -1280 || slide.margin == -2560){
                    console.log("je");
                    slide.slideCount++;
                    cancelAnimationFrame(timeout);
                }
                // else if(slide.margin < -2560) {
                //     slide.margin = -2560;
                //     slide.slideCount = 3;
                //     cancelAnimationFrame(timeout);
                // }
            }
            moveRight();

        } else {
            function moveToLeft(){
                var timeout2 = requestAnimationFrame(moveToLeft);
                slide.margin += 80;
                slide.slide.style.marginLeft = slide.margin + "px";
                if(slide.margin == 0) {
                    slide.margin = 0;
                    slide.slideCount = 1;
                    cancelAnimationFrame(timeout2);
                }
            }
            moveToLeft();
        }

    };
    var prevSlide = function(){
        if(slide.slideCount > slide.slideLowLimit) {
            function moveLeft(){
                var timeout3 = requestAnimationFrame(moveLeft);
                slide.margin += 20;
                slide.slide.style.marginLeft = slide.margin + "px";
                if(slide.margin == 0 || slide.margin == -1280){
                    console.log("je");
                    slide.slideCount--;
                    cancelAnimationFrame(timeout3);
                }
                // else if(slide.margin > 0) {
                //     slide.margin = 0;
                //     slide.slideCount = 3;
                //     cancelAnimationFrame(timeout3);
                // }
            }
            moveLeft();

        } else {
            function moveToRight(){
                var timeout4 = requestAnimationFrame(moveToRight);
                slide.margin -= 80;
                slide.slide.style.marginLeft = slide.margin + "px";
                if(slide.margin == -2560){
                    console.log("je");
                    slide.slideCount = 3;
                    cancelAnimationFrame(timeout4);
                }
            }
            moveToRight();
        }

    };

    slide.prevBtn.addEventListener("click", prevSlide);
    slide.nextBtn.addEventListener("click", nextSlide);
};