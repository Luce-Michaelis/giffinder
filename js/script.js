// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function() {
    
    $("input").keyup(function(event){
    if (event.keyCode === 13){
      $("#search").click();
    }
  });
    function giphyURLWithSearchTerm(searchTerm) {

        var url = "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
        return url;

    }

    function appendImageToBody(srcURL) {
        $('#images').append('<img src=' + srcURL + '>');
    }

    function callGiphyAPIWithSearchTerm(searchTerm) {
        var i = Math.floor(Math.random() *(10+1));
        $.ajax({
            url: "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC",
            method: "GET",
            success: function(response) {
                var url = response.data[i].images.original.url;
                appendImageToBody(url);
            },
        });
    }

    $("#search").click(function() {
        var searchTerm = $("input").val();
        $("#images").append(callGiphyAPIWithSearchTerm(searchTerm));
    });

    $('#clear').click(function() {
        clearList();

    });

    function clearList() {
        $("#images").empty();
        $("#random-images").empty();

    }

    function randomGiphyURL() {

        var gifUrl = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC";
        return gifUrl;

    }

    function randomAppendImageToBody(srcURL) {

        $('#random-images').append('<img src=' + srcURL + '>');
    }

    function callRandomGiphyAPI() {
        $.ajax({
            url: randomGiphyURL(),
            method: "GET",
            success: function(response) {
                console.log(response);
                var url = response.data.images.original.url;
                randomAppendImageToBody(url);
            },
        });
    }


    $('#random').click(function() {
        $("#random-images").html(callRandomGiphyAPI);
    })
});
