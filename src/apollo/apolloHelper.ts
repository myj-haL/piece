export function updateApolloItem<Item, Key extends { toString(): string }>(list: Item[], id: Key, values: any) {
    if (!list) return list;
    const array = [...list];
    const idx = array?.findIndex((n: any) => n.id.toString() === id.toString());
    if (idx >= 0) {
        array[idx] = { ...array[idx], ...values, updatedAt: Date.now() };
    }
    return array;
}
