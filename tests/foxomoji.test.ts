import { Foxomoji } from '../src/foxomoji';

const foxomoji = new Foxomoji();

test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});

test('gets emoji-160 by code', () => {
    const emoji = foxomoji.getEmojiByCode('1f600');
    expect(emoji).toEqual({
        code: '1f600',
        char: '😀',
        name: 'grinning face',
        category: 'Smileys & Emotion (face-smiling)',
        group: 'Smileys & Emotion',
        subgroup: 'face-smiling',
    });
});

test('gets emoji-64 by code', () => {
    const emoji = foxomoji.getEmojiByCode('1f600');
    expect(emoji).toEqual({
        code: '1f600',
        char: '😀',
        name: 'grinning face',
        category: 'Smileys & Emotion (face-smiling)',
        group: 'Smileys & Emotion',
        subgroup: 'face-smiling',
    });
});