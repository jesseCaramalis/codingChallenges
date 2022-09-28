// Create a function to determine whether or not two circles are colliding. You will be given the position of both circles in addition to their radii:

// function collision(x1, y1, radius1, x2, y2, radius2) {
//   // collision?
// }
// If a collision is detected, return true. If not, return false.

// Answer


//need to find distance between each circle, measured from x/y coords. If greater than both radius' then no collision.
//distance between two points formula


const distBetweenTwoPoints = (x1,x2,y1,y2) => Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2))

function collision(x1, y1, radius1, x2, y2, radius2) {
  return distBetweenTwoPoints(x1,x2,y1,y2) > radius1+radius2 ? false : true
}