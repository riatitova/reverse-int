module.exports = function reverse (n) {
    let arr = n.toString().split('');
    arr = arr.reverse();
    let num = arr.join('');
    return Number.parseInt(num, 10);
}
