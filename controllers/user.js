exports.show_login = function(req, res, next){
    res.render('user/login', {formdata : {}, error : {}} )
}

exports.show_signup = function(req, res, next){
    res.render('user/login', {formdata : {}, error : {}} )
}