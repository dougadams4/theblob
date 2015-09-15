(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.idealvitamins.com",
            alias: "idealvit",
            GA_UA: "UA-23863448-2",
            platform: "4Tell3d.js",
            addCartBtnAtts: "input type='button' value='View Details' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
            addCartImage: "",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "/web/assets/images/spacer.gif",
            pricePrefix: "Your Price: ",
            salePricePrefix: "On sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: {
                tout1: {
                    enable: true,
                    resultType: 4,
                    numItems: 16,
                    caption: "Top Sellers",
                    captionStyle: "product4TCaption ",
                    productStyle: "product4T product4THome",
                    divSelect: "table.featured",
                    divPosition: "replace",
                    carousel: {
                        circular: true,
                        numVis: 4
                    },
                    imageSize: "&maxx=100&maxy=100",
                    showRatings: true,
                    maxImageHeight: 0,
                    inCart: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 9,
                    caption: "Customers also bought",
                    captionStyle: "product4TCaption2",
                    productStyle: "product4T product4TPD1",
                    divSelect: "#SHIP4T",
                    divPosition: "below",
                    imageSize: "&maxx=100&maxy=100",
                    showRatings: true,
                    maxImageHeight: 130,
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    wrapper: "<tr><td colspan='2'></td></tr>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 12,
                    caption: "Customers also viewed",
                    captionStyle: "product4TCaption2",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#REL4T",
                    divPosition: "replace",
                    carousel: {
                        circular: true,
                        numVis: 4
                    },
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 0,
                    showRatings: true,
                    wrapper: "<tr><td colspan='2'></td></tr>",
                    inCart: false
                }
            },
            Category: {
                tout1: {
                    enable: true,
                    resultType: 4,
                    numItems: 12,
                    caption: "Related Top Sellers",
                    captionStyle: "product4TCaption2",
                    productStyle: "product4T product4TCat",
                    divSelect: "tr:has(td.page_headers):last",
                    divPosition: "below",
                    carousel: {
                        circular: true,
                        numVis: 4
                    },
                    imageSize: "&maxx=100&maxy=100",
                    showRatings: true,
                    maxImageHeight: 0,
                    wrapper: "<tr><td colspan='2'></td></tr>",
                    rawJS: {
                        preInit: function (tout) {
                            tout.enable = _4TellBoost.Service.catId !== '91';
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
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 12,
                    caption: "You may also like",
                    captionStyle: "product4TCaption2",
                    productStyle: "product4T product4TVC",
                    carousel: {
                        circular: true,
                        numVis: 4
                    },
                    divSelect: "#VC4T",
                    divPosition: "below",
                    imageSize: "&maxx=125&maxy=125",
                    maxImageHeight: 150,
                    showRatings: true,
                    showBuyButton: true,
                    wrapper: "<tr><td colspan='6'></td></tr>",
                    inCart: true
                }
            }
        }
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
