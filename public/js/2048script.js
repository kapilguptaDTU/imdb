var sc=document.querySelector('.score');
var hsc=document.querySelector('.highscore');
var el=document.querySelector('.container');
var score = 0;
var arrScore= new Array();

var boxer = document.querySelectorAll('.box');
var highscore = localStorage.getItem("highscore");
var box = [],
    cols = 3;
for (let i = 0; i <= cols; i++) {
    box[i] = [];
}
var r = 0;
for (let t = 0; t <= cols; t++) {
    for (let l = 0; l <= cols; l++) {
        box[t][l] = boxer[r];
        box[t][l].innerHTML = null;
        r++;
    }
}
// var el = document.getElementById('someel')
// swipedetect(el, function(swipedir){
//     //swipedir contains either "none", "left", "right", "top", or "down"
//     if (swipedir =='left')
//         alert('You just swiped left!')
// })



var x = Math.floor(Math.random() * 4);
var y = Math.floor(Math.random() * 4);

var notRandomNumbers = [2, 2, 2, 2, 2, 2, 2, 4, 4, 4];
var idx = Math.floor(Math.random() * notRandomNumbers.length);
var z = notRandomNumbers[idx];

if (!box[x][y].innerHTML) {
    console.log("abcdasdaasdsada");
    box[x][y].innerHTML = z;
    
}
//
//box[0][0].innerHTML = 2;
//box[0][1].innerHTML = 2;
//box[0][2].innerHTML = 4;
//box[3][0].innerHTML = 2;
//
//box[3][1].innerHTML = 2;
//box[3][2].innerHTML = 2;
//box[3][3].innerHTML = 2;

// var el = document.getElementById('idd');
// swipedetect(score, function(swipedir){
//   // swipedir contains either "none", "left", "right", "top", or "down"
    
// //     if (swipedir =='left'){


// //         for (let i = 3; i >= 0; i--) {
// //             for (let j = 3; j >= 0; j--) {
// //                 for (let k = 0; k <= 3; k++) {
                    
// //                     if ((j - k - 1) < 0) {
// //                         break;
// //                     }
// //                       if(!box[i][j].innerHTML && box[i][j-k-1].innerHTML)
// //                     {
// //                         box[i][j].innerHTML=box[i][j-k-1].innerHTML;
// //                         box[i][j-k-1].innerHTML=null;
                        
// //                     }
                    
// //                     if(box[i][j].innerHTML)
// //                         {
// //                     if(box[i][j-k-1].innerHTML && box[i][j-k-1].innerHTML!=box[i][j].innerHTML){break;}
// //                             if (box[i][j].innerHTML == box[i][j - k - 1].innerHTML) 
// //                     {
// //                         box[i][j].innerHTML *= 2;

// //                         score += '+' +box[i][j].innerHTML;
// //                         box[i][j - k - 1].innerHTML = null;
                        
// //                         if (box[i][j].innerHTML == 0) 
// //                         {
// //                             box[i][j].innerHTML = null;
// //                         }
// //                         break;
                        
// //                         }}
                  
                    
// //                 }

// //             }
// //         };
        
// //         for (let ia=0; ia<16;ia++){
// //         var xa = Math.floor(Math.random() * 4);
// //         var ya = Math.floor(Math.random() * 4);
// // if (box[xa][ya].innerHTML) {continue;}
// //         var anotRandomNumbers = [2, 2, 2, 2, 2, 2, 2, 4, 4, 4];
// //         var aidx = Math.floor(Math.random() * anotRandomNumbers.length);
// //         var za = anotRandomNumbers[aidx];

// //         if (!box[xa][ya].innerHTML) {
// //             box[xa][ya].innerHTML = za;
// //             break;
// //         }
        
// //         }
        
        
        
        
        
