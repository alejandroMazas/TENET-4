const gameLauncher= {
    name: 'Tenet',
    description: 'Intento de Tenet',
    authors: ['Miguel Delgado', 'Alejandro Mazas de Lizana', 'Cristian Calderón'],
    license: undefined,
    canvasNode: undefined,
    ctx: undefined,
    gameSize: {w:undefined,h:undefined},
    hero1: undefined,
    platforms: [],
    FPS:60,
    timerIndex:0,
    bullets:[],
    init(canvasID){
        this.canvasNode=document.querySelector(`#${canvasID}`)
        this.ctx=this.canvasNode.getContext('2d')
        this.setDimensions()
        this.createHero()
        this.createPlatform()
        //this.collisions()
        this.setEventListeners()
        this.startGame()
        
    },

    setDimensions(){
        this.gameSize={
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.canvasNode.setAttribute('width', this.gameSize.w)
        this.canvasNode.setAttribute('height', this.gameSize.h)
    },
    drawRectangle(){
        this.ctx.fillStyle='green'
        this.ctx.fillRect(0,0,this.gameSize.w,this.gameSize.h)
    },
//------------------------------------------------------------------------------------------------------POSX POSY WIDTH HEIGHT------------------------------------------------------------------
    createPlatform(){
        this.platforms.push(
            // PLATAFORMA 3 : 0
            new Platform(this.ctx,this.gameSize.w, this.gameSize.h, this.gameSize.w/3, this.gameSize.h/4 - this.gameSize.h/20,2*this.gameSize.w/3,35),
            // PLATAFORMA 2 : 1
            new Platform(this.ctx,this.gameSize.w, this.gameSize.h, 0, 2*this.gameSize.h/4 - this.gameSize.h/20,2*this.gameSize.w/3,35),
            // PLATAFORMA 1 : 2
            new Platform(this.ctx,this.gameSize.w, this.gameSize.h, this.gameSize.w/3, 3*this.gameSize.h/4 - this.gameSize.h/20,2*this.gameSize.w/3,35),
            //SUELO : 3
            new Platform(this.ctx,this.gameSize.w, this.gameSize.h, 0, this.gameSize.h - this.gameSize.h/20,this.gameSize.w,35)
            
            
            )
    },      
    createHero(){
        this.hero1=new Hero(this.ctx,this.gameSize.w,this.gameSize.h,3*this.gameSize.w/4,3*this.gameSize.h/20 -80,30,80, 30,0)
    },
    moveRight(){
        this.hero1.heroPos.x+=15  //this.hero1.heroSpeed.x
    },
    moveLeft(){
        this.hero1.heroPos.x-=15   //this.hero1.heroSpeed.x
    }
    ,
    moveUp(){

        this.hero1.heroSpeed.y=100
        this.hero1.heroSpeed.y*=this.hero1.heroGravity
        this.hero1.heroPos.y-= this.hero1.heroSpeed.y
        console.log(this.gameSize.h)
    },
    
  // ME VAGO EN TOOOOODOO QUE FURULAAAAAA---------------------------------------------------------------

    collisions(){
        
        // height range : platform 3 : 0
        if(this.hero1.heroPos.y  > 0 &&
            this.hero1.heroPos.y + this.hero1.heroSize.h< this.gameSize.h/4){
            if(this.hero1.heroPospopino>this.platforms[0].obstaclePos.x &&
                this.hero.heroPospopino+this.hero1.heroSize.w<=this.platforms[0].obstaclePos.x+this.platforms[0].obstacleSize.w){
            
            if(this.hero1.heroPos.y + this.hero1.heroSize.h<this.platforms[0].obstaclePos.y){
                    this.hero1.heroSpeed.y=5
                    this.hero1.heroSpeed.y*=this.hero1.heroGravity
                    this.hero1.heroPos.y+=this.hero1.heroSpeed.y
            } 
            } else {
                this.hero1.heroSpeed.y=5
                    this.hero1.heroSpeed.y*=this.hero1.heroGravity
                    this.hero1.heroPos.y+=this.hero1.heroSpeed.y
            }
            
    }

        // height range : platform 2 : 1
        if(this.hero1.heroPos.y  < this.gameSize.h/4 &&
        this.hero1.heroPos.y> 2*this.gameSize.h/4-35){
        if(this.hero1.heroPos.x>this.platforms[1].obstaclePos.x &&
            this.hero.heroPos.x+this.hero1.heroSize.w<=this.platforms[1].obstaclePos.x+this.platforms[1].obstacleSize.w){
        
        if(this.hero1.heroPos.y + this.hero1.heroSize.h<this.platforms[1].obstaclePos.y){
            
        } else{
            this.hero1.heroSpeed.y=5
            this.hero1.heroSpeed.y*=this.hero1.heroGravity
            this.hero1.heroPos.y+=this.hero1.heroSpeed.y
        }
        } else {
            this.hero1.heroSpeed.y=5
                this.hero1.heroSpeed.y*=this.hero1.heroGravity
                this.hero1.heroPos.y+=this.hero1.heroSpeed.y
        }
        
}
    //height range : platform 1 : 2
    
//     if(this.hero1.heroPos.y<= 3*this.gameSize.h/4 &&
//     this.hero1.heroPos.y>= 2*this.gameSize.h/4){
//         console.log('pklatadhjksa', this.platforms[3])
//         if(this.hero1.heroPos.x>this.platforms[3].obstaclePos.x &&
//             this.hero.heroPos.x+this.hero1.heroSize.w<=this.platforms[3].obstaclePos.x+this.platforms[3].obstacleSize.w){
        
//         if(this.hero1.heroPos.y + this.hero1.heroSize.h<this.platforms[3].obstaclePos.y &&
//             this.hero1.heroPos.y + this.hero1.heroSize.h>=this.platforms[3].obstaclePos.y+10
//             ){
            
//         } else{
//             this.hero1.heroSpeed.y=5
//             this.hero1.heroSpeed.y*=this.hero1.heroGravity
//             this.hero1.heroPos.y+=this.hero1.heroSpeed.y
//         }
//         } else {
//             this.hero1.heroSpeed.y=5
//              this.hero1.heroSpeed.y*=this.hero1.heroGravity
//              this.hero1.heroPos.y+=this.hero1.heroSpeed.y
//         }
        
// }
       // height range : floor : 3
//        if(this.hero1.heroPos.y + this.hero1.heroSize.h <= this.gameSize.h &&
//         this.hero1.heroPos.y>= 3*this.gameSize.h/4){
//         if(this.hero1.heroPosX>this.platforms[4].obstaclePos.x &&
//             this.hero.heroPosX+this.hero1.heroSize.w<=this.platforms[4].obstaclePos.x+this.platforms[4].obstacleSize.w){
        
//         if(this.hero1.heroPos.y + this.hero1.heroSize.h<this.platforms[4].obstaclePos.y &&
//             this.hero1.heroPos.y + this.hero1.heroSize.h>=this.platforms[4].obstaclePos.y+10
//             ){
            
//         } else{
//             this.hero1.heroSpeed.y=5
//             this.hero1.heroSpeed.y*=this.hero1.heroGravity
//             this.hero1.heroPos.y+=this.hero1.heroSpeed.y
//         }
//         } else {
//             this.hero1.heroSpeed.y=5
//              this.hero1.heroSpeed.y*=this.hero1.heroGravity
//              this.hero1.heroPos.y+=this.hero1.heroSpeed.y
//         }
        
// }

    },

    setEventListeners(){
        document.onkeydown=event=> {
            const { key } = event
            if(this.hero1.heroPos.x>=1.5*this.hero1.heroSize.w){
            if (key == 'ArrowLeft') {
                    this.moveLeft()
                }
                }
            if (key == 'ArrowRight') {
                if(this.hero1.heroPos.x<=this.gameSize.w-2*this.hero1.heroSize.w){
                    this.moveRight()
                }
                }
            if (key == 'ArrowDown') this.hero1.shoot()
        }
        document.onkeyup=event=> {
            const { key } = event
                if (key == 'ArrowUp') {
                    this.moveUp()
                }
        }

    },
    drawAll(){
        this.drawRectangle()
        this.hero1.drawHero()
        this.platforms.forEach(eachPlatform=>eachPlatform.drawPlatform())
        //this.moveDown()
        this.collisions()
        //this.noGravity
        this.bullets.forEach(eachBullet => eachBullet.drawBullet())
        
    },
    clearAll(){
        this.ctx.clearRect(0,0,this.gameSize.w, this.gameSize.h)
    },
    startGame(){
        setInterval(()=>{
            this.clearAll()
            this.drawAll()
            this.timerIndex++
        },1000/this.FPS)
    }
}