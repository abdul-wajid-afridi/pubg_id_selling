const { IdDetails } = require("../models");

// getting id details data
const getIdDetails = async (req, res) => {
  const fetchData = await IdDetails.findAll();

  res.send(fetchData);
};

// posting id details data
const postIdDetails = async (req, res) => {
  const profile_url = `http://localhost:5000/profile/${req.file.filename}`;

  const { title, subTitle, discription, price, idLevel } = req.body;

  const postedData = await IdDetails.create({
    image: profile_url,
    title,
    subTitle,
    discription,
    price,
    idLevel,
  });
  res.json({
    status: "success",
    data: postedData,
  });
};

// updating id details data
const updateIdDetails = async (req, res) => {
  const id = req.params.id;
  const profile_url = `http://localhost:5000/profile/${req.file.filename}`;
  const { title, subTitle, discription, price, idLevel } = req.body;
  await IdDetails.update(
    {
      image: profile_url,
      title,
      subTitle,
      discription,
      price,
      idLevel,
    },
    { where: { id: id } }
  );
  res.json({
    status: "success",
    message: "data updated with id " + req.params.id,
  });
};

// deleting id details data
const deleteIdDetails = async (req, res) => {
  const id = req.params.id;
  await IdDetails.destroy({ where: { id: id } });
  res.json({
    status: "success",
    message: "data deleted with id " + req.params.id,
  });
};
module.exports = {
  getIdDetails,
  postIdDetails,
  updateIdDetails,
  deleteIdDetails,
};
