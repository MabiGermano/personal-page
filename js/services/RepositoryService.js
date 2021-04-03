class RepositoryService {
    constructor() {
        console.log('instanciado');
    }

    async getGithubRepositories() {
        var myInit = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        };

        const response = await fetch('https://api.github.com/users/mabigermano/repos', myInit)
        const repositories = await response.json()

        return repositories.filter((repo) => {
            return repo.private == false
        })


    }
}