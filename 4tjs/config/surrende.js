(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.surrendertochance.com",
            alias: "surrende",
            GA_UA: "UA-2076367-5",
            platform: "4TellBc.js",
            custom: true,
            addCartBtnAtts: "a>Choose Options</a",
            emptyImage: "//cdn2.bigcommerce.com/server4600/34146/product_images/DefaultProductImageCustom.jpg",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 4,
                numItems: 12,
                caption: "<h2>Featured Products</h2>",
                productStyle: "product4T product4THome",
                divSelect: "#HomeFeaturedProducts",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                showRatings: false,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }, {
                enable: true,
                resultType: 4,
                numItems: 12,
                caption: "<h2>Recommended for you...</h2>",
                productStyle: "product4T product4THome",
                divSelect: "#SideTopSellers",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 120,
                showRatings: false,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "<h3>Customers also bought...</h3>",
                productStyle: "product4T product4TPD1",
                divSelect: "#ProductDescription",
                divPosition: "below",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                showRatings: false,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "<h3>Customers who viewed this product also viewed...</h3>",
                productStyle: "product4T product4TPD2",
                divSelect: "#ProductReviews",
                divPosition: "above",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 120,
                showRatings: false,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preDisplay: function () {
                        $("#SimilarProductsByCustomerViews").hide()
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
                numItems: 12,
                fillMode: "genomic",
                caption: "<h2>More ideas...</h2>",
                productStyle: "product4T product4TCat",
                divSelect: "#CategoryPagingTop",
                divPosition: "above",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && _4TellBoost.Service.catId !== "3795" && $(".ProductDetails").length > 20;
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
                divSelect: ".ProceedToCheckout",
                divPosition: "below",
                carousel: {
                    numVis: 3,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {},
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
