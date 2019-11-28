// window.onload = cargar;

// function cargar() 
// {
//     document.getElementById("btn").onclick = register_user;
// }

$(document).ready(function() {
    url_base = 'http://localhost:8888/Ruben/LibraryAPI/public/index.php';

    $('button').click(function(){
        register();
    });
});

function get_user(){
    var name = $('#name').val();
    var email = $('#email').val();
    var password = $('#password').val();

    var data_user = {
        'name': name,
        'email': email,
        'password': password
    };

    return data_user;
}

function register()
{
    var data = get_user();

    $.ajax({
        url: url_base + "/api/userStore",
        type: "POST",
        data: data,
        dataType: 'json',
        success: function(response){
            console.log('trace');
        }
      });
}
        
// function register_user()
// {
//     var URL = "http://localhost:8888/Ruben/LibraryAPI/public/index.php/api/userStore";
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var data_user = {'name': name, 'email': email, 'password': password};

//     console.log(data_user);

//     $.ajax(URL,{
//         type: "POST",
//         data: data_user,
//       }).done(function(){
//           alert("Usuario registrado")
//       });
// }