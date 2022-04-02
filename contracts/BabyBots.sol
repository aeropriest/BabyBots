//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/access/Ownable.sol";
import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract BabyBots is ERC721A, Ownable, ReentrancyGuard {
    
    string public baseURI;
    address private signer;
    //constructor(string memory name, string memory symbol) ERC721(name, symbol) {
    constructor(
        string memory _name,
        string memory _symbol,
        address _signer
    ) ERC721A(_name, _symbol) {
        signer = _signer;
    }

    function _baseURI() internal view virtual override returns (string memory){
        return baseURI;
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    // public
    function publicMint(uint256 _mintAmount) public payable nonReentrant {
        require(tx.origin == msg.sender, "contract is not allowed to mint");
        require(_mintAmount > 0, "mint num must > 0");
        _safeMint(msg.sender, _mintAmount);
    }
}