(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.lanierpens.com",
            alias: "LanierP",
            GA_UA: "UA-289494-2",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart', 'addCartImage'",
            addCartImage: "/v/vspfiles/templates/o2i/images/buttons/btn_addtocart.gif",
            spacerImage: "/v/vspfiles/templates/o2i/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/o2i/images/nophoto.gif",
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
                    productStyle: "product4T product4TPD1",
                    //divSelect: ".colors_pricebox",
                    divSelect: "span#altviews, span:has(img.vCSS_img_alternate_product_photo)",
                    divPosition: "below",
                    showRatings: true,
                    maxImageHeight: 150,
                    wrapper: "<table width='93%' align='left' class='PD14T'><tr><td></td></tr></table>",
                    rawJS: {
                        preInit: function (tout) {
                            tout.numItems = Math.max(1, Math.round($(".colors_pricebox:last").outerHeight() / 280));
                            //tout.enable = tout.enable && $(tout.divSelect).length == 1;
                        }
                    },
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 2,
                    numItems: 12,
                    caption: "More Ideas for You",
                    productStyle: "product4T product4TPD2",
                    divSelect: ".colors_lines_light",
                    divPosition: "replace",
                    carousel: {
                        circular: true,
                        numVis: 4
                    },
                    maxImageHeight: 140,
                    showRatings: true,
                    wrapper: "<table width='100%' class='PD14T'><tr><td></td></tr></table>",
                    rawJS: {
                        preDisplay: function (tout) {
                            $(tout.divSelect).hide();
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
                    productStyle: "product4T product4TVC",
                    divSelect: "#v65-cart-checkout-parent",
                    divPosition: "below",
                    carousel: {
                        circular: true,
                        numVis: 4
                    },
                    maxImageHeight: 120,
                    showRatings: true,
                    wrapper: "<table width='100%' class='PD14T'><tr><td></td></tr></table>",
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
