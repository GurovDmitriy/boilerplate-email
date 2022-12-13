const nodemailer = require("nodemailer")
const { google } = require("googleapis")
const fs = require("fs")
const path = require("path")
const { config } = require("../sendmailconfig.js")

class SendEmail {
  constructor() {
    this.oAuth2Client = null
    this.transport = null
    this.accessToken = ""

    this.mailOptions = {
      from: config.sendEmail.from,
      to: config.sendEmail.to,
      subject: config.sendEmail.subject,
      html: null,
    }
  }

  async run() {
    try {
      this._setEmail()
      this._setOAuth2Client()
      this._setCredentials()

      await this._setAccessToken()
      this._setTransport()

      console.log("Email send...")

      const result = await this._sendEmail()
      console.log(result.response)
    } catch (err) {
      console.log(err.message)
    }
  }

  _setEmail() {
    this.mailOptions.html = fs.readFileSync(
      path.join(__dirname, "..", config.sendEmail.filePath),
      "utf8"
    )
  }

  _setOAuth2Client() {
    this.oAuth2Client = new google.auth.OAuth2(
      config.credentials.clientId,
      config.credentials.clientSecret,
      config.credentials.redirectURL
    )
  }

  _setCredentials() {
    this.oAuth2Client.setCredentials({
      refresh_token: config.credentials.refreshToken,
    })
  }

  async _setAccessToken() {
    this.accessToken = await this.oAuth2Client.getAccessToken()
  }

  _setTransport() {
    this.transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: config.sendEmail.from,
        clientId: config.credentials.clientId,
        clientSecret: config.credentials.clientSecret,
        accessToken: this.accessToken.token,
      },
    })
  }

  async _sendEmail() {
    return await this.transport.sendMail(this.mailOptions)
  }
}

const sendEmail = new SendEmail()
sendEmail.run()
