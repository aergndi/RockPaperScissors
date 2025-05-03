function playGame() {
    let humanScore = 0
    let computerScore = 0
    function getComputerChoice() {
        const randomNum = Math.floor(Math.random() * 3);
        
      
        if (randomNum === 0){ 
        return 'rock'}
        
        else if (randomNum === 1){
        return 'paper'}
        
        else if (randomNum === 2){
            return 'scissors'}
    
    }
     
    function getHumanChoice(){
        return(prompt("Choose rock/paper/scissors").toLowerCase());
    }

    function playRound(x, y){
        console.log('CPU Chose: ' + x )
        console.log('You Chose: ' + y )
        
        
        if (x === y)
            console.log('Tie')
        
        else if (x === 'rock' && y === 'paper'
            || x === 'paper' && y === 'scissors'
            || x === 'scissors' && y === 'rock'){
                
                humanScore ++
                console.log('You Win')
                
            }
            
            else {
                computerScore ++
                console.log('You Lost')
                
            }
        }
        playRound(getComputerChoice(), getHumanChoice());
        playRound(getComputerChoice(), getHumanChoice());
        playRound(getComputerChoice(), getHumanChoice());
        playRound(getComputerChoice(), getHumanChoice());
        playRound(getComputerChoice(), getHumanChoice());
        console.log('Your Score: ' + humanScore)
        console.log('CPU Score: ' + computerScore)  
    }
    
    playGame()
