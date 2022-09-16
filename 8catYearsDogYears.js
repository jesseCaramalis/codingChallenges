var humanYearsCatYearsDogYears = function(humanYears) {
    function dogYears(n){
        let x = 15
      for(let i = 1; i <= n; i++){
        if (i == 1){continue}
        if (i == 2){x+=9; continue;}
        x += 5
      }
      return x
    }
    function catYears(n){
        let x = 15
      for(let i = 1; i <= n; i++){
        if (i == 1){continue}
        if (i == 2){x+=9; continue;}
        x+= 4
      }
      return x
    }
    return [humanYears, catYears(humanYears), dogYears(humanYears)]
  }
  