var User_name = ["ErrorNotjoin"]
var User_password = ["123456"]
var What_Page_i_m_om = document.getElementById("Sign_in")
switch(What_Page_i_m_om.textContent)
{
    case "Sign Up - ErrorNotJoin":
        Sign_up()
    
    break;
    case "Sign in - ErrorNotJoin":
        sign_in()
    break;
}
function Sign_up()
{
    var Sign_up_account = document.getElementById("Sign_up_account")
    Sign_up_account.addEventListener("click", function test()
        {
            var Sign_Up_User_name = document.getElementById("Sign_Up_User_name")
            var Sign_Up_Passworld = document.getElementById("Sign_Up_Passworld")
            for(var x = 0; x <= User_name.length; x++)
            {
                if(Sign_Up_User_name.value == User_name[x])
                {
                        console.log("This Name is In Use")
                        x = User_name.length
                }
                else
                {
                    console.log("Creating The Account...");
                    User_name.push(Sign_Up_User_name.value)
                    User_password.push(Sign_Up_Passworld.value)
                    x = User_name.length
                }
            }
        }
    )
}
function sign_in()
{
    var sign_in_input = document.getElementById("sign_in_input")
    sign_in_input.addEventListener("click", function Sign_in()
        {
            var Sing_in_user_name = document.getElementById("Sing_in_user_name")
            var Sing_in_Password = document.getElementById("Sing_in_Password")
            for(var x = 0; x <= User_name.length; x++)
            {
                if(Sing_in_user_name.value == User_name[x] && Sing_in_Password.value == User_password[x])
                {
                        console.log("Well Done")
                        document.URL;
                        x = User_name.length
                }
                else
                {
                    console.log("Your User Name Or PassWorld");
                    x = User_name.length
                }
            }
        }
    )
}
