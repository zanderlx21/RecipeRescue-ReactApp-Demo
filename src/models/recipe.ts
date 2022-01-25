export interface Recipe {
    recipe: RecipeThing
}

export interface RecipeThing {
    label: string;
    healthLabel?: string;
    calories?: number;
    image?: string;
    url?: string;
    totalTime?: number;
    ingredients?: Ingredients[];
}

export interface Ingredients {
    text: string;
    quantity: number;
    measure: string;
}

export interface SearchTerms {
    label: string,
    healthLabel: string,
    calories: number,
}
