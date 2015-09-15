(function (_4TellBoost, $, undefined) {
    _4TellBoost.CONFIG = {
        SiteInfo: {
            baseURL: "www.gatehousesupplies.com",
            alias: "GateHous",
            GA_UA: "UA-3597566-1",
            platform: "4TellVs.js",
            addCartBtnAtts: "img class='vCSS_input_addtocart' alt='Add to Cart'",
            addCartImage: "/v/vspfiles/templates/gatehouse/images/buttons/btn_addtocart_small.gif",
            spacerImage: "/v/vspfiles/templates/gatehouse/images/clear1x1.gif",
            emptyImage: "/v/vspfiles/templates/gatehouse/images/nophoto.gif",
            priceClass: "pricecolor colors_productprice",
            pricePrefix: "<span style='color: #000;font-size: 13px'>Price: </span>",
            salePricePrefix: "Sale Price: ",
            includeBase: false,
            siteEnable: true
        },
        PageSettings: {
            ProductDetail: [{
                enable: true,
                resultType: 0,
                numItems: 8,
                caption: "Customers also bought...",
                captionStyle: 'product4TCaption product4TCaptionPD1',
                productStyle: "product4T product4TPD1",
                divSelect: "div.4tellbox",
                divPosition: "above",
                carousel: {
                    items: 2,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                showRatings: true,
                maxImageHeight: 160,
                wrapper: "<table align='center'><tr><td></td></tr></table>",
                inCart: false
            },
                 {
                     enable: true,
                     resultType: 3,
                     numItems: 4,
                     caption: "Customers also viewed...",
                     captionStyle: 'product4TCaption product4TCaptionPD1',
                     productStyle: "product4T product4TPD2",
                     divSelect: "div.4tellbox",
                     divPosition: "below",
                     maxImageHeight: 120,
                     showRatings: true,
                     wrapper: "<table width='100%'><tr><td></td></tr></table>",
                     rawJS: { preDisplay: function () { $('table.colors_lines_light').remove(); } },
                     inCart: false
                 }],
            AddToCart: [{
                enable: true,
                resultType: 1,
                numItems: 8,
                caption: "You may also like...",
                captionStyle: 'product4TCaption product4TCaptionPD1',
                productStyle: "product4T product4TVC",
                divSelect: "span.v65-cart-item-remove-cell",
                divPosition: "below",
                carousel: {
                    items: 2,
                    navigation: true,
                    navigationText: false,
                    pagination: false
                },
                maxImageHeight: 90,
                showRatings: true,
                wrapper: "<td colspan='11' style='border: 1px solid #DFE0E0; width: 420px;'></td>",
                inCart: true
            }]
        }
    }
}(window._4TellBoost = window._4TellBoost || {}, jQuery));
