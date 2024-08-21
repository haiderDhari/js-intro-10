/*
assume that you are giving a string of any lenght 
 
morning 
saturday
hello
 */
console.log(''.slice(-5));
console.log(''.slice(''.length -5));
console.log(''.substring(''.length -5));
 //if the string is less than 5 characters throw an Error('this string doesnt have 5 characters!!!');


 /*assume that you are giving a string of any lenght 
get first 3 and last 3 
then concat in new string 
'javascript'      : javipt
  */
// soulution
console.log(str1.slice(0, 3) + str2.slice(-3));
//or 
let str = 'javascript';
let first3 = str.slice(0, 3);
let last3 = str.slice(-3);// or(7,10)
let firstPluslast = first3 + last3;
console.log(firstPluslast);


/*get the first 2
last 1
middle 4
then concat new string 
*/
let S = 'HaiderDhari'
let first2 = S.substring(0, 2);
let last1 = S.slice(-1);
let mid4 = S.substring(3, 7);
let answer = first2 + last1 + mid4;
console.log(answer);
