var fs= require('fs');

fs.unlink('banana.txt', function(err, file){
	if(err) throw err;
	console.log('File Deleted!');
});