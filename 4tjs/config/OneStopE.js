(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.onestopequineshop.com",
            alias: "OneStopE",
            GA_UA: "UA-12162933-1",
            platform: "4TellBc.js",
            custom: true,
            addCartBtnAtts: "input type='submit' value='View Details'",
            addCartImage: '//www.onestopequineshop.com/templates/__custom/images/addtocart-icon.png',
            pricePrefix: "",
            salePricePrefix: "Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 4,
                caption: "<h2>Customers also bought...</h2>",
                divSelect: "#SimilarProductsByCustomerViews",
                divPosition: "replace",
                maxImageHeight: 150,
                inCart: false
            }, {
                enable: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 3,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: ".KeepShopping",
                divPosition: "below",
                maxImageHeight: 100,
                wrapper: "<div id='VC4T'></div>",
                inCart: true
            }]
        }
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
