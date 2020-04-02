;(function(){
    'use strict'
    function _getType(value){
        return Object.prototype.toString.call(value).slice(8, -1)
    }
    function _throwError(info){
        throw new Error(info)
    }
    function _createColgroup(headers){
        if(_getType(headers) !== 'Array'){
            _throwError('table headers is not an array!')
        }
        const _colgroup = document.createElement('colgroup')
        for(let col = 0; col < headers.length; col ++){
            const _col = document.createElement('col')
            if(headers[col]['id'] !== '1'){
                _col.style = 'width:50px'
            }else{
                _col.style = 'width:200px'
            }
            _colgroup.appendChild(_col)
        }
        return _colgroup
    }
    function _createHeader(headers){
        if(_getType(headers) !== 'Array'){
            _throwError('table headers is not an array!')
        }
        const _thead = document.createElement('thead')
        const _tr = document.createElement('tr')
        for(let col = 0; col < headers.length; col ++){
            const _th = document.createElement('th')
            _th.innerText = headers[col]['name']
            _th.setAttribute('class','rc-table-cell')
            _tr.appendChild(_th)
        }
        _thead.appendChild(_tr)
        _thead.setAttribute('class','rc-table-head')
        return _thead
    }
    function _createBody(body,headers){
        if(_getType(body) !== 'Array'){
            _throwError('datasource is not an array!')
        }
        const _tbody = document.createElement('tbody')
        for(let row = 0; row < body.length; row ++){
            const _tr = document.createElement('tr')
            for(let col = 0; col < headers.length; col ++){
                const _td = document.createElement('td')
                _td.innerText = body[row][headers[col]['code']]
                _td.setAttribute('class','rc-table-cell')
                _tr.appendChild(_td)
            }
            _tr.setAttribute('class','rc-table-row')
            _tbody.appendChild(_tr);
        }
        _tbody.setAttribute('class','rc-table-body');
        return _tbody;
    }
    function _createTable(data,root){
        const rootCta = document.getElementById(root)
        const tbCta = document.createElement('div')
        const tbBox = document.createElement('table')
        tbBox.appendChild(_createColgroup(data['headers']))
        tbBox.appendChild(_createHeader(data['headers']))
        tbBox.appendChild(_createBody(data['subjects'], data['headers']))
        tbCta.appendChild(tbBox)
        rootCta.appendChild(tbCta)
        tbCta.setAttribute('class','rc-tbcta');
        tbBox.setAttribute('class','rc-table');
    }
    const _reportTable = {
        createTable: function(data, root){
            _createTable(data, root)
        }
    };
    if(typeof module !== 'undefined' && module.exports){
        module.exports = ro_table
    } else if(typeof define === 'function'){
        define(function(){
            return ro_table;
        })
    } else {
        const _global = (function(){ return this || (0, eval)('this'); }())
        !('_reportTable' in _global) && (_global._reportTable = _reportTable)
    }
}())