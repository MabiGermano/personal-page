class SkillsService {
    constructor() {
        this._skills = new Array(
            new Skill("JavaScript", 95),
            new Skill("Java", 90),
            new Skill("Kotlin", 65),
            new Skill("SpringBoot", 85),
            new Skill("NodeJS", 90),
            new Skill("React", 85),
            new Skill("SQL", 80),
            new Skill("PHP", 70),
            new Skill("Infraestrutura de Cloud", 85),
            new Skill("API Rest", 98),
            new Skill("Scrum", 98),
            new Skill("Git", 97)
        )
    }

    getSkills() {
        return this._skills
    }

}