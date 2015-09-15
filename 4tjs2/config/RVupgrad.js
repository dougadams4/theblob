(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.rvupgradestore.com",
            alias: "RVupgrad",
            GA_UA: "UA-2914701-2",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/rvupgrade/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/rvupgrade/images/clear1x1.gif",
            //emptyImage: "/v/vspfiles/templates/rvupgrade/images/nophoto.gif",
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
                    resultType: 0,
                    numItems: 12,
                    caption: "Top Sellers",
                    captionStyle: "product4TCaption product4TCaptionHome",
                    productStyle: "product4T product4THome",
                    divSelect: "#fpp",
                    divPosition: "replace",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    showRatings: true,
                    showBuyButton: false,
                    maxImageHeight: 150,
                    wrapper: "<div id='HOME4T'></div>",
                    rawJS: "$('#newProducts').remove();",
                    rotateRecs: true,
                    inCart: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 9,
                    caption: "Customers also bought...",
                    productStyle: "product4T product4TPD1",
                    divSelect: ".colors_pricebox",
                    divPosition: "below",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    showRatings: true,
                    maxImageHeight: 150,
                    wrapper: "<table id='PD4T1' align='center' width='470px'><tr><td></td></tr></table>",
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
                    maxImageHeight: 120,
                    showRatings: true,
                    wrapper: "<table id='PD4T2' width='100%'><tr><td></td></tr></table>",
                    inCart: false
                }
            },
            Category: {
                tout1: {
                    enable: true,
                    resultType: 5,
                    numItems: 12,
                    caption: "Related Top Sellers",
                    captionStyle: "product4TCaption product4TCaptionCat",
                    productStyle: "product4T product4TCat",
                    divSelect: "form#MainForm",
                    divPosition: "above",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    showRatings: true,
                    showBuyButton: false,
                    maxImageHeight: 150,
                    wrapper: "<table id='CAT4T' align='center'><tr><td></td></tr></table>",
                    inCart: false
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
                    numItems: 2,
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    divSelect: "table#v65-cart-checkout-parent td:first",
                    divPosition: "replace",
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<td width='320' valign='top'></td>",
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
