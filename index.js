'use strict';

var ritocore = module.exports;

// module information
ritocore.version = 'v' + require('./package.json').version;
ritocore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of ritocore-lib found. ' +
      'Please make sure to require ritocore-lib and check that submodules do' +
      ' not also include their own ritocore-lib dependency.';
    throw new Error(message);
  }
};
ritocore.versionGuard(global._ritocore);
global._ritocore = ritocore.version;

// crypto
ritocore.crypto = {};
ritocore.crypto.BN = require('./lib/crypto/bn');
ritocore.crypto.ECDSA = require('./lib/crypto/ecdsa');
ritocore.crypto.Hash = require('./lib/crypto/hash');
ritocore.crypto.Random = require('./lib/crypto/random');
ritocore.crypto.Point = require('./lib/crypto/point');
ritocore.crypto.Signature = require('./lib/crypto/signature');

// encoding
ritocore.encoding = {};
ritocore.encoding.Base58 = require('./lib/encoding/base58');
ritocore.encoding.Base58Check = require('./lib/encoding/base58check');
ritocore.encoding.BufferReader = require('./lib/encoding/bufferreader');
ritocore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
ritocore.encoding.Varint = require('./lib/encoding/varint');

// utilities
ritocore.util = {};
ritocore.util.buffer = require('./lib/util/buffer');
ritocore.util.js = require('./lib/util/js');
ritocore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
ritocore.errors = require('./lib/errors');

// main ritocoin library
ritocore.Address = require('./lib/address');
ritocore.Block = require('./lib/block');
ritocore.MerkleBlock = require('./lib/block/merkleblock');
ritocore.BlockHeader = require('./lib/block/blockheader');
ritocore.HDPrivateKey = require('./lib/hdprivatekey.js');
ritocore.HDPublicKey = require('./lib/hdpublickey.js');
ritocore.Networks = require('./lib/networks');
ritocore.Opcode = require('./lib/opcode');
ritocore.PrivateKey = require('./lib/privatekey');
ritocore.PublicKey = require('./lib/publickey');
ritocore.Script = require('./lib/script');
ritocore.Transaction = require('./lib/transaction');
ritocore.URI = require('./lib/uri');
ritocore.Unit = require('./lib/unit');

// dependencies, subject to change
ritocore.deps = {};
ritocore.deps.bnjs = require('bn.js');
ritocore.deps.bs58 = require('bs58');
ritocore.deps.Buffer = Buffer;
ritocore.deps.elliptic = require('elliptic');
ritocore.deps.nodeX21s = require('node-x21s');
ritocore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
ritocore.Transaction.sighash = require('./lib/transaction/sighash');
