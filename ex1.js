//Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
function triangleArea(a,b,c) {
    let p = (a + b + c) /2;
    let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    console.log('Area of a triangle: ', s);
}

triangleArea(10, 6, 7);