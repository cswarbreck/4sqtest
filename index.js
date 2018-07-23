$(document).ready(function(){

    $('#conductSearch').click(function(){
        var enteredSearch = $('#enterSearch').val();
        var placeSearch = $('#placeSearch').val();

        var url = "https://api.foursquare.com/v2/venues/search?v=20180715&intent=browse&radius=1000&near="+placeSearch+"&limit=10&query="+enteredSearch+"&client_id=REZMP55CN0LQT4RIP5UPQ32EMXOUD0RMVV5KNKZL2NVYRQZY&client_secret=UJX5I0FH51FHWLLEW4Y2FSYYCVG0SCGLSGBGFCW5P3ZURQ1I&v=20180718";
        $.ajax({
          url: url,
          dataType: 'json',
          beforeSend: function (xhr) {
            if (xhr && xhr.overrideMimeType) {
              xhr.overrideMimeType('application/json;charset=utf-8');
            }
          },
          success: function(data){
            $('#searchResults').html('');  
            var venues = data.response.venues;
            $.each(venues, function(i,venue){
              $('ul').append(venue.name + '<br />');
            });
            
            $('#conductSearch').val('');        
  
            // Reverse the order of the unordered list items.
            // Credit to Stack Overflow: http://stackoverflow.com/questions/5347839/jquery-reversing-the-order-of-child-elements
            var list = $('ul');
            var listItems = list.children('li');
            list.append(listItems.get().reverse());


          }, // end of Search Function

          error:function(errorCommunication){
            alert("Did you complete both fields?");
          }

        }); //end of AJAX
        
    });// end of conduct search

    $('#enterSearch').keypress(function(typing){
        if (typing.which===13) {
          $('#conductSearch').click();
        }
      });
});