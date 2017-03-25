import path from 'path';

/**
 * const plugin = new plugin();
 * plugin.loadType('routes');
 */
export default class Plugin {

  //
  constructor() {
    let plugin_conf_name = 'plugins.json';
    this.plugins_conf = require(path.join(process.cwd(), 'src', plugin_conf_name));
  }

  /**
   * Return all plugins of that type.
   */
  loadType(type) {
    let types = [];

    this.plugins_conf[type].forEach(function (i) {
      types.push(require(path.join(process.cwd(), i)));
    });
    return types;
  }

}
