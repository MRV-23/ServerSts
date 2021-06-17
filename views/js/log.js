
class Login{

    static init(){
 
         Login.usuarioInicio = $('#usuarioIngreso');
         Login.usuarioPassword = $('#passwordIngreso');
         Login.htmlUsuarios = $('#dataPermisosUser');
         Login.html = "";
         Login.nombre=localStorage.getItem("x-api-key");
         Login.validar="nada";
 
     }
 
      static validarIngreso(caja){
          alert("entro validar")
         caja.value = caja.value.replace(/[0-9,*+\?^{}()|[\]\\]/g,"");
         //let x = Login.usuarioInicio.val()
     }
 
     static validarUsuario(){
        console.log("usuaro:"+Login.usuarioInicio.val()+" contraseña:"+Login.usuarioPassword.val())
        //let usuario =Login.usuarioInicio.val(),pass=Login.usuarioPassword.val();
         fetch("http://192.168.0.249/sts-backend/backend/api/v1/autenticacion",{

                 method:"POST",
                 body: JSON.stringify({
                 //suario:Login.usuarioInicio.val(),
                 //ass:Login.usuarioPassword.val()
                 usuario:"jesus.rubio",
                 pass:"pruebas123"
             })
         })
         .then(response => response.json())
         .then( data => {
            console.log("data: ")
             if (data.status =='success' && data.result.code == 200) {
                 let link=document.createElement('a');
                 link.href="inicio";
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
             console.log("error es: ->"+error)
         });
 
     }
 
     static recursos(total,nombre,acceso,avatar){
 
         document.cookie=localStorage.getItem("x-api-key");
         
         
     }
 
 
 
     static main(){
         Login.init()
         $('#usuarioIngreso').on('input',function(e) {
             this.value = this.value.replace(/[0-9,*+\?^{}()|[\]\\]/g,"");
         });
         $('#iniciarSesion').click(function(e){
           
            
             e.preventDefault();
             Login.validarUsuario();
 
         });
     }
 
 }
 Login.main();
 


