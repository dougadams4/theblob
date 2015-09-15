(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.urotuning.com",
            alias: "UroTuni",
            GA_UA: "UA-30174149-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/147/images/buttons/btn_addtocart.gif",
            spacerImage: "/v/vspfiles/templates/147/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/147/images/nophoto.gif",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: {
                tout1: {
                    enable: false,
                    resultType: 4,
                    numItems: 16,
                    caption: "Featured Top Sellers",
                    showCaption: false,
                    productStyle: "product4T product4THome",
                    divSelect: "table.v65-productDisplay:first",
                    divPosition: "replace",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 160,
                    numRows: 2,
                    wrapper: "<table width='100%' id='HOME4T'><tr><td></td></tr></table>",
                    rawJS: {
                        preInit: function (tout) {
                            tout.enable = tout.enable && !(location.pathname.match(/wishlist/i));
                        }
                    },
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
                    maxImageHeight: 160,
                    wrapper: "<table width='435' class='toutWrapper4T'><tr><td></td></tr></table>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 8,
                    caption: "Customers also viewed...",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#v65-product-related",
                    divPosition: "replace",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 140,
                    showRatings: true,
                    wrapper: "<table width='100%' class='toutWrapper4T'><tr><td></td></tr></table>",
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
                    wrapper: "<table width='100%' class='toutWrapper4T'><tr><td></td></tr></table>",
                    rawJS: {
                        preInit: function (tout) {
                            tout.enable = tout.enable && $(".pricecolor").length >= 15;
                        }
                    },
                    inCart: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 4,
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    orientation: "horizontal",
                    divSelect: "#v65-cart-checkout-parent td:first",
                    divPosition: "replace",
                    carousel: {
                        numVis: 2,
                        circular: true
                    },
                    maxImageHeight: 120,
                    showRatings: true,
                    wrapper: "<td class='toutWrapper4T' width='374'></td>",
                    rawJS: {
                        preInit: function (tout) {
                            tout.enable = tout.enable && $('#v65-onepage-payment-details-parent-table').length == 0;
                        }
                    },
                    inCart: true
                }
            }
        }
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
