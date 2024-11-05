export interface ISubcategory {
  id: number;
  name: string;
}

export interface ICategory {
  id: number;
  name: string;
  adCount: number;
  icon: string;
  subcategories: ISubcategory[];
}
