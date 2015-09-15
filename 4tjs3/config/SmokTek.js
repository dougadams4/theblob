(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.SmokTek.com",
            alias: "SmokTek",
            GA_UA: "UA-56656525-1",
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
                numItems: 4,
                rotateRecs: true,
                caption: "Top Sellers",
                captionStyle: "menu-headers product4TCaption",
                productStyle: "product4T product4THome",
                divSelect: "#modTopSellers",
                divPosition: "replace",
                imageSize: "&maxx=120&maxy=0",
                rawJS: {
                    preInit: function (tout) {
                        tout.startPos = Math.floor(20 * Math.random(20 - tout.numItems));
                        $("#Top_Sellers_Block").hide();
                    }
                },
                wrapper: "<div class='PD14T'></div>",
                inCart: false
            }
            ],
            ProductDetail: [
                {
                    enable: true,
                    resultType: 0,
                    fillMode: "genomic",
                    numItems: 4,
                    caption: "Customers also bought",
                    captionStyle: "menu-headers product4TCaption",
                    productStyle: "product4T product4THome",
                    divSelect: "#modTopSellers",
                    divPosition: "replace",
                    imageSize: "&maxx=120&maxy=0",
                    rawJS: {
                        preInit: function (tout) {
                            _4TellBoost.setCatId(catID);
                        }
                    },
                    wrapper: "<div class='PD14T'></div>",
                    inCart: false
                }, {
                    enable: false,
                    resultType: 0,
                    numItems: 6,
                    caption: "Customers also bought...",
                    captionStyle: "menu-headers product4TCaption",
                    productStyle: "product4T product4TPD1",
                    divSelect: ".relatedBlock",
                    divPosition: "below",
                    carousel: {
                        items: 4,
                        navigation: true,
                        navigationText: false,
                        pagination: false
                    },
                    showRatings: true,
                    maxImageHeight: 150,
                    imageSize: "&maxx=120&maxy=120",
                    wrapper: "<div class='PD14T'></div>",
                    inCart: false
                }, {
                    enable: true,
                    resultType: 3,
                    numItems: 12,
                    caption: "Customers also viewed...",
                    captionStyle: "titles product4TCaption",
                    productStyle: "product4T product4TPD2",
                    divSelect: ".relatedBlock",
                    divPosition: "replace",
                    carousel: {
                        items: 4,
                        navigation: true,
                        navigationText: false,
                        pagination: false
                    },
                    imageSize: "&maxx=120&maxy=120",
                    maxImageHeight: 120,
                    showRatings: true,
                    wrapper: "<div class='PD14T'></div>",
                    rawJS: {
                        preDisplay: function () { }
                    },
                    inCart: false
                }
            ],
            Search: [{
                enable: false
            }
            ],
            Category: [{
                enable: true,
                resultType: 5,
                fillMode: "genomic",
                numItems: 4,
                caption: "Related Top Sellers",
                captionStyle: "menu-headers product4TCaption",
                productStyle: "product4T product4THome",
                divSelect: "#modTopSellers",
                divPosition: "replace",
                imageSize: "&maxx=120&maxy=0",
                showRatings: true,
                rawJS: {
                    preInit: function (tout) {
                        if ("17" == _4TellBoost.Service.catId || "34" == _4TellBoost.Service.catId || "55" == _4TellBoost.Service.catId) {
                            //TODO Fuck yo encapsulation
                            _4TellBoost.Service.catId = "";
                            tout.rotateRecs = true;
                            tout.startPos = Math.floor(20 * Math.random(20 - tout.numItems));
                            tout.resultType = 4;
                        }
                    },
                    preDisplay: function () {
                        $("#Top_Sellers_Block").hide();
                    }
                },
                wrapper: "<div class='PD14T'></div>",
                inCart: false
            }
            ],
            AddToCart: [
            {
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                showCaption: false,
                captionStyle: "item product4TCaption",
                productStyle: "product4T product4TVC",
                divSelect: ".productBlockContainer",
                divPosition: "replace",
                carousel: {
                    items: 4,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                imageSize: "&maxx=120&maxy=120",
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                inCart: true
            }],
            Auto: [{
                enable: true,
                resultType: 5,
                fillMode: "genomic",
                numItems: 4,
                caption: "Related Top Sellers",
                captionStyle: "menu-headers product4TCaption",
                productStyle: "product4T product4THome",
                divSelect: "#modTopSellers",
                divPosition: "replace",
                imageSize: "&maxx=120&maxy=0",
                maxImageHeight: 100,
                showRatings: true,
                rawJS: {
                    preInit: function (tout) {
                        if (["55", "92", "1", "34"].indexOf(catID) >= 0) {
                            tout.rotateRecs = true;
                            tout.startPos = Math.floor((20 - tout.numItems) * Math.random());
                            _4TellBoost.setCatId(catID);
                            tout.resultType = 4;
                        } else {
                            tout.enable = false
                        }
                    },
                    preDisplay: function () {
                        $("#Top_Sellers_Block").hide();
                    }
                },
                wrapper: "<div class='PD14T'></div>",
                inCart: false
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
