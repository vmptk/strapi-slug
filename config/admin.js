module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cf968065ef301c8a4bb7b141746eb8ca'),
  },
});
