const friends = require('../data/friends.js');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req,res){
        res.json(friendMatch(req.body));
        friends.push(req.body);
    });
}

function friendMatch(user) { 
    let bestMatch;
    let lowTotal = 100;
    
    for (let key in friends) {
        let friend = friends [key];
        let total = 0;
       
        for(let i =0; i < user.scores.length; i++) {
            total += Math.abs(user.scores[i] - friend.scores[i])		
        } 
        if (total < lowTotal) {
            lowTotal = total;
            bestMatch = friend;
        }	
    }	
return(bestMatch);
};

