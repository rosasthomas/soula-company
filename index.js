const WHOWEARE = `
    <div class="whoWeAre">
        <p>
            Soula surgió como una idea con el propósito de ayudar a las personas que comparten una fascinación por la jardinería pero, su estilo de vida o entorno se los impide. Con esto en mente presentamos la maceta de autorriego, producto que les brinda la oportunidad  de mantener una planta sin estar en un constante control de riego. También decidimos agregar el servicio de té, un complemento esencial y una alternativa a bebidas de grandes consumos actualmente, como el café.
            <br/>
            <br/>
            Decidimos enfocarnos en la comercialización del té debido a una preocupación por el creciente consumo de bebidas conocidas, de fácil  acceso y con daños colaterales. Las fundadoras coincidimos en que su consumo es una experiencia de relajación y disfrute, por lo que mantenemos un gusto personal por el producto. Soula otorga la oportunidad de no solo consumir una infusión, sino de ser los creadores de sus propias bebidas, en la comodidad de su departamento. Aprender a conocer su cuerpo y sobre los simples sabores que pueden beneficiarlo.
        </p>
    </div>    
`
const PRODUCTS = `
    <div class="products">
    <div class="section top">
        <div>
            <img src="./img/muestra.jpg">
        </div>
        <div class="colors">
            <p>Macetas de autorriego</p>
            <p>Disponibles en:</p>
            <img src="./img/colors.jpg">
        </div>
    </div>
    <div class="section bot">
        <p>Semillas disponibles</p>
        <div class="list">
            <ul>
                <li>Amaranto</li>
                <li>Anís</li>
                <li>Caléndula</li>
                <li>Camelia</li>
                <li>Sinesis</li>
                <li>Cedrón</li>
                <li>Chai</li>
                <li>Clavel</li>
                <li>Clavel Blanco</li>
            </ul>
            <ul>
                <li>Crisantemo</li>
                <li>Jazmín</li>
                <li>Jengibre</li>
                <li>Lavanda</li>
                <li>Limón</li>
                <li>Lirio</li>
                <li>Manzanilla</li>
                <li>Menta</li>
                <li>Rooibos</li>
            </ul>
        </div>
    </div>
    </div>   
`

const INFUSIONS = `
    <div class="infusions">
        <p>Las infusiones no sólo deleitan nuestro paladar con un agradable aroma y sabor, sino que también  contribuyen al buen funcionamiento del organismo.</p>
        <div>
            <ul>
                <li>El cedrón sirve para calmar los nervios.</li>
                <li>La lavanda ayuda con la inquietud.</li>
                <li>La menta elimina las nauseas.</li>
                <li>La manzanilla actua en contra de la ansiedad.</li>
                <li>El jengibre renueva energías. </li>
                <li>El anis es digestivo.</li>
                <li>El chai sirve para el cansancio.</li>
                <li>El verde ayuda a eliminar la pereza. </li>
                <li>El limón combate al enojo. </li>
            </ul>
            <ul>
                <li>El rooibos ayuda con la falta de inspiración.</li>
                <li>El amaranto colabora para mantenerse en forma en cuanto a fibratos.</li>
                <li>El clavel actúa como relajante para el dolor.</li>
                <li>El clavel blanco regula la presión arterial.</li>
                <li>El crisantemo ayuda a la recuperación.</li>
                <li>El jazmín sirve para el estrés y la circulación.</li>
                <li>El lirio calma el espíritu.</li>
                <li>La calendula combate las inflamaciones estomacales o bucales.</li>
            </ul>
        </div>
    </div>
`

const FINDUS = `
    <div class="findUs">
    <div class="section">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.2001781730314!2d-58.46276578410158!3d-34.82605917680479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd3e24e5ced63%3A0xa5e5f07731858226!2sLeandro%20N.%20Alem%201138%2C%20B1842ASW%20Monte%20Grande%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1634145541489!5m2!1ses-419!2sar" width="450" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        <p>Leandro N. Alem 1138, Monte Grande</p>
    </div>
    <div class="section">
        <div>
            <h2>Horarios</h2>
            <p>Lunes a Sabados:</p>
            <p>9 a 13hs - 15 a 18hs</p>
        </div>
        <div class="links">
            <p><img src="./img/instagram.png"> Soulacompany</p>
            <p><img src="./img/gmail.png"> companysoula@gmail.com</p>
        </div>
    </div>
    </div>
`
const CAROUSEL = `
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">
    <div class="item active">
        <img src="./img/WhatsApp Image 2021-09-25 at 20.41.53 (1).jpeg" alt="Los Angeles" style="width:100%;">
    </div>

    <div class="item">
        <img src="./img/WhatsApp Image 2021-09-25 at 20.41.53.jpeg" alt="Chicago" style="width:100%;">
    </div>

    <div class="item">
        <img src="./img/WhatsApp Image 2021-09-25 at 20.41.56.jpeg" alt="New york" style="width:100%;">
    </div>
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
    </a>
    </div>
    </div>
`

const options = {
    whoWeAre : WHOWEARE,
    products : PRODUCTS,
    infusions : INFUSIONS,
    findUs : FINDUS,
    carousel : CAROUSEL
}

function setFooter(body) {
    let main = document.getElementById('main');
    console.log(main)
    console.log(options[body]);
    main.innerHTML = options[body];
    console.log(main);
}