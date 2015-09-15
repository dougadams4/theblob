(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "newhorizon.directrouter.com/~lwadmin/4-tell/",
            alias: "longevit",
            GA_UA: "UA-19838822-1",
            platform: "4TellMa.js",
            addCartBtnAtts: "<button type='button' title='Add to Cart' class='button btn-cart' ><span><span>Add to Cart</span></span></button>",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Auto: [{
                enable: true,
                resultType: 1,
                numItems: 15,
                caption: "Recommended for you",
                productStyle: "product4T product4TPD2",
                divSelect: ".em-main .omega div:first",
                divPosition: "replace",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && _4TellBoost.UserData.data.Viewed.length;
                    }
                },
                inCart: false
            }, {
                enable: true,
                resultType: 4,
                numItems: 6,
                caption: "Featured Products",
                productStyle: "product4T product4THome",
                divSelect: ".em-tabgroups .em-area06",
                divPosition: "below",
                carousel: {
                    numVis: 3,
                    circular: true
                },
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='HOME4T'></div>",
                rawJS: {},
                inCart: false
            }, {
                enable: true,
                resultType: 4,
                numItems: 6,
                caption: "More Top Sellers",
                productStyle: "product4T product4THome",
                divSelect: ".em-tabgroups .clear",
                divPosition: "above",
                carousel: {
                    numVis: 3,
                    circular: true
                },
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='HOME4T' style='float:right'></div>",
                rawJS: {},
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 3,
                caption: "Our customers also bought...",
                productStyle: "product4T product4TPD1",
                divSelect: ".block-related",
                divPosition: "replace",
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            },
            {
                enable: true,
                resultType: 3,
                numItems: 20,
                caption: "Customer also viewed",
                productStyle: "product4T product4TPD2",
                divSelect: ".product-view",
                divPosition: "below",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: true,
                resultType: 5,
                numItems: 4,
                caption: "More ideas...",
                productStyle: "product4T product4TCat",
                divSelect: "#main4TellContainer",
                divPosition: "append",
                setHeight: false,
                setWidth: false,
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 20,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: ".totals",
                divPosition: "below",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {},
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
