import passport from 'passport';
import { comparePassword } from '../modules/encryption';
import { Strategy } from 'passport-local';
import { PersonDB } from '../models/Person';

passport.serializeUser((user: any, done: any): void => {
  done(null, user.id);
});

passport.deserializeUser((id: any, done: any): void => {
  PersonDB.findById(id)
    .then((result: any): void => {
      const user = result;
      if (user) {
        //removing password from being sent
        delete user.password;
        //saving user info in an object to be used later
        const useInfo = {
          username: user.username,
          _id: user._id,
        };
        done(null, useInfo);
      } else {
        done(null, false, { message: 'Incorrect credentials' });
      }
    })
    .catch((error: string) => {
      console.log(`Error with query during deserializing user ${error}`);
      done(error, null);
    });
});

// Does actual work of logging in
passport.use(
  'local',
  new Strategy(
    {
      passReqToCallback: true,
      usernameField: 'username',
    },
    (req, username, password, done) => {
      PersonDB.find({ username })
        .then((result: any) => {
          const user = result && result[0];
          if (user && comparePassword(password, user.password)) {
            // all good! Passwords match!
            done(null, user);
          } else if (user) {
            // not good! Passwords don't match!
            done(null, false, { message: 'Incorrect credentials.' });
          } else {
            // not good! No user with that name
            done(null, false);
          }
        })
        .catch((error: any) => {
          console.log(`Error with finding user ${error}`);
          done(null, {});
        });
    }
  )
);

export default passport;
