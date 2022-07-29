class Meal {
    constructor(
        id,
        categoryIds,
        title,
        affordability,
        complexity,
        imageUrl,
        duration,
        ingrediants,
        steps,
        isGlutenFree,
        isVegan,
        isVegettarian,
        isLactoseFree
    ) {
        this.id= id;
        this.categoryIds= categoryIds;
        this.title= title;
        this.affordability= affordability;
        this.complexity= complexity;
        this.imageUrl= imageUrl;
        this.duration= duration;
        this.ingrediants= ingrediants;
        this.steps= steps;
        this.isGlutenFree= isGlutenFree;
        this.isVegan= isVegan;
        this.isVegettarian= isVegettarian;
        this.isLactoseFree= isLactoseFree;
    }
}


export default Meal