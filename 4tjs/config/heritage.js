(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.heritagebooks.com",
            alias: "heritage",
            GA_UA: "UA-51092122-1",
            platform: "4TellMv.js",
            addCartBtnAtts: "form method='post' action='merchant.mvc?Screen=BASK'><input type='hidden' name='Action' value='ADPR'><input type='hidden' name='Quantity' value='1'><input type='submit' value='Add To Basket'></form",
            emptyImage: "//4tcdn.blob.core.windows.net/4tjs/images/HeritageNoPhoto.png",
            priceClass: "price2",
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
                enable: true,
                resultType: 0,
                numItems: 12,
                caption: "You may also be interesed in these titles as well...",
                productStyle: "product4T product4TPD1",
                divSelect: "tr:has(font strong)",
                divPosition: "below",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                showRatings: true,
                maxImageHeight: 150,
                wrapper: "<tr><td colspan='2'><div class='PD14T'></div></td></tr>",
                rawJS: {},
                inCart: false
            }, {
                enable: true,
                resultType: 3,
                numItems: 12,
                caption: "Other titles you might be interested in...",
                productStyle: "product4T product4TPD2",
                divSelect: "blockquote table:first",
                divPosition: "below",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 120,
                showRatings: true,
                wrapper: "<div class='PD14T'></div>",
                rawJS: {
                    preDisplay: function (tout) {
                        $(tout.divSelect).nextAll("font, table:has(td[bgcolor=#006633])").hide();
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
                numItems: 12,
                caption: "You may also like...",
                productStyle: "product4T product4TVC",
                divSelect: "table:has(form):first",
                divPosition: "below",
                carousel: {
                    numVis: 4,
                    circular: true
                },
                maxImageHeight: 100,
                showRatings: true,
                wrapper: "<table align='center' ><tr><td></td></tr></table>",
                rawJS: {},
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
