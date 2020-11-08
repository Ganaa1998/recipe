import uniqid from 'uniqid';

export default class List {
    constructor() {
        this.items = [];
    }

    deleteItem(id) {
        // id гэдэг ID-тай орцын Index хайж олох
        const index = this.items.findIndex(el => el.id === id);
        // Ул Index дээр элемэнтийг массиваас устгах
        this.items.splice(index, 1);
        // this.items
    }

    addItem(item) {
        let newItem = {
            id: uniqid(),
            item
        }
        this.items.push(newItem);

        return newItem;
    }
}