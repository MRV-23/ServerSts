
class Usuarios{

    static init(){

        Usuarios.usuarioInicio = $('#usuarioIngreso');
        Usuarios.usuarioPassword = $('#passwordIngreso');
        Usuarios.htmlUsuarios = $('#dataPermisosUser');
        Usuarios.html = "";
        Usuarios.htmlPaginador = [];
        Usuarios.nombre=localStorage.getItem("nombreUser");
        Usuarios.botton_pagina =1; //page
        Usuarios.row=10;
        Usuarios.totalRegistros=0;
        Usuarios.elementoUsiariosTotal = $('#totalRegistrosNominas');
        
    }

    static validarUsuario(){
        var renglon=0;
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
                Usuarios.recursos()
                Usuarios.totalRegistros = data.result.msg.result.total;
                Usuarios.elementoUsiariosTotal.text(Usuarios.totalRegistros)
                let ArrayData = data.result.msg.result.data;
                for (let valor of ArrayData){
                    renglon == 1 ? renglon =0 : renglon=1;
                    Usuarios.html="";
                    Usuarios.html+="<div class='divContenedorPadre renglon"+renglon+"'>"
                                                +"<div class='encabezadoNumero'><b>"+valor.id+"</b></div>"
                                                +"<div class='encabezadoNombre' style='justify-content: flex-start;'>"+valor.nombre+" "+valor.paterno+" "+valor.materno+"</div>"     
                                                +"<div class='encabezadoPuesto' style='justify-content: flex-start;'>"+valor.puesto+"</div>"
                                                +"<div class='encabezadoPermisos ' style='justify-content: flex-start;'><a class='btn btn-success mostrarPermisos mostrar' href='#modal_permisos' data-toggle='modal' data-target='#modal_permisos' id='permisos_form'>Mostrar</a></div>"
                                            +"</div>"
                                            Usuarios.htmlPaginador.push(Usuarios.html)
                }
                //Usuarios.htmlUsuarios.html(Usuarios.html)
                Paginador.buildTable(Usuarios.htmlPaginador,Usuarios.botton_pagina,Usuarios.row,5,document.getElementById('paginador'),document.getElementById('dataPermisosUser'),Usuarios.totalRegistros);
            } else {
                
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
        document.getElementById("nombre").innerHTML =localStorage.getItem("nombreUser");
        $('#imagenuno').attr('src',localStorage.getItem("avatar"))
        $('#imagendos').attr('src',localStorage.getItem("avatar"))
    }

    static main(){
        Usuarios.init()
        //Usuarios.recursos()
        Usuarios.validarUsuario();
        Usuarios.usuarioInicio.on('input', function(){Usuarios.validarIngreso(this);});
    }

}

$( document ).ready(function(){
    Usuarios.main();
});