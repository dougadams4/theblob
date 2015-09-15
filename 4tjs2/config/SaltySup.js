(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.saltysupply.com",
            alias: "SaltySup",
            GA_UA: "UA-2515541-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart', 'addCartImage'",
            addCartImage: "/v/vspfiles/templates/SaltySupply/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/SaltySupply/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/SaltySupply/images/nophoto.gif",
            pricePrefix: "<span style='color: #000', 'font-size: 10px'>Our Price: </span>",
            salePricePrefix: "<span style='color: #D30000', 'font-size: 10px'>Sale Price: </span>",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 1,
                    numItems: 9,
                    caption: "Customers also bought...",
                    captionStyle: "product4TCaption product4TCaptionPD1",
                    productStyle: "product4T product4TPD1",
                    divSelect: "#content_left",
                    divPosition: "replace",
                    showRatings: false,
                    maxImageHeight: 130,
                    wrapper: "<div class='PD14T'></div>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 10,
                    caption: "Customers also viewed...",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#ProductDetail_ProductDetails_div2",
                    divPosition: "below",
                    carousel: {
                        circular: true,
                        numVis: 5
                    },
                    maxImageHeight: 100,
                    showRatings: false,
                    wrapper: "<table width='100%' align='center'><tr><td></td></tr></table>",
                    rawJS: {
                        preDisplay: function () {
                            $('.colors_lines_light').remove();
                        }
                    },
                    inCart: false
                }
            },
            Category: {
                tout1: {
                    enable: true,
                    resultType: 5,
                    numItems: 9,
                    caption: "Related Top Sellers",
                    captionStyle: "product4TCaption product4TCaptionCat",
                    productStyle: "product4T product4TCat",
                    divSelect: "#content_area",
                    divPosition: "below",
                    showRatings: false,
                    maxImageHeight: 130,
                    wrapper: "<div class='PD14T'></div>",
                    inCart: false
                }
            },
            AddToCart: [{
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
                maxImageHeight: 80,
                showRatings: false,
                wrapper: "<table align='center'><tr><td></td></tr></table>",
                rawJS: {
                    preDisplay: function () {
                        $('#related_move').remove();
                    }
                },
                inCart: true
            }
            ],
            Home: {
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
