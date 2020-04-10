const operators = [
    {code:'DFT',value:'', bool:false},
    {code:'PLUS',value:'+', bool:false},
    {code:'MINUS',value:'-', bool:false},
    {code:'STAR',value:'*', bool:false},
    {code:'DIV',value:'/', bool:false},
    {code:'ASSIGN',value:'=', bool:false},
    {code:'NE',value:'!=', bool:false},
    {code:'GE',value:'>=', bool:false},
    {code:'LE',value:'<=', bool:false},
    {code:'LT',value:'<', bool:false},
    {code:'GT',value:'>', bool:false},
    {code:'POWER',value:'^', bool:false},
    {code:'SYMBOLIC_AND',value:'&&', bool:false},
    {code:'SYMBOLIC_OR',value:'||', bool:false},
    {code:'ABS',value:'绝对值', bool:false},   // |~|
    {code:'MOD',value:'%', bool:false}
];
const cascader = [
    {
        label:'',
        value:'DFT',
        bool:false,
    },
    {
        value:'LATEST',
        label:'最新',
        bool:false,
        children:[{
            label:'',
            value:'DFT',
            bool:false,
        },{
            value:'MONTHLY_REPORT',
            label:'月报',
            bool:false,
        },{
            value:'QUARTERLY_REPORT',
            label:'季报',
            bool:false,
        },{
            value:'SEMI_YEAR_REPORT',
            label:'半年报',
            bool:false,
        },{
            value:'YEAR_REPORT',
            label:'年报',
            bool:false,
        }]
    },
    {
    value:'LASTYEAR',
    label:'上年同期',
    bool:false,
    children:[{
        label:'',
        value:'DFT',
        bool:false,
    },{
        value:'MONTHLY_REPORT',
        label:'月报',
        bool:false,
    },{
        value:'QUARTERLY_REPORT',
        label:'季报',
        bool:false,
    },{
        value:'SEMI_YEAR_REPORT',
        label:'半年报',
        bool:false,
    },{
        value:'YEAR_REPORT',
        label:'年报',
        bool:false,
    }]},
    {
    value:'LAST_YEAR_END',
    label:'上年年末',
    bool:false,
    children:[{
        label:'',
        value:'DFT',
        bool:false,
    },{
        value:'MONTHLY_REPORT',
        label:'月报',
        bool:false,
    },{
        value:'QUARTERLY_REPORT',
        label:'季报',
        bool:false,
    },{
        value:'SEMI_YEAR_REPORT',
        label:'半年报',
        bool:false,
    },{
        value:'YEAR_REPORT',
        label:'年报',
        bool:false,
    }]},
    {
    value:'THE_YEAR_BEFORE',
    label:'前年同期',
    bool:false,
    children:[{
        label:'',
        value:'DFT',
        bool:false,
    },{
        value:'MONTHLY_REPORT',
        label:'月报',
        bool:false,
    },{
        value:'QUARTERLY_REPORT',
        label:'季报',
        bool:false,
    },{
        value:'SEMI_YEAR_REPORT',
        label:'半年报',
        bool:false,
    },{
        value:'YEAR_REPORT',
        label:'年报',
        bool:false,
    }]},
    {
    value:'YEAR_BEFORE_END',
    label:'前年年末',
    bool:false,
    children:[{
        label:'',
        value:'DFT',
        bool:false,
    },{
        value:'MONTHLY_REPORT',
        label:'月报',
        bool:false,
    },{
        value:'QUARTERLY_REPORT',
        label:'季报',
        bool:false,
    },{
        value:'SEMI_YEAR_REPORT',
        label:'半年报',
        bool:false,
    },{
        value:'YEAR_REPORT',
        label:'年报',
        bool:false,
    }]}
];
const mainsel = [
    {fnastatDefId: "DFT"},
    {fnastatDefName: "资产负债表", fnastatDefId: "FS000BalanceSheet", bool: false},
    {fnastatDefName: "现金流量表", fnastatDefId: "FS000CashFlow", bool: false},
    {fnastatDefName: "财务指标", fnastatDefId: "FS000Indicator", bool: false},
    {fnastatDefName: "利润表", fnastatDefId: "FS000Profit", bool: false}
];
const assistsel = [];


