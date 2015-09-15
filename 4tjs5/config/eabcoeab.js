(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.eabco.net",
            alias: "eabcoeab",
            GA_UA: "UA-8414232-2",
            platform: "4Tell3d.js",
            addCartBtnAtts: "input type='button' value='Add to Cart' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
            addCartImage: "",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            pricePrefix: "",
            salePricePrefix: "",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 4,
                numItems: 12,
                caption: "Recommended for you",
                showCaption: false,
                productStyle: "product4T product4THome",
                divSelect: "#home .productBlockContainer",
                divPosition: "replace",
                carousel: {
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=180&maxy=180",
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        $("h2").text(tout.caption);
                        $(tout.divSelect).hide();
                    }
                },
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 4,
                caption: "Customers also bought",
                productStyle: "product4T product4TPD1",
                divSelect: "#modMailist",
                divPosition: "above",
                showRatings: true,
                maxImageHeight: 150,
                imageSize: "&maxx=180&maxy=180",
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Customers also viewed",
                productStyle: "product4T product4TPD2",
                divSelect: ".relatedBlock",
                divPosition: "replace",
                carousel: {
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 120,
                imageSize: "&maxx=180&maxy=180",
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
                numItems: 12,
                caption: "More ideas",
                productStyle: "product4T product4TCat",
                divSelect: "#itemsBlock",
                divPosition: "below",
                carousel: {
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 100,
                imageSize: "&maxx=180&maxy=180",
                showRatings: true,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {},
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like",
                productStyle: "product4T product4TVC",
                divSelect: ".chk-buttons",
                divPosition: "below",
                carousel: {
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 100,
                imageSize: "&maxx=180&maxy=180",
                showRatings: true,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {},
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
