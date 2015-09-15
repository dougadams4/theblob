(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.CLIENTURL.com",
            alias: "kingscam",
            GA_UA: "UA-305405-12",
            platform: "4Tell3d.js",
            addCartBtnAtts: "input type='button' value='Item Details' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
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
                resultType: 1,
                numItems: 12,
                caption: "Recommended for You",
                productStyle: "product4T product4THome",
                divSelect: "#homeCarousel",
                divPosition: "below",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='HOME4T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        if (window.outerWidth < 1000) {
                            tout.numItems = tout.carousel.numVis;
                            tout.carousel = false;
                        }
                    },
                },
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "Customers also bought",
                productStyle: "product4T product4TPD1",
                divSelect: ".secondary",
                divPosition: "below",
                carousel: {
                    numVis: 3,
                    circular: true
                },
                imageSize: "&maxx=100&maxy=100",
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        if (window.outerWidth < 1000) {
                            tout.numItems = tout.carousel.numVis;
                            tout.carousel = false;
                        }
                    },
                    preDisplay: function () {
                        $(".beta-col").insertAfter("#mediaContainer");
                    }
                },
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
                    numVis: 4,
                    circular: true
                },
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<div class='PD24T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        if (window.outerWidth < 1000) {
                            tout.numItems = tout.carousel.numVis;
                            tout.carousel = false;
                        }
                    },
                    preDisplay: function () {
                        $(".accessoriesBlock").hide();
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
                caption: "More ideas",
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
                numItems: 12,
                caption: "You may also like",
                showCaption: false,
                productStyle: "product4T product4TVC",
                divSelect: "#recalculate",
                divPosition: "below",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='VC4T'></div>",
                rawJS: {
                    preInit: function () {
                        //detectCartPage isn't scraping the right items, so we do it here.
                        $(".row").each(function () {
                            var id = $(this).find(".product-image a").attr("href").replace(".html", "");
                            id = id && id.match(/\d+$/);
                            var quantity = $(this).find("input[name*=qty]").val() || 1;
                            if (id && id[0]) {
                                _4TellBoost.addCartItem(id[0], quantity)
                            }

                        })
                    },
                    preDisplay: function (tout) {
                        $(tout.divSelect).prev("div.header").find("h3").text(tout.caption);
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
