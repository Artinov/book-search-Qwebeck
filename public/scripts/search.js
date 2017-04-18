var $button = $("#searchButton")




$button.click(function(){
var $formValue = $("#bookName").val()
console.log($formValue)
 var $booksWrapper = $("#books");



$.ajax({
    url:"/search",
    method:"POST",
    data: {
            "bookName": $formValue,
            
        },
    }).then(function(book){
        
        console.log(book);
        var books = book
         
        //   $booksWrapper.fadeOut($bookTemplate)

        books.forEach(function bookAppear(book) {
            var $bookTemplate = $("#template > div").clone();

            $bookTemplate.find("[data-book-name]").text(book.name);
            $bookTemplate.find("[data-book-author]").text(book.author);
            $bookTemplate.find("[data-book-image]").attr("src", book.picture);
            $bookTemplate.find("[data-book-tags]").text(book.tags);
            $bookTemplate.find("[data-book-link]").attr("href", "/book/" + book.id);
           
            $booksWrapper.append($bookTemplate);
        });
          
          
          

$("#btn").click(function(){
$("div #books > div").hide()
})


    })})


