import { useLoaderData, Link } from '@remix-run/react';
// Define a type for a single post
type Post = {
	id: string;
	title: string;
	body: string;
	createdAt: Date;
};

// Define a type for the data returned by the loader
type LoaderData = {
	posts: Post[];
};

export const loader = async () => {
	const data = {
		posts: [
			{
				id: 1,
				title: 'The Journey Begins',
				body: `As the sun rose over the horizon, painting the sky in hues of orange and pink, I set forth on a path unknown to me—a journey filled with uncertainty and possibility. With every step, I felt the anticipation building within, a blend of excitement and apprehension. The world lay before me like an open book, waiting for its chapters to be written. The cool breeze whispered tales of distant lands, urging me to explore beyond the familiar, to embrace the unknown with open arms.`,
				createdAt: '2023-11-23 21:17:39.725',
			},
			{
				id: 2,
				title: 'A Moment of Reflection',
				body: `Amidst the cacophony of life, I found solace in the tranquil embrace of solitude. It was in these quiet moments that the echoes of my thoughts resonated louder than the chaos around me. I pondered upon the intricacies of existence, delving into the depths of introspection, seeking answers to questions unspoken. The symphony of silence played melodies of introspection, unraveling the mysteries of the soul.`,
				createdAt: '2023-11-24 18:45:21.312',
			},
			{
				id: 3,
				title: 'Embracing Change',
				body: `Change swept through my life like a gust of wind, unsettling yet invigorating. It demanded adaptation, nudging me out of my comfort zone. With every twist and turn, I discovered resilience within, sculpting myself into a newer, stronger version. Embracing change became not just a necessity but a choice—an opportunity for growth and transformation. Each change, though daunting, became a catalyst for self-discovery and evolution.`,
				createdAt: '2023-11-25 09:10:57.501',
			},
			{
				id: 4,
				title: 'Rediscovering Passion',
				body: `In the quietude of rediscovery, I found the embers of passion, once dimmed, now ablaze. I traced back the footsteps of my dreams, reigniting the fervor that once fueled my aspirations. With each heartbeat, I vowed to pursue my passions relentlessly, breathing life into ambitions long dormant. The flame of enthusiasm danced amidst the darkness, illuminating the path to fulfillment and purpose.`,
				createdAt: '2023-11-26 12:20:45.819',
			},
		],
	};

	return data;
};

const Posts = () => {
	const { posts } = useLoaderData<LoaderData>(); // Use LoaderData as the generic type

	return (
		<>
			<div className="page-header">
				<h1>Posts</h1>
				<Link to="/posts/new" className="btn">
					New Post
				</Link>
			</div>

			<ul className="posts-list">
				{posts.map((post) => (
					<li key={post.id}>
						<Link to={post.id}>
							<h3>{post.title}</h3>
							{new Date(post.createdAt).toLocaleString()}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default Posts;
