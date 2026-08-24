// 游戏交互逻辑文件
var timerun = 0.000;
var t;
var fre = 0;
var limit = 50;
var isend = false;
// 游戏的操作主要是依靠键盘的J K L来完成，捕获键盘事件
$(document).keydown(function(event) {
    /* Act on the event */
    switch(event.keyCode){
        case 74: //J
            if (board[3][0] == 1 && fre == 0) {
                //说明第一次敲击正确
                clearText();
                timeRun();
                moveDown();
            }
            else if (board[3][0] == 1 && fre > 0 && fre < limit && !isend) {
                moveDown();              
            }
            else {
                 //说明敲击错误
                setTimeout("isgameover()", 100);
                isend = true;    
            }
            break;

        case 75: //K
            if (board[3][1] == 1 && fre == 0) {
                //说明第一次敲击正确
                clearText();
                timeRun();
                moveDown();
            }
            else if (board[3][1] == 1 && fre > 0 && fre < limit && !isend) {
                moveDown();               
            }
            else {
                 //说明敲击错误
                setTimeout("isgameover()", 100); 
                isend = true;     
            }
            break;

        case 76: //L
            if (board[3][2] == 1 && fre == 0) {
                //说明第一次敲击正确
                clearText();
                timeRun();
                moveDown();
            }
            else if (board[3][2] == 1 && fre > 0 && fre < limit && !isend) {
                moveDown();               
            }
            else {
                 //说明敲击错误
                setTimeout("isgameover()", 100);
                isend = true; 
            }
            break;
    }   
});


function moveDown(){
    for(i=3; i>=0; i--){
        for(j=2; j>=0; j--){
            if(board[i][j] == 1){
                if(i==3){
                    //将当前的黑块的颜色改变成白色
                    $("#block-"+i+"-"+j).css("background-color","#fff");
                    board[i][j] = 0;
                }
                else{
                     //将当前的黑块的颜色改变成白色
                    $("#block-"+i+"-"+j).css("background-color","#fff");
                    board[i][j] = 0;
                    //将当前的黑块下一行同一列的黑块颜色改变成黑色
                    $("#block-"+(i+1)+"-"+j).css("background-color","#000");
                    board[i+1][j] = 1;                   
                }
            }
        }
    }
    //第一行重新随机一个黑块的位置
    var randy = parseInt(Math.floor(Math.random() * 3));
    if(board[1][randy] == 1){
    var randy = parseInt(Math.floor(Math.random() * 3));   
    }
    var block = $("#block-0-"+randy);
    block.css("background-color","#000");
    board[0][randy] = 1;

    fre += 1;
}

function clearText(){
    $("#block-3-0").text("");
    $("#block-3-1").text("");
    $("#block-3-2").text("");
}

function timeRun(){
    timerun += 0.005;
    $("span").text(timerun.toString().substr(0,6));
    //setTimeout(指定调用的函数,毫秒数)和clearTimeout()
    t = setTimeout("timeRun()",1);
}

//用于游戏结束部分
function isgameover(){
    //停止游戏的计时器
    clearTimeout(t);
    //判断：按错还是完成游戏
    if(fre < limit){
     //游戏结束的提示
    $("#box_container").append("<div id='gameover' class='gameover'><h6 id='error' class='point'>游戏失败</h6><p>本次用时</p><span>" + timerun.toString().substr(0,6) + "</span><a href='javascript:restartgame();' id='restartgamebutton'>Restart</a></div>");       
    }else{
        //游戏结束的提示
    $("#box_container").append("<div id='gameover' class='gameover'><h6 id='success' class='point'>恭喜！完成</h6><p>本次用时</p><span>" + timerun.toString().substr(0,6) + "</span><a href='javascript:restartgame();' id='restartgamebutton'>Restart</a></div>");
    }
    var gameover = $("#gameover");
    gameover.css("width", "301px");
    gameover.css("height", "401px");
    gameover.css("background-color", "rgba(0, 0, 0, 0.5)");
}
//重新开始新的游戏
function restartgame(){
    //去掉游戏结束提示的内容
    $("#gameover").remove();
    $(".gameover").remove();
    //将游戏的计时器重新归0
    $("#time_box").html("<span>0.000</span>"+"");
    //将上一次游戏的黑块部分清除
    $(".block").remove();
    //统计游戏键盘敲击次数归0
    fre = 0;
    timerun = 0.000;
     isend = false; 
    //重新初始化游戏
    init();
}

