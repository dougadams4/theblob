(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.smartstun.com",
            alias: "smartstu",
            GA_UA: "UA-17424306-1",
            platform: "4Tell3d.js",
            addCartBtnAtts: "img type='button' value='Add To Cart'",
            addCartImage: "/assets/templates/default/images/more-info-btn.png",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            pricePrefix: "Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 6,
                caption: "Customers also bought",
                productStyle: "product4T product4TPD1",
                divSelect: ".right-col > table",
                divPosition: "below",
                carousel: {
                    numVis: 3,
                    circular: true
                },
                showRatings: false,
                maxImageHeight: 150,
                imageSize: "&maxx=120&maxy=120",
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Customers also viewed",
                productStyle: "product4T product4TPD2",
                divSelect: "tr:has(tr .productBlockContainer)",
                divPosition: "replace",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 120,
                showRatings: false,
                wrapper: "<div class='PD24T'></div>",
                rawJS: {},
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
                numItems: 12,
                caption: "You may also like",
                productStyle: "product4T product4TVC",
                divSelect: "form#recalculate ~ script",
                divPosition: "above",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<tr><td colspan='6'><div class='VC4T'></div></td></tr>",
                rawJS: {},
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
