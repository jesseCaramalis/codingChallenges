// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

//Answer

//Input i a string containing names in a firstName:lastName format with names seperated by a semicolon.
//Output is a string containing names capitalised in a (lastName, firstName) format, with results sorted in alphabetical order and no seperation between entries.
//if two names have same surname, sort by first name.

//split input string with ';' as seperator to get each individual name.
//map each name to a new array, uppercase each name first then split with ':' as seperator to get first and last name.
//in the same map, reverse the name order and join with ', ' as seperator to get the desired output format.
//finally sort the overall array to sort in alphabetical order.
//use a tricky join template literal that returns the array joined with ')(' as a seperator, and wraps the entire result in ()

function meeting(s) {
    let arr = s.split(';')
              .map(x=> x.toUpperCase().split(':').reverse().join(', '))
              .sort()
    return `(${arr.join(')(')})`
  }