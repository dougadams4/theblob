(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.heritagebooks.com",
            alias: "heritage",
            GA_UA: "",
            platform: "4TellMv.js",
            addCartBtnAtts: "form method='post' action='merchant.mvc?Screen=BASK'><input type='hidden' name='Action' value='ADPR'><input type='hidden' name='Quantity' value='1'><input type='submit' value='Add To Basket'></form",
            priceClass: "price2",
            pricePrefix: "Our Price: ",
            salePricePrefix: "On Sale: ",
            includeBase: false,
            siteEnable: false
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
                productStyle: "product4T product4TPD1",
                divSelect: "tr:has(font strong)",
                divPosition: "above",
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
                caption: "Similar Items",
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
