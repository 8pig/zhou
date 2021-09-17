(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{187:function(a,t,e){"use strict";e.r(t);var r=e(0),_=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"content"},[e("h2",{attrs:{id:"基本sql语句集合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本sql语句集合","aria-hidden":"true"}},[a._v("#")]),a._v(" 基本Sql语句集合")]),a._v(" "),e("h4",{attrs:{id:"_1、去重复"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、去重复","aria-hidden":"true"}},[a._v("#")]),a._v(" 1、去重复")]),a._v(" "),e("p",[e("code",[a._v("SELECT DISTINCT 列名 FROM 表名")])]),a._v(" "),e("h4",{attrs:{id:"_2、where子句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、where子句","aria-hidden":"true"}},[a._v("#")]),a._v(" 2、WHERE子句")]),a._v(" "),e("blockquote",[e("p",[a._v("SELECT 列 FROM 表名 WHERE 列 运算符(<>不等于、>、<、= ) 值")])]),a._v(" "),e("h4",{attrs:{id:"_3、order-by-排序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、order-by-排序","aria-hidden":"true"}},[a._v("#")]),a._v(" 3、ORDER BY 排序")]),a._v(" "),e("blockquote",[e("p",[a._v("顺序排列：SELECT 列名 FROM 表名 ORDER BY 列名\n逆序排列：SELECT 列名 FROM 表名 ORDER BY 列名  DESC")])]),a._v(" "),e("h4",{attrs:{id:"_4、insert-插入数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、insert-插入数据","aria-hidden":"true"}},[a._v("#")]),a._v(" 4、INSERT 插入数据")]),a._v(" "),e("blockquote",[e("p",[a._v("INSERT INTO 表名(列名) VALUES(列名对应值)")])]),a._v(" "),e("h4",{attrs:{id:"_5、update-更新数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、update-更新数据","aria-hidden":"true"}},[a._v("#")]),a._v(" 5、UPDATE 更新数据")]),a._v(" "),e("blockquote",[e("p",[a._v("UPDATE 表名 SET 列名='值' WHERE 主键ID='值'、")])]),a._v(" "),e("h4",{attrs:{id:"_6、-delete-删除数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、-delete-删除数据","aria-hidden":"true"}},[a._v("#")]),a._v(" 6、 DELETE 删除数据")]),a._v(" "),e("blockquote",[e("p",[a._v("DELETE FROM 表名 WHERE 列名='值'")])]),a._v(" "),e("h4",{attrs:{id:"_7、-top子句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7、-top子句","aria-hidden":"true"}},[a._v("#")]),a._v(" 7、 TOP子句")]),a._v(" "),e("blockquote",[e("p",[a._v("SELECT TOP 数字/百分比(PERCENT) 列名 FROM 表名")])]),a._v(" "),e("h4",{attrs:{id:"_8、-like-模糊查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8、-like-模糊查询","aria-hidden":"true"}},[a._v("#")]),a._v(" 8、 LIKE 模糊查询")]),a._v(" "),e("blockquote",[e("p",[a._v("包含： SELECT * FROM 表名 WHERE 列名 LIKE '值%' 或 '%值' 或 '%值%'")]),a._v(" "),e("p",[a._v("不包含：SELECT * FROM 表名 WHERE 列名 NOT LIKE '值%' 或 '%值'  或 '%值%'")])]),a._v(" "),e("h4",{attrs:{id:"_9、-in-操作符-允许我们在-where-子句中规定多个值。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9、-in-操作符-允许我们在-where-子句中规定多个值。","aria-hidden":"true"}},[a._v("#")]),a._v(" 9、 IN 操作符 允许我们在 WHERE 子句中规定多个值。")]),a._v(" "),e("blockquote",[e("p",[a._v("SELECT * FROM 表名 WHERE 列名 IN ('值1'，'值2'，...)")])]),a._v(" "),e("h4",{attrs:{id:"_10、-between-操作符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10、-between-操作符","aria-hidden":"true"}},[a._v("#")]),a._v(" 10、 BETWEEN  操作符")]),a._v(" "),e("blockquote",[e("p",[a._v("在某某之间： SELECT * FROM 表名 WHERE 列名 BETWEEN '值1'  AND '值2'")]),a._v(" "),e("p",[a._v("不在某某之间： SELECT * FROM 表名 WHERE 列名  NOT  BETWEEN '值1'  AND '值2'")])]),a._v(" "),e("h4",{attrs:{id:"_11、-as-别名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11、-as-别名","aria-hidden":"true"}},[a._v("#")]),a._v(" 11、  AS 别名")]),a._v(" "),e("blockquote",[e("p",[a._v("SELECT 别名.列名 FROM 表名 AS 别名")])]),a._v(" "),e("h4",{attrs:{id:"_12、多表联查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12、多表联查","aria-hidden":"true"}},[a._v("#")]),a._v(" 12、多表联查")]),a._v(" "),e("blockquote",[e("p",[a._v("内联查询  JOIN： SELECT 表1.列名,表2.列名 FROM 表1 JOIN 表2 WHERE 表1.ID=表2.ID")]),a._v(" "),e("p",[a._v("内联查询  INNER JOIN： SELECT 表1.列名,表2.列名 FROM 表1 JOIN 表2 ON 表1.ID=表2.ID")]),a._v(" "),e("p",[a._v("左查询  LEFT JOIN： SELECT 表1.列名,表2.列名 FROM 表1 LEFT JOIN 表2 ON 表1.ID=表2.ID")]),a._v(" "),e("p",[a._v("左查询  RIGHT JOIN： SELECT 表1.列名,表2.列名 FROM 表1 RIGHT JOIN 表2 ON 表1.ID=表2.ID")])]),a._v(" "),e("h4",{attrs:{id:"_13、-select-into-语句从一个表中选取数据，然后把数据插入另一个表中。用于备份数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13、-select-into-语句从一个表中选取数据，然后把数据插入另一个表中。用于备份数据","aria-hidden":"true"}},[a._v("#")]),a._v(" 13、 SELECT INTO 语句从一个表中选取数据，然后把数据插入另一个表中。用于备份数据")]),a._v(" "),e("blockquote",[e("p",[a._v("插入同一个库下的表： SELECT * INTO 新表  FROM 旧表")]),a._v(" "),e("p",[a._v("插入不同库下的表： SELECT * INTO 新表   IN  '新库.mdb'  FROM 旧表")])]),a._v(" "),e("h4",{attrs:{id:"_14、-create-database-创建数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_14、-create-database-创建数据库","aria-hidden":"true"}},[a._v("#")]),a._v(" 14、 CREATE  DATABASE  创建数据库")]),a._v(" "),e("pre",[e("code",[a._v("CREATE DATABASE  库名\n")])]),a._v(" "),e("h4",{attrs:{id:"_15、-create-table-创建新表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_15、-create-table-创建新表","aria-hidden":"true"}},[a._v("#")]),a._v(" 15、  CREATE TABLE  创建新表")]),a._v(" "),e("pre",[e("code",[a._v("CREATE TABLE 表名(\n\n列名1  数据类型,\n\n列名2  数据类型,\n\n列名3  数据类型\n")])]),a._v(" "),e("p",[a._v(")")]),a._v(" "),e("h4",{attrs:{id:"_16、-新建表时添加约束"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16、-新建表时添加约束","aria-hidden":"true"}},[a._v("#")]),a._v(" 16、  新建表时添加约束")]),a._v(" "),e("pre",[e("code",[a._v("CREATE TABLE 表名(\n\n列名1  数据类型 NOT NULL PRIMARY KEY,  //主键\n\n列名2  数据类型 NOT NULL,\n\n列名3  数据类型\n")])]),a._v(" "),e("p",[a._v(")")]),a._v(" "),e("blockquote",[e("p",[a._v("示例demo https://blog.csdn.net/zhimeng567/article/details/78380288")])])])}],!1,null,null,null);t.default=_.exports}}]);