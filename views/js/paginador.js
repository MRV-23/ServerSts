class Paginador{

    static init(){
        Paginador.querySet=[];
        Paginador.page=0;
        Paginador.rows=0;
        Paginador.window=4;
        Paginador.elementoPaginador=undefined;
        Paginador.elementoTabla=undefined;
        Paginador.totalRegistros=0;

    }
    
    static pagination(querySet, page, rows) {

        var trimStart = (page - 1) * rows
        var trimEnd = trimStart + rows
        var trimmedData = querySet.slice(trimStart, trimEnd)
        
        var pages = Math.round(Paginador.totalRegistros / rows);
        
        return {
            'querySet': trimmedData,
            'pages': pages,
        }
        }
        
    static pageButtons(pages){

        var wrapper = Paginador.elementoPaginador;
        wrapper.innerHTML = ""
        var maxLeft = (Paginador.page - Math.floor(Paginador.window / 2))
        var maxRight = (Paginador.page + Math.floor(Paginador.window / 2))
        
        if (maxLeft < 1) {
            maxLeft = 1
            maxRight = Paginador.window
        }
        
        if (maxRight > pages) {
            maxLeft = pages - (Paginador.window - 1)
            
            if (maxLeft < 1){
                maxLeft = 1
            }
            maxRight = pages
        }
        
        
        
        for (var page = maxLeft; page <= maxRight; page++) {
            wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`
        }
        
        if (Paginador.page != 1) {
            wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-info">&#171; First</button>` + wrapper.innerHTML
        }
        
        if (Paginador.page != pages) {
            wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info">Last &#187;</button>`
        }
        
        $('.page').on('click', function(e) {
            e.preventDefault()
            Paginador.elementoTabla.innerHTML="";
        
            Paginador.page = Number($(this).val())
        
            Paginador.buildTable( Paginador.querySet,Paginador.page,Paginador.rows,Paginador.window,Paginador.elementoPaginador,Paginador.elementoTabla,Paginador.totalRegistros)
        })
        
        }
        
        
    static buildTable(data,page,rows,window,elementoPaginador,elementoTabla,totalRegistros){
        Paginador.querySet=data;
        Paginador.page=page;
        Paginador.rows=rows;
        Paginador.window=window;
        Paginador.elementoPaginador=elementoPaginador;
        Paginador.elementoTabla=elementoTabla;
        Paginador.totalRegistros=totalRegistros;

        var table = elementoTabla;
        elementoTabla.innerHTML='';
        var data = Paginador.pagination(Paginador.querySet, Paginador.page, Paginador.rows)
        var myList = data.querySet;

        for(let i = 0; i < data.querySet.length; i++){
                table.innerHTML+=data.querySet[i]
        }
        
        Paginador.pageButtons(data.pages)
        }

    static main(){
        Paginador.init();
    }
}
