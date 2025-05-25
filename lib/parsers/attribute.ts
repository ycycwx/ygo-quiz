export enum CardAttribute {
    EARTH = 1, // 0x1
    WATER = 2, // 0x2
    FIRE = 4, // 0x4
    WIND = 8, // 0x8
    LIGHT = 16, // 0x10
    DARK = 32, // 0x20
    DIVINE = 64, // 0x40
}

export const CardAttributeStrings: {[key in CardAttribute]?: string} = {
    [CardAttribute.EARTH]: '地',
    [CardAttribute.WATER]: '水',
    [CardAttribute.FIRE]: '炎',
    [CardAttribute.WIND]: '风',
    [CardAttribute.LIGHT]: '光',
    [CardAttribute.DARK]: '暗',
    [CardAttribute.DIVINE]: '神',
};

export function parseAttribute(attributeValue: number): string[] {
    const attributes: string[] = [];

    for (const key in CardAttribute) {
        if (isNaN(Number(key))) {
            // 处理枚举成员的字符串键，例如 "EARTH"
            const flagValue = CardAttribute[key as keyof typeof CardAttribute]; // 获取枚举值
            if (typeof flagValue === 'number' && (attributeValue & flagValue) === flagValue) {
                const attributeString = CardAttributeStrings[flagValue as CardAttribute];
                if (attributeString) {
                    attributes.push(attributeString);
                }
            }
        }
    }

    return attributes;
}
