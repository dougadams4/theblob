(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.CLIENTURL.com",
            alias: "SigmaMoz",
            GA_UA: "",
            platform: "4TellDIY.js",
            addCartBtnAtts: "button type='button'>Add To Bag</button",
            pricePrefix: "Our Price: ",
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
                numItems: 12,
                caption: "Our customers also bought...",
                showCaption: false,
                productStyle: "product4T product4TPD1",
                divSelect: "#tout1_pdp_4Tell",
                divPosition: "replace",
                showPrice: false,
                showRatings: true,
                maxImageHeight: 500,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false,
                responsive: {
                    1: {
                        carousel: {
                            numVis: 4,
                            circular: true
                        },
                    },
                    2: {
                        carousel: {
                            numVis: 2,
                            circular: true
                        }
                    },
                    3: {
                        carousel: {
                            numVis: 1,
                            circular: true
                        },
                        numItems: 12
                    }
                }
            }, {
                enable: true,
                resultType: 4,
                numItems: 12,
                caption: "Similar Items",
                showCaption: false,
                productStyle: "product4T product4TPD1",
                divSelect: "section[data-mz-tabs-id='TopSeller'] > div",
                divPosition: "replace",
                maxImageHeight: 500,
                showPrice: false,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: false,
                responsive: {
                    1: {
                        carousel: {
                            numVis: 4,
                            circular: true
                        },
                    },
                    2: {
                        carousel: {
                            numVis: 2,
                            circular: true
                        }
                    },
                    3: {
                        carousel: {
                            numVis: 1,
                            circular: true
                        },
                        numItems: 12
                    }
                }
            }],
            Search: [{
                enable: false
            }],
            Category: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                showCaption: false,
                productStyle: "product4T product4TCat",
                divSelect: "#tout1_cat_4Tell",
                divPosition: "replace",
                maxImageHeight: 500,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: true,
                responsive: {
                    1: {
                        carousel: {
                            numVis: 4,
                            circular: true
                        },
                    },
                    2: {
                        carousel: {
                            numVis: 2,
                            circular: true
                        }
                    },
                    3: {
                        carousel: {
                            numVis: 1,
                            circular: true
                        }
                    }
                }
            },
             {
                 enable: true,
                 resultType: 4,
                 numItems: 12,
                 caption: "Similar Items",
                 showCaption: false,
                 productStyle: "product4T product4TCat",
                 divSelect: "section[data-mz-tabs-id='TopSeller'] > div",
                 divPosition: "replace",
                 maxImageHeight: 500,
                 showPrice: false,
                 showRatings: true,
                 wrapper: "<div class='PD14T'></div>",
                 rawJS: {},
                 inCart: false,
                 responsive: {
                     1: {
                         carousel: {
                             numVis: 4,
                             circular: true
                         },
                     },
                     2: {
                         carousel: {
                             numVis: 2,
                             circular: true
                         }
                     },
                     3: {
                         carousel: {
                             numVis: 1,
                             circular: true
                         },
                         numItems: 12
                     }
                 }
             }],
            AddToCart: [{
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also like...",
                showCaption: false,
                productStyle: "product4T product4TVC",
                divSelect: "#tout1_cart_4Tell",
                divPosition: "replace",
                maxImageHeight: 500,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {},
                inCart: true,
                responsive: {
                    1: {
                        carousel: {
                            numVis: 4,
                            circular: true
                        },
                    },
                    2: {
                        carousel: {
                            numVis: 2,
                            circular: true
                        }
                    },
                    3: {
                        carousel: {
                            numVis: 1,
                            circular: true
                        },
                    }
                }
            },
             {
                 enable: true,
                 resultType: 4,
                 numItems: 12,
                 caption: "Similar Items",
                 showCaption: false,
                 productStyle: "product4T product4TVC",
                 divSelect: "section[data-mz-tabs-id='TopSeller'] > div",
                 divPosition: "replace",
                 maxImageHeight: 500,
                 showPrice: false,
                 showRatings: true,
                 wrapper: "<div class='PD14T'></div>",
                 rawJS: {},
                 inCart: false,
                 responsive: {
                     1: {
                         carousel: {
                             numVis: 4,
                             circular: true
                         },
                     },
                     2: {
                         carousel: {
                             numVis: 2,
                             circular: true
                         }
                     },
                     3: {
                         carousel: {
                             numVis: 1,
                             circular: true
                         },
                         numItems: 12
                     }
                 }
             }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
