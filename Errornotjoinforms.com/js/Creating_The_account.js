var Makeing_The_account = document.getElementById("Makeing_The_account")
Makeing_The_account.addEventListener("click", function Add_the_new_info()
{
    var CreatIng_div = document.getElementById("CreatIng_div")
    CreatIng_div.style.display = "Block"
    What_i_made.style.display = "none"
})
var Submit_for_user_ceating_account = document.getElementById("Submit_for_user_ceating_account")
Submit_for_user_ceating_account.addEventListener("click", function adding_the_new_info()
{
    var How_name_user_info = 4;
    for(var x = 1; x <= 4; x++)
    {
       var User_new_info = document.getElementById("User_INFO_" + x )
       var User_old_info = document.getElementById("old_User_info_" + x)
       if(x == 4 || User_new_info.value != "<script>")
       {
        User_old_info.innerHTML = User_new_info.value
       }
       else if(User_new_info.value == "<script>")
       {
        console.log("Error");
       }
       else
       {
        User_old_info.textContent = User_new_info.value
       }
    }
})