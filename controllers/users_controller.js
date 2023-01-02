const router = require('express').Router()
const db = require('../models')
const{ User } = db
const bcrypt = require('bcrypt')
const jwt  = require('json-web-token')



router.post('/', async(req, res)=> {
        let { password, ...rest } = req.body
        let user = await User.findOne({where:{email: req.body.email}})
        if(!user){
          await User.create({
              ...rest, passwordDigest: await bcrypt.hash(password,10)
          })
          let newUser = await User.findOne({ where: { email: req.body.email } });
          const result = await jwt.encode(process.env.JWT_SECRET, {id: newUser})
          res.json( {user: newUser, token: result.value} );
        } else {
          res.json(`${req.body.firstname} already exists`)
        }
    }
    )


router.post("/login", async (req, res) => {
  const user = await User.findOne({where:{ email: req.body.email }});
  if (!user || !(await bcrypt.compare(req.body.password, user.passwordDigest))) {
    res.status(404).json({
      message: "Could not find a user with the provided email and/or password",
    });
  } else {
    const result = jwt.encode(process.env.JWT_SECRET,
        {
            id: user.userId,
        },
        
    );

    res.json({user: user, token: result.value});
  }
});



router.get("/user", async (req, res) => {
  res.json(req.currentUser);
});


// define a route for handling authenticated requests
router.get('/:id', (req, res) => {
  // get the JWT from the request header
  const token = req.headers['x-access-token'];
  // verify the JWT using the secret key
  jwt.verify(token, secretKey, (err, decoded) => {
    // if the JWT is invalid, return an error
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
     // if the JWT is valid, find the user with the ID specified in the JWT
    User.findById(decoded.id, (error, user) => {
      // if there's an error, return a server error
      if (error) {
        return res.status(500).json({ message: 'Server error' });
      }
      // if the user doesn't exist, return a not found error
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      // if the user exists, return the user data
      res.json(user);
    })})})

module.exports = router