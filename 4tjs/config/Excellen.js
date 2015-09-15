(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.Excellent-Supply.com",
            alias: "Excellen",
            GA_UA: "UA-8131588-1",
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
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 4,
                caption: "Our customers also bought...",
                captionStyle: " product_title product4TCaption",
                productStyle: "product4T product4TPD1",
                divSelect: "form#add table:has(table .blue_titles):last",
                divPosition: "below",
                showRatings: true,
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 150,
                wrapper: "<table width='100%' class='PD14T'><tr><td></td></tr></table>",
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 5,
                caption: "Customers who viewed this product, also viewed...",
                captionStyle: "orange_header product4TCaption",
                productStyle: "product4T product4TPD2",
                divSelect: "tr:has(tr td.orange_header):first",
                divPosition: "below",
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<tr><td colspan='2'></td></tr>",
                rawJS: {
                    preDisplay: function (tout) {
                        $("tr:has(span.red_price):first").hide();
                    }
                },
                inCart: false

            }],
            Search: [{
                enable: false

            }],
            Category: [{
                enable: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 4,
                caption: "You may also like...",
                captionStyle: " product_title product4TCaption",
                productStyle: "product4T product4TVC",
                divSelect: "tr:has(#Table5)",
                divPosition: "below",
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<tr><td colspan='6'></td></tr>",
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
