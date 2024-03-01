/* A.1.Prime numbers*/
const primNumber = (numbers) => {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] <= 1) {
            continue; 
        }
        let myPrimenumber = true;
        for (let j = 2; j <= Math.sqrt(numbers[i]); j++) {
            if (numbers[i] % j === 0) {
                myPrimenumber = false;
                break;
            }
        }
        if (myPrimenumber) {
            result.push(numbers[i]);
        }
    }
    return result;
}

var numbers = [2, 7, 8, 9, 8, 6, 84, 1, 3, 5, 11, 121, 17];
console.log(primNumber(numbers)); 



/*A.2.Palindrome*/
const PalindromeChecker = (mystring)=>{
    if (typeof mystring === 'string'){
        for (let i = 0; i < mystring.length / 2; i++) {
            if (mystring[i] !== mystring[mystring.length - 1 - i]) {
                return  mystring+" not  a pallindrome"
            }
        }
        return mystring+" is a  pallindrome " 
    }else{
        return "This is not a string "+mystring
    }
    
}
var mystring =4
console.log(PalindromeChecker(mystring))


/* A.3.Array reversing*/
const reverseNumbers = (num) => {
    if (typeof num === "number") {
        num = num.toString(); 
        let result = [];
        for (let i = num.length - 1; i >= 0; i--) {
            result.push(parseInt(num[i])); 
        }
        return result;
    } else {
        return "Please enter a valid number";
    }
}

var num = 548584;
console.log(reverseNumbers(num)); 




/* A.4.Inplace Array reversing*/

const InplaceReverse = (arr)=>{

       let startingPoint = 0;
       let endingPoint = arr.length-1
       while(startingPoint < endingPoint){
            let temp=arr[startingPoint]
            arr[startingPoint]=arr[endingPoint]
            arr[endingPoint]=temp
            startingPoint=+1;
            endingPoint--;
       }
       return arr
        
    }
var arr = [3,4,5,7]
console.log(InplaceReverse(arr));

/* A.5.Array & Object*/

const peopleArray = [
    "Patrick wyne, 30, male",
    "lil wyne, 32, male",
    "Eric mimi, 21, female",
    "Dodos deck, 21, male",
    "Alian Dwine, 22, male",
    "Patrick wyne, 33, male",
    "Patrick wyne, 10, male",
    "Patrick wyne, 40, male"
];

function parsePeopleData(array) {
    const result = {
        females: [],
        males: []
    };

    array.forEach(person => {
        const [fullName, age, gender] = person.split(", ");
        const [firstName, secondName] = fullName.split(" ");
        const personObj = {
            "second-name": secondName,
            age: parseInt(age)
        };
        if (gender === "female") {
            result.females.push({ [firstName]: personObj });
        } else if (gender === "male") {
            result.males.push({ [firstName]: personObj });
        }
    });

    return result;
}



const result = parsePeopleData(peopleArray);
console.log(result);


/*B.Sorting 1.Custom sorting*/

const  sortFunction = (arr)=>{
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]<arr[j]){
                let temp = arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }

    }
    return arr
}
console.log(sortFunction([3,20,1,5,6,56,4]))

/*C.Time complexity*/

const majorityElement = (elements) => {
    let candidate = null;
    let count = 0;

    for (let i = 0; i < elements.length; i++) {
        if (count === 0) {
            candidate = elements[i];
            count = 1;
        } else if (elements[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }


    count = 0; 
    for (let i = 0; i < elements.length; i++) {
        if (elements[i] === candidate) {
            count++;
        }
    }

    if (count > elements.length / 2) {
        return "Majority element: " + candidate;
    } else {
        return "No majority element found";
    }
};

console.log(majorityElement([3, 1, 3, 4, 4, 5, 3, 5, 3, 3, 3, 6, 3]));





