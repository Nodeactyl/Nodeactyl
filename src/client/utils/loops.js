<<<<<<< HEAD
function handleResultInterval(interval, result, resolve) {
    if (result != undefined) {
        clearInterval(interval);
        resolve(result);
    }
}

module.exports = {
    handleResultInterval: handleResultInterval
=======
function handleResultInterval(interval, result, resolve) {
    if (result != undefined) {
        clearInterval(interval);
        resolve(result);
    }
}

module.exports = {
    handleResultInterval: handleResultInterval
>>>>>>> d5a6e5e5f2c0aaf147894f097ab1d85be9076cfd
}