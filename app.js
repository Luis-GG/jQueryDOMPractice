

$("#submit").on("click", function (e) {
    e.preventDefault();
    const title = $("#titleInput").val()
    const rating = $("#titleRating").val()
    if (title.length < 2) {
        alert("Title must have atleast two charaters.")
        return
    }

    $("ul").append(`<li>${title} - ${rating}<button id='del'>x</button></li>`);
    document.getElementById("titleInput").value = "";
    document.getElementById("titleRating").value = "";
});


$("ul").on("click", "#del", function () { $(this).parent().remove() });




//https://www.geeksforgeeks.org/how-to-sort-a-list-alphabetically-using-jquery/
function Ascending_sort(a, b) {
    return ($(b).text().toUpperCase()) <
        ($(a).text().toUpperCase()) ? 1 : -1;
}

$("#sortAZ").click(function () {
    $("li").sort(Ascending_sort).appendTo("ul");
})


function decending_sort(a, b) {
    return ($(b).text().toUpperCase()) >
        ($(a).text().toUpperCase()) ? 1 : -1;
}

$("#sortZA").click(function () {
    $("li").sort(decending_sort).appendTo("ul");
})


