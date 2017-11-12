function runAnimation() {
  var trans3DDemo = $("#trans3DDemo");
  var trans3DBoxes = $("#trans3DBoxes");
  var boxes = $("#trans3DBoxes div");

  threeDTimeline = new TimelineLite();

  //transformPerspective gives the element its own vanishing point
  //perspective allows all the child elements (orange boxes) to share the same vanishing point with each other
  //transformStyle:"preserve3d" allows the child elements to maintain their 3D position (noticeable only when their parent div is rotated in 3D space)
  TweenLite.set(trans3DBoxes, {css:{transformPerspective:400, transformStyle:"preserve-3d"}}); //saves a dozen lines of vendor-prefixed css ;)

  //fade in demo, rotate the div containing all the boxes, and add a label 0.2 seconds after the rotation
  threeDTimeline.fromTo(trans3DDemo, .05, {css:{autoAlpha:0}}, {css:{autoAlpha:1}, immediateRender:true})
            .to(trans3DBoxes, 0.3, {css:{rotationY:30, rotationX:20}})
            .add("z", "+=0.2"); //add label "z" for placement of next group of tweens

  //loop through each element in boxes object and give it a unique and random animation along the z-axis
  boxes.each(function (index, element) {
    threeDTimeline.to(element, 0.2, {css:{z:getRandom(-50, 50)}}, "z"); //place each z-tween of each box at the label "z"
  })

  //rotate the group of boxes around a few more times  
  threeDTimeline.to(trans3DBoxes, 1, {css:{rotationY:180, z:-180}, ease:Power2.easeOut}, "+=0.2")
            .to(trans3DBoxes, 1, {css:{rotationX:180, z:-10}});

  //random explosion effect	  
  boxes.each(function (index, element) {
    threeDTimeline.to(element, 1, {css:{z:200, backgroundColor:Math.random() * 0xffffff, rotationX:getRandom(-360, 600), rotationY:getRandom(-360, -600), autoAlpha:0}}, "explode");
  }) ;

  function getRandom(max, min){
    return Math.floor(Math.random() * (1 + max - min) + min);
  }	
}