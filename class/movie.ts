type Genre = 'fantasic' | 'action' | 'fantasy' | 'adventure';

export default class Movie {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly year: number,
        readonly country: string,
        readonly slogan: string,
        readonly jenre: Genre[],
        readonly durationMinutes: number,
    ){}
}
