var $button = $("#searchButton")
var $form = $("#bookName")

$button.click(function(){
    console.log($form.val())
})





$.ajax({
    url:"/search",
    method:"POST"
}).then(function(res){console.log(res[0].name)})