(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.SmokTek.com",
            alias: "SmokTek",
            GA_UA: "UA-24321404-1",
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
                    resultType: 4,
                    numItems: 4,
                    caption: "Top Sellers",
                    captionStyle: "menu-headers product4TCaption",
                    productStyle: "product4T product4THome",
                    divSelect: "#Top_Sellers_Block",
                    divPosition: "replace",
                    imageSize: "&maxx=120&maxy=120",
                    inCart: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 6,
                    caption: "Customers also bought...",
                    captionStyle: "menu-headers product4TCaption",
                    productStyle: "product4T product4TPD1",
                    divSelect: "tr:has(td.options-titles):last",
                    divPosition: "below",
                    carousel: {
                        numVis: 2,
                        circular: true
                    },
                    showRatings: true,
                    maxImageHeight: 150,
                    imageSize: "&maxx=120&maxy=120",
                    wrapper: "<tr><td colspan='2'></td></tr>",
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
                        numVis: 4,
                        circular: true
                    },
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 120,
                    showRatings: true,
                    wrapper: "<tr><td colspan='2'></td></tr>",
                    rawJS: {
                        preDisplay: function () {
                            $('#REL4T').hide();
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
                    productStyle: "product4T product4THome",
                    divSelect: "#Top_Sellers_Block",
                    divPosition: "replace",
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 100,
                    showRatings: true,
                    inCart: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 12,
                    caption: "You may also like...",
                    captionStyle: "item product4TCaption",
                    productStyle: "product4T product4TVC",
                    orientation: "horizontal",
                    divSelect: "tr:has(#Table5):last",
                    divPosition: "below",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<tr><td colspan='6'></td></tr>",
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
