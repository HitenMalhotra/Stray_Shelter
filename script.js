
let jtc = $("#join");
let signForm = $("#sign");
console.log(signForm)

signForm.hover(function(){
    setInterval(function(){
        jtc.fadeToggle();
    }, 700);
});

let cd1 = $("#card1");
let icon1 = $("#symbol1");

cd1.hover(function(){
    console.log("icon");
    icon1.animate({height: '100px', opacity: '0.4'}, "slow");
    icon1.animate({height: '70px', opacity: '1'}, "slow");
});

let cd2= $("#card2");
let icon2 = $("#symbol2");

cd2.hover(function(){
    console.log("icon");
    icon2.animate({height: '100px', opacity: '0.4'}, "slow");
    icon2.animate({height: '70px', opacity: '1'}, "slow");
});

let cd3 = $("#card3");
let icon3 = $("#symbol3");
cd3.hover(function(){
    console.log("icon");
    icon3.animate({height: '100px', opacity: '0.4'}, "slow");
    icon3.animate({height: '70px', opacity: '1'}, "slow");
});


//blog/stories

let story1 = $("#Story1");
// story1.html("Story");
// console.log(story1);
// animate({height: '300px'}, slow);

setInterval(function(){story1.fadeToggle()}, 500);
let Mem=$("#Mem");
let stats=$("#Stat");
let start=0;
let end=421;

let counts = setInterval(updated1, 1);
let start2=0;
let end2=392;        
let count2 = setInterval(updated2, 1);
        
function updated1() {
           // let count = document.getElementById("counter");
            Mem.text(start);
            if (start === end) {
                clearInterval(counts);
            }
            start++;
           
}

       
function updated2() {
    // let count = document.getElementById("counter");
     stats.text(start2);  
     if (start2 === end2) {
         clearInterval(count2);
     }
     start2++;
}

let fl=$(".flash");
setInterval(function(){
    fl.fadeToggle();
}, 500);








