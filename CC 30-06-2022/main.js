// Rock Paper Scissors

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
    if(p1 === p2){
      return "Draw!"
    }else if((p1 === "scissors" && p2 === "paper") || (p1 === "paper" && p2 === "rock") || (p1 === "rock" && p2 === "scissors")){
      return "Player 1 won!"
    }else{
      return "Player 2 won!"
    }
  };

//   Create a function with two arguments that will return an array of the first (n) multiples of (x).

//   Assume both the given number and the number of times to count will be positive numbers greater than 0.
  
//   Return the results as an array (or list in Python, Haskell or Elixir).
  
//   Examples:
  
//   countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
//   countBy(2,5) === [2,4,6,8,10]
  
  function countBy(x, n) {
    let result = []
    for(i = 1; i<=n;i++){
      result.push(x*i)
    }
    return result
  }
  