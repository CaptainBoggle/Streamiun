const { Plugin } = require('powercord/entities');
const { getModule } = require('powercord/webpack');
console.log("Streamium Loading");
module.exports = class Streamiun extends Plugin {
  async startPlugin() {
    console.log("Streamium Starting");
    // this shouldnt work but it does
    this.getCurrentUser = getModule(["getCurrentUser"], false).getCurrentUser;
    setTimeout(() => {
      console.log("Streamium Executed");
      this.getCurrentUser().premiumType = 2;
    }, 10000);
  }
  pluginWillUnload() {
  }
};
