import emojiData from 'emoji.json';

export type Emoji = {
    code: string;
    char: string;
    name: string;
    category: string;
    group: string;
    subgroup: string;
};

export class Foxomoji {
    private readonly emojis: Emoji[];

    constructor() {
        this.emojis = (emojiData as any[]).map((emoji: any) => ({
            code: emoji.codes.toLowerCase(),
            char: emoji.char,
            name: emoji.name,
            category: emoji.category,
            group: emoji.group,
            subgroup: emoji.subgroup,
        }));
    }

    getEmojiByCode(code: string): Emoji | undefined {
        return this.emojis.find((emoji) => emoji.code.toLowerCase() === code.toLowerCase());
    }

    getAllEmojis(): Emoji[] {
        return this.emojis;
    }
}