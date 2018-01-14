class ApiPath {
    constructor() {

    }
    getInstance() {
        if (!ApiPath.instance) {
            ApiPath.instance = new ApiPath()
        }
    }
}