export default () => ({
  mailer: {
    email_id: process.env.EMAIL_ID,
    email_pass: process.env.EMAIL_PASS,
    email_guest: process.env.MEAIL_GUEST,
  },
});
