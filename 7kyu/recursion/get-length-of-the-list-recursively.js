// DESCRIPTION
//Write funcion lenR which returns the length of a given list. Try no to cheat and provide recursive solution.

//SOLUTION
function lenR(x) {
    return x.length !== 0
        ? 1 + lenR (x.slice(1))
        : 0
}

// function lenR ([head, ...tail]) {
//     if (!head) return 0; //Если head равен undefined (что происходит, когда массив пуст), функция возвращает 0
//     return 1 + lenR(tail); //Функция возвращает 1 плюс результат рекурсивного вызова lenR с оставшимися элементами массива (tail).
//                              Каждый рекурсивный вызов уменьшает размер массива на один элемент, пока не достигнет базового случая.
// };

console.log(lenR([])); //0
console.log(lenR([1,4,5,6,7])); //5