(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.servapure.com",
            alias: "servapur",
            GA_UA: "UA-10608937-1",
            platform: "4Tell3d.js",
            addCartBtnAtts: "input type='button' value='Add to Cart' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
            addCartImage: "",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            pricePrefix: "Your Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 1,
                numItems: 12,
                caption: "Recommended for you",
                showCaption: false,
                productStyle: "product4T product4THome",
                divSelect: ".data .data tr:has(tr table.alternative)",
                divPosition: "replace",
                carousel: {
                    numVis: 3,
                    circular: true
                },
                numRows: 2,
                showRatings: false,
                maxImageHeight: 150,
                imageSize: "&maxx=120&maxy=120",
                wrapper: "<tr><td><div class='HOME4T'></div></td></tr>",
                rawJS: {
                    preDisplay: function (tout) {
                        $(".titles").text(tout.caption);
                    }
                },
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Our customers also bought...",
                productStyle: "product4T product4TPD1",
                divSelect: "tr:has(tr table.alternative .price-info)",
                divPosition: "below",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                showRatings: false,
                maxImageHeight: 150,
                imageSize: "&maxx=120&maxy=120",
                wrapper: "<tr><td colspan='2'><div class='PD14T'></div></td></tr>",
                rawJS: {},
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Our customers also viewed",
                productStyle: "product4T product4TPD1",
                divSelect: "#REL4T",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 160,
                showRatings: false,
                wrapper: "<tr><td colspan='2'><div class='PD14T'></div></td></tr>",
                rawJS: {},
                inCart: false
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: false,
                resultType: 5,
                numItems: 4,
                caption: "More ideas...",
                productStyle: "product4T product4TCat",
                divSelect: "#main4TellContainer",
                divPosition: "append",
                setHeight: false,
                setWidth: false,
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: "table:has(img[src*=paypal])",
                divPosition: "above",
                carousel: {
                    circular: true,
                    numVis: 3
                },
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 160,
                showRatings: false,
                wrapper: "<table align='left' width='70%'><tr><td><div class='PD14T'></div></td></tr></table>",
                rawJS: {
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
