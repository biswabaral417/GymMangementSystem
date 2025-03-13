const GenerateMealPlan = require("../../GYMAI/AI/GenerateMealPlan");


const getRecommendations = async (req, res) => {

    const newUser = [
        parseFloat(req.query.age),
        req.query.gender === 'Male' ? 1 : 0,
        parseFloat(req.query.height),
        parseFloat(req.query.weight),
        parseFloat(req.query.target_weight)
    ];

    try {
        const recommendations = await GenerateMealPlan(newUser);
        res.json(recommendations);
    } catch (error) {
        console.error('Error getting recommendations:', error);
        res.status(500).send('Error getting recommendations');
        
    }
};







module.exports = { getRecommendations };
