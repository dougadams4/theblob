(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.techtoolsupply.com",
            alias: "Svitla1",
            GA_UA: "UA-739238-1",
            platform: "4TellMa.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/v/images/buttons/btn_addtocart.gif",
            spacerImage: "/v/vspfiles/templates/v/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/v/images/nophoto.gif",
            priceClass: "price2",
            pricePrefix: "<span style='color:black'>TTS Price: </span>",
            salePricePrefix: "<span style='color:black'>On Sale: </span>",
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
                    enable: false,
                    resultType: 0,
                    numItems: 12,
                    caption: "Customers also bought...",
                    productStyle: "product4T product4TPD1",
                    divSelect: ".product-collateral",
                    divPosition: "above",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    showRatings: false,
                    maxImageHeight: 150,
                    wrapper: "<table width='450' align='right' class='toutWrapper4T' style='margin-top:5px'><tr><td></td></tr></table>",
                    inCart: false
                },
                tout2: {
                    enable: false,
                    resultType: 3,
                    numItems: 4,
                    caption: "Customers also viewed...",
                    captionStyle: "product4TCaption product4TCaption2",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#vCSS_mainform td[width*=15]",
                    divPosition: "replace",
                    maxImageHeight: 120,
                    showRatings: true,
                    wrapper: "<td width='15%' valign='top'><table align='right'class='toutWrapper4T' style='margin-top: 17px;height:1030px;'><tr><td align='top'></td></tr></table></td>",
                    inCart: false
                }
            },
            Category: {
                tout1: {
                    enable: false,
                    resultType: 5,
                    numItems: 15,
                    caption: "Related Top Sellers",
                    productStyle: "product4T product4TCat",
                    divSelect: "form#MainForm",
                    divPosition: "above",
                    carousel: {
                        numVis: 5,
                        circular: true
                    },
                    maxImageHeight: 150,
                    showPrice: false,
                    wrapper: "<table width='100%' align='center' ><tr><td></td></tr></table>",
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
                    enable: false,
                    resultType: 0,
                    numItems: 4,
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    divSelect: "table#v65-cart-checkout-parent td:eq(1)",
                    divPosition: "below",
                    carousel: {
                        circular: true,
                        numVis: 2
                    },
                    maxImageHeight: 100,
                    showPrice: false,
                    wrapper: "<td valign='top'><table><tr><td ></td></tr></table</td>",
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
