let ctx = new Basplus_viewmodel.Container({
    name: 'oData',
    oDataServiceHost: 'http://teiid903-stbcs.rhcloud.com/odata4/Basplus_vdb/Basplus_viewmodel'
});
ctx.Genres.toArray().then(function(result){
    for (var i = 0; i < result.length; i++){
        console.log(result[i]);
    }
});
