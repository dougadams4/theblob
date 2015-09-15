(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.ShopBubba.com",
            alias: "ShopBuba",
            GA_UA: "UA-1666027-7",
            platform: "4TellBc.js",
            custom: true,
            addCartBtnAtts: "button type='submit'><i class='icon-shopping-cart'></i><span>Add to Cart</span></button",
            emptyImage: "/templates/__custom/images/ProductDefault.gif",
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
                resultType: 6,
                numItems: 8,
                fillMode: "none",
                caption: "Other Color Options",
                productStyle: "product4T product4TPD1",
                divSelect: ".AddToCartRow",
                divPosition: "below",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                showRatings: false,
                maxImageHeight: 150,
                wrapper: "<div class='PD24T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        if (window.outerWidth < 1000) {
                            tout.numItems = 4;
                            tout.carousel = false;
                        }
                    }
                },
                inCart: false
            }, {
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
            Search: [{
                enable: false
            }],
            Category: [{
                enable: true,
                resultType: 5,
                fillMode: "genomic",
                numItems: 15,
                caption: "More ideas...",
                productStyle: "product4T product4TCat",
                divSelect: ".banner_category_page_bottom",
                divPosition: "below",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        var catID = $("link[type='application/rss+xml']");
                        if (catID && catID.length)
                            catID = catID.attr("href").match(/(?:categoryid=)(\d+)/);
                        if (catID && catID[1])
                            _4TellBoost.setCatId(catID[1]);
                        if (window.outerWidth < 1000) {
                            tout.numItems = 6;
                            tout.carousel = false;
                        }
                    }
                },
                inCart: false
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
                },
                inCart: true
            }],
            QuickCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                fillMode: "genomic",
                showCaption: false,
                productStyle: "product4T product4TQC",
                carousel: {
                    numVis: 4,
                    circular: false
                },
                divSelect: "#fastCartSuggestive",
                divPosition: "replace",
                maxImageHeight: 140,
                showBuyButton: true,
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
