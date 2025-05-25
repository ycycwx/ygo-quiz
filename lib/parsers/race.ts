import {CardType} from './type';

export enum CardRace {
    WARRIOR = 1,
    SPELLCASTER = 2,
    FAIRY = 4,
    FIEND = 8,
    ZOMBIE = 16,
    MACHINE = 32,
    AQUA = 64,
    PYRO = 128,
    ROCK = 256,
    WINDBEAST = 512,
    PLANT = 1024,
    INSECT = 2048,
    THUNDER = 4096,
    DRAGON = 8192,
    BEAST = 16384,
    BEASTWARRIOR = 32768,
    DINOSAUR = 65536,
    FISH = 131072,
    SEASERPENT = 262144,
    REPTILE = 524288,
    PSYCHIC = 1048576,
    DIVINE = 2097152,
    CREATORGOD = 4194304,
    WYRM = 8388608,
    CYBERSE = 16777216,
    ILLUSION = 33554432,
}

export const CardRaceStrings: {[key in CardRace]?: string} = {
    [CardRace.WARRIOR]: '战士族',
    [CardRace.SPELLCASTER]: '魔法师族',
    [CardRace.FAIRY]: '天使族',
    [CardRace.FIEND]: '恶魔族',
    [CardRace.ZOMBIE]: '不死族',
    [CardRace.MACHINE]: '机械族',
    [CardRace.AQUA]: '水族',
    [CardRace.PYRO]: '炎族',
    [CardRace.ROCK]: '岩石族',
    [CardRace.WINDBEAST]: '鸟兽族',
    [CardRace.PLANT]: '植物族',
    [CardRace.INSECT]: '昆虫族',
    [CardRace.THUNDER]: '雷族',
    [CardRace.DRAGON]: '龙族',
    [CardRace.BEAST]: '兽族',
    [CardRace.BEASTWARRIOR]: '兽战士族',
    [CardRace.DINOSAUR]: '恐龙族',
    [CardRace.FISH]: '鱼族',
    [CardRace.SEASERPENT]: '海龙族',
    [CardRace.REPTILE]: '爬虫类族',
    [CardRace.PSYCHIC]: '念动力族',
    [CardRace.DIVINE]: '幻神兽族',
    [CardRace.CREATORGOD]: '创造神族',
    [CardRace.WYRM]: '幻龙族',
    [CardRace.CYBERSE]: '电子界族',
    [CardRace.ILLUSION]: '幻想魔族',
};

export function parseRace(
    raceValue: number,
    cardTypeValue: number,
): string[] {
    const races: string[] = [];

    const isMonster = (cardTypeValue & CardType.MONSTER) === CardType.MONSTER;
    if (isMonster) {
        for (const key in CardRace) {
            if (isNaN(Number(key))) {
                const flagValue = CardRace[key as keyof typeof CardRace];
                if (typeof flagValue === 'number' && (raceValue & flagValue) === flagValue) {
                    const raceString = CardRaceStrings[flagValue as CardRace];
                    if (raceString) {
                        if (!races.includes(raceString)) {
                            races.push(raceString);
                        }
                    }
                    else if (CardRace[flagValue as CardRace]) {
                        const enumKey = CardRace[flagValue as CardRace];
                        if (!races.includes(enumKey)) {
                            races.push(enumKey);
                        }
                    }
                }
            }
        }
    }

    return races;
}
