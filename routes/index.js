const Pet = require('../models/pet');

module.exports = (app) => {

  /* GET home page. */
  app.get('/', (req, res) => {
    const page = req.query.page || 1
  
    Pet.paginate({}, {page: page}).then((results) => {
      if (req.header('content-type') == 'application/json') {
        return res.json({ pets: results.docs });
      } else {
        return res.render('pets-index', { pets: results.docs, pagesCount: results.pages });
      }    
    });
  });
}
