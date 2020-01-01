var ro_table = (function () {
    function _createTable(data) {
        var root = document.getElementById('root');
        var table = document.createElement('table');
        table.setAttribute('css', 'border:1px solid #ccc');
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
        createTable: function (data) {
            _createTable(data)
        }
    };
})();

window.ro_table = ro_table;
