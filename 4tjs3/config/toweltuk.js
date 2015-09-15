(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.thetowelshop.co.uk",
            alias: "toweltuk",
            GA_UA: "UA-28800674-1",
            platform: "4TellBc.js",
            custom: false,
            addCartBtnAtts: "a>View Details</a",
            //addCartBtnAtts: "input type='image' alt='Add to Cart' value='Add To Cart'",
            addCartImage: "",
            emptyImage: "/templates/__custom/images/ProductDefault.gif",
            priceClass: "",
            pricePrefix: "",
            salePricePrefix: "",
            includeBase: false,
            siteEnable: false
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 1,
                numItems: 12,
                caption: "Recommended for you...",
                productStyle: "product4T product4THome",
                divSelect: "#HomeFeaturedProducts",
                divPosition: "above",
                carousel: {
                    items: 4,
                    itemsCustom: [[0, 1], [480, 2], [768, 3], [1024, 4]],
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: true,
                showPrice: true,
                showBuyButton: true,
                maxImageHeight: 150,
                wrapper: "<div class='HOME4T'></div>",
                rawJS: {},
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Customers Also Bought...",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TPD1",
                divSelect: "#ProductDescription",
                divSelect: ".ProductDescriptionContainer",
                divPosition: "above",
                carousel: {
                    items: 4,
                    itemsCustom: [[0, 1], [480, 2], [768, 3], [1024, 4]],
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: true,
                showPrice: true,
                showBuyButton: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Customers who viewed this product, also viewed...",
                productStyle: "product4T product4TPD2",
                divSelect: "#SimilarProductsByCustomerViews",
                divPosition: "replace",
                carousel: {
                    items: 4,
                    itemsCustom: [[0, 1], [480, 2], [768, 3], [1024, 4]], 
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: true,
                showPrice: true,
                showBuyButton: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }],
            Search: {
                tout1: {
                    enable: false
                }
            },
            Category: {
                tout1: {
                    enable: false
                }
            },
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You May Also Like...",
                captionStyle: "product4TCaption product4TCaptionPD2",
                productStyle: "product4T product4TVC",
                divSelect: ".ProceedToCheckout",
                divPosition: "above",
                carousel: {
                    items: 4,
                    itemsCustom: [[0, 1], [480, 2], [768, 3], [1024, 4]],
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: true,
                showPrice: true,
                showBuyButton: true,
                maxImageHeight: 150,
                wrapper: "<div class='VC4T'></div>",
                rawJS: { preDisplay: function () { $("#SuggestiveCartContent").hide(); } },
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
                    items: 4,
                    itemsCustom: [[0, 1], [480, 2], [768, 3], [1024, 4]],
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                divSelect: "#fastCartBottom",
                divPosition: "replace",
                maxImageHeight: 150,
                showRatings: true,
                showPrice: true,
                showBuyButton: true,
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
