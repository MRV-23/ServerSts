<div class="content-wrapper validar">
    <!-- Content Header (Page header) -->
    <!-- Main content -->
    <section class="content">
      <div class="box">
        <div class="box-header with-danger ">
          <h3 class="box-title text"><i class="fa fa-users icono-asistencias" ></i > Agenda de Usuarioss </h3>
            <div class="box-tools pull-right">
              <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"title="Collapse">
              <i class="fa fa-minus"></i></button>
              <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
              <i class="fa fa-times"></i></button>
            </div>
        </div>
          <hr>
        <div class="tab-pane administrar-nominas active">
          <div class="box-body">
                <div class="max1000">
                  <form action="" name='formularios_permisos' method='POST'>
                      <!--<div class="row form-group">
                          <div class="col-md-6">
                              <label for="">2.-Nombre de usuario:</label>
                              <br>
                                  <div class="input-group">
                                      <div class="input-group-addon">
                                          <i class="fa fa-user"></i>
                                      </div>
                                      <input class="form-control iluminarIconoInput letras" type="text" id="numerouser" name="" dataname="">
                                  </div>   
                          </div>
                      </div> -->      
                      <br>
                      <div class="row">
                        <div class="col-md-6">
                          <b style="margin-top:8px;font-size:20px;">Total de usuarios : </b>
                          <span id="totalRegistrosNominas" style="font-size:20px;"></span>
                        </div>
                        <div class="col-md-6">
                          <div id="paginador" style='display: flex;justify-content:flex-end; '></div>
                        </div>
                      </div>
                     
                      
                      <div class="encabezadoTablaUsuarios" style="margin-top: 25px;">
                          <div class="encabezadoNumero" name="numerousuario" id="numerousuario">No.</div>
                          <div class="encabezadoNombre">Nombre</div>
                          <div class="encabezadoPuesto">Puesto</div>
                          <div class="encabezadoPermisos">Modificaciones</div>
                      </div>
                      <div id="dataPermisosUser" name= "dataPermisosUser"class="dataPermisosUser">  
                      </div>
                  </form>
              </div>
          </div>
        </div>
        <!-- /.row (main row) -->
      </div>
    </section>
    <!-- /.content -->
  </div>