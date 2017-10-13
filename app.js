var token = '245346123.1677ed0.e8c175e634d049b3afc9674e108f8365',
userId  = '245346123'
numPhotos = 4;
$.ajax({
      url: 'https://api.instagram.com/v1/users/self/media/recent',
      dataType: 'jsonp',
      type: 'GET',
      data: {access_token: token, count: numPhotos},
      success: function(data){
        for( x in data.data ){
          $('.carousel-inner').append('<img class="item" src="'+data.data[x].images.low_resolution.url+'"/>')
          console.log(data);

        }
      },
      error: function(data){
        console.log(data);
      }
})
