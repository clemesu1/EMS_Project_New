// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

contract SimpleStorage {
    event StorageSet(string _message);

    string public storedData;

    function set(string memory x) public {
        storedData = x;

        emit StorageSet("Data stored successfully!");
    }
}
