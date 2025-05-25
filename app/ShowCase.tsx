import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import {AttackColumn} from './columns/Attack';
import {DefendColumn} from './columns/Defend';
import {LevelColumn} from './columns/Level';
import {NameColumn} from './columns/Name';
import {SetnamesColumn} from './columns/Setnames';
import {RaceColumn} from './columns/Race';
import {CardProvider, TargetCardProvider} from './context';
import {AttributeColumn} from './columns/Attribute';
import {CardTypeColumn} from './columns/CardType';
import {CategoryColumn} from './columns/Category';
import type {Card} from '@/types/entity';

export default function ShowCase({target, items}: {target: Card; items: Card[]}) {
    if (!items.length) {
        return null;
    }

    return (
        <TargetCardProvider value={target}>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>名称</TableHead>
                        <TableHead>攻击力</TableHead>
                        <TableHead>防御力</TableHead>
                        <TableHead>字段</TableHead>
                        <TableHead>种族</TableHead>
                        <TableHead>属性</TableHead>
                        <TableHead>等级</TableHead>
                        <TableHead>特征</TableHead>
                        <TableHead>效果</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {items.map(monster => (
                        <CardProvider value={monster} key={monster.id}>
                            <TableRow>
                                <TableCell>
                                    <NameColumn />
                                </TableCell>
                                <TableCell>
                                    <AttackColumn />
                                </TableCell>
                                <TableCell>
                                    <DefendColumn />
                                </TableCell>
                                <TableCell>
                                    <SetnamesColumn />
                                </TableCell>
                                <TableCell>
                                    <RaceColumn />
                                </TableCell>
                                <TableCell>
                                    <AttributeColumn />
                                </TableCell>
                                <TableCell>
                                    <LevelColumn />
                                </TableCell>
                                <TableCell>
                                    <CardTypeColumn />
                                </TableCell>
                                <TableCell>
                                    <CategoryColumn />
                                </TableCell>
                            </TableRow>
                        </CardProvider>
                    ))}
                </TableBody>
            </Table>
        </TargetCardProvider>
    );
}
