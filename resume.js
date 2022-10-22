var btn=document.querySelectorAll('.jsitem');
// console.log(btn);
// var values=[0, 299, 736, 989, 1999, 2754, 3371];
// function func(text){
// 	return text;
// }
for(let i of btn){
	i.addEventListener('click', function(event){
		event.preventDefault();
		let current=0;
		var address=i.innerText;
		var temp=document.getElementById(address);
		var target=temp.getBoundingClientRect().top;
		var scrollId=setInterval(function(){
			if(current>=target){
				clearInterval(scrollId);
				return;
			}
			current+=50;
			window.scrollBy(0,50);
		}, 1);
	})
}

// for(var i=0; i<btn.length; i++){
// 	btn[i].addEventListener('click', function(event){
// 		event.preventDefault();

// 	})
// }