const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
    recipe_id: {
        type: "string",
        required: true,
    },
    recipe_name: {
        type: "string",
        required: true,
    },
    recipe_description: {
        type: "string",
        required: true,
    },
    ingredients: {
        type: "array",
        required: true,
    },
    category: {
        type: "string",
        required: true,
        enum: ["Veg", "Non-Veg"]
    },
    instructions: {
        type: "array",
        required: true,
    },
    cooking_time: {
        type: "string",
        required: true,
    },
    nutritional_information: {
        type: "array",
        required: true, 
    },
    user_id: {
        type: "array",
        required: true, 
    }
});

module.exports = mongoose.model("recipes", RecipeSchema);