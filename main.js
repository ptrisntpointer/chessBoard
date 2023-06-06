/*
 This program should be able to adapt to any size. For example
 a size of 4 will produce a 4x4 chessboard, 16 will produce a
 16x16 chessboard. And, the default size is 8.
 The minimum size is 2 and maximum is probably infinity positive
 number.
*/
let size = 8;
for (let i = 1; i <= size; i++) {
    // REMEMBER! Since a chessboard consists of white and black space,
    // then a space will represent the white, and hash is black.
    // And, I think the these white and black comes in pair, therefore
    // I divided the size by 2.
    for (let j = 1; j <= size/2; j++) {
        // Odd number row starts with a white, and even black.
        if (i % 2 == 0) {
            process.stdout.write("# ");
        } else {
            process.stdout.write(" #");
        }
    }
    console.log();
}
