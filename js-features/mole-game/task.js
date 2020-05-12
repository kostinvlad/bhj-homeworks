const getHole = index => {
   return document.getElementById(`hole${index}`)
}
        let hit = 0;
        let miss = 0;

for(i = 1; i < 9; i++){    
    getHole(i).onclick = function () {        
        if (this.className.includes( 'hole_has-mole' )){
            hit += 1;
            document.getElementById("dead").textContent = hit;
            if(hit === 10){
                alert('Вы победили')
                let newGame = confirm("Начать новую игру?")
                if(newGame){
                    miss = 0;
                    hit = 0;
                    document.getElementById("dead").textContent = hit;
                }
            }
        
        }
        else if(!this.className.includes( 'hole_has-mole' )) {
            miss += 1;
            console.log('МИМО')
            document.getElementById("lost").textContent = miss;
            if(miss === 5){                   
                alert('Вы проиграли :(')
                let newGame = confirm("Начать новую игру?")
                if(newGame){
                    miss = 0;
                    hit = 0;
                    document.getElementById("lost").textContent = miss;
                }
            }        
        }     
        
    }   
    
}