(function (_4TellBoost, $, undefined)
{
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.esidirect.com.au",
            alias: "EsiDirec",
            GA_UA: "UA-5938610-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/esidirect/images/buttons/btn_addtocart.gif",
            spacerImage: "/v/vspfiles/templates/esidirect/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/esidirect/images/nophoto.gif",
            priceClass: "price2",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: {
                tout1: {
                    enable: false,
                    resultType: 4,
                    numItems: 12,
                    caption: "Top Sellers",
                    captionStyle: "product4TCaption product4TCaption2",
                    productStyle: "product4T product4THome",
                    divSelect: "a:has(#featured_title)",
                    divPosition: "above",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 150,
                    wrapper: "<table width='100%' ><tr><td></td></tr></table>",
                    inCart: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 6,
                    caption: "Our customers also bought...",
                    productStyle: "product4T product4TPD1",
                    divSelect: ".colors_pricebox",
                    divPosition: "below",
                    carousel: {
                        numVis: 2,
                        circular: true
                    },
                    maxImageHeight: 150,
                    wrapper: "<table width='353' class='toutWrapper4T'><tr><td></td></tr></table>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 12,
                    caption: "Customers also viewed...",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#ProductDetail_ProductDetails_div2 ~ br",
                    divPosition: "below",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 120,
                    wrapper: "<table width='100%' class='toutWrapper4T'><tr><td></td></tr></table>",
                    rawJS: { preDisplay: function () { $("#v65-product-related").hide(); } },
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
                    enable: false,
                    resultType: 4,
                    numItems: 12,
                    caption: "Related Top Sellers",
                    productStyle: "product4T product4TCat",
                    divSelect: "#MainForm",
                    divPosition: "above",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 100,
                    wrapper: "<table width='100%' class='toutWrapper4T'><tr><td></td></tr></table>",
                    rawJS: {
                        preInit: function (tout)
                        {
                            tout.enable = tout.enable && $(".pricecolor").length >= 10;
                        }
                    },
                    inCart: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 4,
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    orientation: "horizontal",
                    divSelect: "tr.v65-cart-shipping-details-row td.v65-cart-details-blank",
                    divPosition: "replace",
                    carousel: {
                        numVis: 2,
                        circular: true
                    },
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<td class='toutWrapper4T' colspan='4'></td>",
                    rawJS: {
                        preDisplay: function ()
                        {
                            $('#v65-cart-shipping-details-text').hide();
                        }
                    },
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
