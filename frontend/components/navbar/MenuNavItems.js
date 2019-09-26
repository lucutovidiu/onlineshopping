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
            { submenuItem: { title: { en: "New", ro: "Nou" }, link: "#?" } },
            { submenuItem: { title: { en: "Dresses", ro: "Rochii" }, link: "#?" } },
            { submenuItem: { title: { en: "Skirts", ro: "Fuste" }, link: "#?" } },
            { submenuItem: { title: { en: "Tops", ro: "Bluze" }, link: "#?" } },
            { submenuItem: { title: { en: "T-shirts", ro: "Tricouri" }, link: "#?" } },
            { submenuItem: { title: { en: "Jackets", ro: "Sacouri" }, link: "#?" } }
          ]
        },
        {
          submenuTitle: { en: "Accessories", ro: "Accesorii" },
          submenuItems: [
            { submenuItem: { title: { en: "Hats", ro: "Sepcute" }, link: "#?" } },
            { submenuItem: { title: { en: "Ties", ro: "Cravate" }, link: "#?" } },
            { submenuItem: { title: { en: "Bow Ties", ro: "Papioane" }, link: "#?" } },
            { submenuItem: { title: { en: "Bows", ro: "Fundite" }, link: "#?" } }
          ]
        },
        {
          submenuTitle: { en: "Recommended", ro: "Recomandari" },
          submenuItems: [
            { submenuItem: { title: { en: "New", ro: "Noi" }, link: "#?" } },
            { submenuItem: { title: { en: "Moden", ro: "Moderne" }, link: "#?" } }
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
