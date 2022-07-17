export default function Reviews() {
	return (
		<>
		<div className="reviews">
			<h1>Customer Reviews</h1>
			<div className="review">
				<div className="review-header">
					<div className="review-header-left">
						<img src="https://randomuser.me/api/portraits/" alt="customerPic" />
						<div className="review-header-right">
							<h2>Sarah Connor</h2>
							<p>
								<span className="review-header-right-date">
									12/2/2022
								</span>
								<span className="review-header-right-rating">
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
								</span>
							</p>
						</div>
					</div>
				</div>
				<div className="review-body">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec euismod, nisl eget consectetur sagittis, nisl
						nunc euismod nisi, euismod euismod nisi nisl eget
						consectetur sagittis.
					</p>
				</div>
			</div>
		</div>
		</>
	);
}