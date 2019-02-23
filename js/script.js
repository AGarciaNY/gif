/*global $*/

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
  //giphyURLWithSearchTerm();
  $("#gif").click(function(){
    var input= $("#srch-term").val();
    callGiphyAPIWithSearchTerm(input);
  });
});

/*
function giphyURLWithSearchTerm(searchTerm) {
    // write a function that will return a url for the giphy API with
    // the searchTerm provided in the parameters
    var newUrl= "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
    return newUrl;
}
*/
function appendImageToBody(srcURL) {
    // write a function that will append an <img> to the body with the
    // URL provided in the parameters
    $('#here').append('<img src=' + srcURL + '>');
}
function callGiphyAPIWithSearchTerm(searchTerm) {
  var newUrl= "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
    $.ajax({
      url: newUrl,
      method: "GET",
      success: function(response) {
        
        for(var i=0;i < response.data.length ; i++){
          var url = response.data[i].images.original.url;
          appendImageToBody(url);
          
           
        }
       
      console.log(response);
      console.log(response.data.length);
      },
    }); 
}
