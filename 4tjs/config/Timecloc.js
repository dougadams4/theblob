(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.timeclocksandmore.com",
            alias: "Timecloc",
            GA_UA: "UA-25317509-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/timeclocks/images/buttons/btn_addtocart.gif",
            spacerImage: "/v/vspfiles/templates/timeclocks/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/timeclocks/images/nophoto.gif",
            priceClass: "price2",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: {
                tout1: {
                    enable: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 6,
                    fillMode: "none",
                    numItems: 12,
                    caption: "Recommended Items",
                    productStyle: "product4T product4TPD1",
                    divSelect: "#ProductDetail_ProductDetails_div2",
                    divPosition: "below",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    showRatings: true,
                    maxImageHeight: 150,
                    wrapper: "<table width='100%' class='PD14T'><tr><td></td></tr></table>",
                    rawJS: { preDisplay: function () { $(".colors_lines_light").hide(); } },
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 6,
                    caption: "Our customers also viewed...",
                    productStyle: "product4T product4TPD2",
                    divSelect: ".colors_pricebox",
                    divPosition: "below",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    maxImageHeight: 120,
                    showRatings: true,
                    wrapper: "<table width='470' class='PD14T'><tr><td></td></tr></table>",
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
                    enable: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 6,
                    numItems: 12,
                    fillMode: "none",
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    divSelect: "#v65-cart-checkout-parent td:first",
                    divPosition: "replace",
                    carousel: {
                        numVis: 2,
                        circular: true
                    },
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<td></td>",
                    rawJS: {
                        preDisplay: function () {
                            $("table:has(table.v65-productDisplay):last").hide();
                        }
                    },
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
