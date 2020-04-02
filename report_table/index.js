var dataSource = 
{
    "id": "LRB_Model",
    "name": "利润表",
    "type": "LRB_Model",
    "headers": [
      {
        "id": "1",
        "name": "项目"
      },
      {
        "id": "2",
        "name": "行次"
      }
    ],
    "subjects": []
};

//原数据，根节点id
_reportTable.createTable(dataSource, 'root');
