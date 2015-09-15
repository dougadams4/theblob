(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.LukieGames.com",
            alias: "LukieGam",
            GA_UA: "UA-9917166-2",
            platform: "4Tell3d.js",
            addCartBtnAtts: "input type='button' value='Add to Cart' class='btn' onmouseout=this.className='btn' onmouseover=this.className='btn_over'",
            addCartImage: "",
            spacerImage: "/web/assets/images/spacer.gif",
            emptyImage: "thumbnail.asp?file=/assets/images/default.jpg",
            priceClass: "price2",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            ratings: [
                "assets/templates/lukiegames/images/star0.png",
                "assets/templates/lukiegames/images/star1.png",
                "assets/templates/lukiegames/images/star2.png",
                "assets/templates/lukiegames/images/star3.png",
                "assets/templates/lukiegames/images/star4.png",
                "assets/templates/lukiegames/images/star5.png"
            ],
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Auto: [{
                enable: true,
                resultType: 1,
                numItems: 15,
                caption: "Recommended for you...",
                captionStyle: "titles product4TCaption",
                productStyle: "product4T product4THome",
                divSelect: ".productBlockContainer",
                divPosition: "replace",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                showBuyButton: false,
                showRatings: true,
                imageSize: "&maxx=130&maxy=150",
                maxImageHeight: 170,
                rotateRecs: true,
                inCart: true,
                wrapper: "<div id='PD14T'></div>",
                rawJS: {
                    perProduct: function (itemdata) {
                        //if (itemdata.salePrice) {
                        //    itemdata.price = itemdata.salePrice;
                        //    itemdata.salePrice = "";
                        //}
                    }
                },
                responsive: {
                    1: {
                        carousel: {
                            numVis: 5,
                            circular: true
                        },
                        numItems: 15
                    },
                    2: {
                        numItems: 12,
                        carousel: {
                            numVis: 4,
                            circular: true
                        }
                    },
                    3: {
                        carousel: {
                            numVis: 3,
                            circular: true
                        },
                        numItems: 12
                    },
                    4: {
                        carousel: {
                            numVis: 2,
                            circular: true
                        },
                        numItems: 12
                    },
                    5: {
                        carousel: {
                            numVis: 2,
                            circular: true
                        },
                        numItems: 12
                    }
                }
            }],
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 4,
                caption: "Gamers who buy this also buy...",
                captionStyle: "titles product4TCaption",
                productStyle: "product4T product4TPD1",
                divSelect: ".relatedBlock",
                divPosition: "replace",
                showBuyButton: false,
                imageSize: "&maxx=130&maxy=150",
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    perProduct: function (itemdata) {
                        //if (itemdata.salePrice) {
                        //    itemdata.price = itemdata.salePrice;
                        //    itemdata.salePrice = "";
                        //}
                    }
                },
                responsive: {
                    1: {

                        caption: "Gamers who buy this also buy...",
                        numItems: 6
                    },
                    2: {
                        caption: "Gamers who buy this also buy...",
                        numItems: 4
                    },
                    3: {
                        caption: "Gamers who buy this also buy...",
                        numItems: 4
                    },
                    4: {
                        caption: "Gamers also buy...",
                        numItems: 2
                    },
                    5: {
                        caption: "Gamers also buy...",
                        numItems: 2
                    }
                },
                inCart: false
            },
          {
              enable: true,
              resultType: 3,
              numItems: 4,
              caption: "Similar Items",
              captionStyle: "titles product4TCaption",
              productStyle: "product4T product4TPD2",
              divSelect: "#second4TellContainer",
              divPosition: "append",
              showRatings: true,
              rawJS: {
                  preInit: function () {
                      _4TellBoost.UserData.data.wishlist = _4TellBoost.UserData.data.wishlist || [];
                      $('a.productpage').click(function () {
                          _4TellBoost.UserData.data.wishlist.push($('input[name=item_id]').val());
                          _4TellBoost.UserData.save();
                      });
                  }
              },
              inCart: false
          }],
            AddToCart: [{
                enable: false

            }],
            Category: [{
                enable: true,
                resultType: 0,
                numItems: 4,
                caption: "More ideas...",
                captionStyle: "titles product4TCaption",
                productStyle: "product4T product4TCat",
                divSelect: "#main4TellContainer",
                divPosition: "append",
                imageSize: "&maxx=100&maxy=100",
                showRatings: true,
                wrapper: "<td class='borders' width='100%' align='center' style='margin: 0 0 20px 0;'></td>",
                inCart: false
            }],
            Account: [{
                enable: true,
                resultType: 2,
                numItems: 15,
                caption: "Based upon your previous purchases, you may also like...",
                captionStyle: "titles product4TCaption",
                productStyle: "product4T product4TAdmin",
                divSelect: "#ACC4T",
                divPosition: "replace",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                showBuyButton: false,
                showRatings: true,
                imageSize: "&maxx=150&maxy=150",
                maxImageHeight: 170,
                wrapper: "<div class='borders'></div>",
                rawJS: {
                    preInit: function () {
                        for (foo in _4TellBoost.UserData.data.wishlist)
                            _4TellBoost.addProductID(_4TellBoost.UserData.data.wishlist[foo]);
                    }
                },
                responsive: {
                    1: {
                        carousel: {
                            numVis: 5,
                            circular: true
                        },
                        numItems: 15
                    },
                    2: {

                        numItems: 12,
                        carousel: {
                            numVis: 4,
                            circular: true
                        }
                    },
                    3: {
                        carousel: {
                            numVis: 4,
                            circular: true
                        },
                        numItems: 12
                    },
                    4: {
                        carousel: {
                            numVis: 3,
                            circular: true
                        },
                        numItems: 12
                    },
                    5: {
                        carousel: {
                            numVis: 2,
                            circular: true
                        },
                        numItems: 12
                    }
                },
                inCart: true
            }],
            WishList: [{
                enable: true,
                resultType: 3,
                numItems: 15,
                caption: "Based upon your wish list, you may also like...",
                captionStyle: "titles product4TCaption",
                productStyle: "product4T product4TWish",
                divSelect: "#frmForm",
                divPosition: "above",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                imageSize: "&maxx=150&maxy=150",
                showRatings: true,
                showBuyButton: false,
                maxImageHeight: 170,
                wrapper: "<div style='margin: 10px 0; width:95%; float:left;' class='borders'></div>",
                rawJS: {
                    preInit: function () {
                        _4TellBoost.UserData.data.wishlist =[];
                        $(".product-name-options a").each(function () {
                            _4TellBoost.UserData.data.wishlist.push(
                            $(this).attr("href").replace(".html", "").match(/\d+$/)[0]
                            );
                        });
                        _4TellBoost.UserData.save();

                        for (item in _4TellBoost.UserData.data.wishlist)
                            _4TellBoost.addProductID(_4TellBoost.UserData.data.wishlist[item]);
                    }
                },
                responsive: {
                    1: {
                        carousel: {
                            numVis: 5,
                            circular: true
                        },
                        numItems: 15
                    },
                    2: {

                        numItems: 12,
                        carousel: {
                            numVis: 4,
                            circular: true
                        }
                    },
                    3: {
                        carousel: {
                            numVis: 4,
                            circular: true
                        },
                        numItems: 12
                    },
                    4: {
                        carousel: false,
                        numItems: 3
                    },
                    5: {
                        carousel: false,
                        numItems: 2
                    }

                },
                inCart: false
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
