var cheese = 0
function Drop_down_for_errornojoin_form(The_Name_of_the_button){
    var Drop_down = document.getElementById("Drop_down_" + The_Name_of_the_button)
    if(Drop_down.style.visibility == "visible")
    {
        Drop_down.style.visibility = "hidden"
    }
    else
    {
        Drop_down.style.visibility = "visible"
    }
}
