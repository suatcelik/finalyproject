import React from "react";

const FeaturedPosts = () => {
  const posts = [
    {
      image: "/path/to/image1.jpg",
      title: "Loudset à la Madison #1 (L’integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It’s only a keystroke away.",
      date: "23 April 2021",
      comments: 10,
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Featured Posts</h2>

      <div className="grid grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <div key={index} className="border p-2">
            <img
              src={post.image}
              alt=""
              className="w-full h-48 object-cover mb-2"
            />
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p>{post.description}</p>
            <footer className="mt-2 flex justify-between items-center">
              <span>{post.date}</span>
              <span>{post.comments} comments</span>
            </footer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
