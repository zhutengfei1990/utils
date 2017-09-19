function loadImageAsync(url) {
    return new Promise(function (resolve, reject) {
        var image = new Image();
        image.onload = function () {
            resolve(image);
        };
        image.onerror = function () {
            reject(new Error('can not load image at' + url));
        }
        image.src = url;
    })
}

loadImageAsync('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3502343973,1168279496&fm=11&gp=0.jpg')