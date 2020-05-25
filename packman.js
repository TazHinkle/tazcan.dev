var sketch = function(p) {
    var cirX = 25;
    var speed = 1;
    function makeBlock(lastPoint) {
        if(cirX + 21 < lastPoint) {
            p.fill(200, 100, 200);
            p.rect(lastPoint, p.height / 2, 10, 8);
        }
    }
    
    p.setup = function(){
        p.createCanvas(400, 400);
        p.background(0);
        p.frameRate(24);
    }
    p.draw = function draw() { 
        if(cirX <= p.width) {
            p.background(0, 0, 0);    
            p.fill(100, 200, 100);
            p.circle(cirX, p.height / 2, 50);
            p.fill(0, 0, 0);
            p.triangle(
                cirX, 
                p.height / 2, 
                cirX + 25, 
                (p.height / 2) + (cirX % 9), 
                cirX + 25, 
                (p.height / 2) - (cirX % 9)
            );
            cirX = cirX + speed;
            makeBlock(80);
            makeBlock(160);
            makeBlock(240);
            makeBlock(320);
        }
        else {
            p.background(0, 0, 0);
            cirX = 25;
        }
    }
};
new window.p5(sketch, 'sketch-holder2');



