require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize frame street name reward stick cluster half entire bridge typical'; 
let testAccounts = [
"0xdf7d70513388b541196ed070c4d76405972b6d2fe40ddfc3496f3313bb194227",
"0xa6bd52e560e9fdc5037926c97ed034ad067915fa5682173584608752ce1e53cf",
"0xa58410c63a657f7346ff70ac5bff55dc6888f3f8bae6d7a0bb1737b93dceae5c",
"0x7016a9f29ee9d21a7e92e2822109ae01166c735e24b87b5c7fe7f868a7bb9435",
"0x12c8da83d435290980a4fccc4875e10383e7216426ab495bed5e553510b14337",
"0x453623157cb2397a08af5c4eac03082a493acb60f39d370f305515ff2ba3d23b",
"0x8166e82d3de8bb37599a75f9b68b721f600815e65e8fd07701b8d572dfe28f69",
"0xb734d3af0088f643f4be62cec56f339738d82df7ab8bf2fa07ae0c291d1942a0",
"0x09ac77f1229787ed95c7800029f7ffdb59378419350c621efa2c1f5ed2b9e8a9",
"0x7e42f50f36858e77f5f5e436578a3a0f74dc9dd54dfe76633467dc080b8998a2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
