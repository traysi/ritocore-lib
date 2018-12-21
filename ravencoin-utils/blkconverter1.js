'use strict';

// execution
// enable rest in rito.conf 'rest=1' (be sure to disable after)
// node ./ritocoin-utils/blkconverter1.js

// convert block json from ritod format to ritocore format

// get ./ritocoin-utils/inputs/blk220909.dat by:
// curl 127.0.0.1:8766/rest/block/00000058bcc33dea08b53691edb9e49a9eb8bac36a0db17eb5a7588860b1f590.hex | xxd -r -p > ./ritocoin-utils/inputs/blk1.dat

// get ./ritocoin-utils/inputs/blk220909.json by
// curl 127.0.0.1:8766/rest/block/00000058bcc33dea08b53691edb9e49a9eb8bac36a0db17eb5a7588860b1f590.json > ./ritocoin-utils/inputs/blk1.json

// get ./ritocoin-utils/inputs/blk1.js by manually edit the file

// Manually check if blk1-ritocore.json match with blk1.json

var ritocore = require('..');
var Block = ritocore.Block;
var fs = require('fs');

var first8Bytes = new Buffer ([0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF]); // won't be used in block allocation, just fill with some inane values

var blockBuffer = fs.readFileSync('ritocoin-utils/inputs/blk1.dat');

var ritocoreFormatBlockBuffer = Buffer.concat([first8Bytes, blockBuffer]);

var blk = Block.fromRawBlock(ritocoreFormatBlockBuffer);

var blkJSON = blk.toJSON();
var blkJSONStr = JSON.stringify(blkJSON, null, 2);

fs.writeFileSync('ritocoin-utils/outputs/blk1-ritocore.dat', ritocoreFormatBlockBuffer);
fs.writeFileSync('ritocoin-utils/outputs/blk1-ritocore.json', blkJSONStr);
