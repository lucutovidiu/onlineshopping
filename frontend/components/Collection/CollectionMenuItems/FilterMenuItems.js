export const DesktopFilterMenuItems = [
    {
        leftMenu: [{
            itemName: { title: "SIZE", en: "Size", ro: "Marime" },
            itemValues: [{ en: "All Sizes", ro: "Toate Marimile" }, { en: "XXS", ro: "XXS" }, { en: "XS", ro: "XS" }, { en: "S", ro: "S" }, { en: "M", ro: "M" }, { en: "L", ro: "L" }, { en: "XL", ro: "XL" }]
        },
        {
            itemName: { title: "PRICE", en: "Price", ro: "Pret" },
            itemValues: { labelFrom: { en: "Price from", ro: "Pret de la" }, labelTo: { en: "Price to", ro: "Pret pana la" }, filterBtn: { en: "FILTER", ro: "FILTREAZA" } }
        },
        {
            itemName: { title: "COLOR", en: "Color", ro: "Culoare" },
            itemValues: [{ en: "Red", ro: "Rosu" }, { en: "Green", ro: "Verde" }, { en: "Blue", ro: "Albastru" }, { en: "Black", ro: "Negru" }, { en: "White", ro: "Alb" }]
        },
        {
            itemName: { title: "SORTBY", en: "Sort by", ro: "Sortare dupa" },
            itemValues: [{ en: "Price ascending", ro: "Pret Crescator" }, { en: "Price desscending", ro: "Pret Descrescator" }, { en: "Newest", ro: "Cele mai noi" }]
        }]
    },
    {
        rightMenu: [
            {
                itemName: { title: "PRODUCTQUANTITY", en: "Articles Found: ", ro: "Articole gasite: " },
                itemValues: []
            }
        ]
    }
]
export const MobileFilterMenuItems = {}
