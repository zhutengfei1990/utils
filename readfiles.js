var fs = require('fs'),
    stdin = process.stdin,
    stdout = process.stdout
// fs.readdir(__dirname,function(error,files){
//     console.log(files)
// })
// var result=fs.readdirSync(__dirname)
// console.log('同步操作',result)

// stdout.write('hello world!')//尾部没有换行符
// console.log('hello world') //尾部有换行符
fs.readdir(__dirname, function (error, files) {
    console.log('')
    if (!files.length) {
        return console.log('no files')
    }
    console.log('switch file')
    function file(i) {
        var filename = files[i]
        fs.stat(__dirname + '/' + filename, function (error, stat) {
            if (stat.isDirectory()) {
                console.log(i, '\033[36m', filename)
            } else {
                console.log(i, '\033[90m', filename)
            }
            if (++i == files.length) {
                read();
            } else {
                file(i)
            }
        })
    }
    function read() {
        console.log('')
        stdout.write('enter your choice')
        stdin.resume()
        stdin.setEncoding('utf8')
        stdin.on('data', function (data) {
            var filename = files[Number(data)]
            if (!files[Number(data)]) {
                stdout.write('enter your choice');
            } else {
                stdin.pause()
                fs.readFile(__dirname + '/' + filename, 'utf8', function (err, data) {
                    console.log('')
                    console.log(data.replace(/(.*)/g, '   $1'))
                })
            }
        })
    }
    file(0)
})

