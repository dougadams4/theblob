(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.pixibeauty.com/",
            alias: "PixiBeau",
            GA_UA: "UA-26177676-1",
            platform: "4TellMa.js",
            custom: true,
            addCartBtnAtts: "<input type='button' value='View Details'>",
            addCartImage: "//www.pixibeauty.com/skin/frontend/pixibeauty/pixibeauty/images/addtocart.png",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Auto: {
                tout1: {
                    enable: true,
                    resultType: "4,5,1",
                    numItems: "4,4,4",
                    caption: "Pixi by Petra's Best Sellers",
                    productStyle: "product4T product4THome",
                    divSelect: ".std",
                    divPosition: "below",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    showPrice: false,
                    showRatings: true,
                    maxImageHeight: 150,
                    wrapper: "<table width='100%' class='PD14T'><tr><td></td></tr></table>",
                    rawJS: {
                        preInit: function () {
                            _4TellBoost.setCatId("27");
                        }
                    },
                    inCart: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 12,
                    caption: "Customers Who Bought This Item Also Bought",
                    productStyle: "product4T product4TPD1",
                    divSelect: "#super-product-table, .add-to-box",
                    divPosition: "below",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    showRatings: true,
                    showPrice: false,
                    maxImageHeight: 150,
                    wrapper: "<div class='PD14T'></div>",
                    rawJS: {
                        preDisplay: function () {
                            $("div.box-up-sell").hide();
                        }
                    },
                    inCart: false
                },
                tout2: {
                    enable: false,
                    resultType: 3,
                    numItems: 4,
                    caption: "Similar Items",
                    productStyle: "product4T product4TPD2",
                    divSelect: ".block-product-subscribe",
                    divPosition: "above",
                    maxImageHeight: 120,
                    showRatings: true,
                    showPrice: false,
                    wrapper: "<div class='PD14T'></div>",
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
                    resultType: 1,
                    numItems: 8,
                    //fillMode: "genomic",
                    caption: "You may also like",
                    productStyle: "product4T product4TVC",
                    divSelect: ".totals",
                    divPosition: "below",
                    carousel: {
                        numVis: 2,
                        circular: true
                    },
                    maxImageHeight: 100,
                    showRatings: true,
                    showPrice: false,
                    wrapper: "<div id='VC4T'></div>",
                    rawJS: {
                        preDisplay: function () {
                            $(".crosssell").hide();
                        }
                    },
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
