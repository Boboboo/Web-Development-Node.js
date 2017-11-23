const express = require("express");

const bodyParser = require("body-parser");
const connectFlash = require('connect-flash');
const expressSession = require('express-session');
const passport = require('passport');
const configRoutes = require("./routes");
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars');
const cookieParser = require('cookie-parser');
const Strategy = require('passport-local').Strategy;
const data = require("./data/users.js");
const port = process.env.PORT || 3000;

const app = express();
const static = express.static(__dirname + '/public');

const handlebarsInstance = exphbs.create({
    defaultLayout: 'main',
    helpers: {
        asJSON: (obj, spacing) => {
            if (typeof spacing === "number")
                return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));
            return new Handlebars.SafeString(JSON.stringify(obj));
        }
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(connectFlash());
const rewriteUnsupportedBrowserMethods = (req, res, next) => {
    if (req.body && req.body._method) {
        req.method = req.body._method;
        delete req.body._method;
    }
    next();
};
app.use(rewriteUnsupportedBrowserMethods);

app.use("/public", static);
app.engine('handlebars', handlebarsInstance.engine);
app.set('view engine', 'handlebars');

app.use(expressSession({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: {
		secure: false
	}
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new Strategy(
    async (username, password, done) => {
        console.log(`username: ${username}`);
        console.log(`password: ${password}`);
        let res =await data.verifyUser(username, password);
        if(res.result) {
            console.log("true");
            return done(null, res.message);
        }
        return done(null, false, {message: res.message});
    }
));
  

passport.serializeUser(async (user, done) => {
    console.log(`serializing user: ${user}`);
    done(null, user);
});

passport.deserializeUser(async (user, done)=> {
    console.log(`deserializing user: ${user}`);
    let token = user.split('#');
    //console.log(`token: ${token}`);
    if (token===null || token.length !== 2) {
        return done(null, false, {message: "Cookie is invalid."});
    }
    let username = token[0];
    let password = token[1];
    let res =await data.verifyUser(username, password);
    if(res.result) {
        return done(null, res.message);
    }
    return done(null, false, {message: res.message});
});

configRoutes(app);

app.listen(port, () => {
    console.log("We've now got a server!");
    console.log(`Your routes will be running on http://localhost:${port}`);
});
