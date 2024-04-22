import { useState } from "react";


const Sorting = () => {

    // state declarations

    const [ max, setMax] = useState()
    const [ arr, setArr] = useState([])
    const [sortedArr, setSortedArr] = useState([])

    // generating array of random numbers
    const setArrayLenght = (max) => {
        let randomArr = [];
        for (let i = 0; i< max; i++) {
            randomArr.push(Math.floor(Math.random() * 10))
        }
        setArr(randomArr);    
}
    // setting MAX numbers in array state based on user's input
    const change = event => {
        setMax(event.target.value)
    }  

    // QuickSort algorithm
        const quickSort = (arr) => {
           
                if (arr.length <= 1) {
                return arr;
                }
            
                let pivot = arr[0];
                let leftArr = [];
                let rightArr = [];
            
                for (let i = 1; i < arr.length; i++) {
                if (arr[i] < pivot) {
                    leftArr.push(arr[i]);
                } else {
                    rightArr.push(arr[i]);
                }
                }
                
                return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];      
        };

        function reset() {
            setArr(null)
            setSortedArr(null)
            setMax('')
        }

    // setting sorted array to a state
        const getSortedArr = (arr) => {
            let unsortedArr = arr
            const newSortedArr = quickSort(unsortedArr)
            setSortedArr(newSortedArr)
        }
    
    return (
        <div className="h-screen items-center flex flex-col justify-center ">

            <div className="tracking-widest text-md  m-2 overflow-scroll">
                    <span>Unsorted: </span>
                        {arr}
            </div>

            <div className="tracking-widest text-md m-2">
                    <span>Sorted:</span> 
                        {sortedArr}
            </div>
        
            <form>
                <input 
                    className="border-2 text-center p-2 rounded-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none m-4" 
                    type="number" 
                    onChange={change}    
                    defaultValue={max}
                    value={max}
                    placeholder="Put your number here..."
                    max="100"
                />  
            
            </form>

                    
            <div className="flex flex-col justify-center ">
                        <button 
                            onClick={()=> setArrayLenght(max)} 
                            className="py-8 rounded-full bg-primary px-10 py-3 text-xs font-medium uppercase leading-normal bg-blue-500 text-white m-4 hover:bg-blue-700">
                            Generate
                        </button>

                        <button 
                            onClick={() => getSortedArr(arr)}
                            className="rounded-full bg-primary px-10 py-3  text-xs font-medium uppercase leading-normal bg-blue-500 text-white m-4 hover:bg-blue-700" >
                            sort
                        </button>

                        <button 
                            onClick={() => reset()}
                            className="rounded-full bg-primary px-10 py-3  text-xs font-medium uppercase leading-normal bg-red-500 text-white m-4 hover:bg-red-700" >
                            reset
                        </button>
            </div>

        </div>
    )
}

export default Sorting;