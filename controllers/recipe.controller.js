const router = require("express").Router();
const uuid = require("uuid");
const RecipeModel = require("../models/recipe.model");

router.get("/", async (req,res)=>{
    try {
        const response = await RecipeModel.find();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post("/", async (req,res)=>{
    try {
        const recipe_id = uuid.v4();
        req.body.recipe_id = recipe_id;
        const recipeModel = new RecipeModel(req.body);
        const response = await recipeModel.save();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/:id", async (req,res)=>{
    try {
        const response = await RecipeModel.findOne({_id: req.params.id});
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/user/:id", async(req,res)=>{
    try {
        const response = await RecipeModel.find({
            user_id: req.params.id,
        });
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/recipes/filter', (req, res) => {
   
  });

module.exports = router;