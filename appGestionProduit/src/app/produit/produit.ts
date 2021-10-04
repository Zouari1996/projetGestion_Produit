import { Categorie } from "../categorie/categorie";

export interface Produit {
    
    id: number;
    nom: string;
    designation: string;
    code: string;
    categorie_id: Categorie;
    
}
