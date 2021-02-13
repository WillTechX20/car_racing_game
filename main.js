var gameManager={
    moveCarIfConditionsMet: function(carColorStr, dirStr){
        if(carColorStr=='red'&&dirStr=='up'&&this.redCarImgManager.redCarImgYNum>0){
            this.redCarImgManager.redCarImgYNum=this.redCarImgManager.redCarImgYNum-10;
            this.carRacingGameCanvasManager.carRacingGameCanvasCTX2D.clearRect(0, 0, 800, 600);
            this.setUpCarRacingGameCanvas();
        }else if(carColorStr=='red'&&dirStr=='down'&&this.redCarImgManager.redCarImgYNum<500){
            this.redCarImgManager.redCarImgYNum=this.redCarImgManager.redCarImgYNum+10;
            this.carRacingGameCanvasManager.carRacingGameCanvasCTX2D.clearRect(0, 0, 800, 600);
            this.setUpCarRacingGameCanvas();
        }else if(carColorStr=='red'&&dirStr=='left'&&this.redCarImgManager.redCarImgXNum>0){
            this.redCarImgManager.redCarImgXNum=this.redCarImgManager.redCarImgXNum-10;
            this.carRacingGameCanvasManager.carRacingGameCanvasCTX2D.clearRect(0, 0, 800, 600);
            this.setUpCarRacingGameCanvas();
        }else if(carColorStr=='red'&&dirStr=='right'&&this.redCarImgManager.redCarImgXNum<700){
            this.redCarImgManager.redCarImgXNum=this.redCarImgManager.redCarImgXNum+10;
            this.carRacingGameCanvasManager.carRacingGameCanvasCTX2D.clearRect(0, 0, 800, 600);
            this.setUpCarRacingGameCanvas();
        }else if(carColorStr=='white'&&dirStr=='up'&&this.whiteCarImgManager.whiteCarImgYNum>0){
            this.whiteCarImgManager.whiteCarImgYNum=this.whiteCarImgManager.whiteCarImgYNum-10;
            this.carRacingGameCanvasManager.carRacingGameCanvasCTX2D.clearRect(0, 0, 800, 600);
            this.setUpCarRacingGameCanvas();
        }else if(carColorStr=='white'&&dirStr=='down'&&this.whiteCarImgManager.whiteCarImgYNum<500){
            this.whiteCarImgManager.whiteCarImgYNum=this.whiteCarImgManager.whiteCarImgYNum+10;
            this.carRacingGameCanvasManager.carRacingGameCanvasCTX2D.clearRect(0, 0, 800, 600);
            this.setUpCarRacingGameCanvas();
        }else if(carColorStr=='white'&&dirStr=='left'&&this.whiteCarImgManager.whiteCarImgXNum>0){
            this.whiteCarImgManager.whiteCarImgXNum=this.whiteCarImgManager.whiteCarImgXNum-10;
            this.carRacingGameCanvasManager.carRacingGameCanvasCTX2D.clearRect(0, 0, 800, 600);
            this.setUpCarRacingGameCanvas();
        }else if(carColorStr=='white'&&dirStr=='right'&&this.whiteCarImgManager.whiteCarImgXNum<700){
            this.whiteCarImgManager.whiteCarImgXNum=this.whiteCarImgManager.whiteCarImgXNum+10;
            this.carRacingGameCanvasManager.carRacingGameCanvasCTX2D.clearRect(0, 0, 800, 600);
            this.setUpCarRacingGameCanvas();
        }
    },
    checkKey: function(eventVar){
        if(eventVar.key=='ArrowUp'){
            window.gameManager.moveCarIfConditionsMet('red', 'up');
        }else if(eventVar.key=='ArrowDown'){
            window.gameManager.moveCarIfConditionsMet('red', 'down');
        }else if(eventVar.key=='ArrowLeft'){
            window.gameManager.moveCarIfConditionsMet('red', 'left');
        }else if(eventVar.key=='ArrowRight'){
            window.gameManager.moveCarIfConditionsMet('red', 'right');
        }else if(eventVar.key=='w'){
            window.gameManager.moveCarIfConditionsMet('white', 'up');
        }else if(eventVar.key=='s'){
            window.gameManager.moveCarIfConditionsMet('white', 'down');
        }else if(eventVar.key=='a'){
            window.gameManager.moveCarIfConditionsMet('white', 'left');
        }else if(eventVar.key=='d'){
            window.gameManager.moveCarIfConditionsMet('white', 'right');
        }
    },
    carRacingGameCanvasManager: {
        carRacingGameCanvas: document.querySelector('canvas'),
        carRacingGameCanvasCTX2D: document.querySelector('canvas').getContext('2d')
    },
    setUpCarRacingGameCanvas: function(){
        if(this.redCarImgManager.redCarImg==null){
            this.redCarImgManager.redCarImg=new Image(100, 100);
            this.whiteCarImgManager.whiteCarImg=new Image(100, 100);
            this.redCarImgManager.redCarImg.src='images/red_car.png';
            this.whiteCarImgManager.whiteCarImg.src='images/white_car.png';
            this.redCarImgManager.redCarImg.onload=this.redCarImgManager.uploadRedCarImg;
            this.whiteCarImgManager.whiteCarImg.onload=this.whiteCarImgManager.uploadWhiteCarImg;
            addEventListener('keydown', this.checkKey);
        }else{
            this.redCarImgManager.uploadRedCarImg();
            this.whiteCarImgManager.uploadWhiteCarImg();
        }
    },
    redCarImgManager: {
        redCarImg: null,
        redCarImgXNum: 10,
        redCarImgYNum: 10,
        uploadRedCarImg: function(){
            window.gameManager.carRacingGameCanvasManager.carRacingGameCanvasCTX2D.drawImage(window.gameManager.redCarImgManager.redCarImg, window.gameManager.redCarImgManager.redCarImgXNum, window.gameManager.redCarImgManager.redCarImgYNum, 100, 100);
        }
    },
    whiteCarImgManager: {
        whiteCarImg: null,
        whiteCarImgXNum: 10,
        whiteCarImgYNum: 120,
        uploadWhiteCarImg: function(){
            window.gameManager.carRacingGameCanvasManager.carRacingGameCanvasCTX2D.drawImage(window.gameManager.whiteCarImgManager.whiteCarImg, window.gameManager.whiteCarImgManager.whiteCarImgXNum, window.gameManager.whiteCarImgManager.whiteCarImgYNum, 100, 100);
        }
    }
}