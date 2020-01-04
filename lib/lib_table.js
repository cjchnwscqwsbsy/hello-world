function dataTyped(value) {
    return Object.prototype.toString.call(value).slice(8, -1);
}

function throwError() {
    throw new Error("columns is not an array!");
}

var ro_table = (function () {
    function _createHeader(columns) {
        if (dataTyped(columns) !== 'Array') {
            throwError();
        }
        var tr = document.createElement('tr');
        for (var col = 0; col < columns.length; col ++) {
            var th = document.createElement('th');
            th.innerHTML = columns[col];
            tr.appendChild(th);
        }
        return tr;
    }
    function _createLeftFixed(data) {
        var colTemp = null;
        var leftFixed = document.createElement('div');
        leftFixed.setAttribute('class', 'left-box');
        var table = document.createElement('table');
        for (var i = 0; i < data.length; i ++) {
            colTemp = Object.keys(data[i])[0];
            var _tr = document.createElement('tr');
            if (i === 0) {
                var _trPre = document.createElement('tr');
                var _th = document.createElement('th');
                _th.innerHTML = colTemp;
                _trPre.appendChild(_th);
                table.appendChild(_trPre);
            }
            var _td = document.createElement('td');
            _td.innerHTML = data[i][colTemp];
            _tr.appendChild(_td);
            table.appendChild(_tr);
        }
        leftFixed.append(table);
        return leftFixed;
    }
    function _createHeaderFixed(columns) {
        if (dataTyped(columns) !== 'Array') {
            throwError();
        }
        var headerCta = document.createElement('div');
        headerCta.setAttribute('class', 'header-box');
        var tr = document.createElement('tr');
        for (var col = 0; col < columns.length; col ++) {
            var th = document.createElement('th');
            th.innerHTML = columns[col];
            tr.appendChild(th);
        }
        headerCta.appendChild(tr);
        return headerCta;
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
        tableCta.appendChild(_createHeaderFixed(columns));
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
