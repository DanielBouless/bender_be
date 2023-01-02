const db = require("../models");
const jwt = require("json-web-token");

const { User } = db;

const defineCurrentUser = async(req, res, next) => {
  try {
    if(req.headers.authorization){
      console.log(`headers: ${JSON.stringify(req.headers.authorization)}`)
    const [method, token] = req.headers.authorization.split(" ");
    if (method == "Bearer") {
      const result = jwt.decode(process.env.JWT_SECRET, token);
      console.log(`result: ${JSON.stringify(result)}`)
        const { id } = result.value;
         console.log(`id: ${id}`);
        let rqUser = await User.findOne({where: {userId: id }});
        req.currentUser = rqUser;
      }}
    next();
  } catch (err) {
    req.currentUser = null;
    console.log(err)
    next();
  }
}

module.exports = defineCurrentUser;
