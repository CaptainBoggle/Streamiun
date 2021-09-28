const { Plugin } = require('powercord/entities');
const { getModule } = require('powercord/webpack');

module.exports = class Streamiun extends Plugin {
  
  async startPlugin() {
    // this shouldnt work but it does
    this.getCurrentUser = getModule(["getCurrentUser"], false).getCurrentUser;
    setTimeout(() => {
      this.getCurrentUser().premiumType = 2;
    }, 10000);
  }

  pluginWillUnload() {
  }

};
