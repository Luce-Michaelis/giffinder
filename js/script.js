// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
  function giphyURLWithSearchTerm(searchTerm) {
  
    
    // write a function that will return a url for the giphy API with
    // the searchTerm provided in the parameters
}

function appendImageToBody(srcURL) {
    $("body").append('<img src="https://giphy.com/stickers/namslam-dogdings-3og0IJHMqlmPzy7sGs">');
 
}

function callGiphyAPIWithSearchTerm(searchTerm) {
    $.ajax({
      url: "https://api.giphy.com/v1/stickers/search?q=dog&api_key=dc6zaTOxFJmzC",
      method: "GET",
      success: function(response) {
          console.log(response);
         console.log(response.data[4]);
         var first = response.data[4] ;
         console.log(first.type);
           console.log(first.title);
        
      },
    }); 
}
callGiphyAPIWithSearchTerm("dog");
  
  
  
});
