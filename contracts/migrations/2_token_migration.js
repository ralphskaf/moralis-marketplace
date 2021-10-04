const MorarbleToken = artifacts.require("MorarbleToken");

module.exports = function (deployer) {
  deployer.deploy(MorarbleToken);
};
