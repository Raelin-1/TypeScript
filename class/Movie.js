"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Movie {
    constructor(id, name, year, country, slogan, jenre, durationMinutes) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.country = country;
        this.slogan = slogan;
        this.jenre = jenre;
        this.durationMinutes = durationMinutes;
    }
}
exports.default = Movie;