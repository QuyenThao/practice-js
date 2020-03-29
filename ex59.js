/**
 * Stephan works with simple forms when constructing something, and he needs some programming tools to calculate his expenses. 
 * Let's take a trip back to our school days and pull out some simple geometry for this.You should write a function to calculate
 *  the area of simple figures: circles, rectangles and triangles. You are give an arbitrary number of arguments and depending
 *  on this, the function calculates area for the different figures.
 * One argument -- The diameter of a circle and you need to calculate the area of this circle.
 * Two arguments -- The side lengths of a rectangle and you need to calculate the area of this rectangle.
 * Three arguments -- The lengths of each side of a triangle and you need to calculate the area of this triangle.
 * The result should be given with two-digit precision as ±0.01.
 * Input: One, two or three arguments as floats or as integers.
 * Output: The area of the circle, rectangle or triangle as a float.
 */
function simpleAreas(...args) {
    if (args.length === 1) {
        return Math.round((Math.PI * Math.pow(args / 2, 2)) * 100) / 100;
    } else if (args.length === 2) {
        return args[0] * args[1];
    } else if (args.length === 3) {
        let p = (args[0] + args[1] + args[2]) / 2;
        return Math.sqrt(p * (p - args[0]) * (p - args[1]) * (p - args[2]));
    }
}
console.log(simpleAreas(3));
console.log(simpleAreas(2, 2));
console.log(simpleAreas(1.5, 2.5, 2));