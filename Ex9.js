const nearestLargestNumber = (arr, index) => {
    const num = arr[index];
    let nearestLargest;
    const findIdxOfNearestLargest = (idxOfNearestLargest, item, idx2) => {
        if (item > num &&
            (idxOfNearestLargest === null || nearestLargest > item)) {
            nearestLargest = item;
            idxOfNearestLargest = idx2;
        }
        return idxOfNearestLargest;
    };

    return arr.reduce(findIdxOfNearestLargest, null);
};

console.log(nearestLargestNumber([1, 4, 3, 2, 5, 7], 7));