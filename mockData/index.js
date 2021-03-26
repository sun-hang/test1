const mockjs = require('mockjs');
const fs = require('fs');
const path = require('path');
let tableData = mockjs.mock({
    "data|300-400": [{
        "userId|+1": 21000,
        avatar: mockjs.Random.image('80x80', '#894FC4', '#FFF', 'png', 'user'),
        nickName: '@cname',
        regOrigin: "phone",
        "phone|13000000000-18099999999": 1,
        status: "正常",
        regTime: '@date("yyyy-MM-dd")' + " " + '@time',
        operation: "更多",
        "sex|1": ['男', '女', '其他']
    }]
})

fs.writeFile(path.resolve(__dirname, './tableData.json'), JSON.stringify(tableData), (err, data) => {
    console.log(err, data)
})