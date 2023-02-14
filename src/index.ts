/**
 * 统一导出所有函数
 */
import * as date from '@/main/date'
import * as is from '@/main/is'
import * as store from '@/main/store'
import * as url from '@/main/url'
import * as util from '@/main/util'

module.exports = Object.assign({}, date, is, store, url, util)
