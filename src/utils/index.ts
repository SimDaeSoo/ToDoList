export function isSameRoute(from: string, to): boolean {
    return from.toLowerCase().replace(/\//g, '') === to.toLowerCase().replace(/\//g, '');
}