// //         for (let i = 0; i <= 3; i++) {
// //             for (let j = 0; j <=3; j++) {
// //               if(box[i][j].innerHTML==2){box[i][j].style.backgroundColor="#8180d8";} 
// //                 if(box[i][j].innerHTML==4){box[i][j].style.backgroundColor="#a360d7";} 
// //                 if(box[i][j].innerHTML==8){box[i][j].style.backgroundColor="#2669dd";} 
// //                 if(box[i][j].innerHTML==16){box[i][j].style.backgroundColor="#38b9d6";} 
// //                 if(box[i][j].innerHTML==32){box[i][j].style.backgroundColor="#57cb9b";} 
// //                 if(box[i][j].innerHTML==64){box[i][j].style.backgroundColor="#66d02b";} 
// //                 if(box[i][j].innerHTML==128){box[i][j].style.backgroundColor="#f7c135";} 
// //                 if(box[i][j].innerHTML==256){box[i][j].style.backgroundColor="#f5812b";} 
// //                 if(box[i][j].innerHTML==512){box[i][j].style.backgroundColor="#f3513c";} 
// //                 if(box[i][j].innerHTML==1024){box[i][j].style.backgroundColor="#f15591";} 
// //                 if(box[i][j].innerHTML==2048){box[i][j].style.backgroundColor="#f3453b";} 
// //                 if(box[i][j].innerHTML==4046){box[i][j].style.backgroundColor="#f3453b";} 
// //                                 if(box[i][j].innerHTML>4046){box[i][j].style.backgroundColor="black";}

// //                 if(!box[i][j].innerHTML){box[i][j].style.backgroundColor="#312c4f";} 
// //             }}
    
// //     }
//     if (swipedir =='left'){
//         box[1][2].innerHTML=2000;
//     }
//     if (swipedir =='down'){
//         box[1][2].innerHTML=2000;
//     }
//     if (swipedir =='top'){
//         box[1][2].innerHTML=2000;
//     }
//     if (swipedir =='right'){
//         box[1][2].innerHTML=2000;
//     }
    
// })

