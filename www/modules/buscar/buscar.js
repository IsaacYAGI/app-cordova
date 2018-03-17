

/*
url = 'https://coderwall.com/username.json?callback=?';
    datos = {};
    $.getJSON(url, datos, function(response){
        console.log(response);
    });*/

        
    
    // A $( document ).ready() block.

    $( document ).ready(function() {
        console.log( "ready!" );
        $( "#buscar" ).on( "click", function() {
            //console.log( $( this ).text() );
            var url = 'https://coderwall.com/username.json?callback=?';
            var datos = {};
            $.getJSON(url, datos, function(response){
                
                var imagen = response.user.thumbnail;
                console.log(imagen);
              
                $("#avatar").attr("src",imagen);
                

            });
          });
        
        
        
    });
    