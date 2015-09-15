(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.voguefabrics.co.uk",
            alias: "voguefab",
            GA_UA: "UA-10999331-1",
            platform: "4TellBc.js",
            custom: true,
            addCartBtnAtts: "a>View Details</a",
            addCartImage: "//cdn1.bigcommerce.com/rc71b9995f4a706510d16ad47d2472c26eb88e9bf/themes/Cosmetics/images/palegreen/AddCartButton.gif",
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
                enable: true,
                resultType: 0,
                numItems: 3,
                caption: "<h2>Customers also bought...</h2>",
                productStyle: "product4T product4TPD1",
                divSelect: "#SideProductAddToWishList",
                divPosition: "above",
                showRatings: false,
                showPrice: false,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preDisplay: function () {
                        $("#SideProductRelated").hide();
                    }
                },
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "<h3>Customers who viewed this product also viewed...</h3>",
                productStyle: "product4T product4TPD2",
                divSelect: "#SimilarProductsByCustomerViews",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 120,
                showRatings: false,
                showPrice: false,
                wrapper: "<div class='PD14T'></div>",
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
                divSelect: "#CartContent",
                divPosition: "below",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 190,
                showRatings: false,
                showPrice: false,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preDisplay: function () {
                        $("#SuggestiveCartContent").hide();
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
