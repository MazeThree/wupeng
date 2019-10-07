(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba064b36"],{2882:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"rolesControl"},[r("el-card",[r("el-button",{attrs:{type:"primary"},on:{click:e.addRolesTab}},[e._v("添加权限")]),r("el-table",{staticClass:"mtop30",staticStyle:{width:"100%"},attrs:{data:e.rolesTab,stripe:"",border:""}},[r("el-table-column",{attrs:{prop:"key",label:"身份"}}),r("el-table-column",{attrs:{prop:"description",label:"说明"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.editRoles(t.$index,t.row)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"warning",disabled:e.isAdmin(t.row)},on:{click:function(r){return e.deleteRoles(t.$index)}}},[e._v("删除")])]}}])})],1)],1),r("el-dialog",{staticClass:"diaForm",attrs:{title:"权限编辑",visible:e.diaIsShow},on:{"update:visible":function(t){e.diaIsShow=t}}},[r("el-form",{ref:"rolesForm",attrs:{model:e.formData,rules:e.rules,"label-width":"140px"}},[r("el-form-item",{attrs:{label:"身份",prop:"key"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入要添加的身份类别"},model:{value:e.formData.key,callback:function(t){e.$set(e.formData,"key",t)},expression:"formData.key"}})],1),r("el-form-item",{attrs:{label:"说明",prop:"description"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入相关说明"},model:{value:e.formData.description,callback:function(t){e.$set(e.formData,"description",t)},expression:"formData.description"}})],1),r("el-form-item",{attrs:{label:"菜单"}},[r("el-tree",{ref:"tree",attrs:{data:e.treeData,"node-key":"name",props:e.defaultProps,"show-checkbox":"","check-strictly":!1}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.changeRoles("rolesForm",e.editType)}}},[e._v("确认")]),r("el-button",{on:{click:function(t){e.diaIsShow=!1}}},[e._v("取消")])],1)],1)],1)],1)},n=[],i=(r("2338"),r("fb37"),r("f301"),r("df99"),r("b04f")),o=(r("7364"),r("0eb5"),r("a4c5"),r("f763"),r("35fb")),s=r("365c");function l(){var e="/getRoles";return s["a"].get(e)}var c=r("a18c");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(r,!0).forEach(function(t){Object(i["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var f={data:function(){return{rolesTab:[],diaIsShow:!1,formData:{},editType:"update",rules:{key:[{required:!0,message:"请输入要添加的身份类别",trigger:"blur"}],description:[{required:!0,message:"请输入相关说明",trigger:"blur"}]},editIndex:0,allRoute:[].concat(Object(o["a"])(c["b"]),Object(o["a"])(c["a"])),treeData:[],defaultProps:{label:"label",children:"children"}}},created:function(){this._getAllRolse(),this.treeData=this.getTreeData(this.allRoute)},methods:{_getAllRolse:function(){var e=this;l().then(function(t){e.rolesTab=t.data.allRoles}).catch(function(t){e.$message.error(t)})},isAdmin:function(e){return"admin"===e.key||"user"===e.key},deleteRoles:function(e){var t=this;this.$confirm("此操作将永久删除相关数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.rolesTab.splice(e,1),t.$message({type:"success",message:"删除成功!"})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},addRolesTab:function(){var e=this;this.diaIsShow=!0,this.editType="add",this.formData={},this.$nextTick(function(){e.$refs.rolesForm.clearValidate(),e.$refs.tree.setCheckedKeys([])})},editRoles:function(e,t){var r=this;this.diaIsShow=!0,this.editIndex=e,this.editType="update",this.formData=Object.assign({},this.formData,{key:t.key,description:t.description}),this.$nextTick(function(){r.$refs.rolesForm.clearValidate(),r.$refs.tree.setCheckedKeys(t.pages)})},changeRoles:function(e,t){var r=this;this.$refs[e].validate(function(e){if(e){var a=r.$refs.tree.getCheckedKeys();if("update"===t){var n=r.editIndex;r.rolesTab[n].key=r.formData.key,r.rolesTab[n].description=r.formData.description,r.rolesTab[n].pages=a,r.$notify({title:"成功",message:"权限修改成功",type:"success"})}else if("add"===t){var i={};i.key=r.formData.key,i.description=r.formData.description,i.pages=a,r.rolesTab.push(i),r.$notify({title:"成功",message:"权限添加成功",type:"success"})}r.diaIsShow=!1}})},getTreeData:function(e){var t=[],r=!0,a=!1,n=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var s=i.value;if(!s.hidden){var l=this.hasOnlyChild(s.children,s);l&&!l.children&&(s=l);var c={label:s.meta.title,name:s.name};s.children&&(c.children=this.getTreeData(s.children)),t.push(c)}}}catch(d){a=!0,n=d}finally{try{r||null==o.return||o.return()}finally{if(a)throw n}}return t},hasOnlyChild:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=e.filter(function(e){return!e.hidden});return 1!==r.length||t.meta?0===r.length&&t:r[0]},forSearchArr:function(e,t){var r=[],a=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done);a=!0){var l=o.value,c=u({},l);t.includes(c.name)&&(c.children&&(c.children=this.forSearchArr(c.children,t)),r.push(c))}}catch(d){n=!0,i=d}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}return r}}},h=f,p=(r("5811"),r("f8b8"),r("6691")),b=Object(p["a"])(h,a,n,!1,null,"068a3956",null);t["default"]=b.exports},5811:function(e,t,r){"use strict";var a=r("e174"),n=r.n(a);n.a},ccb5:function(e,t,r){},e174:function(e,t,r){},f8b8:function(e,t,r){"use strict";var a=r("ccb5"),n=r.n(a);n.a}}]);