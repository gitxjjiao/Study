
            
            $(document).ready(function(){
             $("#all").click(function(){
                 console.log("12222")
                  $(".photo").css("display","block");
                 $(".photo").slideDown("slow");
                  $(".ide").css("display","none");
                     $(".ui").css("display","none");
                     $(".il").css("display","none");
                       $(".br").css("display","none");
                  
                  
                 
                 });
                $("#ide").click(function(){
                   $(".ide").css("display","block");
                   $(".ide").slideDown("slow");
                    $(".photo").css("display","none");
                      $(".ui").css("display","none");
                      $(".il").css("display","none");
                        $(".br").css("display","none");
                 });
             $("#uii").click(function(){
                $(".ui").css("display","block");
                $(".ui").slideDown("slow");
                 $(".il").css("display","none");
                  $(".br").css("display","none");
                  $(".ide").css("display","none");
                   $(".photo").css("display","none");
                
              }); 
              $("#ill").click(function(){
                  $(".il").css("display","block");
                  $(".il").slideDown("slow");
                   $(".ui").css("display","none");
                    $(".br").css("display","none");
                    $(".ide").css("display","none");
                     $(".photo").css("display","none");
                  
                 });
             $("#brd").click(function(){
                $(".br").css("display","block");
                $(".br").slideDown("slow");
                 $(".il").css("display","none");
                 $(".ui").css("display","none");
                  $(".ide").css("display","none");
                   $(".photo").css("display","none");
              }); 
               }); 