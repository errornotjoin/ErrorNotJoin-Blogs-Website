var Makeing_The_account = document.getElementById("Makeing_The_account")
var CreatIng_div = document.getElementById("CreatIng_div")
var What_i_made =document.getElementById("What_i_made")
Makeing_The_account.addEventListener("click", function Add_the_new_info()
{

    CreatIng_div.style.display = "Block"
    What_i_made.style.display = "none"
})
var date = ["","", "User Age:", "Account was made on:"]
var Submit_for_user_ceating_account = document.getElementById("Submit_for_user_ceating_account")
Submit_for_user_ceating_account.addEventListener("click", function adding_the_new_info()
{
    var How_name_user_info = 4;
    for(var x = 1; x <= How_name_user_info; x++)
    {
        var User_new_info = document.getElementById("User_INFO_" + x )
        var User_old_info = document.getElementById("old_User_info_" + x)
        if(x == 4)
        {
            User_old_info.innerHTML = User_new_info.value
            CreatIng_div.style.display = "none"
            What_i_made.style.display = "block"
        }
        else
        {
            User_old_info.textContent = date[x].toString() +" "+  User_new_info.value
        }
    }
})