class PortfolioView extends View {
    constructor(element) {
        super(element)
    }

    template(repos) {
        return `
        <section id="portfolio">
        <div id="title-container">
        <h1>
            Portfolio
        </h1>
        <h3 class="subtitle"> 
            Here are all my GitHub repositories, if you are interested to know more, please feel free to check it out
        </h3>
        </div>
        ${repos.map((repo) => {
            return `
                <div class="card">
                    <a href="${repo.url}">
                        <div id="main-container">
                            <div>
                                <img src="img/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png" alt="Github logo">
                                <h3>
                                    ${repo.name}
                                </h3>
                            </div>
                            <p>
                                ${repo.description}
                            </p>
                        </div>
                        <div id="button-container">
                            <button>
                                See more
                            </button>
                        </div>
                    </a>
                </div>
            `
        }).join('')}
        
    </section>
        `
    }
}