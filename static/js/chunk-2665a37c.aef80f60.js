(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2665a37c"],{1005:function(e,t,n){},3043:function(e,t,n){"use strict";var a=n("7ca9"),i=n.n(a);i.a},"4f8d":function(e,t,n){},"5d10":function(e,t,n){},"63e3":function(e,t,n){"use strict";var a=n("1005"),i=n.n(a);i.a},7173:function(e,t,n){"use strict";var a=n("5d10"),i=n.n(a);i.a},"7a83":function(e,t,n){},"7ca9":function(e,t,n){},8754:function(e,t,n){"use strict";var a=n("7a83"),i=n.n(a);i.a},"8c81":function(e,t,n){"use strict";var a=n("4f8d"),i=n.n(a);i.a},fd5b:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question-list-mgmt"},[n("flex-table",{attrs:{operations:e.operations,filters:e.filters,loading:e.listLoading,"table-data":e.list,pagination:e.pagination},on:{operate:e.operate}},[n("el-table-column",{attrs:{label:"问题题目",prop:"title"}}),n("el-table-column",{attrs:{align:"center",label:"问题类型",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.getType(t.$index%3))+" ")]}}])}),n("el-table-column",{attrs:{align:"center",prop:"created_at",label:"创建日期",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("i",{staticClass:"el-icon-time"}),n("span",[e._v(e._s(t.row.display_time))])]}}])}),n("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){t.stopPropagation(),e.showDrawer=!0}}},[e._v("查看")]),n("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(n){return n.stopPropagation(),e.remove(t.row.id)}}},[e._v("删除")])]}}])})],1),n("drawer",{attrs:{show:e.showDrawer,mode:"tab"},on:{"update:show":e.handleUpdateShowDrawer},model:{value:e.curTabName,callback:function(t){e.curTabName=t},expression:"curTabName"}},[n("el-tab-pane",{attrs:{lazy:"",label:"基本信息",name:"first"}},[n("question-base-info")],1)],1)],1)},i=[],o=n("ad8f"),l=n("11d7"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-drawer",{staticClass:"drawer",attrs:{"before-close":e.handleClose,"show-close":!1,size:"500px",visible:e.show,"with-header":!1},on:{"update:visible":e.handleUpdateVisible}},["tab"===e.mode?n("el-tabs",{attrs:{type:"border-card",value:e.value},on:{"tab-click":e.tabClick}},[e._t("default")],2):e._t("default")],2)},r=[],c=(n("b0c0"),{name:"Drawer",components:{},props:{value:{type:String,required:!0},show:{type:Boolean,default:!1},mode:{type:String,default:""}},data:function(){return{}},computed:{},watch:{},mounted:function(){},methods:{handleUpdateVisible:function(e){this.$emit("update:show",e)},handleClose:function(e){this.$listeners["before-close"]?this.$emit("before-close",e):e()},tabClick:function(e){this.$emit("input",e.name)}}}),u=c,d=(n("63e3"),n("2877")),p=Object(d["a"])(u,s,r,!1,null,null,null),f=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("flex-frame",{staticClass:"question-base-info"},[n("div",{staticClass:"operation-wrapper",attrs:{slot:"header"},slot:"header"},[n("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("保存")])],1),n("el-form",{ref:"form",staticClass:"base-info-body",attrs:{size:"small","label-width":"80px",model:e.formModel,rules:e.rules}},[n("el-form-item",{attrs:{label:"题目类型",prop:"type"}},[n("el-select",{attrs:{placeholder:"请选择题目类型"},model:{value:e.formModel.type,callback:function(t){e.$set(e.formModel,"type",t)},expression:"formModel.type"}},e._l(e.typeOptions,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),n("el-form-item",{attrs:{label:"问题描述",prop:"content"}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10},placeholder:"请输入问题描述"},model:{value:e.formModel.content,callback:function(t){e.$set(e.formModel,"content",t)},expression:"formModel.content"}})],1),n("el-form-item",{attrs:{label:"问题选项"}},[n("question-selection")],1)],1)],1)},b=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex-frame"},[e.$slots.header?n("div",{staticClass:"flex-frame__header"},[e._t("header")],2):e._e(),n("div",{staticClass:"flex-frame__content"},[e._t("default")],2),e.$slots.footer?n("div",{staticClass:"flex-frame__footer"},[e._t("footer")],2):e._e()])},v=[],_={name:"FlexFrame"},y=_,w=(n("7173"),Object(d["a"])(y,h,v,!1,null,"ef874c2c",null)),x=w.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question-selection"},[n("el-radio-group",{model:{value:e.radioGroupValue,callback:function(t){e.radioGroupValue=t},expression:"radioGroupValue"}},e._l(e.selectionItemList,(function(t,a){return n("el-radio",{key:a,staticClass:"selection-item",attrs:{border:"",label:a}},[n("div",{staticClass:"radio-content"},[n("div",{staticClass:"selection-prepend"},[n("span",{staticClass:"selection-index"},[e._v(e._s(e._f("indexToLetter")(a)))])]),n("div",{staticClass:"selection-content"},[t.isEdit?n("el-input",{attrs:{type:"textarea",autosize:{minRows:1,maxRows:5}},model:{value:t.content,callback:function(n){e.$set(t,"content",n)},expression:"item.content"}}):n("span",[e._v(e._s(t.content))])],1),n("div",{staticClass:"selection-append"},[t.isEdit?e._e():n("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(e){t.isEdit=!0}}}),t.isEdit?n("el-button",{attrs:{type:"success",icon:"el-icon-check",circle:""},on:{click:function(e){t.isEdit=!1}}}):e._e(),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""}})],1)])])})),1),n("el-checkbox-group",{model:{value:e.checkBoxGroup,callback:function(t){e.checkBoxGroup=t},expression:"checkBoxGroup"}},e._l(e.selectionItemList,(function(t,a){return n("div",{key:a,staticClass:"selection-item"},[n("div",{staticClass:"selection-prepend"},[n("el-checkbox",{attrs:{label:a}},[e._v(e._s(""))]),n("span",{staticClass:"selection-index"},[e._v(e._s(e._f("indexToLetter")(a)))])],1),n("div",{staticClass:"selection-content"},[t.isEdit?n("el-input",{model:{value:t.content,callback:function(n){e.$set(t,"content",n)},expression:"item.content"}}):n("span",[e._v(e._s(t.content))])],1),n("div",{staticClass:"selection-append"},[t.isEdit?e._e():n("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(e){t.isEdit=!0}}}),t.isEdit?n("el-button",{attrs:{type:"success",icon:"el-icon-check",circle:""},on:{click:function(e){t.isEdit=!1}}}):e._e(),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""}})],1)])})),0)],1)},k=[],C={name:"QuestionSeletion",filters:{indexToLetter:function(e){return"ABCDEFGHIJKLMN"[e]}},components:{},props:{type:{type:String,default:"single"}},data:function(){return{radioGroupValue:0,checkBoxGroup:[0],selectionItemList:[{content:"今天是星期一",isEdit:!1,isTrue:!1},{content:"今天是星期二",isEdit:!1,isTrue:!1},{content:"今天是星期三",isEdit:!1,isTrue:!1},{content:"今天是星期四",isEdit:!1,isTrue:!1},{content:"今天是星期五",isEdit:!1,isTrue:!1}]}},computed:{maxSelection:function(){var e={single:1,multi:this.selectionItemList.length,trueorfalse:1};return e[this.type]}},watch:{},mounted:function(){},methods:{}},E=C,T=(n("3043"),Object(d["a"])(E,g,k,!1,null,null,null)),$=T.exports,D={name:"QuestionBaseInfo",components:{FlexFrame:x,QuestionSelection:$},data:function(){return{formModel:{type:"single"},rules:{},typeOptions:[{label:"单选题",value:"single"},{label:"多选题",value:"multi"},{label:"判断题",value:"trueorfalse"}]}},computed:{},watch:{},mounted:function(){},methods:{}},L=D,S=(n("8c81"),Object(d["a"])(L,m,b,!1,null,"ee0c4cb2",null)),z=S.exports,G={filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},components:{FlexTable:l["a"],Drawer:f,QuestionBaseInfo:z},data:function(){return{list:null,listLoading:!0,showDrawer:!1,curTabName:"first",operations:[{label:"新建",name:"create",type:"primary"},{label:"刷新",name:"refresh",type:"primary"},{label:"导入",name:"import",type:"primary"}],filters:[{type:"select",label:"题目类型",name:"type",options:[{label:"单选题",value:"single"},{label:"多选题",value:"multi"},{label:"判断题",value:"trueorfalse"}],value:"single"},{type:"daterange",label:"创建日期",name:"createDate",value:[]},{type:"input",label:"",placeholder:"请输入题库名称",name:"searchValue",value:""}],pagination:{pageSize:20,currentPage:1,total:0}}},computed:{},watch:{},created:function(){this.fetchData()},mounted:function(){},methods:{getType:function(e){return["单选题","多选题","判断题"][e]},operate:function(e){this[e]()},create:function(){},refresh:function(){this.fetchData()},import:function(){},goTo:function(e){this.$router.push("/question-list-mgmt/list/".concat(e))},remove:function(e){},handleUpdateShowDrawer:function(e){this.curTabName="first",this.showDrawer=e},fetchData:function(){var e=this;this.listLoading=!0,Object(o["a"])().then((function(t){e.list=t.data.items,e.pagination.total=t.data.total,e.listLoading=!1}))}}},M=G,B=(n("8754"),Object(d["a"])(M,a,i,!1,null,"a5bbe2f8",null));t["default"]=B.exports}}]);