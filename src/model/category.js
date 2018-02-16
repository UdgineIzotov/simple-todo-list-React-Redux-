/**
 * Created by Evhenii_Izotov on 2/2/2018.
 */
export default class Category {
    constructor(id, categoryName = 'category', isSubCategoriesDisplayed = false, subCategories=[]) {
        this.id = id;
        this.name = categoryName;
        this.subCategories = subCategories;
        this.isSubCategoriesDisplayed = isSubCategoriesDisplayed;
    }
}