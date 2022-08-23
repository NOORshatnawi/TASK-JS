

  // Question 111


let list = [
    { name: "apples", available: true },
    { name: "pears", available: true },
    { name: "oranges", available: false },
    { name: "bananas", available: true },
    { name: "blueberries", available: false },
  ];
  let product = [];
  function createList(arr) {
    arr.forEach((element) => {
      if (element.available) product.push(element);
    });
    return product;
  }
  console.log(createList(list))

  // Question 222

  function useMap(array){

    return array.map(ele => {if(isNaN(ele))return "N/A" 
    else if(ele%2==0) 
    return "even" 
    else return "odd"})    
}

let myMap=[1,"r",2,3,"s"]
console.log(useMap(myMap))


 // Question 333


function notInFirstArray(arr1, arr2) {
    return arr2.filter((ele) => {
        return !arr1.includes(ele);
    });
}
console.log(notInFirstArray([1 , 2 , 3, 6], [3, 2, 1, 5, 6, 7]));



/// Question 444


function reversedString(str) {
       return str.split("").reduce((acc, curr) => { return curr.concat(acc); })
    }
    console.log(reversedString("hello everyone"));




    /// Question 555



    function isNum(paramet) {
        let reex = /\d/ig;
        let cam = reex.test(paramet);
        return cam;
        
    }

    console.log(isNum('nour'));
    


        /// Question 666


        function matchMonth() {
            let question = prompt("In Which Month is Halloween?");
            let regex = /(^\s*?october\s*?$|^\s*?oct\s*?$)/ig;
            console.log(regex.test(question));
        }
        
        matchMonth();

    
    



