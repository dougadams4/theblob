(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.shopterralux.com",
            alias: "TerraLux",
            GA_UA: "UA-1666027-8",
            platform: "4TellBc.js",
            addCartBtnAtts: "button type='submit'><i class='icon-shopping-cart'></i><span>Add to Cart</span></button",
            emptyImage: "/templates/__custom/images/ProductDefault.gif",
            pricePrefix: "Price: ",
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
                numItems: 10,
                caption: "Customers also bought...",
                productStyle: "product4T product4TPD2",
                divSelect: "#DescriptionTab",
                divPosition: "below",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                showRatings: false,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        if (window.outerWidth < 1000) {
                            tout.numItems = 2;
                            tout.carousel = false;
                        }
                    }
                },
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 10,
                caption: "Customers also viewed...",
                productStyle: "product4T product4TPD2",
                divSelect: "#ReviewsTab",
                divPosition: "above",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                maxImageHeight: 190,
                showRatings: false,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        if (window.outerWidth < 1000) {
                            tout.numItems = 6;
                            tout.carousel = false;
                        }
                    },
                    preDisplay: function () {
                        $("#SimilarProductsByCustomerViewsTab, #RelatedProductsTab").hide();
                    }
                },
                inCart: false
            }],
            Category: [{
                enable: false
            }],
            Search: [{
                enable: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: ".ProceedToCheckout",
                divPosition: "above",
                carousel: {
                    numVis: 3,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        if (window.outerWidth < 1000) {
                            tout.numItems = 6;
                            tout.carousel = false;
                        }
                    },
                    preDisplay: function () {
                        $(".cart-contents ~ .product-grid").hide();
                    }
                },
                inCart: true
            }]
        }
    };

    $(document).ready(function () {
        if ($("#CartHeader").length > 0) {
            _4TellBoost.setPageType("AddToCart");
        } else if ($("body.category").length > 0) {
            _4TellBoost.setPageType("Category");
        }
    });
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
