function MagicSquare(n) {
    let arr = [];
    let count = 1;
    for (let l = 0; l < n; l++) {
        arr[l] = [];        // Define the array of the arrays
    }       

    for (let l = 0; l < n; l++) {
        for (let m = 0; m < n; m++) {
            arr[l][m] = 0;   //Define the array of the 3*3 matrix and set all matrix value to zero   

        }

    }

        /// let (i,j) be the position in matrix
    
    let i = parseInt(n / 2);
    let j = n - 1;              //This (i,j) is First Poistion of matrix 

    for (let num = 0; num <= n * n; num++) {

        if (i == -1 && j == n) {  ///This is to find the condition if i=-1 and j==n.When i,j exceeds the bound
            i = 0;
            j = n - 2;
        } else {
            if (i == -1) {   // This condition is when position of i=-1           
                i = n - 1;
            }
            if (j == n) { // This condition is when position of j=n
                j = 0;
            }
        }



        if (arr[i][j] == 0) {       /// When in the 3*3 matrix array if matrix(i,j) with position value is zero and statisfy above condition  
            arr[i][j] = count;      ///count is equal to matrix from 1 to nine         
            i = i - 1;
            j = j + 1;
            count = count + 1;

        } else {                    ///if position is fill the position of i,j are changed
            i = i + 1;
            j = j - 2;
        }

    }


    return arr;             ///Final value of 3*3 Magic Square
}
var MatrixNum = 3;
console.log(MagicSquare(MatrixNum));
