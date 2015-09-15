(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.longislandwatch.com",
            alias: "LongIsla",
            GA_UA: "UA-372864-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "a>Add To Cart</a",
            spacerImage: "/v/vspfiles/templates/Vortex01/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/Vortex01/images/nophoto.gif",
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
                    resultType: 3,
                    numItems: 9,
                    caption: "Customers also viewed...",
                    productStyle: "product4T product4TPD1",
                    divSelect: "#v65-product-parent table.colors_pricebox",
                    divPosition: "below",
                    maxImageHeight: 150,
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    showRatings: true,
                    showBuyButton: false,
                    rawJS: {
                        perProduct: function (itemdata) {
                            var words = itemdata.title.split(" ");
                            itemdata.title = words[0] + " " + itemdata.productID;
                        }
                    },
                    wrapper: "<table width='450px' align='right' class='colors_pricebox PDP4T'><tr><td></td></tr></table>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 0,
                    numItems: 8,
                    caption: "Customers also bought...",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#ProductDetail_ProductDetails_div2 + img",
                    divPosition: "below",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 120,
                    showRatings: true,
                    showBuyButton: false,
                    wrapper: "<table width='100%' align='right' class='colors_pricebox PDP4T'><tr><td></td></tr></table>",
                    rawJS: {
                        preDisplay: function () {
                            $('.colors_lines_light').hide();
                        },
                        perProduct: function (itemdata) {
                            var words = itemdata.title.split(" ");
                            itemdata.title = words[0] + " " + itemdata.productID;
                        }
                    },
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
                    numItems: 8,
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    divSelect: "table#v65-cart-checkout-parent td:first",
                    divPosition: "above",
                    carousel: {
                        circular: true,
                        numVis: 2
                    },
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<td valign='top'><table><tr><td class='colors_pricebox PDP4T'></td></tr></table</td>",
                    rawJS: {
                        preDisplay: function () {
                            $('table:has(table.v65-productDisplay):last').remove();
                        },
                        perProduct: function (itemdata) {
                            var words = itemdata.title.split(" ");
                            itemdata.title = words[0] + " " + itemdata.productID;
                        }
                    },
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
