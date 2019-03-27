export const abi = [
  {
    constant: false,
    inputs: [
      { name: 'chimneyId', type: 'uint32' },
      { name: 'name', type: 'string' },
      { name: 'location', type: 'string' },
      { name: 'detail', type: 'string' }
    ],
    name: 'EditChimneyInfo',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      { name: 'factoryAddress', type: 'address' },
      { name: 'name', type: 'string' },
      { name: 'location', type: 'string' },
      { name: 'detail', type: 'string' }
    ],
    name: 'AddFactory',
    outputs: [{ name: '', type: 'uint32' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      { name: 'chimneyId', type: 'uint32' },
      { name: 'paraN', type: 'uint32' },
      { name: 'paraName', type: 'string' }
    ],
    name: 'WriteNameToPara',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'lastChimneyId',
    outputs: [{ name: '', type: 'uint32' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [{ name: '_operator', type: 'address' }],
    name: 'transferOperator',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'lastFactoryId',
    outputs: [{ name: '', type: 'uint32' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      { name: 'name', type: 'string' },
      { name: 'location', type: 'string' },
      { name: 'detail', type: 'string' }
    ],
    name: 'AddChimney',
    outputs: [{ name: '', type: 'uint32' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'operator',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'GetFactoryId',
    outputs: [{ name: '', type: 'uint32' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      { name: 'chimneyId', type: 'uint32' },
      { name: 'paraId', type: 'uint32[]' },
      { name: 'data', type: 'uint64[]' }
    ],
    name: 'RecordData',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: 'a', type: 'uint32' }, { name: 'b', type: 'uint32' }],
    name: 'Add',
    outputs: [{ name: '', type: 'uint32' }],
    payable: false,
    stateMutability: 'pure',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: 'factoryId', type: 'uint32' }],
    name: 'GetFactoryInfo',
    outputs: [
      { name: 'name', type: 'string' },
      { name: 'location', type: 'string' },
      { name: 'detail', type: 'string' },
      { name: 'chimneyN', type: 'uint32' },
      { name: 'chimneyIds', type: 'uint32[]' }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      { name: 'chimneyId', type: 'uint32' },
      { name: 'paraN', type: 'uint32' }
    ],
    name: 'GetParaInfo',
    outputs: [{ name: 'name', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: 'chimneyId', type: 'uint32' }],
    name: 'GetChimneyInfo',
    outputs: [
      { name: 'name', type: 'string' },
      { name: 'location', type: 'string' },
      { name: 'detail', type: 'string' },
      { name: 'factoryId', type: 'uint32' },
      { name: 'paraN', type: 'uint32' }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      { name: 'name', type: 'string' },
      { name: 'location', type: 'string' },
      { name: 'detail', type: 'string' }
    ],
    name: 'EditFactoryInfo',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [{ name: 'a', type: 'uint32' }, { name: 'b', type: 'uint32' }],
    name: 'Sub',
    outputs: [{ name: '', type: 'uint32' }],
    payable: false,
    stateMutability: 'pure',
    type: 'function'
  },
  {
    constant: false,
    inputs: [
      { name: 'chimneyId', type: 'uint32' },
      { name: 'paraN', type: 'uint32' }
    ],
    name: 'AddParaToChimney',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      { name: 'N', type: 'uint32' },
      { name: 'chimneyId', type: 'uint32' },
      { name: 'paraId', type: 'uint32' }
    ],
    name: 'GetRecordData',
    outputs: [
      { name: 'name', type: 'string' },
      { name: 'timestamps', type: 'uint64[]' },
      { name: 'datas', type: 'uint64[]' }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'lastFactoryId', type: 'uint32' },
      { indexed: false, name: 'name', type: 'string' },
      { indexed: false, name: 'location', type: 'string' },
      { indexed: false, name: 'detail', type: 'string' }
    ],
    name: 'NewFactory',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'lastChimneyId', type: 'uint32' },
      { indexed: false, name: 'name', type: 'string' },
      { indexed: false, name: 'location', type: 'string' },
      { indexed: false, name: 'detail', type: 'string' }
    ],
    name: 'NewChimney',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'chimneyId', type: 'uint32' },
      { indexed: false, name: 'paraName', type: 'uint32' }
    ],
    name: 'NewParameter',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'chimneyId', type: 'uint32' },
      { indexed: true, name: 'paraN', type: 'uint32' },
      { indexed: false, name: 'paraName', type: 'string' }
    ],
    name: 'NewNameToPara',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'chimneyId', type: 'uint32' },
      { indexed: false, name: 'paraId', type: 'uint32[]' },
      { indexed: false, name: 'data', type: 'uint64[]' }
    ],
    name: 'AddData',
    type: 'event'
  }
];
