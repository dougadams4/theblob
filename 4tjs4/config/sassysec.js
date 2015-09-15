(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.sassysecret.com",
            alias: "sassysec",
            GA_UA: "UA-6517893-2",
            platform: "4TellVs.js",
            custom: true,
            addCartBtnAtts: "input type='button' class='btn' value='View Product'",
            addCartImage: "/v/vspfiles/templates/SS10-9-14/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/SS10-9-14/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/SS10-9-14/images/nophoto.gif",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: true,
                resultType: 1,
                numItems: 12,
                caption: "Our customers also bought",
                showCaption: true,
                productStyle: "product4T product4THome",
                divSelect: ".cat-wrap",
                divPosition: "below",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: ["",""],
                    pagination: false
                },
                responsive: {
                    1: {
                        carousel: {
                             items: 4,
                        },
                    },

                    2: {
                       carousel: {
                             items: 3,
                       },
                    },

                    3: {
                        carousel: {
                             items: 2,
                        },
                    },

                    4: {
                       carousel: {
                             items: 1,
                             },
                    }
                },

                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='HOME4T'></div>",
                rawJS: {
                    perProduct: function(itemdata) {
                         if(itemdata.title.length > 20) {
                               itemdata.title = itemdata.title.substring(0,17) + "...";

                         }
                     },
                     
                    
                },
                inCart: false
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 6,
                caption: "Customers also bought",
                productStyle: "product4T product4TPD1",
                divSelect: "#v65-product-parent",
                divPosition: "below",
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                responsive: {
                    1: {
                        carousel: {
                             items: 4,
                        },
                    },

                    2: {
                       carousel: {
                             items: 3,
                       },
                    },

                    3: {
                        carousel: {
                             items: 2,
                        },
                    },

                    4: {
                       carousel: {
                             items: 1,
                             },
                    }
                },
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                         perProduct: function(itemdata) {
                           if(itemdata.title.length > 15) {
                                   itemdata.title = itemdata.title.substring(0,12) + "...";

                           }
                         }
                       },
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Customers also viewed",
                productStyle: "product4T product4TPD2",
                divSelect: ".colors_lines_light",
                divPosition: "replace",
                navigation: true,
                carousel: {
                    items: 4,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                responsive: {
                    1: {
                        carousel: {
                             items: 4,
                        },
                    },

                    2: {
                       carousel: {
                             items: 3,
                       },
                    },

                    3: {
                        carousel: {
                             items: 2,
                        },
                    },

                    4: {
                       carousel: {
                             items: 1,
                             },
                    }
                },
                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<div class='PD24T'></div>",
                rawJS: {
                    preInit: function (tout) {
                        $(tout.divSelect).hide();
                    },
                     
                    preDisplay: function (tout) {
                        $(tout.divSelect).parents("table:last").css("table-layout", "fixed");
                    },
                    
                    perProduct: function(itemdata) {
                         if(itemdata.title.length > 20) {
                               itemdata.title = itemdata.title.substring(0,17) + "...";

                         }
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
                showRatings: true,
                wrapper: "<div class='CAT4T'></div>",
                rawJS: {},
                inCart: false
            }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 3,
                caption: "You may also like...",
                captionStyle: "product4TCaption product4TCaptionVC",
                productStyle: "product4T product4TVC",
                divSelect: ".btn_checkout_guest",
                divPosition: "below",
                carousel: {
                    items: 3,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<td valign='top'><div class='VC4T'></div></td>",
                rawJS: {
                    
                    perProduct: function(itemdata) {
                         if(itemdata.title.length > 20) {
                               itemdata.title = itemdata.title.substring(0,17) + "...";

                         }
                     }

                    

                },
                inCart: true
            }]
        }
    };
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
