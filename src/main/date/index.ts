/**
 * @param dateStr 字符串格式为 2017-02-10 18:20:30
 * 注意：此处月、日、时分秒、必须为2位数字，否则报错
 * @returns 时间戳
 */
export function getTimestamp(dateStr: string): number {
  return Date.parse(new Date(dateStr).toString())
}

/**
 * @param date Date类型 new Date()
 * @param fmt 格式化类型 yyyy-MM-dd hh:mm:ss
 * @returns 时间字符串 2022-03-29 17:22:30
 */
export function format(date: Date, fmt: string): string {
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        // eslint-disable-next-line
        // @ts-ignore
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return fmt
}
