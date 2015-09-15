(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.ofconcepts.com",
            alias: "OFConcep",
            GA_UA: "UA-5985949-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/OFConcepts/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/OFConcepts/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/OFConcepts/images/nophoto.gif",
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
                    numItems: 6,
                    caption: "Our customers also bought...",
                    captionStyle: "titles product4TCaption",
                    productStyle: "product4T product4TPD1",
                    divSelect: "table.colors_pricebox",
                    divPosition: "below",
                    carousel: {
                        circular: true,
                        numVis: 3
                    },
                    showRatings: true,
                    maxImageHeight: 150,
                    wrapper: "<table width='450px' align='right' style='border-spacing: 5px'><tr><td style='border: 1px solid #DFE0E0;'></td></tr></table>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 4,
                    caption: "Our customers also viewed...",
                    productStyle: "product4T product4TPD2",
                    divSelect: "table#v65-product-related",
                    divPosition: "replace",
                    maxImageHeight: 120,
                    showRatings: true,
                    wrapper: "<tr><td style='border: 1px solid #DFE0E0;'></td></tr>",
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
                    enable: false,
                    resultType: 0,
                    numItems: 3,
                    caption: "You may also like...",
                    captionStyle: "checkout-headers product4TCaption product4TCaptionVC",
                    productStyle: "product4T product4TVC",
                    divSelect: "#v65-cart-checkout-parent td:first",
                    divPosition: "replace",
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<td colspan='3' style='border: 1px solid #DFE0E0;'></td>",
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
