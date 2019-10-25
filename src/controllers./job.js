/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
/* eslint-disable camelcase */
const jobModels = require('../models/jobs');
const redis = require('../helpers/redis');

module.exports = {
  
  getJobs: (req, res) => {
    const {sortName, sortCompany, date_update} = req.query;
    let {searchNameJob, searchNameCompany, page, eachPage} = req.query;

    let sortBy = 'x.name_job';
    let mode = 'ASC';
    if (sortName === undefined && sortCompany === undefined) {
      sortBy = 'x.date_update';
      mode = 'DESC';
    } else if (sortName === undefined && date_update === undefined) {
      sortBy = 'x.sortCompany';
      mode = 'DESC';
    } else {
      mode = 'DESC';
    }
    if (typeof sortCompany !== 'undefined') {
      sortBy = 'z.company_name';
      mode = 'DESC';
    }
    if (typeof date_update !== 'undefined') {
      sortBy = 'x.date_update';
      mode = 'DESC';
    }
    
    if (searchNameJob == undefined) {
      searchNameJob = '%%';
    } else {
      searchNameJob = '%' + searchNameJob + '%';
    }
    if (searchNameCompany == undefined) {
      searchNameCompany = '%%';
    } else {
      searchNameCompany = '%' + searchNameCompany + '%';
    }

    if (page == undefined) {
      page = 1;
    }
    if (eachPage == undefined) {
      eachPage = 3;
    }

    const limitStart = (parseInt(page)-1)*parseInt(eachPage);
    console.log(sortBy);
    jobModels.getJobs(searchNameJob, searchNameCompany, sortBy, mode, limitStart, eachPage)
        .then((result) => {
          if (result.length != 0) {
            const key = req.originalUrl;
    
            redis.setExp(key, JSON.stringify(result));
            
            res.json(result);
          } else {
            res.send('NOT FOUND');
          }
        })
        .catch((err) => {
          console.log(err);
        });
  },
  addJob: (req, res) => {
    const {name_job, description_job, category, salary, location_job, company} = req.body;
    const data = {
      name_job,
      description_job,
      category,
      salary,
      location_job,
      company,
      date_add: new Date(),
      date_update: new Date(),
    };
    jobModels.addJob(data)
        .then((result) => {
          redis.delRedis();
          res.json(result);
        })
        .catch((err) => {
          console.log(err);
        });
  },
  updateJob: (req, res) => {
    const id_job = req.params.id_job;
    const data = req.body;
    const date_update = new Date().toLocaleString();
    data.date_update = date_update;

    jobModels.updateJob(data, id_job)
        .then((result) => {
          redis.delRedis();
          res.json(result);
        })
        .catch((err) => {
          console.log(err);
        });
  },
  deleteJob: (req, res) => {
    const id_job = req.params.id_job;

    jobModels.deleteJob(id_job)
        .then((result) => {
          redis.delRedis();
          res.json(result);
        })
        .catch((err) => {
          console.log(err);
        });
  },
};
