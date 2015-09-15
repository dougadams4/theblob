(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.incontinenceproductsplus.com",
            alias: "Incontin",
            GA_UA: "UA-30838989-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/WDS/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/WDS/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/WDS/images/nophoto.gif",
                        pricePrefix: "<span style='color: #000', 'font-size: 10px'>Price: </span>",
            salePricePrefix: "Sale Price: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            ProductDetail: [{
                    enable: true,
                    resultType: 0,
                    numItems: 12,
                    caption: "Customers also bought...",
                    productStyle: "product4T product4TPD1",
                    divSelect: ".colors_pricebox",
                    divPosition: "below",
                    carousel: {
                        circular: true,
                        numVis: 3
                    },
                    showRatings: false,
                    maxImageHeight: 130,
                    wrapper: "<table align='right' style= 'width: 525px; border: none;'><tr><td style='border: 1px solid #DDD;'></td></tr></table>",
                    inCart: false
                }, {
                    enable: true,
                    resultType: 3,
                    numItems: 8,
                    caption: "Customers also viewed...",
                    productStyle: "product4T product4TPD2",
                    divSelect: ".colors_lines_light",
                    divPosition: "replace",
                    carousel: {
                        circular: true,
                        numVis: 4
                    },
                    maxImageHeight: 120,
                    showRatings: false,
                    wrapper: "<table align='center' style='width:750px; border: none;'><tr><td style='border: 1px solid #DDD;'></td></tr></table>",
                    inCart: false
                }],
            AddToCart: [{
                    enable: true,
                    resultType: 0,
                    numItems: 10,
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    divSelect: "tr.v65-cart-shipping-details-row td.v65-cart-details-blank:eq(0)",
                    divPosition: "replace",
                    carousel: {
                        circular: true,
                        numVis: 2
                    },
                    maxImageHeight: 100,
                    showRatings: false,
                    wrapper: "<td style='border: 1px solid #DDD;' width='290' colspan='5'></td>",
                    inCart: true
            }],
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
