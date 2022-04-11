require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remind huge heavy process orange gauge'; 
let testAccounts = [
"0xa66ba902ee9ae31326c5749691d634a43b38bf0293740c696bf057f45b303d4c",
"0xedacd1465e119a17fe3eb079959df44d8a137de94f615f786729db6d117a5b55",
"0x9f17904a9b515a9a7a874da5bbbe382bde01ec4ccc137225219f7d8f2d5aa528",
"0x6f7528464f4c368b2e559b12bb1da09e2bc58b039d13afc94e18f418958b791e",
"0x2f8eb603bb6ca7b5e5a5618b6e54e4674e8c8f6986a20a15ab2799508f0567ec",
"0x735b862c09ba857689668067ba66a1e69937be71db30f697aae83045a69fb4a9",
"0xb6614b6a4416ff1a38488c3e381fb9d86847dd3d6026fef497137eadfc39f468",
"0x2d8d8c31f872eacb067159100eb77ed093c74afe313e946a123c55cf450a3598",
"0x1318e2b38630cb2ffa3af77da3f33fc82a90421c6fcd4260928c3225c1c38f7f",
"0x05409cc2710b059d2f8d9b703cbc1a0034cc4886f4c2689485298877269c4f69"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

