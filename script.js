$(document).ready(function () {
   
    var numPages = $('#container .card').length;
    var perPage = 7;
    var count = 0;
    while (numPages >= 7) {
    numPages -= 7;
    count++;
    }
    if(numPages % 2 === 0){
        count = count;
    }else{
        count = count + 1;
    }
    
    $(".pagination").append("<li class='current-page active'><a class='btn btn-light' href='javascript:void(0)'>" + 1 + "</a></li>");

    for (var i = 2; i <= count; i++) {
      $(".pagination").append("<li class='current-page'><a class='btn btn-light' href='javascript:void(0)'>" + i + "</a></li>"); 
    }

    $(".pagination").append("<li id='next-page'><a href='javascript:void(0)' class='btn btn-light' aria-label=Next><span aria-hidden=true>&raquo;</span></a></li>");

    $(".pagination li.current-page").on("click", function() {
      if ($(this).hasClass('active')) {
        return false; 
      } else {
        var currentPage = $(this).index(); 
        $(".pagination li").removeClass('active'); 
        $(this).addClass('active'); 
        $("#container .card").hide(); 
        var grandTotal = perPage * currentPage; 

        for (var i = grandTotal - perPage; i < grandTotal; i++) {
          $("#container .card:eq(" + i + ")").show(); 
        }
      }

    });

    $("#next-page").on('click', function(){
        var currentPage = $(".pagination li.active").index();
        if(currentPage == count){
            return false;
        }else{
            currentPage++;
            $(".pagination li").removeClass("active");
            $("#container .card").hide();

            var grandTotal = perPage * currentPage;

            for(var i = grandTotal - perPage; i < grandTotal; i++){
                $("#container .card:eq("+ i +")").show();
            }

            $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); 
        }
    }); 

    $("#previous-page").on("click", function() {
        var currentPage = $(".pagination li.active").index(); 
        
        if (currentPage === 1) {
          return false; 
        } else {
          currentPage--; 
          $(".pagination li").removeClass('active'); 
          $("#container .card").hide(); 
          var grandTotal = perPage * currentPage; 
  
          
          for (var i = grandTotal - perPage; i < grandTotal; i++) {
            $("#container .card:eq(" + i + ")").show(); 
          }
  
          $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); 
        }
      });

      $('#container .card').css('display', 'none').slice(0, perPage).css('display', 'block');
});