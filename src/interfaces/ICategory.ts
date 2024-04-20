import IItem from "./IItem";

interface ICategory {
  id: number;
  name: string;
  items: IItem[];
}

export default ICategory;
