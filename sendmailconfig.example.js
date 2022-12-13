const config = {
  credentials: {
    clientId: "",
    clientSecret: "",
    redirectURL: "",
    refreshToken: "",
  },

  sendEmail: {
    filePath: "./build-test/index.html",
    from: "fromemailexample@gmail.com",
    subject: "Test Email",
    text: "Test Email",
    to: ["toemailexample@gmail.com"],
  },
}

module.exports = { config }
