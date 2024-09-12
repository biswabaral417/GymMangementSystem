const recommendDiets = require("../../AI/codes/recommendDiets");




const getRecommendations = async (req, res) => {

    const newUser = [
        parseFloat(req.query.age),
        req.query.gender === 'Male' ? 1 : 0,
        parseFloat(req.query.height),
        parseFloat(req.query.weight),
        parseFloat(req.query.target_weight)
    ];

    try {
        const recommendations = await recommendDiets(newUser);
        res.json(recommendations);
    } catch (error) {
        console.error('Error getting recommendations:', error);
        res.status(500).send('Error getting recommendations');
        
    }
};







module.exports = { getRecommendations };
