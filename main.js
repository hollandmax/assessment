$(document).ready(function() {
  var olapicEndpoint = "https://photorankapi-a.akamaihd.net/customers/215757/media/recent?rights_given=0&include_tagged_galleries=0&auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2";

  $.ajax({
    dataType: "json",
    url: olapicEndpoint,
    type: "GET",
    data: {
      format: "json"
    },
    success: function(data) {
var mediaArray = data.data._embedded.media;
      mediaArray = mediaArray.slice(0,5);

        for(x=0; x < mediaArray.length; x++){
          var geturl = mediaArray[x]
          if(x > 0){ var  images = geturl.images.mobile;
          } else{
          images = geturl.images.normal;}
      $('.wrapper').append("<div class = 'img"+ x + " '><img src='" + images + "' /></div>");

        }

      },

      error: function(error){
        console.log(error);
    }

    });

    })
