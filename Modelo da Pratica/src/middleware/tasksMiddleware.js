const validateTitle = (req,res,next) => {
  const {body} = req;
  if(body.title === undefined){
    return res.status(400).json({"msg":"Campo 'title' obrigatório"});
  };
  if(body.title === ''){
    return res.status(400).json({"msg":"Campo 'title' não pode está vazio"});
  };
  next();
};
const validateStatus = (req,res,next) => {
  const {body} = req;
  if(body.status === undefined){
    return res.status(400).json({"msg":"Campo 'status' obrigatório"});
  };
  if(body.status === ''){
    return res.status(400).json({"msg":"Campo 'status' não pode está vazio"});
  };
  next();
};

module.exports = {
  validateTitle,
  validateStatus,
};