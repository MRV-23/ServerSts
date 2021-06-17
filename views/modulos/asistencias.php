<div class="content-wrapper">
    <!-- Main content -->
    <section class="content">
      <!-- Small boxes (Stat box) -->
      <div class="box">
        <div class="box-header with-danger ">
          <h3 class="box-title text"><i class="fa fa-file-excel-o icono-asistencias" ></i > Reporte Asistencias </h3>
          <div class="box-tools pull-right">
            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"title="Collapse">
            <i class="fa fa-minus"></i></button>
            <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
            <i class="fa fa-times"></i></button>
          </div>
        </div>
        <hr>
        <div class="box-body">
        <!-- cont-->
          <form method="post">  
            <div class="max1000">
              <div class="form-group">
                <div class="row">
                  <div class="col-md-6">
                    <label>Fecha inicial</label>
                    <i class="fa fa-check-circle text-green"></i>
                    <div class="input-group">
                        <div class="input-group-addon infocolor" >
                          <i class="fa fa-calendar-plus-o"></i>        
                          </div>
                          <input type="date" class="textoMay form-control" name="fechaConsultaInicial" id='fechaConsultaInicial'>
                         <!-- <input type="date" class="textoMay form-control" name="fechaConsultaInicial" value="<?php echo date("Y-m-d");?>"> -->
                        </div>
                    </div>
                    <div class="col-md-6">
                      <label>Fecha final</label>
                      <i class="fa fa-check-circle text-green "></i>
                      <div class="input-group ">
                          <div class="input-group-addon infocolor">
                            <i class="fa fa-calendar-plus-o"></i>        
                          </div>
                          <!--<input type="date" class="textoMay form-control" name="fechaConsultaFinal" value="2021-04-23"> -->
                          <input type="date" class="textoMay form-control" name="fechaConsultaFinal" id="fechaConsultaFinal"> 
                      </div>
                    </div>
                    <hr>
                    <hr>
                    <hr>
                    <div class="row">
                      <div class="col-md-12 estilos-centrar" style="text-align: center;">
                            <button type="submit"  name="reportePersonalAsistencias" id='reportePersonalAsistencias'  class="btn btn-success btn-lg"><i class="fa fa-download"></i> Descargar</button> 
                      </div>
                    </div>
                </div>
            </div>    
          </form> 
        </div> 
      </div> 
    </section>
    <!-- /.content -->
  </div>