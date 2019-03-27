export const datas = {
  Contract: [
    {
      title: 'Create New Web3 Object',
      type: 'Func',
      method: 'object',
      permission: '-',
      parameters: [],
      responses: [],
      descriptions: [
        {
          words: 'const web3Object = new Web3(window.web3.currentProvider)',
          highlight: false
        }
      ]
    },
    {
      title: 'Create New Contract Object',
      type: 'Func',
      method: 'object',
      permission: '-',
      parameters: [],
      responses: [],
      descriptions: [
        {
          words: 'const Contract = new web3Object.eth.Contract(',
          highlight: false
        },
        {
          words: '*abi',
          highlight: true
        },
        {
          words: ',',
          highlight: false
        },
        {
          words: ' *contractAddress',
          highlight: true
        },
        {
          words: ');',
          highlight: false
        }
      ]
    }
  ],
  Factory: [
    {
      title: 'Get Factory ID',
      type: 'call',
      method: 'GetFactoryId',
      permission: 'All',
      parameters: [],
      responses: [
        {
          field: 'null',
          type: 'number',
          description: 'Id of factory owned by Address called this function'
        }
      ]
    },
    {
      title: 'Get Factory Info',
      type: 'call',
      method: 'GetFactoryInfo',
      permission: 'All',
      parameters: [
        {
          field: 'factoryId',
          type: 'number',
          description: 'The ID of the factory you want to check.'
        }
      ],
      responses: [
        {
          field: 'name',
          type: 'string',
          description: 'Name of factory'
        },
        {
          field: 'location',
          type: 'string',
          description: 'Location of factory'
        },
        {
          field: 'detail',
          type: 'string',
          description: 'Detail of factory'
        },
        {
          field: 'chimneyN',
          type: 'number',
          description: 'The number of chimneys the factory has'
        },
        {
          field: 'chimneyIds',
          type: 'array',
          description: 'The arrangement of the code of a chimney that factory.'
        }
      ]
    },
    {
      title: 'Add Factory',
      type: 'send',
      method: 'AddFactory',
      permission: 'Owner of Contract',
      responses: [],
      parameters: [
        {
          field: 'factoryAddress',
          type: 'string',
          description:
            'The Ethereum wallet address of the person who owns the factory.'
        },
        {
          field: 'name',
          type: 'string',
          description: 'The name of the factory'
        },
        {
          field: 'location',
          type: 'string',
          description: 'The location of the factory'
        },
        {
          field: 'detail',
          type: 'string',
          description: '	The ID of the factory'
        }
      ]
    },
    {
      title: 'Edit Factory Info',
      type: 'send',
      method: 'EditFactoryInfo',
      permission: 'Owner of Contract',
      responses: [],
      parameters: [
        {
          field: 'name',
          type: 'string',
          description: 'The name of the factory you want to change.'
        },
        {
          field: 'location',
          type: 'string',
          description: 'The location of the factory you want to change'
        },
        {
          field: 'detail',
          type: 'string',
          description: 'The detail of the factory you want to change'
        }
      ]
    }
  ],
  Chimney: [
    {
      title: 'Get Chimney Info',
      type: 'call',
      method: 'GetChimneyInfo',
      permission: 'All',
      responses: [
        {
          field: 'name',
          type: 'string',
          description: 'Name of chimney'
        },
        {
          field: 'location',
          type: 'string',
          description: 'Location of chimney'
        },
        {
          field: 'detail',
          type: 'string',
          description: 'Detail of chimney'
        },
        {
          field: 'factoryId',
          type: 'number',
          description: 'The factory that owns this chimney'
        },
        {
          field: 'paraN',
          type: 'number',
          description: 'The number of types of pollutants emitted from chimneys'
        }
      ],
      parameters: [
        {
          field: 'chimneyId',
          type: 'number',
          description: 'The id of the chimney to be read information'
        }
      ]
    },
    {
      title: 'Add Chimney',
      type: 'send',
      method: 'AddChimney',
      permission: 'Owner of Each Factory',
      responses: [],
      parameters: [
        {
          field: 'name',
          type: 'string',
          description: 'The name of chimney'
        },
        {
          field: 'location',
          type: 'string',
          description: 'The location of chimney'
        },
        {
          field: 'detail',
          type: 'string',
          description: 'The detail of chimney'
        }
      ]
    },
    {
      title: 'Edit Chimney',
      type: 'send',
      method: 'EditChimneyInfo',
      permission: 'Owner of Each Factory',
      responses: [],
      parameters: [
        {
          field: 'chimneyId',
          type: 'number',
          description: 'The chimneyId you want to edit'
        },
        {
          field: 'name',
          type: 'string',
          description: 'The name of chimney you want to edit'
        },
        {
          field: 'location',
          type: 'string',
          description: 'The location of chimney you want to edit'
        },
        {
          field: 'detail',
          type: 'string',
          description: 'The detail of chimney you want to edit'
        }
      ]
    }
  ],
  Para: [
    {
      title: 'Add Para to Chimney',
      type: 'send',
      method: 'AddParaToChimney',
      permission: 'Owner of Each Factory',
      responses: [],
      parameters: [
        {
          field: 'chimneyId',
          type: 'number',
          description: 'The chimney ID for adding pollutant'
        },
        {
          field: 'paraN',
          type: 'number',
          description: '	The ID of the pollutant you want to add (new to create)'
        }
      ]
    },
    {
      title: 'Write name to Para',
      type: 'send',
      method: 'WriteNameToPara',
      permission: 'Owner of Each Factory',
      responses: [],
      parameters: [
        {
          field: 'chimneyId',
          type: 'number',
          description: 'The chimney ID for editing pollutant'
        },
        {
          field: 'paraN',
          type: 'number',
          description: 'The pollutant ID for editing'
        },
        {
          field: 'paraName',
          type: 'number',
          description: 'The pollutant name you want to edit'
        }
      ]
    }
  ],
  Data: [
    {
      title: 'Get Record Data',
      type: 'call',
      method: 'GetRecordData',
      permission: 'All',
      responses: [
        {
          field: 'rowNumber',
          type: 'number',
          description: '	The number of data you want to read at once'
        },
        {
          field: 'chimneyId',
          type: 'number',
          description: 'The ID of chimney you want to read'
        },
        {
          field: 'paraId',
          type: 'number',
          description: 'The ID of pollutant of chimney you want to read'
        }
      ],
      parameters: [
        {
          field: 'rowNumber',
          type: 'string',
          description: 'The pollutant name'
        },
        {
          field: 'timestamps',
          type: 'array',
          description: 'The time the data was recorded.'
        },
        {
          field: 'datas',
          type: 'array',
          description: 'The data recorded at each timestamp'
        }
      ]
    },
    {
      title: 'Record Data',
      type: 'send',
      method: 'RecordData',
      permission: 'Owner of Each Factory',
      responses: [],
      parameters: [
        {
          field: 'chimneyId',
          type: 'number',
          description: 'The ID of chimney you want to read'
        },
        {
          field: 'paraId',
          type: 'array of number',
          description: 'The array of pollutant ID to add data'
        },
        {
          field: 'data',
          type: 'array of number',
          description:
            'The Array of data to be added (must be in the same order as paraId)'
        }
      ]
    }
  ]
};
