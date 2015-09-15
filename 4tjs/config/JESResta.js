(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.jesrestaurantequipment.com",
            alias: "JESResta",
            GA_UA: "UA-8448856-1",
            platform: "4Tell3d.js",
            custom: true,
            addCartBtnAtts: "button type='button' class='btn btn-purchase'>Add to Cart</button",
            addCartImage: "",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
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
                    resultType: 4,
                    numItems: 20,
                    caption: "Recommended Top Sellers",
                    captionStyle: "product4TCaption product4TCaptionHome",
                    productStyle: "product4T product4THome",
                    divSelect: "div.block:has(.flexslider)",
                    divPosition: "replace",
                    carousel: {
                        numVis: 5,
                        circular: true
                    },
                    showRatings: false,
                    maxImageHeight: 150,
                    imageSize: "&maxx=120&maxy=120",
                    wrapper: "<table width='100%' class='HOME4T'><tr><td></td></tr></table>",
                    rawJS: {
                        preInit: function (tout) {
                            if ($(tout.divSelect).width() < 1000) {
                                 tout.enable = false;
                            }
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
                    caption: "<h4>Customers also bought...</h4>",
                    productStyle: "product4T product4TPD1",
                    divSelect: ".product-details",
                    divPosition: "below",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    imageSize: "&maxx=120&maxy=120",
                    showRatings: false,
                    maxImageHeight: 120,
                    wrapper: "<div class='PD14T span8'></div>",
                    rawJS: {
                        preInit: function (tout) {
                            if ($(tout.divSelect).parent().width() < 700) {
                                tout.numItems = tout.carousel.numVis;
                                tout.carousel = false;
                            }
                        },
                        preDisplay: function (tout) {
                            $(tout.divSelect).nextAll(".flexslider.span8, h4").hide();
                        }
                    },
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 8,
                    caption: "<h4>Customers also viewed...</h4>",
                    productStyle: "product4T product4TPD2",
                    divSelect: ".flexslider",
                    divPosition: "replace",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 120,
                    showRatings: false,
                    wrapper: "<div class='PD24T'></div>",
                    rawJS: {
                        preInit: function (tout) {
                            if ($(tout.divSelect).width() < 700) {
                                tout.numItems = tout.carousel.numVis;
                                tout.carousel = false;
                            }
                        },
                        preDisplay: function (tout) {
                            $(tout.divSelect).prev("h4").hide();
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
                    enable: true,
                    resultType: 5,
                    fillMode: "none",
                    numItems: 20,
                    caption: "Related Top Sellers",
                    captionStyle: "product4TCaption product4TCaptionHome",
                    productStyle: "product4T product4TCat",
                    divSelect: "#frmsortby",
                    divPosition: "above",
                    carousel: {
                        numVis: 5,
                        circular: true
                    },
                    imageSize: "&maxx=100&maxy=100",
                    maxImageHeight: 100,
                    showRatings: false,
                    wrapper: "<div class='CAT4T span12'></div>",
                    rawJS: {
                        preInit: function (tout) {
                            tout.enable = tout.enable && $("div.prod-action").length >= 1;
                            if ($(tout.divSelect).width() < 1000) {
                                tout.enable = false;
                            }
                        }
                    },
                    inCart: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 20,
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    divSelect: "form#recalculate div.block:last",
                    divPosition: "below",
                    carousel: {
                        numVis: 5,
                        circular: true
                    },
                    imageSize: "&maxx=100&maxy=100",
                    maxImageHeight: 100,
                    showRatings: false,
                    wrapper: "<div class='VC4T'></div>",
                    rawJS: {
                        preInit: function (tout) {
                            if ($(tout.divSelect).width() < 700) {
                                tout.enable = false;
                            }
                        }
                    },
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
