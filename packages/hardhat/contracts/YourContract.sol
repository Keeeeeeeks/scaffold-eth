pragma solidity >=0.6.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
//import "@openzeppelin/contracts/access/Ownable.sol"; //https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract YourContract {

  uint public count;

  // Function to get the current count
  function get() public view returns (uint) {
    return count;
  }

  function inc() public {
    count += 1;
  }

    function dec() public {
    count -= 1;
  }

  event SetPurpose(address sender, string purpose);

  string public purpose = "Building Unstoppable Apps";

  constructor() {
    // what should we do on deploy?
  }

  function setPurpose(string memory newPurpose) public {
    purpose = newPurpose;
    console.log(msg.sender,"set purpose to",purpose);
    emit SetPurpose(msg.sender, purpose);
  }



}
