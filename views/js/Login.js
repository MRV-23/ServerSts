class Login{

  /*  static init(){

        Login.usuarioInicio = $('#usuarioIngreso');
        Login.usuarioPassword = $('#passwordIngreso');
        Login.htmlUsuarios = $('#dataPermisosUser');
        Login.html = "";
        //Login.nombre=localStorage.getItem("x-api-key");
        Login.validar="nada";

    }

    static validarIngreso(caja){
         alert("entro validar")
        caja.value = caja.value.replace(/[0-9,*+\?^{}()|[\]\\]/g,"");

    }

    static validarUsuario(){
        
        fetch("http://192.168.0.249/sts-backend/backend/api/v1/autenticacion",{
            
                method:"POST",
                body: JSON.stringify({
                usuario:Login.usuarioInicio.val(),
                pass:Login.usuarioPassword.val()
            
            })
        })
        .then(response => response.json())
        .then( data => {
            if (data.status =='success' && data.result.code == 200) {
                console.log("entrooooooo")
                let link=document.createElement('a');
                //link.href="http://localhost/sts/views/modulos/inicio.php";
                link.href="http://localhost/sts/views/modulos/inicio.php";
                document.body.appendChild(link);
                link.click();
                link.remove();
                localStorage.setItem("x-api-key", data.result.msg.result.token);
                localStorage.setItem("nombreUser", data.result.msg.result.nombre);
                localStorage.setItem("avatar", data.result.msg.result.avatar);

                Login.recursos(data.result.msg.result.total,data.result.msg.result.nombre,data.result.msg.result.acceso,data.result.msg.result.avatar);
                
            } else {
                document.getElementById('alertainicio').innerHTML="<div class='alert alert-warning' role='alert'>"
                                                                +"<strong>ERROR!</strong>El nombre de usuario o la contraseña son incorrectos"
                                                            +"</dic>"

            }

        })
        .catch(error => {
            console.log(error)
        });

    }

    static recursos(total,nombre,acceso,avatar){

        document.cookie=localStorage.getItem("x-api-key");
        
        
    }*/



    static main(){
        Login.init()
        //alert("Holaaaroti")
       
        $('#usuarioIngreso').on('input',function(e) {
             e.preventDefault()
            alert("click")
           
            this.value = this.value.replace(/[0-9,*+\?^{}()|[\]\\]/g,"");
        });
        //$('#iniciarSesion').click(function(e){
            $('#iniciarSesion').on('click',function(e) {
           e.preventDefault();
           alert("entroooooo")
           console.log("entro al click")
           
           // Login.validarUsuario();

        });
    }

}
//Login.main();
console.log("entro")
$('#iniciarSesion').click(function(e){
          
    console.log("entro al clik")
    e.preventDefault();
    alert("hola js ")

});
let link=document.createElement('a');
link.href="http://localhost/sts/views/modulos/inicio.php";
                
                link.click();
                link.remove();