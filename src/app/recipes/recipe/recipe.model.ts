import { Step } from './step.model';
import { Ingredient } from './ingredient.model'
export class Recipe {
    constructor(
        public title: string,
        public description: string,
        public steps: Array<Step>,
        public ingredients: Array<Ingredient>,
        public image: string = '../assets/imgs/recipeimage.jpg'
    ){}
}