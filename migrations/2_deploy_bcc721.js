const Asset = artifacts.require("./BCC721.sol");

module.exports = async(deployer) => {
    const name = "BCC721";
    const symbol = "BT";
    const tokenId = 1;
    const tokenURI = "https://ipfs.io/ipfs/QmR2KZAmJkgxHkqT4tHWKP7AvxDXbPr6ZJVp72Hoxc42Rq";

    await deployer.deploy(
        Asset,
        name,
        symbol,
        tokenId,
        tokenURI
    );
};
