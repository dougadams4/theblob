(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.lindaanderson.com",
            alias: "LindaAnd",
            GA_UA: "UA-34143721-1",
            platform: "4TellVs.js",
            custom: true,
            addCartBtnAtts: "input type='button' value='See Details'",
            //addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            //addCartImage: "/v/vspfiles/templates/105/images/buttons/btn_addtocart2.gif",
            spacerImage: "/v/vspfiles/templates/105/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/105/images/nophoto.gif",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: {
                tout1: {
                    enable: true,
                    resultType: 1,
                    numItems: 12,
                    caption: "Recommended For You",
                    captionStyle: "product4TCaption product4TCaptionHome",
                    productStyle: "product4T product4THome",
                    divSelect: "#div_articleid_2 > table:first",
                    divPosition: "below",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 160,
                    wrapper: "<table width='100%' class='PD14T'><tr><td></td></tr></table>",
                    inCart: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 6,
                    caption: "Customers also bought...",
                    productStyle: "product4T product4TPD1",
                    divSelect: ".colors_pricebox",
                    divPosition: "below",
                    carousel: {
                        numVis: 2,
                        circular: true
                    },
                    showRatings: true,
                    maxImageHeight: 150,
                    wrapper: "<table width='100%' class='PD14T'><tr><td></td></tr></table>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 12,
                    caption: "Similar Items",
                    productStyle: "product4T product4TPD2",
                    divSelect: ".colors_lines_light",
                    divPosition: "replace",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 120,
                    showRatings: true,
                    wrapper: "<table width='100%' class='PD14T'><tr><td></td></tr></table>",
                    rawJS: {
                        preDisplay: function (tout) {
                            $(tout.divSelect).hide();
                        }
                    },
                    inCart: false
                }
            },
            Search: {
                tout1: {
                    enable: false
                }
            },
            Category: {
                tout1: {
                    enable: true,
                    resultType: 5,
                    numItems: 15,
                    caption: "Related Top Sellers",
                    productStyle: "product4T product4TCat",
                    divSelect: "#MainForm",
                    divPosition: "above",
                    carousel: {
                        numVis: 5,
                        circular: true
                    },
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<table width='100%' class='PD14T'><tr><td></td></tr></table>",
                    rawJS: {
                        preInit: function (tout) {
                            tout.enable = tout.enable && $(".product_productprice").length > 15;
                        }
                    },
                    inCart: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 12,
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    divSelect: "#v65-cart-checkout-parent",
                    divPosition: "below",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 160,
                    showRatings: true,
                    wrapper: "<table width='100%' class='PD14T'><tr><td></td></tr></table>",
                    rawJS: { preDisplay: function () { $(".v65-productDisplay, font.colors_productname").hide(); } },
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
