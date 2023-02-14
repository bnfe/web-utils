### 前端常用工具函数

#### 1. 安装包使用方式

> 安装

```shell
# npm
npm install @bnfe/web-utils -S

# yarn
yarn add @bnfe/web-utils -S
```

> ESM 导入使用

```js
// 示例1
import butils from '@bnfe/web-utils'
console.log(butils.random(1, 10))

// 示例2
import { random, uuid } from '@bnfe/web-utils'
console.log(random(1, 10), uuid())
```

> RequireJS 导入使用

```js
// 示例1
const butils = require('@bnfe/web-utils')
console.log(butils.random(1, 10))

// 示例2
const { random, uuid } = require('@bnfe/web-utils')
console.log(random(1, 10), uuid())
```

#### 2. 网页 script 直接引入

直接拷贝 dist 下的 web-utils.js 到项目里面，可直接引用

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <script src="/dist/web-utils.js"></script>
    <script>
      console.log(butils.random(1, 10))
    </script>
  </body>
</html>
```

#### 3.工具函数

```js
/**
 * @param dateStr 字符串格式为 2017-02-10 18:20:30
 * 注意：此处月、日、时分秒、必须为2位数字，否则报错
 * @returns 时间戳
 */
export declare function getTimestamp(dateStr: string): number;
/**
 * @param date Date类型 new Date()
 * @param fmt 格式化类型 yyyy-MM-dd hh:mm:ss
 * @returns 时间字符串 2022-03-29 17:22:30
 */
export declare function format(date: Date, fmt: string): string;
/**
 * 判断是否为数组
 * @param input 任意值对象
 * @returns boolean
 */
export declare function isArray(input: any): boolean;
/**
 * 判断是否为空
 * @param input 任意值对象
 * @returns boolean
 */
export declare function isEmpty(input: any): boolean;
/**
 * 判断是否为数字
 * @param input 任意值对象
 * @returns boolean
 */
export declare function isNumber(input: any): boolean;
/**
 * 存储localStorage
 * @param name key值
 * @param content value值
 */
export declare function setLocal(name: string, content: any): void;
/**
 * 获取存储localStorage
 * @param name key值
 * @return string
 */
export declare function getLocal(name: string): string | null;
/**
 * 删除localStorage
 * @param name key值
 */
export declare function removeLocal(name: string): void;
/**
 * 存储sessionStorage
 * @param name key值
 * @param content value值
 */
export declare function setSession(name: string, content: any): void;
/**
 * 获取localStorage
 * @param name key值
 * @return string
 */
export declare function getSession(name: string): string | null;
/**
 * 删除localStorage
 * @param name key值
 */
export declare function removeSession(name: string): void;
/**
 * 根据key获取浏览器url参数
 * @param name 参数key
 * @param name window.location.href ： ?title=你好url&test=true
 * @returns string | null 参数值
 */
export declare function getUrlVal(name: string, url?: string): string | null;
/**
 * 转换浏览器url参数为json对象
 * @param url window.location.href ： ?title=你好url&test=true
 * @returns JSON | null 参数值
 */
export declare function parseUrlValToJson(url: string): JSON | null;
/**
 * 生成数字范围内的随机数
 * @param min 最小数字
 * @param max 最大数字
 * @returns number类型
 */
export declare function random(min: number, max: number): number;
/**
 * 生成uuid
 * @returns string 类型 df2367fb-1d9d-4bc5-8bbc-55a1166a2e5d
 */
export declare function uuid(): string;
```
