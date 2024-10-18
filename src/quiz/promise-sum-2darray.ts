const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


function sum2DArrayConcurrently(arr: number[][]): Promise<number> {
    if (arr.length === 0) {
        return Promise.reject('Cannot sum an empty array');
    }

    const rowSumsPromises = arr.map(row =>
        Promise.resolve(row.reduce((sum, num) => sum + num, 0))
    );

    return Promise.all(rowSumsPromises)
        .then(rowSums => rowSums.reduce((total, rowSum) => total + rowSum, 0));
}


sum2DArrayConcurrently(array2D_1)
    .then(sum => console.log('Sum of array2D_1:', sum))
    .catch(error => console.error('Error:', error));

sum2DArrayConcurrently([])
    .then(sum => console.log('Sum of empty array:', sum))
    .catch(error => console.error('Error:', error));