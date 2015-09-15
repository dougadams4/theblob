(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.grassrootsstore.com",
            alias: "GrassRoo",
            GA_UA: "UA-4970374-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/Grassroots1/images/buttons/btn_addtocart.gif",
            spacerImage: "/v/vspfiles/templates/Grassroots1/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/Grassroots1/images/nophoto.gif",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
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
                    numItems: 9,
                    caption: "Our customers also bought...",
                    captionStyle: "titles product4TCaption product4TCaptionPD1",
                    productStyle: "product4T product4TPD1",
                    divSelect: "table.colors_pricebox",
                    divPosition: "below",
                    carousel: {
                        circular: true,
                        numVis: 3
                    },
                    showRatings: true,
                    maxImageHeight: 150,
                    wrapper: "<table width='449px' align='center' style='margin-top: 25px; height: 300px;'><tr><td style='border: 1px solid #DFE0E0;'></td></tr></table>",
                    rawJS: { preDisplay: function () { $('table#v65-product-related').remove(); } },
                    inCart: false
                },
                tout2: {
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
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 8,
                    caption: "You may also like...",
                    captionStyle: "checkout-headers product4TCaption product4TCaptionVC",
                    productTitleStyle: "productnamecolor colors_productname productTitle",
                    productStyle: "product4T product4TVC",
                    divSelect: "#v65-cart-checkout-parent td:first",
                    divPosition: "below",
                    carousel: {
                        circular: true,
                        numVis: 2
                    },
                    maxImageHeight: 90,
                    showRatings: true,
                    wrapper: "<td style='border: 1px solid #DDD;'></td>",
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
