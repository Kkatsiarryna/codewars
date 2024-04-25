// DESCRIPTION
//Given a string, return if all occurrences of a given letter are always immediately followed by the other given letter.

//SOLUTION
function bestFriend(txt, a, b) {
    let arrNew = txt.split("");
    let item = arrNew.indexOf(a);

    function bestFriend2() {
        for (let i = 0; i < txt.length; i++) {
            if (txt[i] === a) {
                if (txt[i + 1] !== b)
                    return false
            }
        }
        return true;
    }

    return (txt.length === 0) ? true :
            (!txt.includes(a)) ? true :
            (a === b) ? txt[item + 2] === b:
            bestFriend2();
}
