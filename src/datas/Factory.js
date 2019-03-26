export const datas = {
  Factory: [
    {
      title: 'Get Factory ID',
      type: 'call',
      method: 'GetFactoryId',
      permission: 'All',
      parameters: [
        {
          field: 'null',
          type: 'number',
          description: 'Id of factory owned by Address called this function'
        },
        {
          field: 'abc',
          type: 'number',
          description: 'Id of factory owned by Address called this function'
        }
      ],
      responses: [
        {
          field: 'null',
          type: 'number',
          description: 'Id of factory owned by Address called this function'
        }
      ]
    }
  ]
};
