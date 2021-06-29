export class Movie {
    constructor(title, rating, avalibleAt, description, id) {
        this.Title = title;
        this.Rating = rating;
        this.AvailableAt = avalibleAt;
        this.Description = description;
        this.Id = id || "movieId"+Date.now()
    }
}

