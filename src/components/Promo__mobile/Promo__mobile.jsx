import './Promo__mobile.css'

const Promo = () => {
	return ( 
	<section className="promo">
		<div className="wrapper">
			<div className="promo__content container">
				<div className="promo__head--text">
					<p className="up__line--text"><span >your success is</span><br />my reputation !</p>
					<span className="head__line"></span>
					<span className="under__line--text">design <span>and</span> advertising <span>services</span></span>
				</div>
				<h1>AstapStudio</h1>
				<button className="promo__button">CONSULTATION</button>
				<div className="promo__image"></div>
			</div>
		</div>
	</section> 
	);
}
 
export default Promo;