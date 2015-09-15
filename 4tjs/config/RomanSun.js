(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.romansunstone.com",
            alias: "RomanSun",
            GA_UA: "UA-27061557-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/sunstone/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/sunstone/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/sunstone/images/nophoto.gif",
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
                    resultType: 0,
                    numItems: 3,
                    caption: "Our customers also bought...",
                    captionStyle: "titles product4TCaption",
                    productStyle: "product4T product4TPD1",
                    divSelect: "table#v65-product-parent",
                    divPosition: "below",
                    showRatings: true,
                    maxImageHeight: 150,
                    wrapper: "<table width='20%' align='right' class='PD14T'><tr><td></td></tr></table>",
                    rawJS: {
                        preDisplay: function (tout) {
                            $(tout.divSelect).attr({ "width": "80%", 'align': 'left' });
                        }
                    },
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 0,
                    numItems: 15,
                    caption: "Our customers also viewed...",
                    captionStyle: "titles product4TCaption product4TCaptionPD2",
                    productStyle: "product4T product4TPD2",
                    divSelect: "table.colors_lines_light",
                    divPosition: "replace",
                    carousel: {
                        numVis: 5,
                        circular: true
                    },
                    showRatings: true,
                    maxImageHeight: 180,
                    wrapper: "<table width='100%' align='right' class='PD24T'><tr><td></td></tr></table>",
                    inCart: false
                }
            },
            Category: {
                tout1: {
                    enable: false
                }
            },
            Search: {
                tout1: {
                    enable: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 6,
                    caption: "You may also like...",
                    captionStyle: "checkout-headers product4TCaption product4TCaptionVC",
                    productStyle: "product4T product4TVC",
                    divSelect: "tr.v65-cart-shipping-details-row td.v65-cart-details-firstcell",
                    divPosition: "replace",
                    maxImageHeight: 115,
                    showRatings: true,
                    carousel: {
                        numVis: 2,
                        circular: true
                    },
                    wrapper: "<td colspan='4' style='border: 1px solid #DFE0E0;'></td>",
                    rawJS: {
                        preDisplay: function (tout) {
                            $('table:has(font.colors_productname):last, #v65-cart-shipping-details-text').remove();
                        }
                    },
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
