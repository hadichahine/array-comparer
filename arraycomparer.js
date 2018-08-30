module.exports = function(firstArray,secondArray,comparingFunction) {
	if(firstArray.length != secondArray.length)
      		return false;
    	for(var i = 0;i < firstArray.length;i++)
      		if(!comparingFunction(firstArray[i],secondArray[i]))
        		return false;
    	return true;	
}
