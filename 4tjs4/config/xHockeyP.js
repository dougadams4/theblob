(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.xhockeyproducts.com",
            alias: "xHockeyP",
            GA_UA: "UA-19394545-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/XHockeyProds/images/buttons/btn_addtocart.gif",
            spacerImage: "/v/vspfiles/templates/XHockeyProds/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/XHockeyProds/images/nophoto.gif",
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
                    numItems: 12,
                    caption: "Customers also bought...",
                    productStyle: "product4T product4TPD1",
                    divSelect: ".colors_pricebox",
                    divPosition: "below",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    showRatings: true,
                    maxImageHeight: 80,
                    wrapper: "<table width='100%' align='right' ><tr><td></td></tr></table>",
                    rawJS: {
                        preInit: function (tout) {
                            if ($("table.colors_pricebox").length > 1) {
                                //We're going full width, then.
                                tout.productStyle = "product4T product4TPD1 product4TPD1B";
                                tout.divSelect = "#v65-product-parent";
                                tout.carousel.numVis = 4;
                            }
                        }
                    },
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 8,
                    caption: "More ideas for you...",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#ProductDetail_ProductDetails_div2",
                    divPosition: "below",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 160,
                    showRatings: true,
                    wrapper: "<table width='100%' ><tr><td></td></tr></table>",
                    rawJS: {
                        preDisplay: function () {
                            $('.colors_lines_light').hide();
                        }
                    },
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
                    resultType: 0,
                    numItems: 12,
                    caption: "You may also like...",
                    captionStyle: "product4TCaption product4TCaptionVC",
                    productStyle: "product4T product4TVC",
                    divSelect: "table#v65-cart-checkout-parent",
                    divPosition: "below",
                    carousel: {
                        circular: true,
                        numVis: 4
                    },
                    maxImageHeight: 140,
                    showRatings: true,
                    wrapper: "<table width='100%' class='PD14T'><tr><td></td></tr></table>",
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
