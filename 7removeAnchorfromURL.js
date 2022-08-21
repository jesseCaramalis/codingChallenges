// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// Examples

// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"
// Answer

const removeUrlAnchor = (url) => url.includes('#') ? url.slice(0,(url.indexOf('#'))) : url

//return url.split('#')[0];
//not my solution, from top answers. Very clever.