(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.franklingolfcar.com",
            alias: "Franklin",
            GA_UA: "UA-25111528-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart', 'addCartImage'",
            addCartImage: "/v/vspfiles/templates/custom/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/custom/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/custom/images/nophoto.gif",
            pricePrefix: "<span style='color: #000'>Our Price: </span>",
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
                    productStyle: "product4T product4TPD1",
                    divSelect: ".colors_pricebox",
                    divPosition: "below",
                    carousel: {
                        circular: true,
                        numVis: 3
                    },
                    imageSize: "&maxx=100&maxy=100",
                    showRatings: false,
                    maxImageHeight: 100,
                    wrapper: "<table align='left' style='width:100%; border: 1px solid #EEE'><tr><td></td></tr></table>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 12,
                    caption: "Customers also viewed...",
                    productStyle: "product4T product4TPD2",
                    divSelect: ".colors_descriptionbox",
                    divPosition: "below",
                    carousel: {
                        circular: true,
                        numVis: 4
                    },
                    maxImageHeight: 110,
                    showRatings: false,
                    wrapper: "<table align='center' style= 'width:100%; border: 1px solid #EEE;'><tr><td></td></tr></table>",
                    rawJS: {
                        preDisplay: function () {
                            $('.colors_lines_light').remove();
                        }
                    },
                    inCart: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 8,
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    divSelect: "table#v65-cart-checkout-parent td:first",
                    divPosition: "replace",
                    carousel: {
                        circular: true,
                        numVis: 2
                    },
                    maxImageHeight: 100,
                    showRatings: false,
                    wrapper: "<td valign='top' style='border: 1px solid #EEE; margin-right: '></td>",
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
