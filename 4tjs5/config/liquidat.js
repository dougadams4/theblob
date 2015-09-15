(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.liquidations-outlet.com",
            alias: "liquidat",
            GA_UA: "UA-20614974-1",
            platform: "4Tell3d.js",
            addCartBtnAtts: "input type='button' value='Add to Cart' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
            addCartImage: "",
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
                numItems: 3,
                caption: "Customers also bought",
                productStyle: "product4T product4TPD1",
                divSelect: "#column2 > table:first, #NEW_RELEASES_BLOCK",
                divPosition: "above",
                showRatings: false,
                imageSize: "&maxx=120&maxy=0",
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Customers also viewed",
                productStyle: "product4T product4TPD2",
                divSelect: "tr:has(tr div[itemprop=description])",
                divPosition: "below",
                carousel: {
                    itemsCustom: [[0, 2], [1200, 3]],
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 120,
                showRatings: false,
                wrapper: "<tr><td colspan='2'><div class='PD24T'></div></td></tr>",
                rawJS: {
                    preDisplay: function (tout) {
                        $(tout.divSelect).parents("table").css("table-layout", "fixed");
                        $("#REL4T").hide();
                    }
                },
                inCart: false
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: false,
                resultType: 5,
                numItems: 4,
                caption: "Customers Also Viewed",
                productStyle: "product4T product4TCat",
                divSelect: "#main4TellContainer",
                divPosition: "append",
                setHeight: false,
                setWidth: false,
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 100,
                showRatings: false,
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
                divSelect: "form[name=recalculate] ~ script",
                divPosition: "below",
                carousel: {
                    items: 3,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<tr><td colspan='6'><div class='VC4T'></div></td></tr>",
                rawJS: {
                    preDisplay: function (tout) {
                        $(tout.divSelect).parents("table").css("table-layout", "fixed");
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
