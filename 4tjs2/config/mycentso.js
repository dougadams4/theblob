(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.mycentsofstyle.com/",
            alias: "mycentso",
            GA_UA: "UA-10001586-2",
            platform: "4TellShp.js",
            custom: true,
            ABTesting: 2,
            persistentTesting: false,
            addCartBtnAtts: "<input type='submit' value='Item Details' class='add_to_cart'>",
            pricePrefix: "",
            salePricePrefix: "",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 1,
                numItems: 12,
                fillmode: "all",
                caption: "Recommended for you",
                productStyle: "product4T product4THome",
                divSelect: ".content .twelve.columns",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='HOME4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        if (window.outerWidth < 750) {
                            tout.numItems = tout.carousel.numVis;
                            tout.carousel = false;
                        }
                    }
                },
                testGroup: {
                    0: {},
                    1: {
                        enable: false,
                        rawJS: {}

                    }
                },
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Other items that may interest you",
                productStyle: "product4T product4TPD1",
                divSelect: ".product_section",
                divPosition: "below",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        if (window.outerWidth < 750) {
                            tout.numItems = tout.carousel.numVis;
                            tout.carousel = false;
                        }
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
                enable: false,
                resultType: 3,
                numItems: 12,
                caption: "Similar Items",
                productStyle: "product4T product4TPD2",
                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<div class='PD24T'></div>",
                rawJS: {},
                inCart: false
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: false,
                resultType: 5,
                numItems: 12,
                caption: "More ideas...",
                productStyle: "product4T product4TCat",
                divSelect: ".content h1",
                divPosition: "above",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {},
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 10,
                caption: "You may also like",
                productStyle: "product4T product4TVC",
                divSelect: "#cart_form > div",
                divPosition: "below",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        _4TellBoost.UserData.clearCart()
                        $(".CART4T").each(function () { _4TellBoost.addCartItem($(this).attr("ID")) });

                        if (window.outerWidth < 750) {
                            tout.numItems = 4;
                            tout.carousel = false;
                        }
                    }
                },
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
                numItems: 6,
                caption: "You may also like",
                productStyle: "product4T product4TQC",
                divSelect: "#cart > ul",
                divPosition: "below",
                carousel: {
                    numVis: 2,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='QC4T'></div>",
                rawJS: {},
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
