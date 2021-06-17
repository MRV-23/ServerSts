
class Inicio{

    static init(){

        Inicio.Nombre=localStorage.getItem("nombreUser");
        Inicio.Imagen="img/mini/sts2222.jpg"
    }

    static recursos(){
        document.getElementById("nombre").innerHTML =localStorage.getItem("nombreUser");
        $('#imagenuno').attr('src',localStorage.getItem("avatar"))
        $('#imagendos').attr('src',localStorage.getItem("avatar"))

    }
    static autenticacion(){



        fetch("http://192.168.0.249/sts-backend/backend/api/v1/usuarios",{
            
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "x-api-key":localStorage.getItem("x-api-key")
            }
        })
        .then(response => response.json())
        .then( data => {

            if (data.status == "success" && data.result.code == 200) {
              //  Inicio.recursos()
           
            } else {
                let link=document.createElement('a');
                link.href="http://localhost/sts/pelon";
                document.body.appendChild(link);
                link.click();
                link.remove();
            }
        })
       

    }

//http://192.168.0.249/sts/img/no-image.jpg

    static main(){
       // alert("cargo inicio")
      
       // $('#imagenuno').attr('src', "http://192.168.0.249/sts/img/no-image.jpg")
      
        //Inicio.init()
        Inicio.autenticacion()
        //Inicio.recursos()
       
    }

}
Inicio.main();
console.log("entro js inico")