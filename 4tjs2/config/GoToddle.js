(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.gotoddler.com.au",
            alias: "GoToddle",
            GA_UA: "UA-1962901-3",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/FreshToddler/images/buttons/btn_addtocart.gif",
            spacerImage: "/v/vspfiles/templates/FreshToddler/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/FreshToddler/images/nophoto.gif",
            priceClass: "price2",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: {
                tout1: {
                    enable: true,
                    resultType: 4,
                    numItems: 12,
                    caption: "Featured Top Sellers",
                    productStyle: "product4T product4THome",
                    divSelect: ".v65-productDisplay",
                    divPosition: "replace",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 150,
                    showRatings: false,
                    showPrice: false,
                    showBuyButton: false,
                    wrapper: "<table width='100%' ><tr><td></td></tr></table>",
                    inCart: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 12,
                    caption: "Customers also bought...",
                    productStyle: "product4T product4TPD1",
                    divSelect: ".colors_pricebox",
                    divPosition: "below",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    maxImageHeight: 150,
                    showRatings: false,
                    showPrice: false,
                    showBuyButton: false,
                    wrapper: "<table width='100%' class='PD14T'><tr><td></td></tr></table>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 8,
                    caption: "Customers also viewed...",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#ProductDetail_ProductDetails_div2",
                    divPosition: "below",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 120,
                    showRatings: false,
                    showPrice: false,
                    showBuyButton: false,
                    wrapper: "<table width='100%' class='PD24T'><tr><td></td></tr></table>",
                    rawJS: {
                        preDisplay: function () {
                            $('.colors_lines_light').remove();
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
                    numItems: 12,
                    caption: "Related Top Sellers",
                    productStyle: "product4T product4TCat",
                    divSelect: "#MainForm",
                    divPosition: "above",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 100,
                    showRatings: false,
                    showPrice: false,
                    showBuyButton: false,
                    wrapper: "<table width='100%' class='PD24T'><tr><td></td></tr></table>",
                    rawJS: {
                        preInit: function (tout) {
                            tout.enable = tout.enable && $('font.mesg').length >= 10;
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
                    maxImageHeight: 100,
                    showRatings: false,
                    showPrice: false,
                    showBuyButton: false,
                    wrapper: "<table width='100%' class='PD24T'><tr><td></td></tr></table>",
                    rawJS: {
                        preDisplay: function () {
                            $("table:has(.v65-productDisplay):last").remove();
                        }
                    },
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
