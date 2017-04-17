var $button = $("#searchButton")
bookAppear()


function bookAppear(book) {
            var $bookTemplate = $("#template > div").clone();

            $bookTemplate.find("[data-book-name]").text(book.name);
            $bookTemplate.find("[data-book-author]").text(book.author);
            $bookTemplate.find("[data-book-image]").attr("src", book.picture);
            $bookTemplate.find("[data-book-tags]").text(book.tags);
            $bookTemplate.find("[data-book-link]").attr("href", "/book/" + book.id);
           
            $booksWrapper.append($bookTemplate);



$button.click(function(){
var $formValue = $("#bookName").val()
console.log($formValue)


$.ajax({
    url:"/search",
    method:"POST",
    data: {
            "bookName": $formValue,
            
        },
    }).then(function(book){
        console.log(book);
        var books = book

 var $booksWrapper = $("#books");

         books.forEach(function(){bookAppear()})
         //(function bookAppear(book) {
        //     var $bookTemplate = $("#template > div").clone();

        //     $bookTemplate.find("[data-book-name]").text(book.name);
        //     $bookTemplate.find("[data-book-author]").text(book.author);
        //     $bookTemplate.find("[data-book-image]").attr("src", book.picture);
        //     $bookTemplate.find("[data-book-tags]").text(book.tags);
        //     $bookTemplate.find("[data-book-link]").attr("href", "/book/" + book.id);
           
        //     $booksWrapper.append($bookTemplate);
        });




    })}
// {
//     var books = res;
   
//    var newBooks = books.filter(function(book){
//         return  books.name==$form.val()
//     })


    
// console.log(res[0].name)

//     console.log($form.val())
// var newBooks = books.filter(function(book){
//     return book.name == $form.val()
// })

            

//           newBooks.forEach(function(book) {
//             var $bookTemplate = $("#template > div").clone();

//             $bookTemplate.find("[data-book-name]").text(book.name);
//             $bookTemplate.find("[data-book-author]").text(book.author);
//             $bookTemplate.find("[data-book-image]").attr("src", book.picture);
//             $bookTemplate.find("[data-book-tags]").text(book.tags);
//             $bookTemplate.find("[data-book-link]").attr("href", "/book/" + book.id);

//             $booksWrapper.append($bookTemplate);
//         });
    
//     console.log(newBooks)



// })

// })