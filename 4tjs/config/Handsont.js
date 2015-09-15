(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.handsontools.com",
            alias: "Handsont",
            GA_UA: "UA-43431728-1",
            platform: "4Tell3d.js",
            custom: true,
            addCartBtnAtts: "input type='button' value='More Details' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
            addCartImage: "",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            priceClass: "price2",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: false,
        },
        PageSettings: {
            Home: {
                tout1: {
                    enable: true,
                    resultType: 4,
                    numItems: 20,
                    caption: "Top Sellers",
                    captionStyle: "menu-headers product4TCaption",
                    productStyle: "product4T product4THome",
                    divSelect: "#HOME4T",
                    divPosition: "replace",
                    carousel: {
                        numVis: 5,
                        circular: true
                    },
                    numRows: 2,
                    imageSize: "&maxx=120&maxy=120",
                    wrapper: "<tr id='HOME4T'><td></td></tr>",
                    showRatings: false,
                    rawJS: {
                        preDisplay: function () {
                            $("tr:has(img[src*=featured]):last").hide();
                        }
                    },
                    inCart: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 4,
                    caption: "Customers also bought...",
                    captionStyle: "menu-headers product4TCaption",
                    productStyle: "product4T product4TPD1",
                    divSelect: "#column1 > table:first",
                    divPosition: "replace",
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 150,
                    showRatings: false,
                    wrapper: "<table width='100%' class='PD14T'><tr><td></td></tr></table>",
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 12,
                    caption: "Customers also viewed...",
                    captionStyle: "product4TCaption product4TCaptionPD2",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#REL4T",
                    divPosition: "replace",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 120,
                    showRatings: false,
                    wrapper: "<tr><td colspan='2'></td></tr>",
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
                    productStyle: "product4T product4TPD1",
                    divSelect: "#column1 > table:first",
                    divPosition: "replace",
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 150,
                    showRatings: false,
                    wrapper: "<table width='100%' class='PD14T'><tr><td></td></tr></table>",
                    inCart: false
                }
            },
            AddToCart: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 4,
                    caption: "You may also like...",
                    captionStyle: "menu-headers product4TCaption",
                    productStyle: "product4T product4TVC",
                    divSelect: "#column1 > table:first",
                    divPosition: "replace",
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 100,
                    showRatings: false,
                    wrapper: "<table width='100%' class='VC4T'><tr><td></td></tr></table>",
                    rawJS: { preDisplay: function () { $("table.alternative, .checkout-headers").hide(); } },
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
