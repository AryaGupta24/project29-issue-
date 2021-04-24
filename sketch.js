const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;
var base1, base2;
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block01, block02, block03;
function setup(){
    var canvas = createCanvas(1366, 657);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(684, 640, 1366, 20);
    //base
    base1 = new Ground(768, 500, 250, 10);
    base2 = new Ground(984, 200, 300, 10);
    //level four
    block1 = new box(680, 467, 30, 40);
    block2 = new box1(710, 467, 30, 40);
    block3 = new box2(740, 467, 30, 40);
    block4 = new box5(770, 467, 30, 40);
    block5 = new box4(800, 467, 30, 40);
    block6 = new box3(830, 467, 30, 40);
    block7 = new box6(860, 467, 30, 40);
    //level three
    block8 = new box2(710, 423, 30, 40);
    block9 = new box(740, 423, 30, 40);
    block01 = new box3(770, 423, 30, 40);
    block02 = new box1(800, 423, 30, 40);
    block03 = new box6(830, 423, 30, 40);
    //level two
    block04 = new box4(740, 380,30, 40);
    block05 = new box1(770, 380,30, 40);
    block06 = new box5(800, 380,30, 40);
    //level one
    block07 = new box(770, 335, 30, 40)

    //level three
    block08 = new box2(910, 123, 30, 40);
    block09 = new box(940, 123, 30, 40);
    block001 = new box3(970, 123, 30, 40);
    block002 = new box1(1000, 123, 30, 40);
    block003 = new box6(1030, 123, 30, 40);
    //level two
    block004 = new box4(940, 80,30, 40);
    block005 = new box1(970, 80,30, 40);
    block006 = new box5(1000,80,30, 40);
    //level one
    block007 = new box(970, 35, 30, 40);
    
    polygon = Bodies.circle(50, 200,20);
    World.add(world, polygon);
    sling  = new slingshot(this.polygon, {x:100, y:200});
}

function draw(){
    background(0);
    Engine.update(engine);
    ground1.display();
    base1.display();
    base2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block01.display();
    block02.display();
    block03.display();
    block04.display();
    block05.display();
    block06.display();
    block07.display();
    block08.display();
    block09.display();
    block001.display();
    block002.display();
    block003.display();
    block004.display();
    block005.display();
    block006.display();
    block007.display();
}