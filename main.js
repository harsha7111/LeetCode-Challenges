var detectCapitalUse = function(word) {
   let array = word.split('');
    if(array.every(value => value === value.toLowerCase()) || array.every(value => value === value.toUpperCase()) ){
        return true;
    }
    
    if(array[0]=== array[0].toUpperCase()) {
        array.splice(0,1);
        if(array.every(value => value === value.toLowerCase()) )
            return true;
        else 
            return false;
    }
    else {
         return false;
    }
           
};
