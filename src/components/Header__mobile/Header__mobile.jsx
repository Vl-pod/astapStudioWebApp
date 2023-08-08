import logoImg from './../../img/icons/Logo.svg'
import './Header__mobile.css'


function Header () {
	return (
		<header className="header">
			<div className="container">
				<div className="header__row">
					<div className="header__logo">
						<img className="header__logo-img" src={logoImg} alt="Logo" />
						<span>ASTAP STUDIO</span>
					</div>
					<button className='language__button'>
						<span className="language__button-text">En</span>
					</button>
					<button className='contacts__button'>
						<span className="contacts__button-text">CONTACTS</span>
					</button>
					<div className="header__burger">
						<span></span>
					</div>
					{/*
					<nav className="header__menu">
						<ul className="nav__list">
							<li>
								<a href="#top" className="nav__link">services</a>
							</li>
							<li>
								<a href="#top" className="nav__link">logo</a>
							</li>
							<li>
								<a href="#top" className="nav__link">motion</a>
							</li>
							<li>
								<a href="#top" className="nav__link">our team</a>
							</li>
							<li>
								<a href="#top" className="nav__link">contacts</a>
							</li>
						</ul>
					</nav>
					*/}
					
				</div>
			</div>
		</header>
	)
}

export default Header;