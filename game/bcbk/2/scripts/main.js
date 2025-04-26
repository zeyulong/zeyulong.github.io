
 $(document).ready(function(){
 	init();
 });

 var board = new Array();
 function init(){
 	for(var i=0; i<4; i++){
        board[i] = new Array();
 		for(var j=0;j<3;j++){
 			//12个白块布局
 			var grid = $("#grid-"+i+"-"+j);
 			grid.css("top",getPosTop(i,j));
 			grid.css("left",getPosLeft(i,j));

 			//12个黑块布局
 			$("#box_container").append("<div class='block' id='block-"+i+"-"+j+"'></div>");
            var block = $("#block-"+i+"-"+j);
            block.css("top",getPosTop(i,j));
            block.css("left",getPosLeft(i,j));

            //将12个黑块赋值为0
            board[i][j] = 0;
 		}
 	}
    //每行随机生成一个黑块
    for(var i=0; i<4; i++){
         var randy = parseInt(Math.floor(Math.random() * 3));
         if(i>0 && board[i-1][randy]==1){
         var randy = parseInt(Math.floor(Math.random() * 3));            
         }

         var block = $("#block-"+i+"-"+randy);
         block.css("background-color","#000");
         board[i][randy] = 1;
    }
    $("#block-3-0").text('按J开始');
    $("#block-3-1").text('按K开始');
    $("#block-3-2").text('按L开始');
 }

 function getPosTop(i,j){
 	return i*100;
 }
 function getPosLeft(i,j){
 	return j*100;
 }