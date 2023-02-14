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
