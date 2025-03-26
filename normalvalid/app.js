const form = document.getElementById("form");
const usernameinput = document.getElementById("username");
const emailinput = document.getElementById("email");
const passwordinput = document.getElementById("password");
const password2input = document.getElementById("password2");

function showerror(input, message) {
     alert(message);
}


function validemail(email) {
     return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function validinput(input) {
     let isvalid = true;
     if (usernameinput.value.trim() === "") {
          showerror(usernameinput, "user name is required");
          isvalid = false;
     }
     else {
          //showsuccess(usernameinput);

     }


     if (emailinput.value.trim() === "") {
          showerror(emailinput, "emailis required");
          isvalid = false;
     }
     else if (!validemail(emailinput.value)) {
          showerror(emailinput, "invalid email");
          isvalid = false;
     }
     else {
          //showsuccess(emailinput);
     }

     if (passwordinput.value.trim() === "") {
          showerror(passwordinput, "password required");
          isvalid = false;
     }
     else if (passwordinput.value.length < 8) {
          showerror(passwordinput, "at least 8");
          isvalid = false;
     }
     else {
          // showsuccess(passwordinput);
     }


     if (password2input.value.trim() === "") {
          showerror(password2input, "confirm password required");
          isvalid = false;
     }
     else if (password2input.value !== passwordinput.value) {
          showerror(password2input, "password don;t match");
          isvalid = false;
     }
     else {
          //showsuccess(password2input);
     }
     return isvalid;

}

form.addEventListener("submit", function (e) {
     e.preventDefault();
     if (validinput()) {
          alert("sumitted successfully");
          form.reset();
     }

});