window.addEventListener('keypress', function () {
     
    
        
    
    
//    box[1][2].style.backgroundColor="red";
    if (event.key == 'd') {

        for (let i = 3; i >= 0; i--) {
            for (let j = 3; j >= 0; j--) {
                for (let k = 0; k <= 3; k++) {
                    
                    if ((j - k - 1) < 0) {
                        break;
                    }
                      if(!box[i][j].innerHTML && box[i][j-k-1].innerHTML)
                    {
                        box[i][j].innerHTML=box[i][j-k-1].innerHTML;
                        box[i][j-k-1].innerHTML=null;
                        
                    }
                    
                    if(box[i][j].innerHTML)
                        {
                    if(box[i][j-k-1].innerHTML && box[i][j-k-1].innerHTML!=box[i][j].innerHTML){break;}
                            if (box[i][j].innerHTML == box[i][j - k - 1].innerHTML) 
                    {
                        box[i][j].innerHTML *= 2;

                        score += '+' +box[i][j].innerHTML;
                        box[i][j - k - 1].innerHTML = null;
                        
                        if (box[i][j].innerHTML == 0) 
                        {
                            box[i][j].innerHTML = null;
                        }
                        break;
                        
                        }}
                  
                    
                }

            }
        };
        
        for (let ia=0; ia<16;ia++){
        var xa = Math.floor(Math.random() * 4);
        var ya = Math.floor(Math.random() * 4);
if (box[xa][ya].innerHTML) {continue;}
        var anotRandomNumbers = [2, 2, 2, 2, 2, 2, 2, 4, 4, 4];
        var aidx = Math.floor(Math.random() * anotRandomNumbers.length);
        var za = anotRandomNumbers[aidx];

        if (!box[xa][ya].innerHTML) {
            box[xa][ya].innerHTML = za;
            break;
        }
        
        }
        
        
        
        
        
        for (let i = 0; i <= 3; i++) {
            for (let j = 0; j <=3; j++) {
              if(box[i][j].innerHTML==2){box[i][j].style.backgroundColor="#8180d8";} 
                if(box[i][j].innerHTML==4){box[i][j].style.backgroundColor="#a360d7";} 
                if(box[i][j].innerHTML==8){box[i][j].style.backgroundColor="#2669dd";} 
                if(box[i][j].innerHTML==16){box[i][j].style.backgroundColor="#38b9d6";} 
                if(box[i][j].innerHTML==32){box[i][j].style.backgroundColor="#57cb9b";} 
                if(box[i][j].innerHTML==64){box[i][j].style.backgroundColor="#66d02b";} 
                if(box[i][j].innerHTML==128){box[i][j].style.backgroundColor="#f7c135";} 
                if(box[i][j].innerHTML==256){box[i][j].style.backgroundColor="#f5812b";} 
                if(box[i][j].innerHTML==512){box[i][j].style.backgroundColor="#f3513c";} 
                if(box[i][j].innerHTML==1024){box[i][j].style.backgroundColor="#f15591";} 
                if(box[i][j].innerHTML==2048){box[i][j].style.backgroundColor="#f3453b";} 
                if(box[i][j].innerHTML==4046){box[i][j].style.backgroundColor="#f3453b";} 
                                if(box[i][j].innerHTML>4046){box[i][j].style.backgroundColor="black";}

                if(!box[i][j].innerHTML){box[i][j].style.backgroundColor="#312c4f";} 
            }}
    
    }
    
    if (event.key == 'a') {
// box[3][3].innerHTML=2000;
        for (let i = 0; i <= 3; i++) {
            for (let j = 0; j <=3; j++) {
                for (let k = 0; k <= 3; k++) {
                    
                    if ((j + k + 1) > 3 || (j + k + 1) <0) {
                        break;
                    }
                      if(!box[i][j].innerHTML && box[i][j+k+1].innerHTML)
                    {
                        box[i][j].innerHTML=box[i][j+k+1].innerHTML;
                        box[i][j+k+1].innerHTML=null;
                        
                    }
                    
                    if(box[i][j].innerHTML)
                        {
                    if(box[i][j+k+1].innerHTML && box[i][j+k+1].innerHTML!=box[i][j].innerHTML){break;}
                            if (box[i][j].innerHTML == box[i][j + k + 1].innerHTML) 
                    {
                        box[i][j].innerHTML *= 2;

                        score += '+' +box[i][j].innerHTML;
                        box[i][j + k + 1].innerHTML = null;
                        if (box[i][j].innerHTML == 0) 
                        {
                            box[i][j].innerHTML = null;
                        }
                        
                        break;
                        
                        }}
                  
                    
                }

            }
        };
        
        
         for (let ia=0; ia<16;ia++){
        var xa = Math.floor(Math.random() * 4);
        var ya = Math.floor(Math.random() * 4);
       if (box[xa][ya].innerHTML) {continue;}
        var anotRandomNumbers = [2, 2, 2, 2, 2, 2, 2, 4, 4, 4];
        var aidx = Math.floor(Math.random() * anotRandomNumbers.length);
        var za = anotRandomNumbers[aidx];

        if (!box[xa][ya].innerHTML) {
            box[xa][ya].innerHTML = za;
            break;
        }}
        for (let i = 0; i <= 3; i++) {
            for (let j = 0; j <=3; j++) {
              if(box[i][j].innerHTML==2){box[i][j].style.backgroundColor="#8180d8";} 
                if(box[i][j].innerHTML==4){box[i][j].style.backgroundColor="#a360d7";} 
                if(box[i][j].innerHTML==8){box[i][j].style.backgroundColor="#2669dd";} 
                if(box[i][j].innerHTML==16){box[i][j].style.backgroundColor="#38b9d6";} 
                if(box[i][j].innerHTML==32){box[i][j].style.backgroundColor="#57cb9b";} 
                if(box[i][j].innerHTML==64){box[i][j].style.backgroundColor="#66d02b";} 
                if(box[i][j].innerHTML==128){box[i][j].style.backgroundColor="#f7c135";} 
                if(box[i][j].innerHTML==256){box[i][j].style.backgroundColor="#f5812b";} 
                if(box[i][j].innerHTML==512){box[i][j].style.backgroundColor="#f3513c";} 
                if(box[i][j].innerHTML==1024){box[i][j].style.backgroundColor="#f15591";} 
                if(box[i][j].innerHTML==2048){box[i][j].style.backgroundColor="#f3453b";} 
                if(box[i][j].innerHTML==4046){box[i][j].style.backgroundColor="#f3453b";} 
                                if(box[i][j].innerHTML>4046){box[i][j].style.backgroundColor="black";}

                
                if(!box[i][j].innerHTML){box[i][j].style.backgroundColor="#312c4f";} 
            }}
    }
    
    
    if (event.key == 's') {

        for (let i = 3; i >= 0; i--) {
            for (let j = 3; j >= 0; j--) {
                for (let k = 0; k <= 3; k++) {
                    
                    if ((j - k - 1) < 0) {
                        break;
                    }
                      if(!box[j][i].innerHTML && box[j-k-1][i].innerHTML)
                    {
                        box[j][i].innerHTML=box[j-k-1][i].innerHTML;
                        box[j-k-1][i].innerHTML=null;
                        
                    }
                    
                    if(box[j][i].innerHTML)
                        {
                    if(box[j-k-1][i].innerHTML && box[j-k-1][i].innerHTML!=box[j][i].innerHTML){break;}
                            if (box[j][i].innerHTML == box[j-k-1][i].innerHTML) 
                    {
                        box[j][i].innerHTML *= 2;

                        score +='+' + box[j][i].innerHTML;
                        box[j-k-1][i].innerHTML= null;
                        if (box[j][i].innerHTML == 0) 
                        {
                            box[j][i].innerHTML = null;
                        }
                        break;
                        
                        
                        }}
                  
                    
                }

            }
        };
         for (let ia=0; ia<16;ia++){
        var xa = Math.floor(Math.random() * 4);
        var ya = Math.floor(Math.random() * 4);
      if (box[xa][ya].innerHTML) {continue;}
        var anotRandomNumbers = [2, 2, 2, 2, 2, 2, 2, 4, 4, 4];
        var aidx = Math.floor(Math.random() * anotRandomNumbers.length);
        var za = anotRandomNumbers[aidx];

        if (!box[xa][ya].innerHTML) {
            box[xa][ya].innerHTML = za;
            break;
        }}
        for (let i = 0; i <= 3; i++) {
            for (let j = 0; j <=3; j++) {
              if(box[i][j].innerHTML==2){box[i][j].style.backgroundColor="#8180d8";} 
                if(box[i][j].innerHTML==4){box[i][j].style.backgroundColor="#a360d7";} 
                if(box[i][j].innerHTML==8){box[i][j].style.backgroundColor="#2669dd";} 
                if(box[i][j].innerHTML==16){box[i][j].style.backgroundColor="#38b9d6";} 
                if(box[i][j].innerHTML==32){box[i][j].style.backgroundColor="#57cb9b";} 
                if(box[i][j].innerHTML==64){box[i][j].style.backgroundColor="#66d02b";} 
                if(box[i][j].innerHTML==128){box[i][j].style.backgroundColor="#f7c135";} 
                if(box[i][j].innerHTML==256){box[i][j].style.backgroundColor="#f5812b";} 
                if(box[i][j].innerHTML==512){box[i][j].style.backgroundColor="#f3513c";} 
                if(box[i][j].innerHTML==1024){box[i][j].style.backgroundColor="#f15591";} 
                if(box[i][j].innerHTML==2048){box[i][j].style.backgroundColor="#f3453b";} 
                if(box[i][j].innerHTML==4046){box[i][j].style.backgroundColor="#f3453b";} 
                                if(box[i][j].innerHTML>4046){box[i][j].style.backgroundColor="black";}

                if(!box[i][j].innerHTML){box[i][j].style.backgroundColor="#312c4f";} 
            }}
    }
    
    
    if (event.key == 'w') {

        for (let i = 0; i <= 3; i++) {
            for (let j = 0; j <= 3; j++) {
                for (let k = 0; k <= 3; k++) {
                    
                    if ((j + k + 1) < 0 || (j + k + 1) >3 ) {
                        break;
                    }
                      if(!box[j][i].innerHTML && box[j+k+1][i].innerHTML)
                    {
                        box[j][i].innerHTML=box[j + k + 1][i].innerHTML;
                        box[j + k + 1][i].innerHTML=null;
                        
                    }
                    
                    if(box[j][i].innerHTML)
                        {
                    if(box[j + k + 1][i].innerHTML && box[j + k + 1][i].innerHTML!=box[j][i].innerHTML){break;}
                            if (box[j][i].innerHTML == box[j + k + 1][i].innerHTML) 
                    {
                        box[j][i].innerHTML *= 2;

                        score +='+' + box[j][i].innerHTML;
                        box[j + k + 1][i].innerHTML= null;
                        if (box[j][i].innerHTML == 0) 
                        {
                            box[j][i].innerHTML = null;
                        }
                        break;
                        
                        
                        }}
                  
                    
                }

            }
        };
         for (let ia=0; ia<16;ia++){
        var xa = Math.floor(Math.random() * 4);
        var ya = Math.floor(Math.random() * 4);
if (box[xa][ya].innerHTML) {continue;}
        var anotRandomNumbers = [2, 2, 2, 2, 2, 2, 2, 4, 4, 4];
        var aidx = Math.floor(Math.random() * anotRandomNumbers.length);
        var za = anotRandomNumbers[aidx];

        if (!box[xa][ya].innerHTML) {
            box[xa][ya].innerHTML = za;
            break;
        }}
        for (let i = 0; i <= 3; i++) {
            for (let j = 0; j <=3; j++) {
              if(box[i][j].innerHTML==2){box[i][j].style.backgroundColor="#8180d8";} 
                if(box[i][j].innerHTML==4){box[i][j].style.backgroundColor="#a360d7";} 
                if(box[i][j].innerHTML==8){box[i][j].style.backgroundColor="#2669dd";} 
                if(box[i][j].innerHTML==16){box[i][j].style.backgroundColor="#38b9d6";} 
                if(box[i][j].innerHTML==32){box[i][j].style.backgroundColor="#57cb9b";} 
                if(box[i][j].innerHTML==64){box[i][j].style.backgroundColor="#66d02b";} 
                if(box[i][j].innerHTML==128){box[i][j].style.backgroundColor="#f7c135";} 
                if(box[i][j].innerHTML==256){box[i][j].style.backgroundColor="#f5812b";} 
                if(box[i][j].innerHTML==512){box[i][j].style.backgroundColor="#f3513c";} 
                if(box[i][j].innerHTML==1024){box[i][j].style.backgroundColor="#f15591";} 
                if(box[i][j].innerHTML==2048){box[i][j].style.backgroundColor="#f3453b";} 
                if(box[i][j].innerHTML==4046){box[i][j].style.backgroundColor="#f3453b";}
                if(box[i][j].innerHTML>4046){box[i][j].style.backgroundColor="black";}
                
                if(!box[i][j].innerHTML){box[i][j].style.backgroundColor="#312c4f";} 
            }}
        
    }
   sc.innerHTML='SCORE='+eval(score);
    localStorage.setItem("highscore", score);      
//    console.log(eval(score));
    console.log(eval(localStorage.getItem("highscore")));
  
    if(eval(score)>eval(localStorage.getItem("highscore"))){
        console.log("kapil");
        
  hsc.innerHTML='HIGHSCORE='+eval(localStorage.getItem("highscore"));
    }
    
//    console.log(eval(score));
    
    
    
    
    
    
})
function swipedetect(el, callback){
  
    var touchsurface = el,
    swipedir,
    startX,
    startY,
    distX,
    distY,
    threshold = 150, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 300, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handleswipe = callback || function(swipedir){}
  
    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0],
        swipedir = 'none',
        dist = 0,
        startX = touchobj.pageX,
        startY = touchobj.pageY,
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)
  
    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)
  
    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            }
        }
        handleswipe(swipedir)
        e.preventDefault()
    }, false)
}

//var highscore = localStorage.getItem("highscore");

if(highscore !== null){
    if (score > highscore) {
        localStorage.setItem("highscore", score);      
    }
}
else{
    localStorage.setItem("highscore", score);
}

console.log(eval(localStorage.getItem("highscore")));

  hsc.innerHTML='PREV. SCORE='+eval(localStorage.getItem("highscore"));