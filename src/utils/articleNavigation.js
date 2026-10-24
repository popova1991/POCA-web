export function getArticleNeighbors(order, currentKey) {
    const index = order.indexOf(currentKey);

    if (index === -1) {
        return { previousKey: null, nextKey: null };
    }

    return {
        previousKey: index > 0 ? order[index - 1] : null,
        nextKey: index < order.length - 1 ? order[index + 1] : null,
    };
}
