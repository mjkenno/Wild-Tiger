module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f388eee39ef8ad86e7776772c66a5351'),
  },
});
