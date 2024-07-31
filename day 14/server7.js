var fs= require('fs');

fs.appendFile('apple.txt', 'Yes,White crows are flying in the sky', function(err, file){
	if(err) throw err;
	console.log('updated!');
});