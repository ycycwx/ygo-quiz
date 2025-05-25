export enum CardType {
    MONSTER = 1, // 0x1
    SPELL = 2, // 0x2
    TRAP = 4, // 0x4
    NORMAL = 16, // 0x10
    EFFECT = 32, // 0x20
    FUSION = 64, // 0x40
    RITUAL = 128, // 0x80
    TRAPMONSTER = 256, // 0x100
    SPIRIT = 512, // 0x200
    UNION = 1024, // 0x400
    DUAL = 2048, // 0x800 (Gemini)
    TUNER = 4096, // 0x1000
    SYNCHRO = 8192, // 0x2000
    TOKEN = 16384, // 0x4000
    QUICKPLAY = 65536, // 0x10000 (For Spell)
    CONTINUOUS = 131072, // 0x20000 (For Spell/Trap)
    EQUIP = 262144, // 0x40000 (For Spell)
    FIELD = 524288, // 0x80000 (For Spell)
    COUNTER = 1048576, // 0x100000 (For Trap)
    FLIP = 2097152, // 0x200000 (For Monster)
    TOON = 4194304, // 0x400000 (For Monster)
    XYZ = 8388608, // 0x800000 (For Monster)
    PENDULUM = 16777216, // 0x1000000 (For Monster)
    SPSUMMON = 33554432, // 0x2000000 (Special Summon Monster / Cannot be Normal Summoned)
    LINK = 67108864, // 0x4000000 (For Monster)
}

export const CardTypeStrings: {[key in CardType]?: string} = {
    [CardType.MONSTER]: '怪兽',
    [CardType.SPELL]: '魔法',
    [CardType.TRAP]: '陷阱',
    [CardType.NORMAL]: '通常',
    [CardType.EFFECT]: '效果',
    [CardType.FUSION]: '融合',
    [CardType.RITUAL]: '仪式',
    [CardType.TRAPMONSTER]: '陷阱怪兽',
    [CardType.SPIRIT]: '灵魂',
    [CardType.UNION]: '同盟',
    [CardType.DUAL]: '二重',
    [CardType.TUNER]: '调整',
    [CardType.SYNCHRO]: '同调',
    [CardType.TOKEN]: '衍生物',
    [CardType.QUICKPLAY]: '速攻',
    [CardType.CONTINUOUS]: '永续',
    [CardType.EQUIP]: '装备',
    [CardType.FIELD]: '场地',
    [CardType.COUNTER]: '反击',
    [CardType.FLIP]: '反转',
    [CardType.TOON]: '卡通',
    [CardType.XYZ]: '超量',
    [CardType.PENDULUM]: '灵摆',
    [CardType.SPSUMMON]: '特殊召唤',
    [CardType.LINK]: '连接',
};

const typeOrder: (keyof typeof CardTypeStrings)[] = [
    CardType.MONSTER,
    CardType.SPELL,
    CardType.TRAP,
    CardType.NORMAL,
    CardType.EFFECT,
    CardType.FUSION,
    CardType.RITUAL,
    CardType.SYNCHRO,
    CardType.XYZ,
    CardType.PENDULUM,
    CardType.LINK,
    CardType.TUNER,
    CardType.FLIP,
    CardType.SPIRIT,
    CardType.UNION,
    CardType.DUAL,
    CardType.TOON,
    CardType.TOKEN,
    CardType.TRAPMONSTER,
    CardType.QUICKPLAY,
    CardType.CONTINUOUS,
    CardType.EQUIP,
    CardType.FIELD,
    CardType.COUNTER,
    CardType.SPSUMMON,
];

export function parseCardType(typeValue: number): string[] {
    const types: string[] = [];

    for (const key in CardType) {
        if (isNaN(Number(key))) {
            const flagValue = CardType[key as keyof typeof CardType];
            if (typeof flagValue === 'number' && (typeValue & flagValue) === flagValue) {
                const typeString = CardTypeStrings[flagValue as CardType];
                if (typeString) {
                    types.push(typeString);
                }
            }
        }
    }

    return types.toSorted((a, b) => {
        const aIndex = typeOrder.findIndex(typeKey => CardTypeStrings[typeKey] === a);
        const bIndex = typeOrder.findIndex(typeKey => CardTypeStrings[typeKey] === b);

        if (aIndex === -1 && bIndex === -1) {
            return a.localeCompare(b);
        }
        if (aIndex === -1) {
            return 1;
        }
        if (bIndex === -1) {
            return -1;
        }

        return aIndex - bIndex;
    });
}

export const isLinkMonster = (type: number) => {
    return (type & CardType.MONSTER) === CardType.MONSTER && (type & CardType.LINK) === CardType.LINK;
};
