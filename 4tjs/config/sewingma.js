(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.CLIENTURL.com",
            alias: "sewingma",
            GA_UA: "UA-487443-1",
            platform: "4TellDIY.js",
            addCartBtnAtts: "input type='button' value='Add to Cart' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
            addCartImage: "",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            pricePrefix: "Our Price: ",
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
                numItems: 12,
                caption: "Our customers also bought...",
                productStyle: "product4T product4TPD1",
                divSelect: "#main4TellContainer",
                divPosition: "append",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 4,
                caption: "Similar Items",
                productStyle: "product4T product4TPD2",
                divSelect: "#second4TellContainer",
                divPosition: "append",
                setHeight: true,
                setWidth: false,
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<div class='PD24T'></div>",
                rawJS: {},
                inCart: false
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: true,
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
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {},
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 4,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: "#second4TellContainer",
                divPosition: "append",
                setHeight: true,
                setWidth: false,
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {},
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
