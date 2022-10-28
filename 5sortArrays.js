// This time the input is a sequence of course-ids that are formatted in the following way:

// name-yymm
// The return of the function shall first be sorted by yymm, then by the name (which varies in length).

// input: courses - array of course-names "name-yymm"
// output: sorted by "yymm", then "name"

sortme = function( courses ){
    let sorted = courses.map(x=>x.split('-')).sort()
    .sort((a,b)=>{
      return a[1] - b[1]
    })
    return sorted.map(x=>x.join('-'))
  }