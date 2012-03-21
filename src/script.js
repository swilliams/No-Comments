function removeIndexComments() {

	var rows = document.getElementsByClassName('subtext');
	for (var i = 0; i < rows.length; i+=1) {
		var row = rows[i];
		var tags = row.getElementsByTagName('a');
		for (var j = 0; j < tags.length; j++) {
	        var text = tags[j].innerHTML;

		    if (text.search('comment') > 0 || text.search('discuss') >= 0) {
		    	row.removeChild(tags[j]);
	        }
		}
	}
}

function removeComments() {
	var tables = document.getElementsByTagName('table'),
	    comments = tables[3];
	comments.innerHTML = '<tr><td><h1>No Comments, Dummy</h1></td></tr>';
}

var url = location.href;
if (url.search('item') > 0) {
	removeComments();
} else {
	removeIndexComments();
}