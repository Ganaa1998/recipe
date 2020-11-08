export default class Likes {
    constructor() {

        this.readDataFromLocalStorage();

        if (!this.likes) this.likes = [];

    }

    addLike(id, title, publisher, img) {
        const like = { id, title, publisher, img };

        this.likes.push(like);
        //storage руу хадгална
        this.saveDataToLocalStorage();
        return like;
    }

    deleteLike(id) {
        // id гэдэг ID-тай like-ыг Index хайж олох
        const index = this.likes.findIndex(el => el.id === id);

        // Ул Index дээр элемэнтийг массиваас устгах
        this.likes.splice(index, 1);

        //storage руу хадгална
        this.saveDataToLocalStorage();

    }

    isLiked(id) {
        // if (this.likes.findIndex(el => el.id === id) === 1) return false;
        // else return true
        return this.likes.findIndex(el => el.id === id) !== -1;
    }

    getNumberOfLikes() {
        return this.likes.length;
    }

    saveDataToLocalStorage() {
        localStorage.setItem('likes', JSON.stringify(this.likes));
    }
    readDataFromLocalStorage() {
        this.likes = JSON.parse(localStorage.getItem('likes'));
    }
}