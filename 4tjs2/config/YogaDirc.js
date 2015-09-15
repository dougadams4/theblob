(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.yogadirect.com",
            alias: "YogaDirc",
            GA_UA: "UA-2372079-1",
            platform: "4Tell3d.js",
            custom: true,
            addCartBtnAtts: "input type='button' value='Add to Cart' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
            addCartImage: "",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            pricePrefix: "<span style='color: #585C5F', 'font-size: 13px'> Your Price: </span>",
            salePricePrefix: "<span style='color: #585C5F', 'font-size: 13px'> On Sale: </span>",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: {
                tout1: {
                    enable: true,
                    resultType: 1,
                    numItems: 12,
                    caption: "Today's Top Sellers...",
                    captionStyle: "hometitles product4TCaption product4TCaptionHome",
                    productStyle: "product4T product4THome",
                    divSelect: "table:has(table.alternative):last",
                    divPosition: "above",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    imageSize: "&maxx=0&maxy=150",
                    maxImageHeight: 0,
                    showRatings: false,
                    showBuyButton: false,
                    wrapper: "<table width='782' border='0' cellspacing='0' cellpadding='0' style='margin: 0 auto'><tr><td></td></tr></table>",
                    inCart: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 1,
                    numItems: 9,
                    caption: "Our Customers Also Bought...",
                    captionStyle: "titles product4TCaption",
                    productStyle: "product4T product4TPD1",
                    divSelect: "#main4TellContainer",
                    divPosition: "append",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    imageSize: "&maxx=100&maxy=100",
                    showRatings: false,
                    showBuyButton: false,
                    maxImageHeight: 130,
                    rawJS: {
                        preInit: function (tout) {
                            if (_4TellBoost.Fudge) {
                                tout.carousel.numVis = 2; tout.numItems = 8;
                            }
                        }
                    },
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 12,
                    caption: "Suggestions For You...",
                    captionStyle: "titles product4TCaption",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#second4TellContainer",
                    divPosition: "append",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 140,
                    showRatings: false,
                    showBuyButton: false,
                    inCart: false
                }
            },
            Category: [{
                enable: true,
                resultType: 5,
                numItems: 12,
                caption: "Related Top Sellers",
                captionStyle: "titles product4TCaption product4TCaptionCat",
                productStyle: "product4T product4TCat",
                divSelect: "#frmsortby br:first",
                divPosition: "replace",
                imageSize: "&maxx=100&maxy=100",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: false,
                showBuyButton: false,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        tout.enable = tout.enable && "268" == _4TellBoost.Service.catId;
                    }
                },
                inCart: false
            }],
            Search: {
                tout1: {
                    enable: true,
                    resultType: 1,
                    numItems: 4,
                    caption: "Top Sellers...",
                    captionStyle: "titles product4TCaption",
                    productStyle: "product4T product4TSearch",
                    divSelect: "#main4TellContainer",
                    divPosition: "append",
                    imageSize: "&maxx=100&maxy=100",
                    maxImageHeight: 100,
                    showRatings: false,
                    showBuyButton: false,
                    inCart: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 1,
                    numItems: 3,
                    caption: "You may also like...",
                    captionStyle: "titles product4TCaption",
                    productStyle: "product4T product4TVC",
                    divSelect: "#second4TellContainer",
                    divPosition: "append",
                    imageSize: "&maxx=100&maxy=100",
                    maxImageHeight: 120,
                    showRatings: false,
                    showBuyButton: false,
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
