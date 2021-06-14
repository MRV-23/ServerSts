
class Asistencias{

    static init(){
        Asistencias.inicio = $('#fechaConsultaInicial')//fechaConsultaInicial-.fechaConsultaFinal
        Asistencias.fin = $('#fechaConsultaFinal')
        Asistencias.botonDescargar = $('#reportePersonalAsistencias');
        Asistencias.descarga = $('#descarga');
        Asistencias.htmlUsuarios = $('#dataPermisosUser');
        Asistencias.html = "";
        Asistencias.nombre=localStorage.getItem("nombreUser");
    }

    static descargaArchivo(e){
        if(Asistencias.inicio.val()=='' || Asistencias.fin.val() ==''){
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              );
           // alert("los valores estan vacios")
            return 0;
        }

        var Myheaders = new Headers({
            "x-api-key":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzY5OTc0NTEsImRhdGEiOnsiaWQiOiIyMCIsIm5vbWJyZSI6Ik1BUlRJTiBERSBKRVNVUyIsImFjY2VzbyI6IjMiLCJhdmF0YXIiOm51bGx9fQ.sCCsJltDhJD6KdyNxsIq_UmBkiC2lb5f_pKlhWC2UMU",

        })
        fetch("http://192.168.0.249/sts-backend/backend/api/v1/asistencias?inicio="+Asistencias.inicio.val()+"&fin="+Asistencias.fin.val()+"",{
            
            method:"GET",
            headers:Myheaders
        })
        .then(response => response.json())
        .then( data => {
            if (data.status == "success") {
                let ArrayData = data.result.msg.result.link;
                let link=document.createElement('a');
                link.href=ArrayData;
                document.body.appendChild(link);
                link.click();
                link.remove();
                    
            }else{
                let link=document.createElement('a');
                link.href="http://localhost/sts";
                document.body.appendChild(link);
                link.click();
                link.remove();
            }
        })
        .catch(error => {
            console.log(error)
        });

    }
    static recursos(){
        let n,y,m,d;
        document.getElementById("nombre").innerHTML =localStorage.getItem("nombreUser");
        $('#imagenuno').attr('src',localStorage.getItem("avatar"))
        $('#imagendos').attr('src',localStorage.getItem("avatar"))
       
        n =  new Date();//Año
        y = n.getFullYear(); //Mes
        m = n.getMonth() + 1;
        d = n.getDate();//Día
        if (m<10){
            m="0"+m; 
        } 
        if(d>=1 || d<=9){
            d="0"+d;
        }
        var date =y+"-"+m+"-"+d; //var date =d + "-" + m + "-" + y;
        //console.log("date: "+date)
        Asistencias.fin.val(date)
        Asistencias.inicio.val(date)

    }


    static main(){
        Asistencias.init()
        Asistencias.recursos()
    
        $("#reportePersonalAsistencias").click(function(e){
            e.preventDefault();
            Asistencias.descargaArchivo(e)
        });
    }

}
Asistencias.main();

