var folder = "cities"

$(window).on("load", start );
$(document).on("click", "#add", push)
$(document).on("click", ".remove", remove)

function start(){
$("#list").empty();
fb.list(folder, add)
    
}

function add(entry){
    $("#list").append("<li class='list-group-item'>"+"<span class='badge bg-danger remove' data-id='"+entry.id+"'>X</span>"+entry.name+"</li>")
}

function push(){
var text=$("#text").val();
$("#text").val("");
const payload = {
    name:text
}

fb.push(folder,payload,start);
}

function remove(){
var id=$(this).attr("data-id");
fb.remove(folder, id, start)
}