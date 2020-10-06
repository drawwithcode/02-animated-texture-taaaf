//let xoff = 0;
//let rand = 0;


let l = 30;

let colors = ["#f9d5e5","#eeac99","#e06377","#c83349"];



function setup() {
  createCanvas(windowWidth, windowHeight)
  // put setup code here
//  background("#43c4ad");


angleMode(DEGREES);


}



function draw() {
  // put drawing code here

let b = noise(frameCount/50)*255;




background(20,b,200);





  for ( let i = 0; i < height ; i += l+5 ){


    for( let j = 0; j < width; j += l+5 ){


      noStroke();

      let c = color(random(colors));

      fill(c);



      push();

      translate(j, i);

      if(noise(frameCount/50+10000)<0.3){


        fill(random(0,100),random(0,255),random(0,100));

      }


      if(noise(frameCount/50+10000)>0.7){

          fill(random(0,100),random(0,255),random(0,100));


      }


      if(sin(frameCount)<0){

        scale(sin(frameCount)*-1);

      } else {

        scale(sin(frameCount));

      }

      rect(0, 0, l, l);

      pop();




    }




  }









}



/*



rand = random(0,255);


background(rand,rand,rand);


//stroke(random(0,255),random(0,255),random(0,255),100);

stroke("blue");
fill("blue");

for (let j = 0; j<10; j++){

xoff = random(0, 10000);

    for (let i = 0; i < width; i+=0.5) {


        let n = noise(xoff)*height*1.5;

        xoff += 0.0008;

        ellipse(i, n-150, 1);


      }



}



/*
if(frameCount== 100){

  noLoop();

}

*/
