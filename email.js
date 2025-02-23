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
