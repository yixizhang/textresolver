/**
 * Resolve the main text from webpage with different plugins
 */

class textresolver {
  constructor() {
    this.filters = [];
  }

  register(plugin) {
    this.filters.push(plugin);
    return this;
  }

  next(filters, url, cb) {
    var self = this;
    if (filters.length) {
      var filter = filters[0];
      filter.resolve(url, function(data) {
        if (data === null) {
          self.next(filters.slice(1), url, cb);
          return;
        } else {
          cb(data);
          return;
        }
      })
    } else {
      cb(null);
      return;
    }
  }

  resolve(url, cb) {
    this.next(this.filters, url, cb);
  }
}

module.exports = textresolver;
