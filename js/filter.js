	recipesApp.filter('formatDescription', function(){
		return function(text){
			var arr1 = text.split('. ');
			var arr2 = arr1.slice(0, 1);
			return arr2.join('')
		}
	});

	recipesApp.filter('etc', function(){
		return function(text){
			var arr1 = text.split('—');
			var str = arr1.slice(0,1)
			var str2 = arr1.slice(1);
			if(str2.length !== 0){
				return str+"—<b>"+str2+"</b>"
			} else{
				return str+"<b>"+str2+"</b>"
			}
			
		}
	});

	recipesApp.filter('points', function(){
		return function(text){
			return text + '...'
			
		}
	});