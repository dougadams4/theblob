(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.meyerhatchery.com",
            alias: "MeyerHat",
            GA_UA: "UA-1727250-1",
            platform: "4TellDIY.js",
            addCartBtnAtts: "input type='button' value='See Details' class='input-search-button' ",
            addCartImage: "",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "//4tcdn.blob.core.windows.net/4tjs/images/nophoto.gif",
            priceClass: "price2",
            pricePrefix: "As Low As: ",
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
                    caption: "Customers also viewed...",
                    productStyle: "product4T product4TPD1",
                    divSelect: "#right",
                    divPosition: "below",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    showRatings: true,
                    maxImageHeight: 150,
                    wrapper: "<table width='100%' class='PD14T'><tr><td></td></tr></table>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 6,
                    caption: "Customers also bought...",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#tout2_pdp_4Tell ~ table:first",
                    divPosition: "below",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    maxImageHeight: 120,
                    showRatings: true,
                    wrapper: "<div class='PD24T'></div>",
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
                    divSelect: " #tout1_cat_4Tell",
                    divPosition: "replace",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<div class='CAT4T'></div>",
                    inCart: false
                }
            },
            AddToCart: [{
                enable: true,
                resultType: 2,
                numItems: 12,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: " #tout1_cart_4Tell",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='VC4T'></div>",
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
