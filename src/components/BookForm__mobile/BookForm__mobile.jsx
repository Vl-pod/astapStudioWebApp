import './BookForm__mobile.css';

const BookForm = () => {
	return ( 
		<section className="book__form">
			<div className="wrapper">
				<div className="book__form-card">
					<div className="book__form-header">
						<div className="text__up"><p>Book a first<span></span></p></div>
						<div className="text__down"><p>Free session now</p></div>
					</div>
					<div className="content__text container">
						<p>This is your first move towards progress, from present to future. So, tell us a little about your project and let us know how to get in touch.</p>
					</div>
					<div className="content__image"></div>
					<div className="registration__form">
						<div className="form__text">email form well be here</div>
						<button className="registration__button">registration</button>
					</div>
				</div>
			</div>
		</section>
	 );
}
 
export default BookForm;