/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
/* eslint-disable camelcase */
const jobModels = require('../models/jobs');
const uuidv4 = require('uuid/v4'); // input random id dari tiap user
// const redis = require('../helpers/redis');

module.exports = {
  getOneJob: (req, res) =>{
    const id_job = req.params.id_job;
    jobModels.getOneJob(id_job)
        .then((result) => {
          // redis.delRedis();
          res.json({
            result,
          });
        })
        .catch((err) => {
          console.log(err);
        });
  },
  
  getJobs: (req, res) => {
    const {sortName, sortCompany, date_update} = req.query;
    let {searchNameJob, searchNameCompany, page, eachPage} = req.query;

    let sortBy;
    let mode;

    if (sortName === undefined && sortCompany === undefined && date_update !== undefined) {
      sortBy = 'x.date_update';
      mode = date_update;
    } else if (sortName === undefined && sortCompany !== undefined && date_update === undefined) {
      sortBy = 'z.name_company';
      mode = sortCompany;
    } else if (sortName !== undefined && sortCompany === undefined && date_update === undefined) {
      sortBy = 'x.name_job';
      mode = sortName;
    } else {
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

    if (page === undefined || parseInt(page) == 0 ) {
      page = 1;
    }
    if (eachPage === undefined || parseInt(eachPage) == 0 ) {
      eachPage = 10;
    }
    
    const limitStart = (parseInt(page)-1)*parseInt(eachPage);
    
    jobModels.getAllJobs(searchNameJob, searchNameCompany, sortBy, mode)
        .then((r) => {
          const totalData = r[0].totalData;
          jobModels.getJobs(searchNameJob, searchNameCompany, sortBy, mode, limitStart, eachPage)
              .then((result) => {
                if (result.length != 0) {
                  const totalPage = Math.ceil(totalData/eachPage);
                  const key = req.originalUrl;
                  
                  if (eachPage>totalData) {
                    eachPage = totalData;
                  }
                  const currentPage = parseInt(page);
                  let prev = '';
                  if (page > 1) {
                    prevPage = currentPage - 1;
                    prev = `http://localhost:3001/?page=${prevPage}`;
                  } else {
                    prev = '';
                  }
                  
                  let next = '';
                  if (currentPage < totalPage) {
                    nextPage = currentPage+1;
                    next = `http://localhost:3001/?page=${nextPage}`;
                  } else {
                    next = '';
                  }
                  // redis.setExp(key, JSON.stringify({
                  //   info: {
                  //     totalData,
                  //     eachPage,
                  //     page,
                  //     totalPage,
                  //     prev,
                  //     next,
                  //   },
                  //   result,
                  // }));
              
                  res.json({
                    info: {
                      totalData,
                      eachPage,
                      page,
                      totalPage,
                      prev,
                      next,
                    },
                    result,
                  });
                } else {
                  res.send('NOT FOUND');
                }
              })
              .catch((err) => {
                console.log(err);
              });
        });
  },  
  addJob: (req, res) => {
    const {name_job, description_job, category, salary, location_job, company} = req.body;
    const id_job = uuidv4();
    const data = {
      id_job,
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
          // redis.delRedis();
          res.json({
            success: true,
            message: 'success added new job',
            result: data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
  },
  updateJob: (req, res) => {
    const id_job = req.params.id_job;
    const data = req.body;
    const date_update = new Date();
    data.date_update = date_update;

    jobModels.updateJob(data, id_job)
        .then((result) => {
          // redis.delRedis();
          res.json({
            success: true,
            message: 'success updated job',
            result: data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
  },
  deleteJob: (req, res) => {
    const id_job = req.params.id_job;

    jobModels.deleteJob(id_job)
        .then((result) => {
          // redis.delRedis();
          res.json({
            success: true,
            message: 'success deleted job',
          });
        })
        .catch((err) => {
          console.log(err);
        });
  },
};
