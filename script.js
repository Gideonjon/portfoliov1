function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "ABOUT")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACT"))), /*#__PURE__*/




    React.createElement(SocialLinks, null))));



};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("p", { className: "brand" }, "Gideon", /*#__PURE__*/

    React.createElement("strong", null, " Jones")), /*#__PURE__*/

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, /*#__PURE__*/

    React.createElement("span", null))))));





};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    React.createElement("div", { className: "forest" }), /*#__PURE__*/
    React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
    React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, "I am"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, "a web"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, /*#__PURE__*/
    React.createElement("span", { className: "color" }, "&"), " Mobile Engineer.")), /*#__PURE__*/


    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "#projects" }, "my portfolio"), /*#__PURE__*/
    React.createElement("a", { href: "#contact", className: "cta" }, "get in touch")))));






};


/***********************
  About Component
 ***********************/

const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "About Me"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "My name is Gideon Jeremiah Jones."), /*#__PURE__*/
    React.createElement("p", null, "I am a Mobile Engineer with 2 and half years experience in all stages of advanced mobile development, my strength is in the Android development. I am pursing ", /*#__PURE__*/
    React.createElement("u", null, "Bachelor degree in Computer Science."), " I currently base in Uyo, Nigeria. I'm open for new role (Android Engineer) and i'm willing to relocate in case of job offer in another city/Country."), /*#__PURE__*/

    React.createElement("p", null, "I really enjoy solving problems as well as making things pretty and easy to use. I can't stop learning new things; the more, the better. Bringing forth expertise in design, installation, testing and maintenance of  systems. Able to effectively self-manage during independent projects, as well as collaborate in a team setting.")), /*#__PURE__*/




    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Here is what i do"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "I'm a programmer."), /*#__PURE__*/
    React.createElement("p", null, "For the front-end I work with figma and using xml as frame work"), /*#__PURE__*/




    React.createElement("p", null, "For the back-end I also work with firebase and kotlin).")), /*#__PURE__*/




    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "List of my tech stack"), /*#__PURE__*/
    React.createElement("p", null, /*#__PURE__*/
    React.createElement("strong", { id: "a" }, "Html5"), " ", /*#__PURE__*/
    React.createElement("strong", { id: "b" }, "CSS"), " ", /*#__PURE__*/
    React.createElement("strong", { id: "c" }, "JavaScript"), " ", " ", /*#__PURE__*/
    React.createElement("strong", { id: "d" }, "Firebase"), " ", " ", /*#__PURE__*/
    React.createElement("strong", { id: "e" }, "Kotlin"), " ", /*#__PURE__*/
    React.createElement("strong", { id: "f" }, "Xml"), " ", /*#__PURE__*/
    React.createElement("strong", { id: "g" }, "API"), " ", /*#__PURE__*/
    React.createElement("strong", { id: "h" }, "UI/UX"), "  ", " ", /*#__PURE__*/
    React.createElement("strong", { id: "j" }, "Java"), " ", " ", /*#__PURE__*/
    React.createElement("strong", { id: "l" }, "Git"), " ", /*#__PURE__*/
    React.createElement("strong", { id: "y" }, "Python")))))));







};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node',
    html: 'fab fa-html5' };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return /*#__PURE__*/(
    React.createElement("div", { className: "project" }, /*#__PURE__*/
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" }, /*#__PURE__*/
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })), /*#__PURE__*/

    React.createElement("div", { className: "project-details" }, /*#__PURE__*/
    React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) => /*#__PURE__*/
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children, /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "View source ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" })), /*#__PURE__*/

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Try it Live ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));





};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
    React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "My Works"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Here's a list of ", /*#__PURE__*/
    React.createElement("u", null, "most"), " of the projects I've been working on lately during my free time as freelencer. I have got Full-Stack Developer certificate from ",
    ' ', /*#__PURE__*/
    React.createElement("a", { href: "https://www.eduonix.com/certificate/555a0e5560", target: "_blank", rel: "noopener noreferrer" }, "Eduonix."))), /*#__PURE__*/




    React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/
    React.createElement(Project, {
      title: "Online Shop app.",
      img: 'http://valentine-cv.special-talk.com/wp-content/uploads/2020/06/Screenshot-2020-06-05-at-21.27.29.png',
      tech: "js html css",
      link: "https://master.dxncv5gnhh5by.amplifyapp.com/",
      repo: "https://github.com/UcValentine/Online_store" }, /*#__PURE__*/

    React.createElement("small", null, "Built using JavaScript, PHP, HTML, CSS and Bootstrap."), /*#__PURE__*/


    React.createElement("p", null, "This online shop web application i created and deployed it on AWS as part my university project.")), /*#__PURE__*/



    React.createElement(Project, {
      title: "UI Dashdoard.",
      img: 'http://valentine-cv.special-talk.com/wp-content/uploads/2020/06/Ui.png',
      tech: "js d3 html css",
      link: "https://codepen.io/ValentineOnah/full/ZEbxwdP",
      repo: "https://github.com/UcValentine/UI_Dashdoard" }, /*#__PURE__*/

    React.createElement("small", null, "Built using JavaScript, Chartjs, HTML, CSS and Bootstrap."), /*#__PURE__*/


    React.createElement("p", null, "This is a simple frontend Admin dashboard that I made which lets the Admin to see the real time progress and interactions of users.")), /*#__PURE__*/



    React.createElement(Project, {
      title: "React Documentation site.",
      img: 'http://valentine-cv.special-talk.com/wp-content/uploads/2020/06/Screenshot-2020-06-05-at-23.01.00.png',
      tech: "js react html css",
      link: "https://github.com/UcValentine/React_documentry_site" }, /*#__PURE__*/

    React.createElement("small", null, "Built using React.js HTML and CSS."), /*#__PURE__*/
    React.createElement("p", null, "I created this React Documentation site to show some little React library documentry. I hosted this project on AWS.")), /*#__PURE__*/



    React.createElement(Project, {
      title: "Single Page Site.",
      img: 'http://valentine-cv.special-talk.com/wp-content/uploads/2020/06/Screenshot-2020-06-05-at-16.00.31.png',
      tech: "html css",
      link: "https://codepen.io/ValentineOnah/full/oNjRarK",
      repo: "https://codepen.io/ValentineOnah/pen/oNjRarK" }, /*#__PURE__*/

    React.createElement("small", null, "Built using HTML, CSS + SCSS, Twitter-Bootstrap."), /*#__PURE__*/


    React.createElement("p", null, "This single page site that advertise 1 important product (IPhone 11), show two blog posts and offer a white paper download.")), /*#__PURE__*/



    React.createElement(Project, {
      title: "Weather App.",
      img: 'http://valentine-cv.special-talk.com/wp-content/uploads/2020/06/Screenshot-2020-06-05-at-16.04.35.png',
      tech: "js vue node html css",
      link: "https://codepen.io/ValentineOnah/full/XWJmNax",
      repo: "https://codepen.io/ValentineOnah/pen/XWJmNax" }, /*#__PURE__*/

    React.createElement("small", null, "Built using Node, Vue.js, JavaScript, HTML5, CSS + Sass."), /*#__PURE__*/
    React.createElement("p", null, "This weather app displays current weather in \xB0C and \xB0F using your location but first you have to give the app permission to use your current location otherwise it won't work.")), /*#__PURE__*/



    React.createElement(Project, {
      title: "React.js App.",
      img: 'http://valentine-cv.special-talk.com/wp-content/uploads/2020/06/Screenshot-2020-06-05-at-16.32.15.png',
      tech: "node react js html css",
      link: "https://master.d5tftzjcottd7.amplifyapp.com/",
      repo: "https://github.com/UcValentine/react-firebase" }, /*#__PURE__*/

    React.createElement("small", null, "Built using Node.js, React.js, JavaScript, Firebase, HTML5, CSS + Bootstrap."), /*#__PURE__*/
    React.createElement("p", null, "This project is to demonstrate React and pure CSS skills; user can create an account, login, send a message and the data will be stored on the database (firebase).")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Online Shopping Basket.",
      img: 'http://valentine-cv.special-talk.com/wp-content/uploads/2020/06/Screenshot-2020-06-05-at-16.30.34.png',
      tech: "html js css",
      link: "https://codepen.io/ValentineOnah/full/LYpmYyb",
      repo: "https://codepen.io/ValentineOnah/pen/LYpmYyb" }, /*#__PURE__*/

    React.createElement("small", null, "Built using JavaScript, HTML and CSS."), /*#__PURE__*/
    React.createElement("p", null, "The page shown user\u2019s basket on a fictitious online shopping site. Three products have been added to the basket. Beneath the product list, a sub-total of the product costs are shown, VAT is then added (at 20%) and the total is shown beneath.")), /*#__PURE__*/



    React.createElement(Project, {
      title: "Responsive landing page.",
      img: 'http://valentine-cv.special-talk.com/wp-content/uploads/2020/06/web.png',
      tech: "js html css",
      link: "https://codepen.io/ValentineOnah/full/ExxLVvY",
      repo: "https://github.com/UcValentine/Landing_page-" }, /*#__PURE__*/

    React.createElement("small", null, "Built using HTML5, CSS3, JavaScript + jQuery, BOOTSTRAP 4."), /*#__PURE__*/
    React.createElement("p", null, "This is a responsive landing page application")), /*#__PURE__*/



    React.createElement(Project, {
      title: "currency converter.",
      img: 'http://valentine-cv.special-talk.com/wp-content/uploads/2020/06/Screenshot-2020-06-05-at-18.21.44.png',
      tech: "node react js html css",
      link: "https://master.dvmuons7w7w1j.amplifyapp.com/",
      repo: "https://github.com/UcValentine/currency_converter_ReactJS" }, /*#__PURE__*/

    React.createElement("small", null, "Built using Node.js, React.js, JavaScript, HTML, CSS + Bootstrap."), /*#__PURE__*/
    React.createElement("p", null, "This small web based currency converter app converts Swedish Krona (SEK) into multiple currencies like USD, GBP and SGD. How much has currency changed in valuation between March 26th, 2015 and June 13th, 2017.")), /*#__PURE__*/



    React.createElement(Project, {
      title: "UI Settings.",
      img: 'http://valentine-cv.special-talk.com/wp-content/uploads/2020/06/Screenshot-2020-06-05-at-19.27.15.png',
      tech: "html js css",
      link: "https://codepen.io/ValentineOnah/full/pozYdQL",
      repo: "https://codepen.io/ValentineOnah/pen/pozYdQL" }, /*#__PURE__*/

    React.createElement("small", null, "Built using JavaScript HTML and CSS (SCSS)."), /*#__PURE__*/
    React.createElement("p", null, "This is UI setting dashboard.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Grid Layout.",
      img: 'http://valentine-cv.special-talk.com/wp-content/uploads/2020/06/Screenshot-2020-06-05-at-19.35.06.png',
      tech: "html css",
      link: "https://codepen.io/ValentineOnah/full/OJLBLOg",
      repo: "https://codepen.io/ValentineOnah/pen/OJLBLOg" }, /*#__PURE__*/

    React.createElement("small", null, "Built using HTML and CSS."), /*#__PURE__*/
    React.createElement("p", null, "A responsive grid layout.")), /*#__PURE__*/



    React.createElement(Project, {
      title: "Calculator.",
      img: 'http://valentine-cv.special-talk.com/wp-content/uploads/2020/06/Screenshot-2020-06-06-at-15.38.16.png',
      tech: "js react css",
      link: "https://codepen.io/ValentineOnah/full/WNrvodK",
      repo: "https://codepen.io/ValentineOnah/pen/WNrvodK" }, /*#__PURE__*/

    React.createElement("small", null, "Built using React.js and CSS."), /*#__PURE__*/
    React.createElement("p", null, "A project on which i built a virtual calculator with its usual features.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Admin Dashboard.",
      img: 'http://valentine-cv.special-talk.com/wp-content/uploads/2020/06/Screenshot-2020-06-23-at-10.08.05.png',
      tech: "js html css",
      link: "https://codepen.io/ValentineOnah/full/rNNvapj",
      repo: "https://codepen.io/ValentineOnah/pen/rNNvapj" }, /*#__PURE__*/

    React.createElement("small", null, "Built using Javascript, HTML and CSS."), /*#__PURE__*/
    React.createElement("p", null, "A project on which i built the mordern admin dashboard."))))));





};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "contact" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("p", { className: "title" }, "Want to ", /*#__PURE__*/
    React.createElement("br", null), "contact me?"), /*#__PURE__*/


    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Please, send me an email to ",
    '', /*#__PURE__*/
    React.createElement("span", { className: "mail" }, "gideonjones63", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-at at" }), "gmail", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-circle dot" }), "com"))), /*#__PURE__*/




    React.createElement(SocialLinks, null)), /*#__PURE__*/

    React.createElement("form", { id: "contact-form", action: "#" }, /*#__PURE__*/
    React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }), /*#__PURE__*/
    React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }), /*#__PURE__*/
    React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }), /*#__PURE__*/
    React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit", disabled: true })))));




};



/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("h3", null, "THANKS FOR VISITING"), /*#__PURE__*/
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Gideon Jones."), /*#__PURE__*/
    React.createElement(SocialLinks, null))));



};




/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "social" }, /*#__PURE__*/
    React.createElement("a", {
      href: "?",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's LinkedIn" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fa fa-linkedin" })), /*#__PURE__*/

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/Gideonjon?tab=repositories",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's GitHub Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-github" })), /*#__PURE__*/

    React.createElement("a", {
      href: "",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Codepen Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-codepen" }))));



};



/***********************
  Main Component
 ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(About, null), /*#__PURE__*/
      React.createElement(Projects, null), /*#__PURE__*/
      React.createElement(Contact, null), /*#__PURE__*/
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));