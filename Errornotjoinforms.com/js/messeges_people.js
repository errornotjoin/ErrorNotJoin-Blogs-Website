var is_The_People_messeges_opne = false
var Messages = document.getElementById("Messages")
var Chating_one = document.getElementById("Chating_one")
function getting_the_NPC_name(User_name)
{
  switch(User_name)
  {
    case "King of Error":
      Open_And_Letting_the_user_to_talk(User_name, 1)
    break;
    case "Lord Cuts":
      Open_And_Letting_the_user_to_talk(User_name, 2)
    break;
    case "Lord Cheese":
      Open_And_Letting_the_user_to_talk(User_name, 3)
    break;
  }
}
function Open_And_Letting_the_user_to_talk(User_name, Numberss)
{
  if(is_The_People_messeges_opne == true)
  {
    Doing_things(User_name, Numberss)
  }
  else
  {
    Messages.style.animation = "Desc_The_width 2s"
    Chating_one.style.animation = "inc_The_width 3s "
    Chating_one.style.display = "inline"
    setTimeout(Messages.style.width = "30%", Messages.style.borderTopRightRadius = "0px", Messages.style.borderBottomRightRadius = "0px", 2000)
    is_The_People_messeges_opne = true
    Doing_things(User_name, Numberss)
  }
}

function Doing_things(User_name, Numberss)
{
  var You_is_this_going = document.getElementById("You_is_this_going")
  You_is_this_going.textContent = User_name
  for(var x = 1; x <=3; x++)
  {
    if(x == Numberss)
    {
      var Messages_2 = document.getElementById("Messages_" + Numberss)
      var User_1 = document.getElementById("User_" + Numberss)
      Messages_2.style.display = "inline"
      User_1.style.display = "inline"
    }

    else
    {
      var Messages_2 = document.getElementById("Messages_" + x )
      var User_1 = document.getElementById("User_" + x)
      Messages_2.style.display = "none"
      User_1.style.display = "none"
    }
   
  }
  Letting_the_user_talk(User_name, Numberss)
}

function Letting_the_user_talk(User_name , Numberss)
{
    var User_Input = document.getElementById("User_Input")
    var Submit = document.getElementById("Submit")
    var The_aw = ""
    var Random_aw = ["You Can See My Name Top Of This Messeges", "My User Name Is " + User_name, "I Don't Know"]
    var Random_aw1 = ["Hi", "Hello", "yo"]
    Submit.addEventListener("click", function Add_Items()
    {
      switch(User_Input.value)
      {
        case "Hello":
        case "hi":
        case "Hi":
        case "hello":
          var Random = Math.round(Math.random() * Random_aw1.length)
          The_aw = Random_aw1[Random]
          Making_The_bot_bob(The_aw, Numberss, User_name)
        break;
        case "Who Are You":
        case "who are you":
          The_aw = "Testing......"
          Making_The_bot_bob(The_aw, Numberss, User_name)
        break;
        case "what is your name":
        case "Your Name Is ?":
        case "your name is ?":
        case "your name is?":
          var Random = Math.round(Math.random() * Random_aw.length)
          The_aw = Random_aw[Random]
          Making_The_bot_bob(The_aw, Numberss, User_name)
        break;

      }
    })
}
function Making_The_bot_bob(The_aw, Numberss, User_name)
{
  var User_time = Date.now()
  
  
  //Makeing/Getting The Bot
  var Messages_2 = document.getElementById("Messages_" + Numberss)
  var The_body = document.createElement("div")
  
  var getting_the_user = document.createElement("a")
  var The_user_name = document.createElement("p")
  var The_bot_text = document.createElement("p")
  var The_time_that_it_sent = document.createElement("p")
  //the Class Name 
  The_body.className = "The_Bot_Messages"
  //The TextContent 
    The_user_name.textContent = User_name
    The_bot_text.textContent = The_aw
    The_time_that_it_sent.textContent = User_time
  //append

  Messages_2.appendChild(The_body)
  The_body.appendChild(getting_the_user)
  getting_the_user.appendChild(The_user_name)
  The_body.appendChild(The_bot_text)
  The_body.appendChild(The_time_that_it_sent)
}