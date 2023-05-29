const validateTitle = (req,res,next) => {
  const {body} = req;
  if( body.title === undefined ) {
    return res.status(401).json({"msg":"Campo 'Title' obrigatório"});
  }
  if( body.title === '' ) {
    return res.status(401).json({"msg":"Campo 'Title' não pode está vazio"});
  }
  next()
};
const validateStatus = (req,res,next) => {
  const {body} = req;
  if( body.status === undefined ) {
    return res.status(401).json({"msg":"Campo 'Status' obrigatório"});
  }
  if( body.status === '' ) {
    return res.status(401).json({"msg":"Campo 'Status' não pode está vazio"});
  }
  next()
};

module.exports = {
  validateTitle,
  validateStatus
}