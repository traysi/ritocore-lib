'use strict';

var should = require('chai').should();
var ritocore = require('../');

describe('#versionGuard', function() {
  it('global._ritocore should be defined', function() {
    should.equal(global._ritocore, ritocore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      ritocore.versionGuard('version');
    }).should.throw('More than one instance of ritocore');
  });
});
