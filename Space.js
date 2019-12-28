function addrecta(){

    var text = document.getElementById('Txt').value;
    var layer = new Konva.Layer();
    var rectX = stage.width() / 2 - 50;
    var rectY = stage.height() / 2 - 50;


    var group = new Konva.Group({
      draggable: true
    });

    
      var box = new Konva.Rect({
          x: rectX,
          y: rectY,
          width: 100,
          height: 50,
          fill: '#00D2FF',
          stroke: 'black',
          strokeWidth: 1
      });

      var textp = new Konva.Text({
          x: rectX,
          y: rectY,
          text: text,
          fontSize: 20,
          fontFamily: 'Calibri',
          fill: '#555',
          padding: 18,
          align: 'center'       
      });

    

 
    group.add(box);
    group.add(textp);
      
    layer.add(group);

    stage.add(layer);

    layer.on('mouseover', function() {
      document.body.style.cursor = 'pointer';
    });

    layer.on('dblclick', function(){
      layer.destroy();
    });

    layer.on('mouseout', function() {
      document.body.style.cursor = 'default   ';
    });
   }


//-------------------------------Pointerstraight--------------------------------


function addPointV(){
var size = document.getElementById('siz').value;

var layer = new Konva.Layer();


var line = new Konva.Line({
    points: [100, 80, 100, 80+size/2],
    stroke: 'black',
    strokeWidth: 3,
    lineCap: 'round',
    lineJoin: 'round',
    draggable: true
  });

    
layer.add(line);

stage.add(layer);

layer.on('mouseover', function() {
    document.body.style.cursor = 'pointer';
});
layer.on('mouseout', function() {
    document.body.style.cursor = 'default   ';
});
}


//-----------------------------------Start/End-----------------------------


function addStart(text, clr){


var layer = new Konva.Layer();

var group = new Konva.Group({
    draggable: true
  });

var oval = new Konva.Ellipse({
    x: stage.width() / 2,
    y: 100,
    radiusX: 50,
    radiusY: 25,
    fill: clr,
    stroke: 'black',
    strokeWidth: 2
  });

var textp = new Konva.Text({
    x: 920,
    y: 75,
    text: text,
    fontSize: 20,
    fontFamily: 'Calibri',
    fill: '#black',
    padding: 18,
    align: 'center'       
});

group.add(oval);
group.add(textp);
    
layer.add(group);

stage.add(layer); 


layer.on('mouseover', function() {
    document.body.style.cursor = 'pointer';
});
layer.on('mouseout', function() {
    document.body.style.cursor = 'default   ';
});
}


//-----------------------------------Connector-----------------------------


function addCnct(){
    
    
    var layer = new Konva.Layer();
    
    
    var circle = new Konva.Circle({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: 15,
        fill: 'darkgrey',
        stroke: 'black',
        strokeWidth:1,  
        draggable: true
    });
    
        
    layer.add(circle);
    
    stage.add(layer);
    
    line.on('mouseover', function() {
        document.body.style.cursor = 'pointer';
    });

    

    line.on('mouseout', function() {
        document.body.style.cursor = 'default   ';
    });
    }