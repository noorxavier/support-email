# Explanation of the project 

## link of the project
[Click here](https://noorxavier.github.io/support-email/)

``` javaScript
function emailsend(){
    var params ={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message: document.getElementById("message").value,

    };const servidceId ="service_ktyb4pk";
const templateId="template_4pzwtkd";
emailjs.send(servidceId,templateId,params)
.then(
    res=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        // alert("email sent successfully");
    }
)
// .catch(err=>console.log(err))
.then(
    message => {
        if(message='OK'){
            swal("Successfully sent", "You clicked the button!", "success");
        }
        else{
            swal("Failed to send", "You clicked the button!", "error");
        }
    }
);
}

```
# Explanation of what is used in this js code
here i used EmailJs for email services 
in which firstly i created an account on that site and created email services.
## The important things to remember 
1. Public key which have to paste in the script tag field in Html code. and public key is present in account section in Emailjs.
2. Service id and Template id have to placed in javascript code .
3. and lastly i used sweet alert after the submit button 
``` javascript
swal("Good job!", "You clicked the button!", "success");
``` 
