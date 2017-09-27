let async = require('async')
let total = 0

function dealClickArr2() {
    var arr = [{ name: 'a', delay: 200, num: 10 }, { name: 'b', delay: 100, num: 20 }, { name: 'c', delay: 300, num: 30 }]
    async.eachSeries(arr, function iterator(item, done) {
        setTimeout(function () {
            total += item.num
            console.log('end:' + item.name)
            done(null);
            console.log(total);
        }, item.delay);
    }, function (err) {
        console.log('err:' + err)
    })
}

dealClickArr2()