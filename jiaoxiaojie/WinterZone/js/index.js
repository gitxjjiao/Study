 
             $(document).ready(function(){
           
           
          $("#accordion").on('hide.bs.collapse show.bs.collapse','.collapse' ,function (e) {
                   var $this= $(this)
    $this.prev().find("span").toggleClass("plus");
    $this.prev().find("span").toggleClass("minus");
            });
            


            
            $(".tu").click(function(){
                $(".tan").css("display","block");
            });
            
            $(".cuo").click(function(){
               $(".tan").css("display","none");
           }); 
           
           
           
            
            $(".kai").click(function(){
              $(".tai").css("display","block");
          }); 
             
           
           $(".tah1").click(function(){
               $(".tahfd").css("display","block");
                $(".tah").css("display","none");
           }); 
          
            $(".tah11").click(function(){
                $(".tahfd").css("display","none");
                 $(".tah").css("display","block");
            }); 
            
            $(".tah2").click(function(){
                 $(".tai").css("display","none");
            });
             
         $(function(){  
        $(".kai").click(function(){  
            
            var _this = $(this);//将当前的img元素作为_this传入函数  
            imgShow("#i3", _this);
            $(".tha1").click(function(){
                 imgShow("#i4", _this);
                
            });
            
        });  
         function imgShow(i3, _this){  
         var src = _this.attr("src");//获取当前点击的img元素中的src属性  
         $(i3).attr("src", src);//设置#bigimg元素的src属性
         $(i4).attr("src", src);
         
         }
             $("#lan0").click(function(){
                  $(".lan").css("display","block");
             }); 
             $("#close").click(function(){
                  $(".lan").css("display","none");
             }); 
             
             
             });  
          
        
    }); 
    
    
  
   
          
          