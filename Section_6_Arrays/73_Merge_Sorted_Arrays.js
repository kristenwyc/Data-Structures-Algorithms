//Merge Sorted Arrays

// [0, 3, 4, 4, 6. 30, 31]

// function mergeSortedArrays(array1, array2) {
//     const mergedArray = [];
//     const combinedArray = array1.concat(array2);
//     for(let i = 0; i < combinedArray.length; i++) {
//                 if(combinedArray[i])
//                 mergedArray.push(array1[i]);
//             }
//         }
//     }
//     return mergedArray;
// }


//not the cleanest solution below, could do break the while loop into 2 functions (=> func shouldPushArray1Item() & func shouldPushArray2Item())

function mergeSortedArrays(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    //check input
    if (array1.length === 0) {
        return array2;
    } if (array2.length === 0) {
        return array1;
    }

    while (array1Item || array2Item) {
        console.log(array1Item, array2Item);
        if (!array2Item || array1Item < array2Item) {   //!array2Item ex. if there are undefined values
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++
        }
    }

    return mergedArray;
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])



