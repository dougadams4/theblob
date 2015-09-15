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
            pricePrefix: "",
            salePricePrefix: "On Sale: ",
            ABTesting: 2,
            persistentTesting: false,
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 1,
                numItems: 12,
                caption: "Recommended for You...",
                productStyle: "product4T product4THome",
                divSelect: "#HomeFeaturedProducts",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                showRatings: false,
                maxImageHeight: 180,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        $(tout.divSelect).before("<br class='Clear' />");
                    }
                },
                inCart: false,
                testGroup: {
                    0: {},
                    1: {
                        enable: false,
                        rawJS: {}

                    }
                }
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
                showRatings: false,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        if (parseInt($(".Value .ProductPrice:first").text().replace(/\D/g, "")) > 20000)
                            tout.resultType = 3;
                    },
                    preDisplay: function () {
                        //$("#SimilarProductsByCustomerViews_Tab").hide()
                    }
                },
                inCart: false,
                testGroup: {
                    0: {},
                    1: {
                        enable: false,
                        rawJS: {}

                    }
                }
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
                showRatings: false,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        if (parseInt($(".Value .ProductPrice:first").text().replace(/\D/g, "")) > 20000) {
                            tout.resultType = 0;
                            tout.caption = "Customers Also Bought";
                        }
                    },
                    preDisplay: function (tout) {
                        $(tout.divSelect).append("<br class='Clear' />");
                    }
                },
                inCart: false,
                testGroup: {
                    0: {},
                    1: {
                        enable: false,
                        rawJS: {}

                    }
                }
            }],
            Search: {
                tout1: {
                    enable: false
                }
            },
            Category: [{
                enable: true,
                resultType: 5,
                //fillMode: "crowd",
                numItems: 12,
                caption: "Related Top Sellers",
                productStyle: "product4T product4TCat",
                divSelect: "#CategoryPagingTop",
                divPosition: "above",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 190,
                showRatings: false,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        _4TellBoost.setCatId($("#4TTarget").data().category.toString());
                        tout.enable = tout.enable && $("#CategoryContent .ProductDetails").length > 15;
                        //$("input[name=compare_product_ids]").each(function (index) {
                        //    if (index > 5) return false;
                        //    _4TellBoost.addProductID($(this).val())
                        //});
                    },
                    preDisplay: function () {
                        $("#SideCategoryTopSellers").hide();
                    }
                },
                inCart: false,
                testGroup: {
                    0: {},
                    1: {
                        enable: false,
                        rawJS: {}

                    }
                }
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You May Also Like...",
                productStyle: "product4T product4TVC",
                divSelect: ".KeepShopping",
                divPosition: "below",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 180,
                showRatings: false,
                wrapper: "<div class='VC4T'></div>",
                rawJS: { preDisplay: function () { $("#SuggestiveCartContent").hide(); } },
                inCart: true,
                testGroup: {
                    0: {},
                    1: {
                        enable: false,
                        rawJS: {}

                    }
                }
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
                inCart: true,
                testGroup: {
                    0: {},
                    1: {
                        enable: false,
                        rawJS: {}

                    }
                }
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
