const async = require("async");

const Titles = require("../models/Titles");

module.exports = {
  getTitles: (req, res) => {
    const { q, skip, type } = req.query,
      defaultSkip = 0, defaultLimit = 24, defaultFields = { _id: 1, name: 1, image: 1, type: 1 };
    
    let titleFilters = { isDeleted: false };

    if(type) titleFilters["type"] = type;

    if (q && String(q).trim()) {
      let trimQuery = String(q).trim();
      titleFilters["name"] = { $regex: trimQuery, $options: "i" }
    }

    async.parallel({
      titles: (cb) => {
        Titles.aggregate([
          { $match: titleFilters },
          { $sort: { name: 1 } },
          { $skip: Number(skip) || defaultSkip },
          { $limit: defaultLimit },
          { $project: defaultFields }
        ], (err, titles) => {
          if(err) {
            console.log("error in get titles: ", err);
            cb(err, []);
          } else {
            cb(null, titles);
          }
        });
      },
      totalTitles: (cb) => {
        Titles.countDocuments(titleFilters, (err, count) => {
          if(err) {
            console.log("error in count total titles: ", err);
            cb(err, 0);
          } else {
            cb(null, count);
          }
        });
      }
    }, (err, result) => {
      if(err) return res.json({ status: false, err, message: "Titles could not be found!" });
      return res.json({ status: true, ...result });
    });
  },

  getTitleDetails: (req, res) => {
    const { id } = req.params;

    Titles.findOne({ _id: id, isDeleted: false }, { __v: 0, isDeleted: 0 }, (err, title) => {
      if(err) return res.json({ status: false, err, message: "Title could not be found!" });
      return res.json({ status: true, title });
    });
  }
}