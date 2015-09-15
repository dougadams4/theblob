(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.furbishstudio.com/",
            alias: "furbishs",
            GA_UA: "UA-34564846-3",
            platform: "4TellShp.js",
            custom: true,
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
                resultType: 3,
                numItems: 12,
                caption: "YOU'VE GOT GREAT TASTE! I BET YOU'D LOVE THESE TOO",
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
                        $("#cross-sell").hide();
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
                caption: "DID YOU SEE THESE - THEY TOTALLY LOOK LIKE YOU!",
                productStyle: "product4T product4TVC",
                divSelect: ".cart-alt1.sect2",
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
                rawJS: {
                    preInit: function () {
                        jQuery(".quantity input[type=text]").each(function () {
                            _4TellBoost.addCartItem(jQuery(this).data("id").toString());
                        });
                    }
                },
                inCart: true
            }],
            Auto: [{
                enable: true,
                resultType: 1,
                numItems: 12,
                caption: "CHECK OUT WHAT'S HOT TODAY!",
                productStyle: "product4T product4TCat",
                divSelect: ".fs-pg-content, .product, .featured-collections, .featured-products",
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
                        if ($(".featured-products").length) {
                            tout.caption = "A FEW OF OUR FAVORITES";
                        }
                        tout.enable = tout.enable && 0 == $("#feed").length;
                        tout.startPos = Math.floor(Math.random() * (20 - tout.numItems));
                    }
                },
                inCart: false
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
