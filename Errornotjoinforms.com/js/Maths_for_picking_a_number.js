var Views_arry = []

var Keeping_the_Views_number_for_info = 0 
var Keeping_the_Likes_number_for_info = 0
var Keeping_the_Dislikes_number_for_info = 0 
var Keeping_the_commites_number_for_info = 0

var random_number_for_views = Math.round(Math.random() * 5000)
var Main_code = document.getElementById("Main_code")
var Amout = 0 
switch(Main_code.textContent)
{
    case"ErrorNotjoin - ErrorNotJoin Blogs":
        Amout = 1
    break;
    case "User Made Forms":
        Amout = 3
    break;
    case "ErrorNotjoin Blogs - ErrorNotJoin Blogs":
        Amout = 7
        break;
}
for(var x = 1; x <= Amout; x++)
{

    var Views =  Math.round(Math.random() * random_number_for_views + 1 )
    Views_arry.push(Views)
    if(Views > 100)
    {
        //getting the items 
        var Likes = document.getElementById("Likes_" + x)
        var User_views = document.getElementById("Views_" + x)
        var Dislikes = document.getElementById("Dislikes_" + x)
        var Comments  = document.getElementById("Comment_" + x)

        //Leting Js To Pick Random upTo Number  
        var Like_And_Dislike_and_Commites_div = Math.round(Math.random() * 5  ) 
        var Like_number = Math.round(Math.random() * Views / Like_And_Dislike_and_Commites_div)
        var dislikes = Math.round(Math.random() * Views / Like_And_Dislike_and_Commites_div )
        var Commentss = Math.round(Math.random() * Views / Like_And_Dislike_and_Commites_div / 2)
        
        if(Like_number == "Infinity" || Like_number == "Nan" )
        {
            //Redoing Random 
            x--
        }
        else
        {

            //Giveing Them The Numbers For The Random number
            User_views.innerHTML = "Views:<br/> " + Views
            Likes.innerHTML      = "Likes:<br/> " + Like_number
            Dislikes.innerHTML   = "Dislike:<br/> " + dislikes
            Comments.innerHTML   = "Comments:<br/> " + Commentss

            //Saveing_the_number_so_can_be_use_Other_function
            Keeping_the_Views_number_for_info += Views
            Keeping_the_Likes_number_for_info += Like_number
            Keeping_the_Dislikes_number_for_info += dislikes
        }
    }

    else
    {
        x--
    }
    if(x == Amout)
    {
            Puting_the_new_nubmer_to_use(Keeping_the_Views_number_for_info, Keeping_the_Likes_number_for_info, Keeping_the_Dislikes_number_for_info )
    }

}
function Puting_the_new_nubmer_to_use(total_views, total_Likes, total_dislike)
{
    if(Amout == 3)
    {
                var Total_view = document.getElementById("Total_view")
                Total_view.innerHTML = "Views:<br/> " + total_views}
    else if(Amout == 7)
    {
        var Total_view = document.getElementById("Total_view")
        var Total_Likes = document.getElementById("Total_Likes")
        var Total_Dislikes = document.getElementById("Total_dislikes")
        Total_Likes.innerHTML = "Likes:<br/> " + total_Likes
        Total_view.innerHTML = "Views:<br/> " + total_views
        Total_Dislikes.innerHTML = "Dislike:<br/> " +total_dislike
    }

}