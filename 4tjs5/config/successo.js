(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.CLIENTURL.com",
            alias: "successo",
            GA_UA: "UA-1071924-1",
            platform: "4TellDIY.js",
            //ABTesting: 2,
            //persistentTesting: false,
            addCartBtnAtts: "input type='button' value='See Details'",
            addCartImage: "",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            pricePrefix: "",
            salePricePrefix: "",
            includeBase: false,
            siteEnable: false
        },
        PageSettings: {
            Home: [{
                enable: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Customers also bought:",
                productStyle: "product4T product4TPD1",
                divSelect: "#tout1_pdp_4Tell",
                divPosition: "replace",
                carousel: {
                    itemsCustom: [[0, 2], [400, 3]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showPrice: false,
                showTitle: false,
                showBuyButton: false,
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                testGroup: {
                    0: {},
                    1: {
                        enable: false,
                        rawJS: {}

                    }
                },
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 9,
                caption: "Customers also viewed:",
                productStyle: "product4T product4TPD2",
                divSelect: ".product_pg_upsell:has(.upsell_pics)",
                divPosition: "above",
                carousel: {
                    itemsCustom: [[0, 2], [400, 3]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showPrice: false,
                showTitle: false,
                showBuyButton: false,
                showRatings: true,
                wrapper: "<div class='PD24T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        jQuery(tout.divSelect).hide();
                    }
                },
                testGroup: {
                    0: {},
                    1: {
                        enable: false,
                        rawJS: {}

                    }
                },
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
                showPrice: false,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {},
                inCart: false
            }],
            //AddToCart: [{
            Auto: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: ".cart-upsell",
                divPosition: "below",
                carousel: {
                    itemsCustom: [[0, 2], [400, 4]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                //showPrice: false,
                //showTitle: false,
                showBuyButton: false,
                showRatings: true,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {},
                testGroup: {
                    0: {},
                    1: {
                        enable: false,
                        rawJS: {}

                    }
                },

                inCart: true
            },
            {
                enable: false,
                resultType: 4,
                numItems: 12,
                caption: "Summer TIME FAVORITES",
                productStyle: "product4T product4TVC",
                divSelect: ".cart-upsell, .VC4T",
                divPosition: "above",
                carousel: {
                    itemsCustom: [[0, 2], [400, 4]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                //showPrice: false,
                //showTitle: false,
                showBuyButton: false,
                showRatings: true,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {},
                testGroup: {
                    0: {},
                    1: {
                        enable: false,
                        rawJS: {}

                    }
                },

                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
