(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.mannequinmadness.com",
            alias: "mannequi",
            GA_UA: "UA-48193400-1",
            platform: "4TellShp.js",
            addCartBtnAtts: "<input type='submit' value='Item Details' class='add_to_cart'>",
            pricePrefix: "",
            salePricePrefix: "",
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
                caption: "<h4>Frequently bought together...</h4>",
                productStyle: "product4T product4TPD1",
                divSelect: ".yotpo-main-widget",
                divPosition: "above",
                carousel: {
                    itemsCustom: [[0, 2], [400, 4], [600, 5]],
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: false,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 3,
                caption: "<h4>Customers also viewed<h4>",
                productStyle: "product4T product4TPD2",
                divSelect: "#related",
                divPosition: "replace",
                maxImageHeight: 120,
                showRatings: false,
                showTitle: false,
                showPrice: false,
                showBuyButton: false,
                wrapper: "<div class='PD24T desktop-2'></div>",
                rawJS: {},
                inCart: false
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "<h3>You may also like...</h3>",
                productStyle: "product4T product4TVC",
                divSelect: "#cartform",
                divPosition: "below",
                carousel: {
                    itemsCustom: [[0, 2], [400, 4], [600, 5]],
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {},
                inCart: true
            }],
            FourOhFour: [{
                enable: true,
                resultType: 1,
                numItems: 12,
                caption: "<h3>Some products you may like...</h3>",
                productStyle: "product4T product4THome",
                divSelect: ".BlockContent",
                divPosition: "below",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 120,
                showRatings: false,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
