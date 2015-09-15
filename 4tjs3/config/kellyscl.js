(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.kellyscloset.com",
            alias: "kellyscl",
            GA_UA: "UA-6399059-1",
            platform: "4Tell3d.js",
            custom: true,
            addCartBtnAtts: "a>View Details</a",
            //addCartImage: "//www.kellyscloset.com/assets/images/buy.gif",
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
                numItems: 15,
                caption: "Recommended for you",
                productStyle: "product4T product4THome",
                divSelect: "#homebox4",
                divPosition: "above",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                showRatings: false,
                maxImageHeight: 180,
                imageSize: "&maxx=120&maxy=120",
                wrapper: "<div class='HOME4T'></div>",
                rawJS: {
                    perProduct: function (itemdata) {
                        itemdata.imageLink = itemdata.imageLink.replace(/^www.kellyscloset.com/, "");
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
                divSelect: "tr:has(form[name=add])",
                divPosition: "below",
                carousel: {
                    numVis: 3,
                    circular: true
                },
                imageSize: "&maxx=120&maxy=120",
                showRatings: false,
                maxImageHeight: 150,
                wrapper: "<tr><td colspan='2'><div class='PD14T'></div></td></tr>",
                rawJS: {
                    perProduct: function (itemdata) {
                        itemdata.imageLink = itemdata.imageLink.replace(/^www.kellyscloset.com/, "");
                    }
                },
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Our customers also viewed...",
                productStyle: "product4T product4TPD2",
                divSelect: "#REV4T",
                divPosition: "above",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 120,
                showRatings: false,
                wrapper: "<tr><td colspan='2'><div class='PD24T'></div></td></tr>",
                rawJS: {
                    preDisplay: function () {
                        $("#REL4T").hide();
                    },
                    perProduct: function (itemdata) {
                        itemdata.imageLink = itemdata.imageLink.replace(/^www.kellyscloset.com/, "");
                    }
                },
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
                showRatings: false,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 15,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: "#VC4T",
                divPosition: "replace",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                imageSize: "&maxx=100&maxy=100",
                maxImageHeight: 150,
                showRatings: false,
                wrapper: "<tr><td colspan='6'><div class='#VC4T'></div></td></tr>",
                rawJS: {
                    perProduct: function (itemdata) {
                        itemdata.imageLink = itemdata.imageLink.replace(/^www.kellyscloset.com/, "");
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
