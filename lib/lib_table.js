var ro_table = (function () {
    function _createHeader(columns) {
        if (Object.prototype.toString.call(columns).slice(8, -1) !== 'Array') {
            throw new Error("columns is not an array!");
        }
        var tr = document.createElement('tr');
        for (var col = 0; col < columns.length; col ++) {
            var th = document.createElement('th');
            th.innerHTML = columns[col];
            tr.appendChild(th);
        }
        return tr;
    }
    function _createTable(data,columns) {
        var root = document.getElementById('root');
        var table = document.createElement('table');
        table.appendChild(_createHeader(columns));
        for (var i = 0; i < data.length; i ++) {
            var tr = document.createElement('tr');
            for (var j = 0; j < Object.keys(data[i]).length; j ++) {
                var td = document.createElement('td');
                td.innerHTML = data[i][Object.keys(data[i])[j]];
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        root.appendChild(table);
    }
    return {
        createTable: function (data,columns) {
            _createTable(data,columns)
        }
    };
})();

window.ro_table = ro_table;
