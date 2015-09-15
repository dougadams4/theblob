(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "//www.lubezilla.com/",
            alias: "Lubezill",
            GA_UA: "UA-40029463-1",
            platform: "4TellMa.js",
            custom: false,
            addCartBtnAtts: "<input type='button' value='Add to Cart'>",
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
                    caption: "Our customers also bought...",
                    showCaption: false,
                    productStyle: "product4T product4TPD1",
                    divSelect: "#tout1_pdp_4Tell",
                    divPosition: "replace",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    showRatings: true,
                    maxImageHeight: 150,
                    //wrapper: "<table width='100%' class='PD14T'><tr><td></td></tr></table>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 6,
                    caption: "Similar Items",
                    showCaption: false,
                    productStyle: "product4T product4TPD2",
                    divSelect: "#tout2_pdp_4Tell",
                    divPosition: "replace",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    maxImageHeight: 120,
                    showRatings: true,
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
                    numItems: 4,
                    caption: "More ideas...",
                    productStyle: "product4T product4TCat",
                    divSelect: "#tout1_cat_4Tell",
                    divPosition: "replace",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<div id='PD14T'></div>",
                    inCart: false
                }
            },
            Auto: {
                tout1: {
                    enable: true,
                    resultType: 5,
                    numItems: 12,
                    caption: "<h2>Related Top Sellers</h2>",
                    productStyle: "product4T product4TCat",
                    divSelect: "#tout1_cat_4Tell",
                    divPosition: "replace",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<div id='PD14T'></div>",
                    inCart: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 12,
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    divSelect: "#tout1_cart_4Tell, .crosssell, #VC4T",
                    divPosition: "replace",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<div id='VC4T'></div>",
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
