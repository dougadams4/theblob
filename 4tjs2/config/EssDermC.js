(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.essentialdermcare.com",
            alias: "EssDermC",
            GA_UA: "UA-27130071-1",
            platform: "4Tell3d.js",
            custom: true,
            addCartBtnAtts: '<input type="button" name="Add" value="Add to Cart" class="btn" onmouseover="this.className=\'btn_over\'" onmouseout="this.className=\'btn\'">',
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            priceClass: "price2",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            ABTesting: 2,
            persistentTesting: false,
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
                    resultType: 3,
                    numItems: 6,
                    fillMode: "none",
                    caption: "Our Customers Also Viewed...",
                    captionStyle: "titles product4TCaption",
                    productStyle: "product4T product4TPD1",
                    divSelect: "#ATC4T",
                    divPosition: "below",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    imageSize: "&maxx=90&maxy=90",
                    maxImageHeight: 100,
                    showRatings: false,
                    wrapper: "<table width='400px' align='center'><tr><td></td></tr></table>",
                    rawJS: {
                        preInit: function (tout) {
                            var CTGYCode = $('input[name=category_id]').val();
                            if (CTGYCode === '570' || CTGYCode == '523')
                                tout.numItems = 9;
                        }
                    },
                    testGroup: {
                        0: {},
                        1: {
                            rawJS: {
                                preInit: function (tout) {
                                    _4TellBoost.SiteInfo.addCartBtnAtts = _4TellBoost.SiteInfo.addCartBtnAtts.replace(/btn/gi, "btnc")
                                }
                            }
                        }
                    }
                },
                tout2: {
                    enable: true,
                    resultType: 0,
                    numItems: 12,
                    fillMode: "none",
                    caption: "Our Customers Also Bought...",
                    captionStyle: "titles product4TCaption",
                    productStyle: "product4T product4TPD2",
                    orientation: "horizontal",
                    divSelect: "#REL4T",
                    divPosition: "replace",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    imageSize: "&maxx=100&maxy=100",
                    maxImageHeight: 100,
                    showRatings: false,
                    wrapper: "<tr><td colspan='2'></td></tr>",
                    rawJS: {
                        preInit: function (tout) {
                            var CTGYCode = $('input[name=category_id]').val();
                            if (CTGYCode === '570' || CTGYCode == '523') {
                                tout2.enable = false;
                                $('#REL4T').hide();
                            }
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
                    resultType: 0,
                    numItems: 12,
                    caption: "Customers Also Bought",
                    captionStyle: "titles2 product4TCaption product4TCaptionVC",
                    productStyle: "product4T product4TVC",
                    orientation: "horizontal",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    imageSize: "&maxx=100&maxy=100",
                    maxImageHeight: 100,
                    showRatings: false,
                    inCart: true,
                    testGroup: {
                        0: {},
                        1: {
                            rawJS: {
                                preInit: function (tout) {
                                    _4TellBoost.SiteInfo.addCartBtnAtts = _4TellBoost.SiteInfo.addCartBtnAtts.replace(/btn/gi, "btnc")
                                }
                            }

                        }
                    }
                }

            }
        }
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
