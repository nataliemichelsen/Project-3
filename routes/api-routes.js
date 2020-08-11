const db = require("../models");
const passport = require("../config/passport");
const crypto = require("crypto");
const emailer = require("../lib/emailer");
const router = require("express").Router();

console.log("working")

// login route
router.route("/login").post((req, res, next) => {
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
      return res.json({
        message: info.message,
        success: false
      });
    }
  })(req, res, next);
});

// signup route
router.route("/signup").post((req, res) => {
  console.log("post signup", req.body.picture);

  // if (!req.files || Object.keys(req.files).length === 0) {
  //   return res.status(400).send('No files were uploaded.');
  // }
  // let picture = req.files.picture;
  // picture.mv('/', function(err) {
  //   if (err){
  //     return res.status(500).send(err);
  //   }
  // });

  // console.log("my file", picture);

  const token = crypto.randomBytes(20).toString("hex");
  db.User.create({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    phone: req.body.phone,
    bio: req.body.bio,
    picture: req.body.picture,
    active: 0,
    token: token
  })
    .then(data => {
      // emailer.sendMail(
      //   {
      //     from: "Recipe Index",
      //     to: req.body.email,
      //     subject:
      //       "Thank you for signing up " +
      //       req.body.name +
      //       ", please activate your account",
      //     html: `Hello ${req.body.name}, <br/> Please click on the link below to activate your account.<br/>
      //     <a href="https://https://localhost:8080/activate/${data.id}/${token}">ACTIVATE NOW!</a>`
      //   },
      //   (error, info) => {
      //     if (error) {
      //       console.log(error);
      //     } else {
      //       console.log("Email sent: " + info.response);
      //     }
      //   }
      // );
      // res.redirect(307, "/login");
      console.log(data)
    })
    .catch(err => {
      res.status(401).json(err);
    });
});

// logout route
router.route("/logout").get((req, res) => {
  req.logout();
  res.redirect("/");
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

module.exports = router;
