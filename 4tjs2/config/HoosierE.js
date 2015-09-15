(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.hoosierecig.com",
            alias: "HoosierE",
            GA_UA: "UA-44019748-1",
            platform: "4Tell3d.js",
            addCartBtnAtts: "input type='button' value='Add to Cart' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
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
                    resultType: 0,
                    numItems: 12,
                    caption: "Top Sellers",
                    captionStyle: "titles product4TCaption",
                    productStyle: "product4T product4THome",
                    divSelect: "tr:has(td.titles):last",
                    divPosition: "above",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    showRatings: true,
                    maxImageHeight: 150,
                    imageSize: "&maxx=120&maxy=120",
                    wrapper: "<tr><td ></td></tr>",
                    rawJS: { preDisplay: function () { $("#TOP_SELLERS_BLOCK").hide(); } },
                    inCart: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 4,
                    caption: "Customers also bought",
                    captionStyle: "menu-headers product4TCaption product4TCaptionPD1",
                    productStyle: "product4T product4TPD1",
                    divSelect: "#column2 > *:first",
                    divPosition: "replace",
                    showRatings: true,
                    maxImageHeight: 150,
                    imageSize: "&maxx=120&maxy=0",
                    wrapper: "<table width='195' class='PD14T'><tr><td></td></tr></table>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 12,
                    caption: "Customers also viewed...",
                    captionStyle: "titles product4TCaption",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#REV4T",
                    divPosition: "above",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 120,
                    showRatings: true,
                    wrapper: "<tr><td colspan='2'><table style='margin: 0 auto'><tr><td></td></tr></table></td></tr>",
                    rawJS: {
                        preInit: function (tout) {
                            if (navigator.userAgent.match(/MSIE\s*8/)) tout.carousel = false;
                        },
                        preDisplay: function () {
                            $("#REL4T").hide();
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
                    numItems: 4,
                    caption: "Related Top Sellers",
                    captionStyle: "menu-headers product4TCaption",
                    captionStyle: "menu-headers product4TCaption product4TCaptionPD1",
                    productStyle: "product4T product4TCat",
                    divSelect: "#column2 > *:first",
                    divPosition: "replace",
                    imageSize: "&maxx=120&maxy=0",
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<table width='195' class='PD14T'><tr><td></td></tr></table>",
                    inCart: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 12,
                    caption: "You may also like...",
                    captionStyle: "titles product4TCaption",
                    productStyle: "product4T product4TVC",
                    divSelect: "tr:has(#Table5)",
                    divPosition: "below",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    imageSize: "&maxx=100&maxy=100",
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<tr><td colspan='6'></td></tr>",
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
