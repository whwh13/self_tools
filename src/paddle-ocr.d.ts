declare module '@paddlejs-models/ocr' {
    // 初始化函数
    export function init(): Promise<void>;

    // 识别函数
    // options 是可选配置，image 可以是 img 元素或 canvas 元素
    export function recognize(
        image: HTMLImageElement | HTMLCanvasElement, 
        options?: any
    ): Promise<{
        text: string | string[]; // 结果可能是字符串，也可能是数组
        confidence?: number;
        [key: string]: any;      // 允许其他未知属性
    }>;
}