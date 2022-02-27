function shuffle(array, isQuestion) {
    let currentIndex = array.length,  randomIndex;
  
    
    while (currentIndex != 0) {
  
     
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      if (isQuestion) 
        shuffle(array[currentIndex].answers, false);
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];  
    }

    return array;
  } 

  export {shuffle}