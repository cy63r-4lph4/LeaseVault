// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LeaseVault {
    constructor() {
        
    }
    struct Property {
        uint256 id;
        uint256 rentPerMonth;
        // uint256 deposit;
        uint256 duration;
        string metadata;
        address lessor;
        bool isLeased;
    }
    struct Lease {
        uint256 id;
        uint256 propertyId;
        uint256 leaseStart;
        uint256 leaseEnd;
        uint256 deposit;
        address lessee;
        bool isActive;
    }
    uint256 public propertyCount;
    mapping(uint256 => Property) public properties;
    mapping(uint256 => Lease) public leaseAgreements;
    mapping(uint256 => address) public escrow; 

    event PropertyListed(uint256 propertyId, address landlord);
    event LeaseRequested(uint256 propertyId, address tenant);
    event LeaseApproved(uint256 propertyId, address tenant);
    event RentDeposited(uint256 propertyId, address tenant, uint256 amount);
    event RentReleased(uint256 propertyId, address landlord, uint256 amount);

    modifier onlyLandlord(uint256 propertyId) {
        require(properties[propertyId].lessor == msg.sender, "Not the landlord");
        _;
    }

    function listProperty(
        string memory _metadata,
        uint256 _rentPerMonth,
        uint256 _leaseDuration
    ) external {
        propertyCount++;
        properties[propertyCount] = Property(propertyCount, _rentPerMonth, _leaseDuration, _metadata, msg.sender, false);
        emit PropertyListed(propertyCount, msg.sender);
    }

    function requestLease(uint256 _propertyId) external payable {
        require(properties[_propertyId].id != 0, "Property does not exist");
        require(!properties[_propertyId].isLeased, "Already rented");

        uint256 deposit = properties[_propertyId].rentPerMonth * 2; // Security deposit = 2 months' rent
        require(msg.value >= deposit, "Insufficient deposit");

        // leaseAgreements[_propertyId] = Lease(_propertyId, msg.sender, block.timestamp, deposit, false);
        // escrow[_propertyId] = msg.sender; // Store funds in escrow
        // emit LeaseRequested(_propertyId, msg.sender);
    }

    function approveLease(uint256 _propertyId) external onlyLandlord(_propertyId) {
        require(leaseAgreements[_propertyId].lessee != address(0), "No lease request found");

        leaseAgreements[_propertyId].isActive = true;
        properties[_propertyId].isLeased = true;

        emit LeaseApproved(_propertyId, leaseAgreements[_propertyId].tenant);
    }

    function releaseRent(uint256 _propertyId) external onlyLandlord(_propertyId) {
        require(leaseAgreements[_propertyId].isActive, "Lease not active");
        
        uint256 amount = leaseAgreements[_propertyId].depositAmount;
        payable(properties[_propertyId].landlord).transfer(amount);
        delete escrow[_propertyId]; 

        emit RentReleased(_propertyId, properties[_propertyId].landlord, amount);
    }
}