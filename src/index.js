function error(msg) {
    console.log(`unit-change : ${msg}`);
    return;
}

exports.second = function (number) {
    if (isNaN(number)) { error('only numbers are possible.'); }
    if (!number) { error('a number must be provided.'); }
    return number * 1000;
}

exports.minute = function (number) {
    if (isNaN(number)) return error('only nembers are possible.');
    if (!number) return error('a number must be provided.');
    return number * 1000 * 60;
}

exports.hour = function (number) {
    if (isNaN(number)) return error('only nembers are possible.');
    if (!number) { error('a number must be provided.') }
    return number * 1000 * 60 * 60;
}

exports.day = function (number) {
    if (isNaN(number)) return error('only nembers are possible.');
    if (!number) return error('a number must be provided.');
    return number * 1000 * 60 * 60 * 24;
}

exports.week = function (number) {
    if (isNaN(number)) return error('only nembers are possible.');
    if (!number) return error('a number must be provided.');
    return number * 1000 * 60 * 60 * 24 * 7;
} 

exports.hex = function (number) {
    if (isNaN(number)) return error('only nembers are possible.');
    if (!number) return error('a number must be provided.');
    var result = '';
    const msg = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < number ; i++) {
        result += msg.charAt(Math.floor(Math.random() * msg.length));
    }
    return result;
}

