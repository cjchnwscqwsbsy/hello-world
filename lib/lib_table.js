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
    function _createLeftFixed(data, columns) {
        var colTemp = null;
        var table = document.createElement('table');
        for (var i = 0; i < data.length; i ++) {
            colTemp = Object.keys(data[i])[0];
            var _tr = document.createElement('tr');
            var _th = document.createElement('th');
            if (i === 0) {
                _th.innerHTML = colTemp;
                _tr.appendChild(_th);
            }
            _th.innerHTML = data[i][colTemp];
            _tr.appendChild(_th);
        }
        table.appendChild(_tr);
        return table;
    }
    function _createTable(data,columns) {
        var root = document.getElementById('root');
        var tableCta = document.createElement('div');
        var tableBox = document.createElement('div');
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
        tableBox.setAttribute('class', 'table-box');
        tableCta.setAttribute('class', 'table-cta');
        tableBox.appendChild(table);
        tableCta.appendChild(tableBox);
        var leftCol = _createLeftFixed(data,columns);
        tableCta.appendChild(leftCol);
        root.appendChild(tableCta);
    }
    return {
        createTable: function (data,columns) {
            _createTable(data,columns)
        }
    };
})();

window.ro_table = ro_table;
