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

    box.on('mouseover', function() {
      document.body.style.cursor = 'pointer';
    });
    box.on('mouseout', function() {
      document.body.style.cursor = 'default   ';
    });
   }


//-----------------------------------------------------------------------


function addPointV(){
var size = document.getElementById('siz').value;

var layer = new Konva.Layer();


var line = new Konva.Line({
    points: [50, 50, 50, 80+size],
    stroke: 'black',
    strokeWidth: 3,
    lineCap: 'round',
    lineJoin: 'round',
    draggable: true
  });

    
layer.add(line);

stage.add(layer);

box.on('mouseover', function() {
    document.body.style.cursor = 'pointer';
});
box.on('mouseout', function() {
    document.body.style.cursor = 'default   ';
});
}