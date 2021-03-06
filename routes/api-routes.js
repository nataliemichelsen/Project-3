const db = require("../models");
const passport = require("../config/passport");
const crypto = require("crypto");
const emailer = require("../lib/emailer");
const router = require("express").Router();
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({ 
  cloud_name: 'ahmedjalal', 
  api_key: '649491879231561', 
  api_secret: '5gmhu2qjYDyFmc2eQirh8veaTZY' 
});

var upload = multer({ storage: new CloudinaryStorage({
    cloudinary: cloudinary
  })
}).single("picture");

// login route
router.route("/login").post((req, res, next) => {
  console.log("user data req", req.body)
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (user !== false) {
      req.logIn(user, err => {
        if (err) {
          return next(err);
        }
        return res.json({
          id: user.id,
          email: user.email,
          message: info.message,
          success: true
        });
      });
    } else {
      console.log("my user", req.user)
      return res.json({
        message: info.message,
        success: false
      });
    }
  })(req, res, next);
});

// signup route
router.route('/signup').post(upload, (req, res) => {
  const token = crypto.randomBytes(20).toString("hex");
  db.User.create({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    phone: req.body.phone,
    bio: req.body.bio,
    picture: req.file.path,
    active: 0,
    token: token
  })
    .then(data => {
      emailer.sendMail(
        {
          from: "Recipe Index",
          to: req.body.email,
          subject:
            "Thank you for signing up " +
            req.body.name +
            ", please activate your account",
          html: `Hello ${req.body.name}, <br/> Please click on the link below to activate your account.<br/>
          <a href="https://recipique.herokuapp.com/activate/${data.id}/${token}">ACTIVATE NOW!</a>`
        },
        (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        }
      );
      return res.status(200).json(data);
    })
    .catch(err => {
      return res.status(401).json(err);
    });
});

// logout route
router.route("/logout").get((req, res) => {
  req.logout();
  res.json(true)
});

//reset password
router.route("/reset/send").put((req, res) => {
  const token = crypto.randomBytes(20).toString("hex");
  db.User.findOne({ where: { email: req.body.email.trim() } })
    .then(data => {
      db.User.update(
        {
          token: token
        },
        { where: { id: data.id } }
      );
      emailer.sendMail(
        {
          from: "Recipe Index",
          to: data.email,
          subject:
            "Your reset password form " +
            data.name +
            ", this is your reset password form",
          html: `Hello ${data.name}, <br/> Please click on the link below to reset your password.<br/>
          <a href="https://localhost:8080/reset/${data.id}/${token}">RESET NOW!</a>`
        },
        (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        }
      );
      res.json(data);
    })
    .catch(err => {
      res.status(401).json(err);
    });
});

router.route("/reset/password").put((req, res) => {
  db.User.findOne({ where: { id: Number(req.body.id) } })
    .then(data => {
      if (req.body.token === data.token) {
        db.User.update(
          {
            password: req.body.password,
            token: null
          },
          { where: { id: data.id } }
        );
        return res.json(true);
      }
      return res.json(false);
    })
    .catch(err => {
      console.log(err);
      res.status(401).json(err);
    });
});

router.route("/activate/:id/:token").get((req, res) => {
  db.User.findOne({ where: { id: Number(req.params.id) } }).then(data => {
    const response = {};
    if (data !== null) {
      if (req.params.token === data.token) {
        db.User.update(
          {
            active: 1,
            token: null
          },
          { where: { id: data.id } }
        );
        response.code = 1;
        response.message = "Your account was successfuly activated";
      } else {
        response.code = 0;
        response.message = "Something went wrong while activating your account, please check your link";
      }
    } else {
      response.code = 0;
      response.message = "Something went wrong while activating your account, please check your link";
    }
    return res.json(response);
  });
});

router.route("/authenticate").get((req, res) => {
  if (req.user) {
    return res.json(req.user)
  }
  return res.json(false)
});

router.route("/profile/:id?").get((req, res) => {
  db.User.findOne({ where: { id: Number(req.params.id) } }).then(data => {
    res.json(data);
  }).catch(err => res.json(err));
});

router.route("/viewrecipe/:id?").get((req, res) => {
  db.Recipe.findOne({ 
    where: { 
      id: Number(req.params.id) 
    },
    include: db.User
  }).then(data => {
    console.log("my user data", data.User);
    res.json(data);
  }).catch(err => res.json(err));
});

router.route("/addrecipe").post(upload, (req, res) => {
  console.log("add ", req.body, " file ", req.file)
  db.Recipe.create({
    name: req.body.name,
    UserId: req.body.author,
    category: req.body.category,
    ingredients: req.body.ingredients,
    steps: req.body.steps,
    time: req.body.time,
    picture: req.file.path,
    visility: req.body.visility
  }).then(data => {
    res.json(data);
  });

  router.route("/addcomment").post((req, res) => {
    console.log("add comment ", req.body)
    db.Comment.create({
      comment: req.body.comment,
      RecipeId: req.body.recipeId,
    }).then(data => {
      res.json(data);
    });
  })
})


module.exports = router;
