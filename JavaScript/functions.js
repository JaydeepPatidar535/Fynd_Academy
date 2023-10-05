// // Parameterized Arrow Function
// const add = (a, b) => {
//     return a + b;
//   };
  
//   // Anonymous Function
//   const subtract = function(x, y) {
//     return x - y;
//   };
  
//   // Using the functions
//   console.log(add(5, 3)); // Output: 8
//   console.log(subtract(10, 4)); // Output: 6
  

// //   Self calling FUnctions
//     ( function(){
//         console.log('Hello');
//       })();

  // Examples (Fynd_class)
//   const display=()=>{
//     console.log('Hello');
//   }
//   console.log(display());


const outer =()=>{ 
    let b=11 ;  
    console.log (b, 'outer function ');  
    const inner =()=>{  
    console.log ('inner function');  
    }  
    const inner1 =()=>{  
        console.log ('inner function');  
        }
    return inner;  
     
}
outer()()();
