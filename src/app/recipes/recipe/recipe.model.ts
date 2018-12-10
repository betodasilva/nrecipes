import { Step } from './step.model';
import { Ingredient } from './ingredient.model';
import { slugify } from '../../../providers/slugify';

export class Recipe {
    slug: string;
    constructor(
        public title: string,
        public description: string,
        public steps: Array<Step>,
        public ingredients: Array<Ingredient>,
        public image: string = '../assets/imgs/recipeimage.jpg'
    )
    {
        this.slug = slugify(title)
    }
}