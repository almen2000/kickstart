pragma solidity ^0.5.1;

contract campaignFactory{

    Campaign[] public deployedCampaigns;



    function createCampaign (uint minimum) public {

        Campaign newCamplaign = new Campaign(minimum, msg.sender);

        deployedCampaigns.push(newCamplaign);

    }

    function getDeployedCampaigns() public view returns (Campaign[] memory) {

        return deployedCampaigns;

    }

}



contract Campaign {

    struct Request{

        string description;

        uint value;

        address payable recipient;

        bool complete;

        uint approvalCount;

        mapping (address => bool) approvals;



    }



    Request[] public requests;

    address public manager;

    uint public minimumContribution;

    mapping (address => bool) public approvers;

    uint public approversCount;



    constructor(uint minimum, address creator) public {

        manager = creator;

        minimumContribution = minimum;

    }



    modifier restricted() {

        require(msg.sender == manager);

        _;

    }



    function contribute() public payable {

        require(msg.value > minimumContribution);



        approvers[msg.sender] = true;

        approversCount++;

    }



    function createRequest(string memory description, uint value, address payable recipient) public restricted {

        Request memory newRequest = Request({

            description: description,

            value: value,

            recipient: recipient,

            complete: false,

            approvalCount: 0

        });

        requests.push(newRequest);

    }



    function approveRequest (uint index) public {

        Request storage request = requests[index];



        require(approvers[msg.sender]);

        require(!request.approvals[msg.sender]);



        request.approvals[msg.sender] = true;

        request.approvalCount++;

    }



    function finilizeRequest (uint index) public {

        Request storage request = requests[index];

        require(request.approvalCount > (approversCount/2));

        require(!request.complete);



        request.recipient.transfer(request.value);

        request.complete = true;

    }



}
