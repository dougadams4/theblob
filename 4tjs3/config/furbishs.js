(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.CLIENTURL.com",
            alias: "furbishs",
            GA_UA: "UA-34564846-3",
            platform: "4TellShp.js",
            addCartBtnAtts: "<input type='submit' value='Item Details' class='add_to_cart'>",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Other items that may interest you",
                productStyle: "product4T product4TPD1",
                divSelect: "#cross-sell",
                divPosition: "replace",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function () {
                        _4TellBoost.addProductID(ISRParams.product.id.toString());
                    }
                },
                inCart: false
            }, {
                enable: false,
                resultType: 3,
                numItems: 4,
                caption: "Similar Items",
                productStyle: "product4T product4TPD2",
                divSelect: "#second4TellContainer",
                divPosition: "append",
                setHeight: true,
                setWidth: false,
                imageSize: "&maxx=120&maxy=120",
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
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {},
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like",
                productStyle: "product4T product4TVC",
                divSelect: ".cart-totals",
                divPosition: "below",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {},
                inCart: true
            }],
            Auto: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "More ideas for you",
                productStyle: "product4T product4TCat",
                divSelect: ".fs-pg-content, .product, .featured-collections",
                divPosition: "below",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && 0 == $(".featured-collections").length;
                    }
                },
                inCart: false
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
