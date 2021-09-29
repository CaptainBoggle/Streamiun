const { Plugin } = require('powercord/entities');
const { getModule } = require('powercord/webpack');
const { inject, uninject } = require('powercord/injector');

module.exports = class Streamiun extends Plugin {
  
  async startPlugin() {
    // this shouldnt work but it does
    const user = this.getModule([ 'getCurrentUser' ], false);

    this.inject(user, 'getCurrentUser', (_, res) => {
      const newRes = Object.create(res);
      newRes.premiumType = 2;
      return newRes;
  }

};
