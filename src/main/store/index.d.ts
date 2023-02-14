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
