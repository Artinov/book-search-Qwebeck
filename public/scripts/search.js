var $button = $("#searchButton")
var $form = $("#bookName")






$.ajax({
    url:"/search",
    method:"POST"
}).then(function(res)
{
    var books = res;
   
//    var newBooks = books.filter(function(book){
//         return  books.name==$form.val()
//     })


    
$button.click(function(){
console.log(res[0].name)

    console.log($form.val())

    books.forEach(function(book){
   if(book.name==$form.val()){
       console.log('ok')
   }

})
    
    // console.log(newBooks)



})

})