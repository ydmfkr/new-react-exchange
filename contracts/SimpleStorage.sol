pragma solidity ^0.4.15;

contract SimpleStorage {
  uint storedData;

  function set(uint x) public {
    storedData = x;
  }

  function get() public returns (uint) {
    return storedData;
  }
}
