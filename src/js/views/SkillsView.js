class SkillsView extends View {
    constructor(element) {
        super(element)
    }

    template(skills) {
        console.log(skills)
        return `
        <section id="skills">
        <h1>
            Technical Skills
        </h1>
        <h3 class="subtitle"> 
            Here are all my GitHub repositories, if you are interested to know more, please feel free to check it out
        </h3>
        ${skills.map((skill) => {
            return `<div>
                        <div>
                            <span>${skill.name}</span>
                            <span>${skill.xp}%</span>
                        </div>
                        <progress value="${skill.xp}" max="100"></progress>
                    </div>
                    `
                }).join('')}

        </section>
        `
    }
}