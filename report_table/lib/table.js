;(function(){
    'use strict'
    let _this = null
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
            const _input = document.createElement('input')
            _input.setAttribute('value',headers[col]['name'])
            _input.setAttribute('id','th'+randomString(30))
            _th.appendChild(_input)
            _th.setAttribute('class','rc-table-cell')
            _input.onchange = _handleCellChange
            _tr.appendChild(_th)
        }
        _thead.appendChild(_tr)
        _thead.setAttribute('class','rc-table-head')
        tbBox.appendChild(_thead)
    }
    function _handleCellChange(e){
        console.log(e)
    }
    function _createBody(tbBox,body,headers){
        if(_getType(body) !== 'Array'){
            _throwError('datasource is not an array!')
        }
        const _tbody = document.createElement('tbody')
        if(body.length){
            for(let row = 0; row < body.length; row ++){
                const _tr = document.createElement('tr')
                for(let col = 0; col < headers.length; col ++){
                    const _td = document.createElement('td')
                    const _input = document.createElement('input')
                    if(headers[col]['code'] === 'rowId'){
                        _td.innerText = body[row][headers[col]['code']]
                    }else if(headers[col]['code'] === 'project'){
                        _input.setAttribute('value',body[row][headers[col]['code']])
                        _td.appendChild(_input)
                    }else{
                        _input.setAttribute('value',body[row]['value'][col - 2][headers[col]['code']])
                        _td.appendChild(_input)
                    }
                    _input.setAttribute('id','td'+randomString(30))
                    _input.onchange = _handleCellChange
                    _td.setAttribute('class','rc-table-cell')
                    _tr.appendChild(_td)
                }
                _tr.setAttribute('class','rc-table-row')
                _tbody.appendChild(_tr)
            }
        }else{
            const _tr = document.createElement('tr')
            const _td = document.createElement('td')
            const _div = document.createElement('div')
            _div.innerHTML = 'no data'
            _div.setAttribute('class','rc-table-cell-empty')
            _td.setAttribute('colspan', headers.length)
            _td.setAttribute('class','rc-table-cell')
            _td.appendChild(_div)
            _tr.appendChild(_td)
            _tbody.appendChild(_tr)
        }
        _tbody.setAttribute('class','rc-table-body')
        tbBox.appendChild(_tbody)
    }
    function _createPlusOpt(tbBox){
        const _rt = document.createElement('span')
        const _lb = document.createElement('span')
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
        _this.tbCta.setAttribute('class','rc-tbcta')
        _this.tbBox.setAttribute('class','rc-table')
    }
    function randomString(len){
        const lengt = len || 32
        const charts = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz'
        const maxPos = charts.length
        let pwd = ''
        for(let i = 0; i < lengt; i ++){
            pwd += charts.charAt(Math.floor(Math.random() * maxPos))
        }
        return pwd
    }
    function addCol(){
        let subjects_data = _this.dataSource['subjects'],
            head_data = _this.dataSource['headers'],
            new_col = {id:_this.dataSource['headers'].length,name:'',code:randomString(13)}
        head_data.push(new_col)
        subjects_data = subjects_data.map((sud) => {
            let temp = sud.value.concat({[new_col['code']]:''})
            return {
                ...sud,
                value:temp
            }
        })
        return {..._this.dataSource,headers:head_data,subjects:subjects_data}
    }
    function addRow(){
        let subjects_data = _this.dataSource['subjects'],
            head_data = _this.dataSource['headers'],
            new_cols = head_data.filter(filt => filt.code !== 'rowId' && filt.code !== 'project')
                .map((item) => {
                    return {[item['code']]:''}
                })
        subjects_data.push({
            id:_this.dataSource['headers'].length,
            project:'',
            rowId:_this.dataSource['subjects'].length + 1,
            value:new_cols
        })
        return {..._this.dataSource,subjects:subjects_data}
    }
    function _plusClick(e){
        _this.dataSource = e.target.attributes.key.value !== 'rc-rt' ? addRow() : addCol()
        console.log('_this.dataSource: ', _this.dataSource)
        _updateTable(_this.dataSource)
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
    }
    if(typeof module !== 'undefined' && module.exports){
        module.exports = ro_table
    } else if(typeof define === 'function'){
        define(function(){
            return ro_table
        })
    } else {
        const _global = (function(){ return this || (0, eval)('this') }())
        !('_reportTable' in _global) && (_global._reportTable = _reportTable)
    }
}())