function logRowsWithNegatives(arr: number[][]): Promise<void> {
    if (arr.length === 0) {
        return Promise.reject('The array is empty');
    }

    const negativeCheckPromises = arr.map((row, index) =>
        new Promise<void>((resolve) => {
            const hasNegative = row.some(num => num < 0);
            if (hasNegative) {
                console.log(`Row ${index} has a negative number:`, row);
            }
            resolve(); // Ensure the promise always resolves.
        })
    );

    return Promise.all(negativeCheckPromises).then(() => {
        console.log('Completed checking all rows.');
    });
}


const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

logRowsWithNegatives(array2D_3)
    .then(() => console.log('All rows checked successfully.'))
    .catch(error => console.error('Error:', error));