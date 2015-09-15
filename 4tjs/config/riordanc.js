(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "store.riordanclinic.org/",
            alias: "riordanc",
            GA_UA: "UA-16632634-1",
            platform: "4TellMv.js",
            addCartBtnAtts: "form method='post' action='merchant.mvc?Screen=BASK'><input type='hidden' name='Action' value='ADPR'><input type='hidden' name='Quantity' value='1'><input type='image' value='Add To Basket' src='//store.riordanclinic.org/mm5/images/icons/btn_add_to_cart.png'></form",
            pricePrefix: "Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            Home: [{
                enable: false
            }],
            ProductDetail: [{
                enable: false,
                resultType: 0,
                numItems: 12,
                caption: "<h3>Customers also bought...</h3>",
                productStyle: "product4T product4TPD1",
                divSelect: ".tabs",
                divPosition: "above",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                showRatings: true,
                maxImageHeight: 10,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    perProduct: function (itemdata) {
                        itemdata.title = itemdata.title.replace("\\/", "/");
                    }
                },
                inCart: false
            }, {
                enable: true,
                resultType: "0,3",
                numItems: "5,5",
                caption: "<h2>You may also be interested in</h2>",
                productStyle: "product4T product4TPD2",
                divSelect: "#prod-ctgy-hdft-footer",
                divPosition: "above",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    perProduct: function (itemdata) {
                        itemdata.title = itemdata.title.replace("\\/", "/");
                    }
                },
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
                numItems: 15,
                caption: "<h2>You may also like...</h2>",
                productStyle: "product4T product4TVC",
                divSelect: "#hdft-footer",
                divPosition: "above",
                carousel: {
                    numVis: 5,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<div class='PD14T' style='margin-top: 30px; '></div>",
                rawJS: {
                    perProduct: function (itemdata) {
                        itemdata.title = itemdata.title.replace("\\/", "/");
                    }
                },
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
