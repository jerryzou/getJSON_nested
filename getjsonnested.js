$(document).ready(function () {
    $("#loadjson").on("click",function(){
       $.getJSON("thisweek.json",function(data){
            $("body").append("<ul id='list'></ul>");
            $.each(data.games, function(i,item){
                $.getJSON(item.url, function(data){
                    $("#list").append("<li>" + data.teams[0].name + " " + data.teams[0].score + " - " + 
                    data.teams[1].score + " " + data.teams[1].name + "</li>");
                });
            });
       });
    });
});