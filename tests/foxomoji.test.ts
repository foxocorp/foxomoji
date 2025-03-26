import { Foxomoji } from '../src/foxomoji';

const foxomoji = new Foxomoji();

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
