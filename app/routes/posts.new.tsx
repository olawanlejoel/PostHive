import { Link, Form } from '@remix-run/react';

const NewPost = () => {
	return (
		<>
			<div className="page-header">
				<h2>New Post</h2>
				<Link to="/posts" className="btn btn-reverse">
					Back
				</Link>
			</div>

			<div className="page-content">
				<Form method="POST">
					<div className="form-control">
						<label htmlFor="title">Title</label>
						<input type="text" name="title" id="title" />
					</div>
					<div className="form-control">
						<label htmlFor="body">Post Body</label>
						<textarea name="body" id="body" />
					</div>
					<button className="btn btn-block" type="submit">
						Add Post
					</button>
				</Form>
			</div>
		</>
	);
};

export default NewPost;
