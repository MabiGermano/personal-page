class RepositoryService {
    constructor() {
        console.log('instanciado')
    }

    async getGithubRepositories() {
        var myInit = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }

        const response = await fetch('https://api.github.com/users/mabigermano/repos', myInit)
        const repositories = await response.json()

        return repositories.map((repo) => {
            return this.buildRepository(repo)
        })
    }

    buildRepository(githubRepository) {
        // const { name, description, fork, html_url, private } = githubRepository
        if (githubRepository.private == false) {
            return new Repository(
                githubRepository.name, 
                githubRepository.description, 
                githubRepository.html_url, 
                githubRepository.fork
                )
        }
    }
}