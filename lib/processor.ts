import {parseAttribute} from './parsers/attribute';
import {parseEffectCategories} from './parsers/category';
import {parseRace} from './parsers/race';
import {getSetnamesBySetcode} from './parsers/setcodes';
import {parseCardType} from './parsers/type';
import type {Card, DBCard} from '@/types/entity';

export function processData(item: DBCard): Card {
    const setnames = getSetnamesBySetcode(item.setcode);
    const cardTypes = parseCardType(item.type);
    const raceTypes = parseRace(item.race, item.type);
    const attributeTypes = parseAttribute(item.attribute);
    const categoryTypes = parseEffectCategories(item.category);
    return {
        ...item,
        setnames,
        cardTypes,
        raceTypes,
        attributeTypes,
        categoryTypes,
    };
}
