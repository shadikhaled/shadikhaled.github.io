var current_url='https://api.github.com/users/shadiKhaled/repos?sort=updated&per_page=5'
$(document).ready(function(){
	bindCurrentClickEvent();
	favSubmitted();
})

function bindCurrentClickEvent (){
	$('#btnCurrent').click(getCurrentRepositories)
}
function getCurrentRepositories(e){
	$('#result').html('')
	$.get(current_url,function(repos){
		showCurrentRepositories(repos)
	})

}
function showCurrentRepositories(repos){
	repos.forEach(function(repo){
		var date= new Date(repo.updated_at)
		$('#result').append(`<div><a href='${repo.html_url}' target='_blank'>${repo.name}</a> Languge: ${repo.language}<p>Updated at: ${formatDate(date)}</p></div>`)
	})
}
function formatDate(date) {
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}
// ----------------------------------------------------------------------------
function favSubmitted() {
	$("#fav").click(function(evant){
		event.preventDefault();
		var favName= $("#favName").val();
		var favLang= $("#favLang").val();
		var favUpdate= $("#favUpdate").val();
		getAjax(favName,favLang,favUpdate);
		event.stopPropagation();
	})
}

function getAjax(favName,favLang,favUpdate){
	
}