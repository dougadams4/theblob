(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.LaptopBatteryExpress.com",
            alias: "LaptopBA",
            GA_UA: "UA-4141460-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/90/images/buttons/btn_addtocart.gif",
            spacerImage: "/v/vspfiles/templates/90/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/90/images/nophoto.gif",
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
                    resultType: 6,
                    fillMode: "none",
                    numItems: 4,
                    caption: "Customers also bought...",
                    productStyle: "product4T product4TPD1",
                    divSelect: "table.colors_pricebox",
                    divPosition: "below",
                    carousel: {
                        numVis: 2,
                        circular: true
                    },
                    showRatings: true,
                    maxImageHeight: 150,
                    wrapper: "<table width='100%' align='center'><tr><td></td></tr></table>",
                    inCart: false
                },
                tout2: {
                    enable: false,
                    resultType: 3,
                    numItems: 3,
                    caption: "Customers also viewed...",
                    productStyle: "product4T product4TPD2",
                    divSelect: "div#right p.featured-link",
                    divPosition: "replace",
                    maxImageHeight: 120,
                    showRatings: true,
                    wrapper: "<div style='border-bottom:1px solid grey;'></div>",
                    rawJS: {
                        preDisplay: function (tout) {
                            $(tout.divSelect).prev('h2').remove();
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
                    resultType: 6,
                    fillMode: "topsell",
                    numItems: 4,
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    divSelect: "br.beforeArticleBR",
                    divPosition: "above",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 140,
                    showRatings: true,
                    wrapper: "<table class='toutWrapper4T' width='100%'><tr><td></td></tr></table>",
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
