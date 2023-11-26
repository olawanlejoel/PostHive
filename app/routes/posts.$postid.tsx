import { Link } from '@remix-run/react';

const Postid = () => {
	return (
		<>
			<div className="page-header">
				<h2>The Journey Begins</h2>
				<Link to="/posts" className="btn btn-reverse">
					Back
				</Link>
			</div>

			<div className="page-content">
				As the sun rose over the horizon, painting the sky in hues of orange and
				pink, I set forth on a path unknown to me—a journey filled with
				uncertainty and possibility. With every step, I felt the anticipation
				building within, a blend of excitement and apprehension. The world lay
				before me like an open book, waiting for its chapters to be written.
			</div>

			<div className="page-footer">
				<button className="btn btn-delete">Delete</button>
			</div>
		</>
	);
};

export default Postid;
