export function MenuNavItems() {
  return [
    {
      navItemName: {
        en: "Home",
        ro: "Acasa"
      },
      navItemLink: "/"
    },
    {
      navItemName: {
        en: "Collection",
        ro: "Colectie"
      },
      submenu: [
        {
          submenuTitle: { en: "Clothes", ro: "Haine" },
          submenuItems: [
            { submenuItem: { title: { en: "New", ro: "Nou" }, link: "/Collection/New-Clothes" } },
            { submenuItem: { title: { en: "Dresses", ro: "Rochii" }, link: "/Collection/Dresses" } },
            { submenuItem: { title: { en: "Skirts", ro: "Fuste" }, link: "/Collection/Skirts" } },
            { submenuItem: { title: { en: "Tops", ro: "Bluze" }, link: "/Collection/Tops" } },
            { submenuItem: { title: { en: "T-shirts", ro: "Tricouri" }, link: "/Collection/T-Shirts" } },
            { submenuItem: { title: { en: "Jackets", ro: "Sacouri" }, link: "/Collection/Jackets" } }
          ]
        },
        {
          submenuTitle: { en: "Accessories", ro: "Accesorii" },
          submenuItems: [
            { submenuItem: { title: { en: "Hats", ro: "Sepcute" }, link: "/Collection/Hats" } },
            { submenuItem: { title: { en: "Ties", ro: "Cravate" }, link: "/Collection/Ties" } },
            { submenuItem: { title: { en: "Bow Ties", ro: "Papioane" }, link: "/Collection/BowTies" } },
            { submenuItem: { title: { en: "Bows", ro: "Fundite" }, link: "/Collection/Bows" } }
          ]
        },
        {
          submenuTitle: { en: "Recommended", ro: "Recomandari" },
          submenuItems: [
            { submenuItem: { title: { en: "New", ro: "Noi" }, link: "/Collection/New-Recomanded" } },
            { submenuItem: { title: { en: "Modern", ro: "Moderne" }, link: "/Collection/Modern" } }
          ]
        }
      ],
      navItemLink: "/Collection"
    },
    {
      navItemName: {
        en: "Offers",
        ro: "Oferte"
      },
      navItemLink: "/Offers"
    }
  ];
}
export function MenuLoginNavItems() {
  return [
    {
      navItemName: {
        en: "help / support",
        ro: "Asistenta tehnica"
      },
      navItemLink: "#?"
    },
    {
      navItemName: {
        en: "Login",
        ro: "Logare"
      },
      navItemLink: "/Login"
    },
    {
      navItemName: {
        en: "sign up",
        ro: "Inregistrare"
      },
      navItemLink: "#?"
    }
  ];
}
