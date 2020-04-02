var dataSource = 
{
    "id": "LRB_Model",
    "name": "利润表",
    "type": "LRB_Model",
    "headers": [
      {
        "id": "1",
        "name": "项目",
        "code": "project"
      },
      {
        "id": "2",
        "name": "行次",
        "code": "rowId"
      }
    ],
    "subjects": [{
        "id": "LRB1",
        "project": "一、营业收入",
        "rowId": "1",
        "value": ["",""]
      }]
};

//原数据，根节点id
_reportTable.createTable(dataSource, 'root');
