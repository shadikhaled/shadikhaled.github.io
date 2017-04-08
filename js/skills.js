$(document).ready(function(){
	function getSkills(){
skills_url = “skills.json”
$.get(skills_url,function(data){
	showSkills(data)


})
	
function getCurrentRepositories(e){
	$('#result').html('')
	$('#result').show();
	$.get(current_url,function(repos){
		showCurrentRepositories(repos)
	})
	 

}