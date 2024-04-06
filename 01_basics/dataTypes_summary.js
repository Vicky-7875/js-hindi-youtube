// primitive
/**
 * 7 types
 * string
 * number
 * boolean
 * null
 * undefined
 * symbol
 * bigint
 */
// non-primitive(Referance)

//array, objects, functions



/**
 * Memory
 * 
 * Stack(primitive type uses  stack memory)
 * Heap(non-primitive uses heap memory)
 */

let myYoutubeName="vivektondare";
let anotherYTName=myYoutubeName;
 anotherYTName="vickyt";

 console.log(myYoutubeName)
 console.log(anotherYTName)


 let user1={
    name:'vivek',
    upi:'sasa@gm.com'
 }

 let user2 =user1;

 user2.upi="vicke@sdf.com"

 console.log(user1.upi)
 console.log(user2.upi)

