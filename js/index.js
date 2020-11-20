//for show the star rating
var hotels = [
    {
        id:1,
        name:"Lantern Restaurant",
        desc:"Luxury hotel's Chinese restaurant featuring an outdoor terrace & a sleek, wood-lined interior.",
        rating:3,
        img:"images/c1.png",
        keywords:["chinese","lantern"]
    },
    {
        id:2,
        name:"Dakshin  Restaurant",
        desc:"The restaurant has special menu for veg lovers also. I tried Veg Box and it has everything what a South Indian wants. The taste is very nice , mainly, bisibelebath",
        rating:4,
        img:"images/c2.png",
        keywords:["southindian","veg","dakshin"]
    },
    {
        id:3,
        name:"Mohal biryani",
        desc:"Finest Briyani ( Seeraga samba rice not Basmati Rice)ever tasted . Gentle to your stomach.",
        rating:3.4,
        img:"images/c3.png",
        keywords:["biryani","mohal"]
    },
    {
        id:4,
        name:"The Grocery",
        desc:"Fantastic dinner. Food and service were excellent. Felt like appropriate precautions were in place with distanced outdoor seating and mandatory masks.",
        rating:2.6,
        img:"images/c4.png",
        keywords:["grocery","dinner"]
    }
];
var temp;
$(document).ready(()=>{
    
    temp = hotels;
    temp.map((e)=>{
        var hotelcard ='<div class="card col-lg-3 col-11 mx-4 col-md-5 mb-2 ml-md-5" style="width: 18rem;" id='+e.id+'>'+
        '<img class="card-img-top mt-2" src='+e.img+' alt="Card image cap">'+                
        '<div class="card-body">'+
          '<h5 class="card-title">'+e.name+'</h5>'+
          '<p class="card-text">'+e.desc+'</p>'+
        '</div>'+
        '<div class="card-footer ">'+
          '<div class="rating" data-rate-value='+e.rating+'></div>'+
        '</div>'+
        '</div>';
        $('.Restaurants').append(hotelcard);
    });
    
    $('.cuisines').change((event)=>{
      var filters = [];
      var checks = document.getElementsByClassName('cuisines');
      for(var i=0;i<checks.length;i++)
      {
         if(checks[i].checked===true)
         {
          $(checks[i]).addClass('selected');
         }
      }
    });
    $(".rating").rate();
  });


   

var options = {
max_value: 6,
step_size: 0.8,
readonly: false,
change_once: false,
only_select_one_symbol: false, 
}
$(".rating").rate(options);

function search()
{
  $(".hideables").hide();
//   if($('#searchcontent').val()!='' ||  $('#searchcontent').val()!=null)
// {
//     var keyword = $('#searchcontent').val();
//     temp.filter((e)=>{
//        if(e.keywords.includes(keyword))
//        {
//         $('.card').not('#'+e.id).addClass('d-none');  
//        }
//     });
// }
}



  
function showagain()
{    
if($('#searchcontent').val()=='' ||  $('#searchcontent').val()==null)
{

    var keyword = $('#searchcontent').val()
    $(".hideables").show();

}
}




