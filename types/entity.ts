export interface DBCard {
    id: number;
    name: string;
    atk: number;
    def: number;
    level: number;
    ot: number;
    attribute: number;
    category: number;
    race: number;
    setcode: number;
    type: number;
}

export interface Card extends DBCard {
    setnames: string[];
    cardTypes: string[];
    categoryTypes: string[];
    raceTypes: string[];
    attributeTypes: string[];
    rawLevel: number;
}
