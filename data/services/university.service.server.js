const universityDao = require('../daos/university.dao.server')
module.exports = app => {

  deleteAll = (req, res) =>
      universityDao.truncateDatabase().then(r => res.send(r));

  populate = (req, res) =>
      universityDao.populateDatabase().then(r => res.send(r));


 app.delete('/api/all', deleteAll);
 app.post('/api/populate', populate);
}