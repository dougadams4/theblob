(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.SwingSetmall.com",
            alias: "SwingSet",
            GA_UA: "UA-228963-2",
            platform: "4TellBc.js",
            custom: true,
            addCartBtnAtts: "a>View Details</a",
            //addCartBtnAtts: "input type='image' alt='Add to Cart' value='Add To Cart'",
            addCartImage: "//www.swingsetmall.com/template/template_images/addtocart.png",
            emptyImage: "/templates/__custom/images/ProductDefault.gif",
            priceClass: "price2",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 1,
                numItems: 12,
                caption: "Recommended for you...",
                productStyle: "product4T product4THome",
                divSelect: "#HomeFeaturedProducts",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                showRatings: true,
                maxImageHeight: 180,
                wrapper: "<div class='HOME4T'></div>",
                rawJS: {},
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 3,
                caption: "Customers Also Bought",
                captionStyle: "product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TPD1",
                divSelect: "#SideProductRelated",
                divPosition: "replace",
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Customers Also Viewed",
                productStyle: "product4T product4TPD2",
                divSelect: ".ProductDescriptionContainer",
                divPosition: "below",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 120,
                showRatings: true,
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
                    enable: true,
                    resultType: 5,
                    numItems: 12,
                    caption: "More ideas...",
                    productStyle: "product4T product4TCat",
                    divSelect: "#CategoryPagingTop",
                    divPosition: "above",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 190,
                    showRatings: true,
                    wrapper: "<div class='CAT4T'></div>",
                    rawJS: {
                        preInit: function (tout) {
                            tout.enable = tout.enable && $("#CategoryContent .ProductDetails").length > 15;
                        },
                        preDisplay: function () {
                            $("#SideCategoryTopSellers").hide();
                        }
                    },
                    inCart: false
                }
            },
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                captionStyle: "product4TCaption product4TCaptionPD2",
                productStyle: "product4T product4TVC",
                divSelect: ".KeepShopping",
                divPosition: "above",
                carousel: {
                    numVis: 3,
                    circular: true
                },
                maxImageHeight: 180,
                showRatings: true,
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
