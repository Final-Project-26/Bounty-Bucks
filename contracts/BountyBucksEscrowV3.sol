// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title BountyBucksEscrow
 * @dev Manages fund transfers between two parties
 */
contract BountyBucksEscrow {
    // Wallet address of the payer
    address public funder;
    // Wallet address of the intended beneficiary
    address public beneficiary;

    /// Lock Up the Bounty Bucks Crypto Funds for a Bounty Bounty Hunter TASK
    /// @param Counterpart the address of the intended beneficiary
    /// @dev Lock Up crypto for the counterpart
    function fund(address counterpart) public payable {
        beneficiary = counterpart;
        funder = msg.sender;
    }

    /// Refund Approved Refunds for Bounty Bucks Approved Disputes for DAO Disputes
    /// Bounty Hunter Doesn't Meet the Bounty Requirements
    function refund(address funder) public payable {
        beneficiary = funder;
        funder = msg.sender;
    }

    /// Release all locked funds.
    /// @dev Once the requirements are met, let only the DAO payer release fund.
    function release() public payable {
        if (msg.sender==funder){
            // Transfer all the funds to the beneficiary
            payable(beneficiary).transfer(address(this).balance);
        }
    }

    /// Return the locked value.
    /// @dev anyone should be able to see the actually locked crypto funds .
    /// @return the crypto value
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}
