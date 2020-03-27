/**
 * After reading this fragment Nicola wants to build his own "Humpty Dumpty". As a basis he chooses the spheroid (read more about it on Wikipedia). 
 * We know the height and width (in inches) for this spheroid. For the job at hand, Nikola needs to know how much material is required.
 * You can help him and create a function to calculate the volume (cubic inches) and the surface area (square inches).
 * Tips: Be careful with sin-1x -- it’s an arcsin.
 * Input: Two arguments. The height and width as integers.
 * Output: The volume and surface area as a list of floats. The results should be accurate to two decimals.
 */
function spheroid(height, width) {
    let v, s;
    let c = height / 2;
    let a = width / 2;
    v = Math.round((4/3 * Math.PI * a * a * c) * 100) / 100;
    if (c < a) {
        let e = Math.sqrt(1 - (c*c)/(a*a));
        let s1 = (2 * Math.PI * a * a) * (1 + (((1 - e * e )/(e)) * Math.atanh(e)));
        s = Math.round(s1 * 100) / 100;
    } else if (c > a) {
        let e = Math.sqrt(1 - (a*a)/(c*c));
        let s1 = (2 * Math.PI * a * a) * (1 + (c / (a * e)) * Math.asin(e));
        s = Math.round(s1 * 100) / 100;
    } else {
        let s1 = 4 * Math.PI * a * a;
        s = Math.round(s1 * 100) / 100;
    }
    return [v, s];
    console.log(e)
}
console.log(spheroid(2, 2));
console.log(spheroid(4, 2));
console.log(spheroid(2, 4));