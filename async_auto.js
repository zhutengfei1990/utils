var async = require('async')
async.auto({
	get_data: function (callback) {
		console.log('in get_data');
		callback(null, 'data', 'converted to array');
	},
	make_folder: function (callback) {
		console.log('in make folder');
		callback(null, 'folder', 'another folder');
	},
	write_file: ['get_data', 'make_folder', function (results, callback) {
		console.log('in write_file', JSON.stringify(results));
		callback(null);
	}],
	email_link: ['write_file', function (results, callback) {
		console.log('in email_link', JSON.stringify(results));
		callback(null);
	}]
}, function (err, results) {
	console.log('err=', err);
	console.log('results=', results);
})