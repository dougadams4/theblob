(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.carolee.com",
            alias: "caroleec",
            GA_UA: "UA-30020150-1",
            platform: "4Tell3d.js",
            addCartBtnAtts: "input type='button' value='Add to Cart' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
            addCartImage: "",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            pricePrefix: "",
            salePricePrefix: "",
            includeBase: false,
            siteEnable: false
        },
        PageSettings: {
            Home: [{
                enable: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Customers Also Bought...",
                productStyle: "product4T product4TPD1",
                divSelect: ".addl-images",
                divPosition: "below",
                carousel: {
                    items: 3,
                    itemsCustom: [[0,3]],
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=120&maxy=120",
                showRatings: false,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preDisplay: function () {
                        jQuery(".accessoriesBlock, .relatedBlock").hide();
                    }
                },
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Customers also viewed...",
                productStyle: "product4T product4TPD2",
                divSelect: ".relatedBlock",
                divPosition: "replace",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 150,
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
                caption: "You May Also Like...",
                productStyle: "product4T product4TVC",
                divSelect: ".third-party-payment ",
                divPosition: "above",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {},
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
