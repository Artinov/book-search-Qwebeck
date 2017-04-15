var $button = $("searchButton")
var $form = $("input")
$.ajax({
    url:"/search",
    method:"POST"
}).then(console.log("work"))