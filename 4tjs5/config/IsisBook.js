(function (_4TellBoost, $, undefined)
{
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.isisbooks.com",
            alias: "IsisBook",
            GA_UA: "UA-47615695-1",
            autoTracking: true,
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "//store.isisbooks.com/v/vspfiles/templates/posh/images/buttons/btn_addtocart.gif",
            spacerImage: "//store.isisbooks.com/v/vspfiles/templates/posh/images/clear1x1.gif",
            emptyImage: "//store.isisbooks.com/v/vspfiles/templates/posh/images/nophoto.gif",
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
                    resultType: 1,
                    numItems: 12,
                    rotateRecs: true,
                    caption: "Top Sellers",
                    productStyle: "product4T product4THome",
                    divSelect: "td#main_content div:last",
                    divPosition: "below",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    showRatings: true,
                    maxImageHeight: 170,
                    inCart: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 12,
                    caption: "Our customers also bought...",
                    productStyle: "product4T product4TPD1",
                    divSelect: ".colors_pricebox",
                    divPosition: "below",
                    carousel: {
                        numVis: 2,
                        circular: true
                    },
                    showRatings: true,
                    maxImageHeight: 150,
                    wrapper: "<table width='320px' align='right' class='toutWrapper4T'><tr><td></td></tr></table>",
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
                    wrapper: "<table width='100%' class='toutWrapper4T'><tr><td></td></tr></table>",
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
                    enable: true,
                    resultType: 5,
                    numItems: 12,
                    caption: "Related Top Sellers",
                    productStyle: "product4T product4TCat",
                    divSelect: "#MainForm",
                    divPosition: "below",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<table width='100%' class='toutWrapper4T'><tr><td></td></tr></table>",
                    rawJS: {
                        preInit: function (tout)
                        {
                            tout.enable = tout.enable && $('img[src*=addtocart]').length >= 10;
                        }
                    },
                    inCart: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 6,
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    divSelect: "#v65-cart-checkout-parent td:first",
                    divPosition: "replace",
                    carousel: {
                        numVis: 2,
                        circular: true
                    },
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<td valign='top' ></td>",
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
