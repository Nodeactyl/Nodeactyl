function handleResultInterval(interval, result, resolve) {
    if (result != undefined) {
        clearInterval(interval);
        resolve(result);
    }
}

module.exports = {
    handleResultInterval: handleResultInterval
}