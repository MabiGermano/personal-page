class Repository {
    constructor(name, description, url, colaboration) {
        this._name = name
        this._description = description = description
        this._url = url
        this._colaboration = colaboration
    }
    
    get name() {
        return this._name
    }
    
    set name (name) {
        this._name = name
    }
    
    get description() {
        return this._description
    }
    
    set description (description) {
        this._description= description
    }

    get url() {
        return this._url
    }
    
    set url (url) {
        this._url = url
    }

    get colaboration() {
        return this._colaboration
    }
    
    set colaboration (colaboration) {
        this._colaboration = colaboration
    }
}