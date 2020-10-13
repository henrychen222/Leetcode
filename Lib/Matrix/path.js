class PrintAllPathIn2DArray {
    constructor (M) {
        this.M = M;
        this.rowCount = M.length;
        this.colCount = M[0].length;
    }

    getAllPaths (currentRow, currentColumn, path) {
        if (currentRow == this.rowCount - 1) {
			for (let i = currentColumn; i < this.colCount; i++) {
                path += this.M[currentRow][i];
				// path.push(this.M[currentRow][i]);
			}
			console.log(path);
			return;
		}
		if (currentColumn == this.colCount - 1) {
			for (let i = currentRow; i <= this.rowCount - 1; i++) {
                path += this.M[i][currentColumn];
				// path.push(this.M[i][currentColumn]);
            }
            console.log(path);
			return;
        }
        path = path + this.M[currentRow][currentColumn];
        // path = [...path].concat([...path].push(this.M[currentRow][currentColumn]));
		this.getAllPaths(currentRow + 1, currentColumn, path);
		this.getAllPaths(currentRow, currentColumn + 1, path);
    }
}


const main = () => {
    let grid = [[1, 2, 3 ],  [4, 5, 6 ], [7, 8, 9]];
    let grid2 = [
        [-1, -2, -3],
        [-2, -3, -3],
        [-3, -3, -2]
    ];
    let test = new PrintAllPathIn2DArray(grid);
    console.log(test.getAllPaths(0, 0, ''));
};

main()


// const findAllPaths = (mat, path, i, j) => {
// 	if (i == M - 1 && j == N - 1) return;
// 	path.push(mat[i][j]);
// 	if (isValid(i, j + 1, M, N)) {
//         findAllPaths(mat, path, i, j + 1);
//     }
// 	if (isValid(i + 1, j, M, N)) {
//         findAllPaths(mat, path, i + 1, j);
//     }
// 	path.pop();
// };

// const isValid = (i, j) => {
//     return (i >= 0 && i < M && j >= 0 && j < N); 
// };