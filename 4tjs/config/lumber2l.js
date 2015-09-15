(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.CLIENTURL.com",
            alias: "lumber2l",
            GA_UA: "",
            platform: "4Tell3d.js",
            custom: true,
            addCartBtnAtts: "input type='button' value='View Details' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
            addCartImage: "",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            pricePrefix: "",
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
                numItems: 4,
                caption: "<img style='margin: 4px auto' src='//4tcdn.blob.core.windows.net/4tjs/images/Customers-Also-Bought-1.gif'/>",
                productStyle: "product4T product4TPD1",
                divSelect: "#left_nav.right-switch",
                divPosition: "replace",
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
                caption: "<img src='//4tcdn.blob.core.windows.net/4tjs/images/customers-also-viewed.gif'/>",
                productStyle: "product4T product4TPD2",
                divSelect: ".text_2, #related-items, .guantity",
                divPosition: "below",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 120,
                showRatings: false,
                wrapper: "<div class='PD24T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        if (window.outerWidth < 1000) {
                            tout.numItems = tout.carousel.numVis;
                            tout.carousel = false;
                        }
                    },
                    preDisplay: function () {
                        $("#related-items").hide();
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
                caption: "More ideas...",
                productStyle: "product4T product4TCat",
                divSelect: "#main4TellContainer",
                divPosition: "append",
                setHeight: false,
                setWidth: false,
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "<img src='//4tcdn.blob.core.windows.net/4tjs/images/you-may-also-like.gif'/>",
                productStyle: "product4T product4TPD2",
                divSelect: ".chk-buttons",
                divPosition: "above",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 100,
                showRatings: false,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        if (window.outerWidth < 1000) {
                            tout.numItems = tout.carousel.numVis;
                            tout.carousel = false;
                        }
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
