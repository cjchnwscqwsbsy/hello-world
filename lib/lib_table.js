function dataTyped(value) {
    return Object.prototype.toString.call(value).slice(8, -1);
}

function throwError() {
    throw new Error("columns is not an array!");
}

const ro_table = (function () {
    function _createHeader(columns) {
        if (dataTyped(columns) !== 'Array') {
            throwError();
        }
        const tr = document.createElement('tr');
        for (let col = 0; col < columns.length; col ++) {
            const th = document.createElement('th');
            th.innerHTML = columns[col];
            tr.appendChild(th);
        }
        return tr;
    }
    function _createLeftFixed(data) {
        let colTemp = null;
        const leftFixed = document.createElement('div');
        leftFixed.setAttribute('class', 'left-box');
        const table = document.createElement('table');
        for (let i = 0; i < data.length; i ++) {
            colTemp = Object.keys(data[i])[0];
            const _tr = document.createElement('tr');
            if (i === 0) {
                const _trPre = document.createElement('tr');
                const _th = document.createElement('th');
                _th.innerHTML = colTemp;
                _trPre.appendChild(_th);
                table.appendChild(_trPre);
            }
            const _td = document.createElement('td');
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
        const headerCta = document.createElement('div');
        const headerScroll = document.createElement('div');
        const headerInner = document.createElement('div');
        headerCta.setAttribute('class', 'header-box');
        const table = document.createElement('table');
        const tr = document.createElement('tr');
        for (let col = 0; col < columns.length; col ++) {
            const th = document.createElement('th');
            th.innerHTML = columns[col];
            tr.appendChild(th);
        }
        table.appendChild(tr);
        headerCta.appendChild(table);
        return headerCta;
    }
    function scrollListen(dom) {
        console.log('screenLeft: ',dom.scrollLeft);
        // console.log('screenTop: ',dom.scrollTop)
        const headerBox = document.querySelector('.header-box');
        headerBox.scrollLeft = dom.scrollLeft;
    }
    function _createTable(data,columns) {
        const root = document.getElementById('root');
        const tableCta = document.createElement('div');
        const tableBox = document.createElement('div');
        const table = document.createElement('table');
        table.appendChild(_createHeader(columns));
        for (let i = 0; i < data.length; i ++) {
            const tr = document.createElement('tr');
            for (let j = 0; j < Object.keys(data[i]).length; j ++) {
                const td = document.createElement('td');
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
        const leftCol = _createLeftFixed(data,columns);
        tableCta.appendChild(leftCol);
        root.appendChild(tableCta);
        tableBox.addEventListener('scroll', () => scrollListen(tableBox));
    }
    return {
        createTable: function (data,columns) {
            _createTable(data,columns)
        }
    };
})();

window.ro_table = ro_table;
