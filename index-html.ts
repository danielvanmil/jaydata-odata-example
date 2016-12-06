import bp = vm;

let ctx;

/*
let ctx = new bp.Container( {
    name: 'oData',
    oDataServiceHost: 'http://localhost:8080/odata4/Basplus_vdb/Basplus_viewmodel',
    withCredentials: true,
    user: 'danielm',
    password: '$$Admin123'
});
*/

if (1 === 2) {

    ctx = new bp.Container({
        name: 'oData',
        oDataServiceHost: 'http://localhost:8080/odata4/public/vm'
    });

} else {

    // http://spintheblack.cloudapp.net/odata4/public/vm/$metadata
    ctx = new bp.Container({
        name: 'oData',
        oDataServiceHost: 'http://spintheblack.cloudapp.net/odata4/public/vm'
    });

}

/*
ctx.Genres.toArray().then(function(result: bp.Genres[]){
    for (var i = 0; i < result.length; i++){
        let genre:bp.Genres = result[i];
        console.log(genre.Description);
    }
});
*/

ctx.onReady().then(x => {

    /*
    x. = function( cfg ) {
        cfg[0].headers['X-SessionId'] = 'f05d1c1e-b1b9-5a2d-2f44-da811bd50bd5';
    };
    */

    // filter(genre => genre.Description == "ROCK")
    ctx.Genres.forEach(genre => {
        console.log(genre.Description);
    });

    if (1 == 1) {
        let genre = new bp.Genres();
        genre.Description = "MyGenre";
        genre.WholesalerId = 0;
        genre.Id = "___";
        ctx.Genres.add(genre);
        ctx.saveChanges().then(function() { alert("done!"); });
    }

    ctx.Articles.filter( article => article.Artist == "PEARL JAM" ).forEach( article => console.log( article.Id, article.Title, article.coverartarchiveUrl ) );
});
