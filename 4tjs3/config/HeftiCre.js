(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.hefticreek.com",
            alias: "HeftiCre",
            GA_UA: "UA-26702774-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart', 'addCartImage'",
            addCartImage: "/v/vspfiles/templates/162/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/162/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/162/images/nophoto.gif",
            pricePrefix: "Our Price: ",
            salePricePrefix: "Sale Price: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 6,
                    caption: "Customers also bought...",
                    captionStyle: "product4TCaptionPD1",
                    productStyle: "product4T product4TPD1",
                    divSelect: "table.colors_pricebox",
                    divPosition: "below",
                    carousel: {
                        numVis: 2,
                        circular: true
                    },
                    showRatings: false,
                    maxImageHeight: 160,
                    wrapper: "<table width='100%' align='center' style='border-spacing: 0 5px;'><tr><td style='border: 1px solid #DFE0E0;'></td></tr></table>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 4,
                    caption: "Customers also viewed...",
                    captionStyle: "product4TCaptionPD2",
                    productStyle: "product4T product4TPD2",
                    divSelect: "table#v65-product-related",
                    divPosition: "replace",
                    maxImageHeight: 120,
                    showRatings: false,
                    wrapper: "<table width='100%' style='border-spacing: 0 5px;'><tr><td style='border: 1px solid #DFE0E0;'></td></tr></table>",
                    inCart: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 4,
                    numItems: 8,
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    divSelect: "#v65-cart-checkout-parent td:first",
                    divPosition: "replace",
                    carousel: {
                        numVis: 2,
                        circular: true
                    },
                    maxImageHeight: 90,
                    showRatings: false,
                    wrapper: "<td ></td>",
                    inCart: true
                }
            },
            Home: {
                tout1: {
                    enable: false
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
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
