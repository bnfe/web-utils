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
