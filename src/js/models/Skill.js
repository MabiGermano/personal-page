class Skill {
    constructor(name, xp) {
        this._name = name
        this._xp = xp
    }

    get name() {
        return this._name
    }

    set name(name) {
        this._name = name
    }

    get xp () {
        return this._xp
    }

    set xp (xp) {
        this._xp = xp
    }
}