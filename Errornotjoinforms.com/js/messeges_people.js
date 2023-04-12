var Open_or_close = false
var Chating_one = document.getElementById("Chating_one")
var Messages = document.getElementById("Messages")
var You_is_this_going = document.getElementById("You_is_this_going")
var Submit = document.getElementById("Submit")
var User_Input = document.getElementById("User_Input")
var The_number = ""
var The_bot_name = ""
function Getting_The_Items_and_Numbers(Numbers)
{
    
    for(x = 1; x < 4; x++)
    {
        var Messages_Picker = document.getElementById("Messages_" + x)
        var User_1 = document.getElementById("User_" + x )
        if(x == Numbers)
        {
            var Name_3 = document.getElementById("Name_" + Numbers)
            You_is_this_going.textContent = Name_3.textContent
            Messages_Picker.style.display = "inline"
            User_1.style.display = "inline"
            console.log(Numbers);
            The_number = Numbers
            The_bot_name = Name_3.textContent
            
        }
        else
        {
            User_1.style.display = "none"
            Messages_Picker.style.display = "none"
        }

    }
    if(Open_or_close == false)
    {
        Open_or_close = true
        Chating_one.style.display = "inline"
        Chating_one.style.animation = "inc_The_width 2s"
        Messages.style.animation = "Desc_The_width 2s"
        setTimeout(The_New_style, 2000)
    }


}
Submit.addEventListener("click", function New_updateing(New_number)
{
    var A_lot_of_hellos = ["Hello", "Hi", "Yo"]
    var Agin = ["I'm Ok", "I'm good", "I'm Fine", "Im ok how you"]
    var a = ["My Name Is: " + The_bot_name, "Why", "My name is; " + The_bot_name + " What Is Yours"]
    var The_aw = ""
    console.log(The_number);
    switch(User_Input.value)
    {
        case "Hello":
        case "hello":
        case "Hi":
        case "hi":
        case "Yo":
          var What = Math.round(Math.random() * 2)
          The_aw = A_lot_of_hellos[What]
          Making_the_items_for_the_user_and_bot(The_aw)
        break;
        case "How Are You":
        case "Hows You":
        case "Are You Ok":
        case "how are you":
        case "how you":
            var What = Math.round(Math.random() * 3)
            The_aw = Agin[What]
            Making_the_items_for_the_user_and_bot(The_aw)
        break;
        case "What Is Your Name":
        case "what is your name":
            var What = Math.round(Math.random() * 2)
            The_aw = a[What]
            Making_the_items_for_the_user_and_bot(The_aw)
        break;

    }
})
function Making_the_items_for_the_user_and_bot(The_aw)
{
    //getting/making the items
    var the_Background = document.getElementById("Messages_" + The_number)
    var The_body = document.createElement("div")
    var The_user_Name_Ling = document.createElement("a")
    var The_text_for_the_TUNL = document.createElement("p")
    var The_main_text = document.createElement("p")
    //the class name
    The_body.className = "The_Bot_Messages"
    //textconte
    The_text_for_the_TUNL.textContent = The_bot_name
    The_main_text.textContent = The_aw
    //appenchild(What Is Going on here)
    the_Background.appendChild(The_body)
    The_body.appendChild(The_user_Name_Ling)
    The_body.appendChild(The_main_text)
    The_user_Name_Ling.appendChild(The_text_for_the_TUNL)
    //
    
}
function The_New_style()
{
    Messages.style.width = "30%"
    Messages.style.borderTopRightRadius = "0px"
    Messages.style.borderBottomRightRadius = "0px"
    Chating_one.style.width = "100%"
}