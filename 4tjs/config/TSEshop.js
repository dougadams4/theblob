(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.tseshop.com",
            alias: "TSEshop",
            GA_UA: "UA-21854427-7",
            platform: "4Tell3d.js",
            addCartBtnAtts: "input type='button' value='Add to Cart' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
            addCartImage: "",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            priceClass: "price2",
            pricePrefix: "Your Price: ",
            salePricePrefix: "On sale: ",
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
                    numItems: 3,
                    caption: "Customers also bought",
                    captionStyle: "menu-headers product4TCaption product4TCaptionPD1",
                    productStyle: "product4T product4TPD1",
                    divSelect: "#column2 table:has(.menu-headers)",
                    divPosition: "above",
                    imageSize: "&maxx=0&maxy=100",
                    showRatings: true,
                    maxImageHeight: 110,
                    wrapper: "<table width='183'><tr><td></td></tr></table>",
                    rawJS: { preDisplay: function () { $('#column2 table:has(.menu-headers2)').remove(); } },
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 12,
                    caption: "Similar Items",
                    captionStyle: "titles product4TCaption",
                    productStyle: "product4T product4TPD2",
                    divSelect: "table:contains(Related Items):last",
                    divPosition: "replace",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 120,
                    showRatings: true,
                    wrapper: "<table width='740'><tr><td></td></tr></table>",
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
                    enable: false,
                    resultType: 0,
                    numItems: 4,
                    caption: "More ideas...",
                    productStyle: "product4T product4TSearch",
                    divSelect: "#column2 table:first",
                    divPosition: "above",
                    imageSize: "&maxx=100&maxy=100",
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<table width='183'><tr><td></td></tr></table>",
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
                    divSelect: "td:has(tr a[href*=paypal]):last",
                    divPosition: "above",
                    carousel: {
                        numVis: 3,
                        circular: true
                    },
                    imageSize: "&maxx=100&maxy=100",
                    maxImageHeight: 100,
                    showRatings: true,
                    wrapper: "<td colspan='2' align='left'></td>",
                    rawJS: { preDisplay: function (tout) { $(tout.divSelect).attr('colspan', 4); } },
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
