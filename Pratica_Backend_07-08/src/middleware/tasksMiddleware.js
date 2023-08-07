const ValidateTitle = (req, res, next) => {
  const { body } = req;
  if (body.title === undefined) {
    return res.status(400).json({"msg":"Campo 'Title' obrigatório"})
  }
  if (body.title === '') {
    return res.status(400).json({"msg":"Campo 'Title' não pode está vazio"})
  }
  next()
};
const ValidateStatus = (req, res, next) => {
  const { body } = req;
  if (body.status === undefined) {
    return res.status(400).json({"msg":"Campo 'status' obrigatório"})
  }
  if (body.status === '') {
    return res.status(400).json({"msg":"Campo 'status' não pode está vazio"})
  }
  next()
};

module.exports = {
  ValidateTitle,
  ValidateStatus
};