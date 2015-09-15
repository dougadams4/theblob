(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.go2outfitters.com",
            alias: "go2outfi",
            GA_UA: "UA-1725684-3",
            platform: "4TellBc.js",
            custom: true,
            addCartBtnAtts: "a class='btn'>Explore</a",
            emptyImage: "/templates/__custom/images/ProductDefault.gif",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: false
            }],
            ProductDetail: [{
                enable: false,
                resultType: 0,
                numItems: 12,
                caption: "<h2>Customers also bought...</h2>",
                productStyle: "product4T product4TPD1",
                divSelect: "#tab-container",
                divPosition: "above",
                carousel: {
                    numVis: 3,
                    circular: true
                },
                showRatings: true,
                maxImageHeight: 100,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }, {
                enable: true,
                resultType: "0,3",
                numItems: "7,8",
                caption: "<h2>You May Also Like...</h2>",
                productStyle: "product4T product4TPD2",
                divSelect: "#SideProductRelated",
                divPosition: "replace",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<div class='PD24T'></div>",
                rawJS: {},
                inCart: false
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: false,
                resultType: 5,
                numItems: 12,
                caption: "<h2>Related Top Sellers</h2>",
                productStyle: "product4T product4TCat",
                divSelect: "#frmCompare",
                divPosition: "above",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && $(".ProductList li").length > 20;
                    }
                },
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "<h3>You may also like...</h3>",
                productStyle: "product4T product4TVC",
                divSelect: ".KeepShopping  ",
                divPosition: "below",
                carousel: {
                    numVis: 4,
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
