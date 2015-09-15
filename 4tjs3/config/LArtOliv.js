(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.lartedellolivo.com",
            alias: "LArtOliv",
            GA_UA: "UA-249533-10",
            platform: "4Tell3d.js",
            addCartBtnAtts: "input type='button' value='Buy' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
            spacerImage: "//assets/templates/common/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            priceClass: "price2",
            pricePrefix: "",
            salePricePrefix: "",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 3,
                    caption: "Top Sellers",
                    captionStyle: "product4TCaption product4TCaptionHome featured-titles",
                    productStyle: "product4T product4THome",
                    divSelect: "div#midContent div.left:has(#Feat)",
                    divPosition: "replace",
                    imageSize: "&maxx=100&maxy=100",
                    showRatings: false,
                    maxImageHeight: 150,
                    inCart: true
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 3,
                    caption: "Customers also bought",
                    captionStyle: "product4TCaption product4TCaptionHome featured-titles",
                    productStyle: "product4T product4TPD1",
                    divSelect: "#column2 > div.mod_bg:first",
                    divPosition: "replace",
                    imageSize: "&maxx=100&maxy=100",
                    showRatings: false,
                    maxImageHeight: 150,
                    wrapper: "<div style='background:#FFF'></div>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 6,
                    caption: "Similar Items",
                    captionStyle: "product4TCaption product4TCaptionHome featured-titles",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#REL4T",
                    divPosition: "replace",
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 120,
                    carousel: {
                        circular: true,
                        numVis: 3
                    },
                    showRatings: false,
                    wrapper: "<tr><td colspan='2'></td></tr>",
                    inCart: false
                }
            },
            Category: {
                tout1: {
                    enable: true,
                    resultType: 5,
                    numItems: 4,
                    caption: "Related Top Sellers",
                    captionStyle: "product4TCaption product4TCaptionHome featured-titles",
                    productStyle: "product4T product4TPD1",
                    divSelect: "#column2 > div.mod_bg:first",
                    divPosition: "replace",
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 120,
                    showRatings: false,
                    wrapper: "<div style='background:#FFF'></div>",
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
                    numItems: 4,
                    caption: "You may also like...",
                    captionStyle: "checkout-headers product4TCaption2",
                    productStyle: "product4T product4TVC",
                    divSelect: "tr:has(#Table5)",
                    divPosition: "below",
                    imageSize: "&maxx=100&maxy=100",
                    maxImageHeight: 100,
                    showRatings: false,
                    wrapper: "<tr><td colspan='6'></td></tr>",
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
// JavaScript Document
