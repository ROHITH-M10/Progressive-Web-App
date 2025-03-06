if ('serviceWorker' in navigator) {
    window.addEventListener('load' , () => {
        navigator.serviceWorker.register('./sw.js')
                  .then(registration => {
            console.log('Service Worker registered with scope:' , registration.scope);
        }).catch(error => {
            console.log('Service Worker registration failed:' , error);
        });
    });
}


function generateRandomPassword(){
    var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var smallLetters = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var symbols = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

    var passwordLength = 10;
    var password = "";

    var randomAll = capitalLetters + smallLetters + numbers + symbols;
    var lengthAll = randomAll.length;

    while (password.length < passwordLength){
        var randomNumber = Math.floor((Math.random())*lengthAll);
        //console.log(randomNumber);
        password = password + randomAll.charAt(randomNumber);
    }
    //console.log(password);
    document.getElementsByName("password-name")[0].value = password;
}

function copyPassword(){
    var getPassword = document.getElementsByName("password-name")[0].value;
    if (getPassword == "") {
        alert("Please Generate a Password First");
    }
    else{
        var copyText = getPassword;
        navigator.clipboard.writeText(copyText);
    }
   
}
