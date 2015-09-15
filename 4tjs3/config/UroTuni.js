(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.urotuning.com",
            alias: "UroTuni",
            GA_UA: "UA-30174149-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "div class='vCSS_input_addtocart'> VIEW PRODUCT <div",
            spacerImage: "/v/vspfiles/templates/147/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/147/images/nophoto.gif",
            pricePrefix: "Price: ",
            salePricePrefix: "Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                    enable: false,
                    resultType: 4,
                    numItems: 16,
                    caption: "Featured Top Sellers",
                    showCaption: false,
                    productStyle: "product4T product4THome",
                    divSelect: "table.v65-productDisplay:first",
                    divPosition: "replace",
                    carousel: {
                        numVis: 4,
                        circular: true
                    },
                    maxImageHeight: 160,
                    numRows: 2,
                    wrapper: "<table width='100%' id='HOME4T'><tr><td></td></tr></table>",
                    rawJS: {
                        preInit: function (tout) {
                            tout.enable = tout.enable && !(location.pathname.match(/wishlist/i));
                        }
                    },
                    inCart: false
                }],
            
            ProductDetail: [{
                    enable: true,
                    resultType: 0,
                    numItems: 12,
                    caption: "Customers also bought...",
                    productStyle: "product4T product4TPD1",
                    divSelect: "table:has(font.pricecolor.colors_productprice)",
                    divPosition: "above",
                    carousel: {
                    items: 2,
                    scrollPerPage: true,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                    },
                    responsive: {
                    1: {
                        carousel: {
                              items: 2,
                        }
                    },

                    2: {
                        carousel: {
                              items: 2,
                        }
                    },

                    3: {
                         carousel: {
                              items: 1,
                        }
                    },

                    4: {
                        carousel: {
                              items: 1,
                        }
                    }
                },

                    maxImageHeight: 160,
                    wrapper: "<div></div>",
                    rawJS:{
                   
                          perProduct: function(itemdata) {
                                if(itemdata.title.length > 20) {
                                     itemdata.title = itemdata.title.substring(0,17) + "...";

                                }
                          }

                    },
                    inCart: false
                },
                {
                    enable: true,
                    resultType: 3,
                    numItems: 8,
                    caption: "Customers also viewed...",
                    productStyle: "product4T product4TPD2",
                    divSelect: "#v65-product-related",
                    divPosition: "replace",
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
                             items: 4,
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
                    rawJS:{
                   
                          perProduct: function(itemdata) {
                                if(itemdata.title.length > 20) {
                                     itemdata.title = itemdata.title.substring(0,17) + "...";

                                }
                          }

                    },
                    wrapper: "<table width='100%' class='toutWrapper4T'><tr><td></td></tr></table>",
                    inCart: false
                }],
           
            Search: [{            
                    enable: false
            }],
            Category: [{
                    enable: true,
                    resultType: 5,
                    numItems: 12,
                    caption: "Related Top Sellers",
                    productStyle: "product4T product4TCat",
                    divSelect: ".top-bar",
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
                             items: 4,
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
                    rawJS:{
                   
                          perProduct: function(itemdata) {
                                if(itemdata.title.length > 20) {
                                     itemdata.title = itemdata.title.substring(0,17) + "...";

                                }
                          }

                    },
                    wrapper: "<div width='100%' class='toutWrapper4T'></div>",
                    rawJS: {
                        preInit: function (tout) {
                            tout.enable = tout.enable && $(".pricecolor").length >= 15;
                        }
                    },
                    inCart: false
                
            }],
            AddToCart: [{
                    enable: true,
                    resultType: 0,
                    numItems: 8,
                    caption: "You may also like...",
                    productStyle: "product4T product4TVC",
                    orientation: "horizontal",
                    divSelect: ".btn_checkout_guest",
                    divPosition: "below",
                    carousel: {
                        items: 2,
                        scrollPerPage: true,
                        navigation: true,
                        navigationText: false,
                        pagination: false
                    },
                    responsive: {
                    1: {
                        carousel: {
                             items: 2,
                        },
                    },

                    2: {
                       carousel: {
                             items: 2,
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
                    wrapper: "<td class='toutWrapper4T' width='374'></td>",
                    rawJS:{
                   
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
}(window._4TellBoost, window._4TellBoost.jq || jQuery));
