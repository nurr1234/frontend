import userMenuData from "../../helpers/data/user-menu.json";

export const getMenuItems = (role) => {
    // Veri veya rol yoksa boş bir dizi döndür
    if (!userMenuData || !role) return [];

    // Verilen role göre menü öğelerini getir
    const menu = userMenuData[role.toLowerCase()];
    return menu ? menu : [];
};
