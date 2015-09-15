(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.sturdybuiltonline.com",
            alias: "SturdyBu",
            GA_UA: "UA-3225269-2",
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
                    enable: false
                }
            },
            ProductDetail: {
                tout1: {
                    enable: true,
                    resultType: 0,
                    numItems: 3,
                    caption: "Customers also bought...",
                    captionStyle: "titles product4TCaption",
                    productStyle: "product4T product4TPD1",
                    divSelect: "#product_recommendations_4T",
                    divPosition: "append",
                    imageSize: "&maxx=138&maxy=120",
                    showRatings: false,
                    maxImageHeight: 150,
                    inCart: false
                },
                tout2: {
                    enable: true,
                    resultType: 3,
                    numItems: 15,
                    caption: "YOU MAY ALSO LIKE:",
                    captionStyle: " product-titles",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#product_recommendations_4T_div2",
                    divPosition: "append",
                    carousel: {
                        numVis: 5,
                        circular: true
                    },
                    imageSize: "&maxx=138&maxy=120",
                    maxImageHeight: 120,
                    showRatings: false,
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
                    caption: "YOU MAY ALSO LIKE:",
                    captionStyle: "titles2 product4TCaption",
                    productStyle: "product4T product4TVC",
                    divSelect: "#product_recommendations_4T",
                    divPosition: "append",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    imageSize: "&maxx=138&maxy=120",
                    maxImageHeight: 150,
                    showRatings: false,
                    inCart: true
                }
            }
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
