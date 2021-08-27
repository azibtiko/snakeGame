
//Variables




let score = 0 ;
let speed = 5;

let food = {
    x:6 , y:3
};

let snakeDir= {
    x:0 , y:0
};



let snake = [
    {x:15,y:13}
   
    
];


// collide function
// if bump to yourself


function collide ( ssn ){

//playing with speed








    // if bump to wall
    if(snake[0].x>=18||snake[0].y>=18||snake[0].x<=0||snake[0].y<=0){
        return true;
    }
    // if bump to wall
    for(let i = 1; i<snake.length ; i++){
        if(snake[i].x==snake[0].x && snake[i].y==snake[0].y){
            return true;
        }
        


    }
    
}



// game functions
 function main(){
     // when snake has eaten food
    
    if(snake[0].x===food.x && snake[0].y===food.y ){
        //Increasing the length of the snake
        snake.unshift({x: snake[0].x+snakeDir.x,y:snake[0].y+snakeDir.y})

        //forming new food
        let a=2;
        let  b= 16;
        score+=1;
        

        food.x = Math.round((Math.random()*(b-a))+a);
        food.y = Math.round((Math.random()*(b-a))+a);

        // managing score

        let num = document.getElementById("num");
        num.innerHTML  = score;
    };
   
    
if(collide()){
    snakeDir= {
        x:0 , y:0
    };
    alert("game over!!!");
    snake = [
        {x:15,y:13}   
    ];

}



    
    
       
    


// changing direction of snake
for(let i=snake.length-2 ; i>=0 ; i--){
    snake[i+1] = {...snake[i]};
  }

snake[0].x += snakeDir.x;
snake[0].y += snakeDir.y;



    // visibility of snake 
    let board = document.getElementById('ghata');
    board.innerHTML = " ";
    snake.forEach ((e,index) => {
        let snakeEle =  document.createElement('div');
        snakeEle.style.gridColumnStart = e.x;
        snakeEle.style.gridRowStart = e.y;
        if(index==0){
            snakeEle.classList.add('snake');
        }
        else{
            snakeEle.classList.add('body');
        }
        
        board.appendChild(snakeEle);
       

    });
    // visibility of food 

    let foodEle =  document.createElement('div');
    foodEle.style.gridColumnStart = food.x;
    foodEle.style.gridRowStart = food.y;
    foodEle.classList.add('food');
        board.appendChild(foodEle);
       
  

    

}

//Game Loop

setInterval(main,500/speed);

 // key board movement of snake

 window.addEventListener("keydown",function(e){
     switch(e.key){
         case 'ArrowUp' : 
            snakeDir.x = 0;
            snakeDir.y = -1;

         break;
         case 'ArrowDown' : 
         snakeDir.x = 0;
            snakeDir.y = 1;
         break;
         case 'ArrowLeft' : 
         snakeDir.x =-1 ;
         snakeDir.y = 0;
         break;
         case 'ArrowRight' : 
         snakeDir.x = 1;
         snakeDir.y = 0;
         break;

     }
    

 })

 
 
 



  

