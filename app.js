let email= [];
let pass = [];
let acc = prompt("How many acounts u want to create?");
for(i=1;i<=acc;i++){
let userInputemail=prompt("Enter your email address:") ;
let userInputPassword = prompt("Enter your password:");
if(userInputemail.includes("@") + userInputemail.includes(".") && userInputPassword.length >=3){
alert("Account created successfully");
console.log("Email = ",userInputemail +"Password =", userInputPassword  );
email.push(userInputemail);
pass.push(userInputPassword);
}
else{
    alert("Invalid Email Correct Email and Try again  ");
     i--;
}
}
alert("Now login with the account you created");
let userEmail = prompt("Enter your Email");
let userPass = prompt("Enter your Password");

for (let i = 0; i < email.length; i++) {
if(userEmail === email[i]  && userPass === pass[i]){ 
        isFound = true;
        alert("login Successfully");
    }
}
if(isFound = false){
    alert("Enter Valid Email or password");
}
alert("Your All Accounts Show in Console ");
alert("Thanks For visit our Site");

    




















