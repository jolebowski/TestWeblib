
var token = '245346123.1677ed0.e8c175e634d049b3afc9674e108f8365',
numPhotos = 8;
$.ajax({
      url: 'https://api.instagram.com/v1/users/self/media/recent',
      dataType: 'jsonp',
      type: 'GET',
      data: {access_token: token, count: numPhotos},
      success: function(data){
        for( var x in data.data ){
          $('.carousel-inner').append('<div class="item "><img class="img-responsive center-block" alt="photosinstas" style="width:20%;" src="'+data.data[x].images.low_resolution.url+'"/></div>');
          $('#firstInner div:first').addClass('item active');

          console.log(x);
        }
      },
      error: function(data){
        console.log(data);
      }
});
