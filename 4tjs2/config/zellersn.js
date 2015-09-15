(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "zellersnaturalhealth.com",
            alias: "zellersn",
            GA_UA: "UA-51056257-1",
            platform: "4TellBc.js",
            addCartBtnAtts: "input type='image'",
            addCartImage: "//cdn1.bigcommerce.com/rc71b9995f4a706510d16ad47d2472c26eb88e9bf/themes/Health/images/green/AddCartButton.gif",
            emptyImage: "/templates/Health/images/ProductDefault.gif",
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
                numItems: 6,
                caption: "Customers also bought...",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TPD1",
                divSelect: ".ProductMain",
                divPosition: "below",
                carousel: {
                    numVis: 3,
                    circular: true
                },
                showRatings: false,
                maxImageHeight: 90,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 4,
                caption: "<h2>Customers also viewed...</h2>",
                productStyle: "product4T product4TPD2",
                divSelect: "#SideProductRelated",
                divPosition: "replace",
                maxImageHeight: 140,
                showRatings: false,
                wrapper: "<div class='PD24T'></div>",
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
                caption: "<h2>You may also like...</h2>",
                productStyle: "product4T product4TVC",
                divSelect: ".KeepShopping",
                divPosition: "below",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 170,
                showRatings: false,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
