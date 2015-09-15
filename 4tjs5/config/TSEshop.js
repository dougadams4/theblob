(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.tseshop.com",
            alias: "TSEshop",
            GA_UA: "UA-21854427-7",
            platform: "4Tell3d.js",
            addCartBtnAtts: "input type='button' value='View Details' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
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
            Home: [{
                enable: true,
                resultType: 1,
                numItems: 3,
                caption: "Customers also bought",
                captionStyle: "menu-headers product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TPD1",
                divSelect: "#modTopSellers",
                divPosition: "replace",
                imageSize: "&maxx=0&maxy=100",
                showRatings: false,
                maxImageHeight: 110,
                wrapper: "<div id='HOME4T'></div>",
                rawJS: {},
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Customers also viewed",
                captionStyle: "menu-headers product4TCaption product4TCaptionPD1",
                productStyle: "product4T product4TPD1",
                divSelect: ".relatedBlock",
                divPosition: "replace",
                carousel: {
                    items: 3,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=0&maxy=100",
                showRatings: false,
                maxImageHeight: 110,
                wrapper: "<div id='PD14T'></div>",
                rawJS: {
                    preDisplay: function () {
                        $('#modTopSellers').remove();
                    }
                },
                inCart: false
            },
                {
                    enable: true,
                    resultType: 0,
                    numItems: 4,
                    caption: "Customers also bought",
                    captionStyle: "titles product4TCaption",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#column2 iframe",
                    divPosition: "replace",
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 120,
                    showRatings: false,
                    wrapper: "<div id='PD24T'></div>",
                    inCart: false
                }],
            Category: [{
                enable: false
            }],
            Search: [],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like",
                captionStyle: "titles product4TCaption",
                productStyle: "product4T product4TVC",
                divSelect: ".chk-buttons",
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
                wrapper: "<div id='VC4T'></div>",
                rawJS: {
                    preDisplay: function (tout) {

                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
