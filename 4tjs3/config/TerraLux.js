(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.shopterralux.com",
            alias: "TerraLux",
            GA_UA: "UA-1666027-8",
            platform: "4TellBc.js",
            custom: true,
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
                divSelect: ".yotpo.placeholder:first",
                divPosition: "above",
                carousel: {
                    items: 4,
                    itemsCustom: [[0, 1], [481, 2], [768, 3], [955, 4]],
                    scrollPerPage: true,
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
                numItems: 10,
                caption: "Customers also viewed...",
                productStyle: "product4T product4TPD2",
                divSelect: "#ReviewsTab",
                divPosition: "above",
                carousel: {
                    items: 4,
                    itemsCustom: [[0, 1], [481, 2], [768, 3], [955, 4]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 190,
                showRatings: false,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
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
                divPosition: "below",
                carousel: {
                    items: 3,
                    itemsCustom: [[0, 1], [481, 1], [692, 2], [768, 1], [955, 2], [1092, 3]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {
                    preDisplay: function () {
                        $(".cart-contents ~ .product-grid").hide();
                    }
                },
                inCart: true
            }],
            QuickCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                productStyle: "product4T product4TQC",
                divSelect: ".twelve.columns.fastCartBottom.product-grid",
                divPosition: "replace",
                carousel: {
                    items: 3,
                    itemsCustom: [[0, 1], [481, 1], [692, 2], [768, 1], [955, 2], [1092, 3]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div class='QC4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                    	tout.enable = screen.width > 480 && (window.outerWidth < 1 || window.outerWidth > 480);
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
