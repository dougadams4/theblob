(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.signaturelittleones.com/",
            alias: "Signatur",
            GA_UA: "UA-27858585-1",
            platform: "4Tell3d.js",
            addCartBtnAtts: "a class='button' ><span>View Details</span></a",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
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
                    caption: "<h1>You may also like...</h1>",
                    productStyle: "product4T product4TPD1",
                    divSelect: ".information",
                    divPosition: "below",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    imageSize: "&maxx=100&maxy=100",
                    showRatings: true,
                    maxImageHeight: 150,
                    wrapper: "<div class='PD14T'></div>",
                    rawJS: {
                        preDisplay: function () {
                            $("div.box-product:has(.productContainer)").hide();
                        }
                    },
                    inCart: false
                },
                tout2: {
                    enable: false,
                    resultType: 3,
                    numItems: 4,
                    caption: "<h1>Customers also viewed...</h1>",
                    productStyle: "product4T product4TPD2",
                    divSelect: ".write-review",
                    divPosition: "below",
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 120,
                    showRatings: true,
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
                    resultType: 0,
                    numItems: 12,
                    caption: "More ideas for you..",
                    productStyle: "product4T product4TVC",
                    orientation: "horizontal",
                    divSelect: "table:has(img[src*=paypal]):last",
                    divPosition: "above",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    imageSize: "&maxx=100&maxy=100",
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<table width='70%' align='left' class='VC4T'><tr><td></td></tr></table>",
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
