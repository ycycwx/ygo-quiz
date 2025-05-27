import {useState} from 'react';
import useSWR from 'swr';
import {CommandItem, CommandList, Command} from '@/components/ui/command';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {Input} from '@/components/ui/input';
import {useDebouncedValue} from '@/hooks/useDebouncedValue';
import {fetcher} from './fetcher';
import type {Card} from '@/types/entity';

export const Search = ({disabled = [], onSelect}: {disabled?: number[]; onSelect?: (item: Card) => void}) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const [inputValue, setInputValue] = useState('');
    const debouncedInputValue = useDebouncedValue(inputValue, 300);
    const {data} = useSWR<Card[]>(
        debouncedInputValue ? `/api/cards?name=${debouncedInputValue}` : null,
        fetcher,
    );
    return (
        <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger asChild>
                <Input
                    type="text"
                    className="w-full"
                    placeholder="请输入卡片名称"
                    value={inputValue}
                    onChange={e => {
                        setInputValue(e.target.value);
                        setIsPopoverOpen(e.target.value.trim() !== '');
                    }}
                />
            </PopoverTrigger>
            {data ? (
                <PopoverContent
                    className="w-[var(--radix-popover-trigger-width)] p-0"
                    onOpenAutoFocus={e => e.preventDefault()}
                >
                    <Command>
                        <CommandList>
                            {data.map(item => (
                                <CommandItem
                                    key={item.id}
                                    value={String(item.id)}
                                    disabled={disabled.includes(item.id)}
                                    className="cursor-pointer"
                                    onSelect={() => {
                                        setInputValue('');
                                        setIsPopoverOpen(false);
                                        onSelect?.(item);
                                    }}
                                >
                                    {item.name}
                                </CommandItem>
                            ))}
                        </CommandList>
                    </Command>
                </PopoverContent>
            ) : null}
        </Popover>
    );
};
