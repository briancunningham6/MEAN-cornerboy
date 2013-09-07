
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Cornerboy - Soul seller' });
};

exports.about = function(req, res){
    res.render('about', { title: 'About Cornerboy'})
};
