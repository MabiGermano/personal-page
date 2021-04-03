class HomeView extends View {

    constructor(element) {
        super(element);
    }

    template() {
        return `
        <section id=presentation>
            <div>
                <h1>Hi! I am <br />
                    <span>Mabi Germano<span></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu felis suscipit, accumsan augue
                    vitae,
                    cursus lorem. Proin at urna pulvinar, tristique nisi sit amet, aliquet risus. Quisque gravida
                    imperdiet
                    eros, eget vestibulum dolor rutrum pulvinar. Curabitur eu risus massa. Proin convallis arcu turpis,
                    eu
                    aliquet ex eleifend sit amet. Fusce lectus arcu, aliquam non lorem sed, congue viverra justo. Aenean
                    sollicitudin sollicitudin ex, vel vehicula purus gravida at. Cras at risus dictum, malesuada quam
                    id,
                    aliquam tellus. Cras non turpis accumsan massa laoreet pulvinar nec laoreet augue.
                </p>
                <button>
                    Contact Me
                </button>
            </div>
            <div>
                <img src="image-mabi.png" alt="Foto Mabi">
            </div>
            </section>`
    }

}