

export class Gift {
    constructor(data) {
        this.message = data.tag
        this.url = data.url
        this.opened = data.opened
        this.creatorId = data.creatorId
    }
}