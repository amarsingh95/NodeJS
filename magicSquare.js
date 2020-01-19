function MagicSquare(n) {
    let arr = [];
    let count = 1;
    for (let l = 0; l < n; l++) {
        arr[l] = [];
    }

    for (let l = 0; l < n; l++) {
        for (let m = 0; m < n; m++) {
            arr[l][m] = 0;

        }

    }


    let i = parseInt(n / 2);
    let j = n - 1;

    for (let num = 0; num <= n * n; num++) {

        if (i == -1 && j == n) {
            i = 0;
            j = n - 2;
        } else {
            if (i == -1) {
                i = n - 1;
            }
            if (j == n) {
                j = 0;
            }
        }



        if (arr[i][j] == 0) {
            arr[i][j] = count;
            i = i - 1;
            j = j + 1;
            count = count + 1;

        } else {
            i = i + 1;
            j = j - 2;
        }

    }


    return arr;
}
var MatrixNum = 3;
console.log(MagicSquare(MatrixNum));
