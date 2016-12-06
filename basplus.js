(function(mod) {
    if (typeof exports == "object" && typeof module == "object") return mod(exports, require("jaydata/core")); // CommonJS
    if (typeof define == "function" && define.amd) return define(["exports", "jaydata/core"], mod); // AMD
    mod($data.generatedContext || ($data.generatedContext = {}), $data); // Plain browser env
})(function(exports, $data) {

    var types = {};

    types["vm.Articles"] = $data("$data.Entity").extend("vm.Articles", {
        Id: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 6,
            "key": true
        },
        WholesalerId: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        },
        Listprice: {
            "type": "Edm.Decimal"
        },
        Deliverytime: {
            "type": "Edm.Int32"
        },
        MaxBoDays: {
            "type": "Edm.Int32"
        },
        Fillingrate: {
            "type": "Edm.Int32"
        },
        Mechanical: {
            "type": "Edm.Decimal"
        },
        Stock: {
            "type": "Edm.Int32"
        },
        FrDtType: {
            "type": "Edm.Int32"
        },
        SortcodeId: {
            "type": "Edm.String",
            "maxLength": 1
        },
        GenreId: {
            "type": "Edm.String",
            "maxLength": 3
        },
        Artist: {
            "type": "Edm.String",
            "maxLength": 255
        },
        Title: {
            "type": "Edm.String",
            "maxLength": 255
        },
        Eancode: {
            "type": "Edm.String",
            "maxLength": 13
        },
        MajorId: {
            "type": "Edm.String",
            "maxLength": 2
        },
        OriginId: {
            "type": "Edm.String",
            "maxLength": 3
        },
        MediaId: {
            "type": "Edm.String",
            "maxLength": 5
        },
        SubmediaId: {
            "type": "Edm.String",
            "maxLength": 5
        },
        LabelId: {
            "type": "Edm.String",
            "maxLength": 5
        },
        LanguageId: {
            "type": "Edm.String",
            "maxLength": 2
        },
        StatuscodeId: {
            "type": "Edm.String",
            "maxLength": 1
        },
        Suffix: {
            "type": "Edm.String",
            "maxLength": 255
        },
        Infoline: {
            "type": "Edm.String",
            "maxLength": 255
        },
        Prefix: {
            "type": "Edm.String",
            "maxLength": 255
        },
        Releasedate: {
            "type": "Edm.DateTimeOffset"
        },
        Activated: {
            "type": "Edm.DateTimeOffset"
        },
        Units: {
            "type": "Edm.Int32"
        },
        Eanpref: {
            "type": "Edm.Boolean"
        },
        coverartarchiveUrl: {
            "type": "Edm.String",
            "maxLength": 255
        }
    });

    types["vm.Genres"] = $data("$data.Entity").extend("vm.Genres", {
        Id: {
            "type": "Edm.String",
            "nullable": false,
            "required": true,
            "maxLength": 3,
            "key": true
        },
        WholesalerId: {
            "type": "Edm.Int32",
            "nullable": false,
            "required": true
        },
        MainGenre: {
            "type": "Edm.String",
            "maxLength": 3
        },
        Description: {
            "type": "Edm.String",
            "maxLength": 255
        }
    });

    exports.type = types["vm.Container"] = $data("$data.EntityContext").extend("vm.Container", {
        Articles: {
            "type": "$data.EntitySet",
            "elementType": "vm.Articles"
        },
        Genres: {
            "type": "$data.EntitySet",
            "elementType": "vm.Genres"
        }
    });

    var ctxType = exports.type;
    exports.factory = function(config) {
        if (ctxType) {
            var cfg = $data.typeSystem.extend({
                name: "oData",
                oDataServiceHost: "http://localhost:8080/odata4/public/vm",
                withCredentials: false,
                maxDataServiceVersion: "4.0"
            }, config);
            return new ctxType(cfg);
        } else {
            return null;
        }
    };

    if (typeof Reflect !== "undefined" && typeof Reflect.defineMetadata === "function") {}

});