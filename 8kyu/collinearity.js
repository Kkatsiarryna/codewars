// Write the function collinearity(x1, y1, x2, y2), which returns a Boolean
// type depending on whether the vectors are collinear or not.

//my solution
function collinearity( x1,y1, x2,y2 ) {
    return (x2!= 0 && y2 != 0 && x1/x2 === y1/y2)
        || ( (x1 == 0 && y1 ==0) || (x2 == 0 && y2 ==0) )
        || ( (x1 == 0 && x2 ==0) || (y1 == 0 && y2 ==0) )
}