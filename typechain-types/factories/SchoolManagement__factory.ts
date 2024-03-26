/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type {
  SchoolManagement,
  SchoolManagementInterface,
} from "../SchoolManagement";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_isActive",
        type: "bool",
      },
    ],
    name: "StatusChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "addressToStudent",
    outputs: [
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
      {
        internalType: "address",
        name: "studentAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "studentName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "classId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "addressToTeacher",
    outputs: [
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
      {
        internalType: "address",
        name: "teacherAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "teacherName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "classId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_teacher",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_classId",
        type: "uint256",
      },
    ],
    name: "assignHomeroom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_student",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_classId",
        type: "uint256",
      },
    ],
    name: "assignStudent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_student",
        type: "address",
      },
    ],
    name: "changeStudentStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_teacher",
        type: "address",
      },
    ],
    name: "changeTeacherStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "classIdToClass",
    outputs: [
      {
        internalType: "uint256",
        name: "classId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "className",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "classes",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_class",
        type: "string",
      },
    ],
    name: "createClass",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newPrincipal",
        type: "address",
      },
    ],
    name: "delegatePrincipal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllStudents",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
          {
            internalType: "address",
            name: "studentAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "studentName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "classId",
            type: "uint256",
          },
        ],
        internalType: "struct SchoolManagement.Student[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllTeachers",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
          {
            internalType: "address",
            name: "teacherAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "teacherName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "classId",
            type: "uint256",
          },
        ],
        internalType: "struct SchoolManagement.Teacher[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "principal",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "enum SchoolManagement.Role",
        name: "_role",
        type: "uint8",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "students",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "teachers",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612902806100606000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063767b79ed116100975780639b767757116100665780639b767757146102d6578063b64ebebb146102f2578063ba5d30781461030e578063e9e309271461032c57610100565b8063767b79ed1461023b578063817dbe9f146102575780638a7dc32b1461028757806398754710146102a357610100565b80631e826fe4116100d35780631e826fe4146101b757806334ac0b40146101d35780635d8fe0bd146102035780635f4ba0ea1461021f57610100565b8063023eb6c41461010557806306ead22e1461013657806309029aac146101665780630f75d6d814610184575b600080fd5b61011f600480360381019061011a9190611aee565b61034a565b60405161012d929190611bba565b60405180910390f35b610150600480360381019061014b9190611aee565b6103f6565b60405161015d9190611c2b565b60405180910390f35b61016e610435565b60405161017b9190611dee565b60405180910390f35b61019e60048036038101906101999190611e3c565b61066c565b6040516101ae9493929190611e78565b60405180910390f35b6101d160048036038101906101cc9190611e3c565b610751565b005b6101ed60048036038101906101e89190611aee565b610914565b6040516101fa9190611c2b565b60405180910390f35b61021d60048036038101906102189190611e3c565b610953565b005b61023960048036038101906102349190611e3c565b610b16565b005b61025560048036038101906102509190611f4e565b610be7565b005b610271600480360381019061026c9190611aee565b611117565b60405161027e9190611fae565b60405180910390f35b6102a1600480360381019061029c9190611fd0565b6111c3565b005b6102bd60048036038101906102b89190611e3c565b611344565b6040516102cd9493929190611e78565b60405180910390f35b6102f060048036038101906102eb919061201d565b611429565b005b61030c6004803603810190610307919061201d565b6115fe565b005b6103166117d3565b6040516103239190611c2b565b60405180910390f35b6103346117f7565b6040516103419190612182565b60405180910390f35b6005602052806000526040600020600091509050806000015490806001018054610373906121d3565b80601f016020809104026020016040519081016040528092919081815260200182805461039f906121d3565b80156103ec5780601f106103c1576101008083540402835291602001916103ec565b820191906000526020600020905b8154815290600101906020018083116103cf57829003601f168201915b5050505050905082565b6002818154811061040657600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600060038054905067ffffffffffffffff81111561045857610457612204565b5b60405190808252806020026020018201604052801561049157816020015b61047e611a2e565b8152602001906001900390816104765790505b50905060005b6003805490508110156106645760066000600383815481106104bc576104bb612233565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060800160405290816000820160009054906101000a900460ff161515151581526020016000820160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546105ad906121d3565b80601f01602080910402602001604051908101604052809291908181526020018280546105d9906121d3565b80156106265780601f106105fb57610100808354040283529160200191610626565b820191906000526020600020905b81548152906001019060200180831161060957829003601f168201915b5050505050815260200160028201548152505082828151811061064c5761064b612233565b5b60200260200101819052508080600101915050610497565b508091505090565b60066020528060005260406000206000915090508060000160009054906101000a900460ff16908060000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010180546106c8906121d3565b80601f01602080910402602001604051908101604052809291908181526020018280546106f4906121d3565b80156107415780601f1061071657610100808354040283529160200191610741565b820191906000526020600020905b81548152906001019060200180831161072457829003601f168201915b5050505050908060020154905084565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146107df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d6906122d4565b60405180910390fd5b600660008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1615600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff0219169083151502179055507f6303039f3f903247906337ae51ea67063408be3dbc7a2f517044e91404293a6181600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff166040516109099291906122f4565b60405180910390a150565b6003818154811061092457600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146109e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d8906122d4565b60405180910390fd5b600760008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1615600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff0219169083151502179055507f6303039f3f903247906337ae51ea67063408be3dbc7a2f517044e91404293a6181600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff16604051610b0b9291906122f4565b60405180910390a150565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ba4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9b906122d4565b60405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600073ffffffffffffffffffffffffffffffffffffffff16600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16148015610d135750600073ffffffffffffffffffffffffffffffffffffffff16600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b610d52576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4990612369565b60405180910390fd5b60006001811115610d6657610d65612389565b5b816001811115610d7957610d78612389565b5b03610f3457600060405180608001604052806000151581526020013373ffffffffffffffffffffffffffffffffffffffff16815260200185858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508152602001600081525090506002339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816001019081610f209190612564565b506060820151816002015590505050611112565b600180811115610f4757610f46612389565b5b816001811115610f5a57610f59612389565b5b0361111157600060405180608001604052806000151581526020013373ffffffffffffffffffffffffffffffffffffffff16815260200185858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508152602001600081525090506003339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160010190816111019190612564565b5060608201518160020155905050505b5b505050565b6001818154811061112757600080fd5b906000526020600020016000915090508054611142906121d3565b80601f016020809104026020016040519081016040528092919081815260200182805461116e906121d3565b80156111bb5780601f10611190576101008083540402835291602001916111bb565b820191906000526020600020905b81548152906001019060200180831161119e57829003601f168201915b505050505081565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611251576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611248906122d4565b60405180910390fd5b600182829091806001815401808255809150506001900390600052602060002001600090919290919290919290919250918261128e929190612641565b50600460008154809291906112a290612740565b919050555060006040518060400160405280600454815260200184848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505081525090508060056000600454815260200190815260200160002060008201518160000155602082015181600101908161133b9190612564565b50905050505050565b60076020528060005260406000206000915090508060000160009054906101000a900460ff16908060000160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010180546113a0906121d3565b80601f01602080910402602001604051908101604052809291908181526020018280546113cc906121d3565b80156114195780601f106113ee57610100808354040283529160200191611419565b820191906000526020600020905b8154815290600101906020018083116113fc57829003601f168201915b5050505050908060020154905084565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146114b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114ae906122d4565b60405180910390fd5b8060006001805490501180156114e457506000600560008381526020019081526020016000206000015414155b611523576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161151a906127d4565b60405180910390fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff166115b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115a990612840565b60405180910390fd5b81600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020181905550505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461168c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611683906122d4565b60405180910390fd5b8060006001805490501180156116b957506000600560008381526020019081526020016000206000015414155b6116f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116ef906127d4565b60405180910390fd5b600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff16611787576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161177e906128ac565b60405180910390fd5b81600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020181905550505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600060028054905067ffffffffffffffff81111561181a57611819612204565b5b60405190808252806020026020018201604052801561185357816020015b611840611a6e565b8152602001906001900390816118385790505b50905060005b600280549050811015611a2657600760006002838154811061187e5761187d612233565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060800160405290816000820160009054906101000a900460ff161515151581526020016000820160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461196f906121d3565b80601f016020809104026020016040519081016040528092919081815260200182805461199b906121d3565b80156119e85780601f106119bd576101008083540402835291602001916119e8565b820191906000526020600020905b8154815290600101906020018083116119cb57829003601f168201915b50505050508152602001600282015481525050828281518110611a0e57611a0d612233565b5b60200260200101819052508080600101915050611859565b508091505090565b6040518060800160405280600015158152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001600081525090565b6040518060800160405280600015158152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001600081525090565b600080fd5b600080fd5b6000819050919050565b611acb81611ab8565b8114611ad657600080fd5b50565b600081359050611ae881611ac2565b92915050565b600060208284031215611b0457611b03611aae565b5b6000611b1284828501611ad9565b91505092915050565b611b2481611ab8565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611b64578082015181840152602081019050611b49565b60008484015250505050565b6000601f19601f8301169050919050565b6000611b8c82611b2a565b611b968185611b35565b9350611ba6818560208601611b46565b611baf81611b70565b840191505092915050565b6000604082019050611bcf6000830185611b1b565b8181036020830152611be18184611b81565b90509392505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611c1582611bea565b9050919050565b611c2581611c0a565b82525050565b6000602082019050611c406000830184611c1c565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60008115159050919050565b611c8781611c72565b82525050565b611c9681611c0a565b82525050565b600082825260208201905092915050565b6000611cb882611b2a565b611cc28185611c9c565b9350611cd2818560208601611b46565b611cdb81611b70565b840191505092915050565b611cef81611ab8565b82525050565b6000608083016000830151611d0d6000860182611c7e565b506020830151611d206020860182611c8d565b5060408301518482036040860152611d388282611cad565b9150506060830151611d4d6060860182611ce6565b508091505092915050565b6000611d648383611cf5565b905092915050565b6000602082019050919050565b6000611d8482611c46565b611d8e8185611c51565b935083602082028501611da085611c62565b8060005b85811015611ddc5784840389528151611dbd8582611d58565b9450611dc883611d6c565b925060208a01995050600181019050611da4565b50829750879550505050505092915050565b60006020820190508181036000830152611e088184611d79565b905092915050565b611e1981611c0a565b8114611e2457600080fd5b50565b600081359050611e3681611e10565b92915050565b600060208284031215611e5257611e51611aae565b5b6000611e6084828501611e27565b91505092915050565b611e7281611c72565b82525050565b6000608082019050611e8d6000830187611e69565b611e9a6020830186611c1c565b8181036040830152611eac8185611b81565b9050611ebb6060830184611b1b565b95945050505050565b600080fd5b600080fd5b600080fd5b60008083601f840112611ee957611ee8611ec4565b5b8235905067ffffffffffffffff811115611f0657611f05611ec9565b5b602083019150836001820283011115611f2257611f21611ece565b5b9250929050565b60028110611f3657600080fd5b50565b600081359050611f4881611f29565b92915050565b600080600060408486031215611f6757611f66611aae565b5b600084013567ffffffffffffffff811115611f8557611f84611ab3565b5b611f9186828701611ed3565b93509350506020611fa486828701611f39565b9150509250925092565b60006020820190508181036000830152611fc88184611b81565b905092915050565b60008060208385031215611fe757611fe6611aae565b5b600083013567ffffffffffffffff81111561200557612004611ab3565b5b61201185828601611ed3565b92509250509250929050565b6000806040838503121561203457612033611aae565b5b600061204285828601611e27565b925050602061205385828601611ad9565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006080830160008301516120a16000860182611c7e565b5060208301516120b46020860182611c8d565b50604083015184820360408601526120cc8282611cad565b91505060608301516120e16060860182611ce6565b508091505092915050565b60006120f88383612089565b905092915050565b6000602082019050919050565b60006121188261205d565b6121228185612068565b93508360208202850161213485612079565b8060005b85811015612170578484038952815161215185826120ec565b945061215c83612100565b925060208a01995050600181019050612138565b50829750879550505050505092915050565b6000602082019050818103600083015261219c818461210d565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806121eb57607f821691505b6020821081036121fe576121fd6121a4565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4f6e6c79207072696e636970616c2063616e20657865637574652066756e637460008201527f696f6e2e00000000000000000000000000000000000000000000000000000000602082015250565b60006122be602483611b35565b91506122c982612262565b604082019050919050565b600060208201905081810360008301526122ed816122b1565b9050919050565b60006040820190506123096000830185611c1c565b6123166020830184611e69565b9392505050565b7f416c726561647920726567697374657265642e00000000000000000000000000600082015250565b6000612353601383611b35565b915061235e8261231d565b602082019050919050565b6000602082019050818103600083015261238281612346565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261241a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826123dd565b61242486836123dd565b95508019841693508086168417925050509392505050565b6000819050919050565b600061246161245c61245784611ab8565b61243c565b611ab8565b9050919050565b6000819050919050565b61247b83612446565b61248f61248782612468565b8484546123ea565b825550505050565b600090565b6124a4612497565b6124af818484612472565b505050565b5b818110156124d3576124c860008261249c565b6001810190506124b5565b5050565b601f821115612518576124e9816123b8565b6124f2846123cd565b81016020851015612501578190505b61251561250d856123cd565b8301826124b4565b50505b505050565b600082821c905092915050565b600061253b6000198460080261251d565b1980831691505092915050565b6000612554838361252a565b9150826002028217905092915050565b61256d82611b2a565b67ffffffffffffffff81111561258657612585612204565b5b61259082546121d3565b61259b8282856124d7565b600060209050601f8311600181146125ce57600084156125bc578287015190505b6125c68582612548565b86555061262e565b601f1984166125dc866123b8565b60005b82811015612604578489015182556001820191506020850194506020810190506125df565b86831015612621578489015161261d601f89168261252a565b8355505b6001600288020188555050505b505050505050565b600082905092915050565b61264b8383612636565b67ffffffffffffffff81111561266457612663612204565b5b61266e82546121d3565b6126798282856124d7565b6000601f8311600181146126a85760008415612696578287013590505b6126a08582612548565b865550612708565b601f1984166126b6866123b8565b60005b828110156126de578489013582556001820191506020850194506020810190506126b9565b868310156126fb57848901356126f7601f89168261252a565b8355505b6001600288020188555050505b50505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061274b82611ab8565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361277d5761277c612711565b5b600182019050919050565b7f4e6f20636c617373657320746f2061737369676e2e0000000000000000000000600082015250565b60006127be601583611b35565b91506127c982612788565b602082019050919050565b600060208201905081810360008301526127ed816127b1565b9050919050565b7f54656163686572206973206e6f74206163746976652e00000000000000000000600082015250565b600061282a601683611b35565b9150612835826127f4565b602082019050919050565b600060208201905081810360008301526128598161281d565b9050919050565b7f53747564656e74206973206e6f74206163746976652e00000000000000000000600082015250565b6000612896601683611b35565b91506128a182612860565b602082019050919050565b600060208201905081810360008301526128c581612889565b905091905056fea26469706673582212207aead06313fdc40daa3d32d4a8da8c587d895036cfd3fbd277129cbea7dc224464736f6c63430008180033";

type SchoolManagementConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SchoolManagementConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SchoolManagement__factory extends ContractFactory {
  constructor(...args: SchoolManagementConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      SchoolManagement & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SchoolManagement__factory {
    return super.connect(runner) as SchoolManagement__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SchoolManagementInterface {
    return new Interface(_abi) as SchoolManagementInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SchoolManagement {
    return new Contract(address, _abi, runner) as unknown as SchoolManagement;
  }
}