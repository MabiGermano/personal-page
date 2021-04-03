class MainController {
    constructor() {
        let docSelect = document.querySelector.bind(document)
        this._presententionArea = docSelect("main")
        this._view;
        this.showHome();
    }

    showHome() {
        this._view = new HomeView(this._presententionArea)
        this._view.update();
    }

    showSkills() {
        this._view = new SkillsView(this._presententionArea)
        const skills = new SkillsService().getSkills()
        this._view.update(skills)
    }

    async showPortfolio() {
        this._view = new PortfolioView(this._presententionArea)
        const repositryService = new RepositoryService()
        const repos = await repositryService.getGithubRepositories()
        console.log(repos)
        this._view.update(repos)
    }
}