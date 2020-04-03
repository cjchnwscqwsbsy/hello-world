;(function(){
    'use strict'
    let _this = null;
    function _getType(value){
        return Object.prototype.toString.call(value).slice(8, -1)
    }
    function _throwError(info){
        throw new Error(info)
    }
    function _createCaption(tbBox,data){
        const _caption = document.createElement('caption')
        _caption.innerHTML = data['name']
        _caption.setAttribute('class','rc-table-caption')
        tbBox.appendChild(_caption)
    }
    function _createColgroup(tbBox,headers){
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
        tbBox.appendChild(_colgroup)
    }
    function _createHeader(tbBox,headers){
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
        tbBox.appendChild(_thead)
    }
    function _createBody(tbBox,body,headers){
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
        tbBox.appendChild(_tbody);
    }
    function _createPlusOpt(tbBox){
        const _rt = document.createElement('span');
        const _lb = document.createElement('span');
        _rt.setAttribute('class','rc-table-plus rc-table-rt')
        _lb.setAttribute('class','rc-table-plus rc-table-lb')
        _rt.setAttribute('key','rc-rt')
        _lb.setAttribute('key','rc-lb')
        _rt.onclick = _plusClick
        _lb.onclick = _plusClick
        tbBox.appendChild(_rt)
        tbBox.appendChild(_lb)
    }
    function _updateTable(data){
        if(_this.tbBox){
            _this.tbBox.parentNode.removeChild(_this.tbBox)
        }
        _this.tbBox = document.createElement('table')
        _createCaption(_this.tbBox,data)
        _createColgroup(_this.tbBox,data['headers'])
        _createHeader(_this.tbBox,data['headers'])
        _createBody(_this.tbBox,data['subjects'], data['headers'])
        _createPlusOpt(_this.tbBox)
        _this.tbCta.appendChild(_this.tbBox)
        _this.rootCta.appendChild(_this.tbCta)
        _this.tbCta.setAttribute('class','rc-tbcta');
        _this.tbBox.setAttribute('class','rc-table');
        _this.tbBox.setAttribute('id','rc-my');
    }
    function addCol(){
        let head_data = _this.dataSource['headers'];
        head_data.push({
            id:_this.dataSource['headers'].length,
            name:'ssss',
            code:'sssddd'
        })
        return {..._this.dataSource,headers:head_data}
    }
    function addRow(){
        let subjects_data = _this.dataSource['subjects'];
        subjects_data.push({
            id:_this.dataSource['headers'].length,
            project:'ssss',
            rowId:'',
            value:'sssddd'
        })
        return {..._this.dataSource,subjects:subjects_data}
    }
    function _plusClick(e){
        const new_data = e.target.attributes.key.value !== 'rc-rt' ? addRow() : addCol()
        _updateTable(new_data)
    }
    function _createTable(_this, data,root){
        _this.rootCta = document.getElementById(root)
        _this.tbCta = document.createElement('div')
        _updateTable(data)
    }
    const _reportTable = {
        createTable: function(data, root){
            _this = this
            _this.dataSource = data
            _createTable(_this, data, root)
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