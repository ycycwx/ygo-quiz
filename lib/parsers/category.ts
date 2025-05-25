// @see https://github.com/AlphaKretin/ygo-data/blob/b4e368ca8bd0037980d8812204bad1ea07e4be89/lib/module/enums.ts#L119-L152
export enum CardCategory {
    DESTROY_SPELL_TRAP = 0x1,
    DESTROY_MONSTER = 0x2,
    BANISH = 0x4,
    GRAVEYARD = 0x8,
    TO_HAND = 0x10,
    TO_DECK = 0x20,
    DISCARD = 0x40,
    MILL = 0x80,
    DRAW = 0x100,
    SEARCH = 0x200,
    RECOVER_CARD = 0x400,
    BATTLE_POSITION = 0x800,
    CHANGE_CONTROL = 0x1000,
    CHANGE_ATK_DEF = 0x2000,
    PIERCING = 0x4000,
    MULTIPLE_ATTACK = 0x8000,
    LIMIT_ATTACK = 0x10000,
    DIRECT_ATTACK = 0x20000,
    SPECIAL_SUMMON = 0x40000,
    TOKEN = 0x80000,
    TYPE_RELATED = 0x100000,
    PROPERTY_RELATED = 0x200000,
    DAMAGE_LP = 0x400000,
    RECOVER_LP = 0x800000,
    DESTROY = 0x1000000,
    TARGET = 0x2000000,
    COUNTER = 0x4000000,
    GAMBLE = 0x8000000,
    FUSION_RELATED = 0x10000000,
    TUNER_RELATED = 0x20000000,
    XYZ_RELATED = 0x40000000,
    NEGATE = 0x80000000,
}

export const CardEffectCategoryStrings: {[key in CardCategory]?: string} = {
    [CardCategory.DESTROY_SPELL_TRAP]: '破坏魔法陷阱',
    [CardCategory.DESTROY_MONSTER]: '破坏怪兽',
    [CardCategory.BANISH]: '除外',
    [CardCategory.GRAVEYARD]: '送去墓地',
    [CardCategory.TO_HAND]: '回到手牌',
    [CardCategory.TO_DECK]: '回到卡组',
    [CardCategory.DISCARD]: '丢弃手牌',
    [CardCategory.MILL]: '从卡组送墓',
    [CardCategory.DRAW]: '抽卡',
    [CardCategory.SEARCH]: '检索',
    [CardCategory.RECOVER_CARD]: '回收卡片',
    [CardCategory.BATTLE_POSITION]: '改变战斗表示',
    [CardCategory.CHANGE_CONTROL]: '改变控制权',
    [CardCategory.CHANGE_ATK_DEF]: '改变攻击/防御力',
    [CardCategory.PIERCING]: '贯穿伤害',
    [CardCategory.MULTIPLE_ATTACK]: '多次攻击',
    [CardCategory.LIMIT_ATTACK]: '限制攻击',
    [CardCategory.DIRECT_ATTACK]: '直接攻击',
    [CardCategory.SPECIAL_SUMMON]: '特殊召唤',
    [CardCategory.TOKEN]: '衍生物',
    [CardCategory.TYPE_RELATED]: '种族相关',
    [CardCategory.PROPERTY_RELATED]: '属性相关',
    [CardCategory.DAMAGE_LP]: '伤害LP',
    [CardCategory.RECOVER_LP]: '回复LP',
    [CardCategory.DESTROY]: '破坏',
    [CardCategory.TARGET]: '指定目标',
    [CardCategory.COUNTER]: '指示物',
    [CardCategory.GAMBLE]: '赌博',
    [CardCategory.FUSION_RELATED]: '融合相关',
    [CardCategory.TUNER_RELATED]: '调整相关',
    [CardCategory.XYZ_RELATED]: '超量相关',
    [CardCategory.NEGATE]: '无效',
};

export function parseEffectCategories(categoryValue: number): string[] {
    const identifiedCategories: string[] = [];

    // Iterate over all defined keys in the CardEffectCategory enum.
    for (const key in CardCategory) {
        // We are interested in the string keys of the enum (e.g., "DESTROY"),
        // not the reverse-mapped numeric keys that TypeScript enums can sometimes have.
        if (isNaN(Number(key))) {
            const flagValue = CardCategory[key as keyof typeof CardCategory];

            // Ensure that flagValue is a number (which it should be for enum members)
            // and check if the bit for this flag is set in the categoryValue.
            if (typeof flagValue === 'number' && (categoryValue & flagValue) === flagValue) {
                // Try to get the human-readable string for this category.
                const categoryString = CardEffectCategoryStrings[flagValue as CardCategory];
                if (categoryString) {
                    identifiedCategories.push(categoryString);
                }
            }
        }
    }

    return identifiedCategories;
}
