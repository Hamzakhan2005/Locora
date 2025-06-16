export function RecentPosts() {
  const posts = [
    { user: "Jennifer", location: "Chicago, IL", likes: 53, comments: 12 },
    { user: "Nina", location: "New York, NY", likes: 38, comments: 9 },
    { user: "Michael", location: "Los Angeles, CA", likes: 42, comments: 11 },
    { user: "Amanda", location: "San Francisco, CA", likes: 45, comments: 10 },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
      <div className="bg-white rounded-xl overflow-hidden shadow">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500 border-b">
              <th className="p-4">Post</th>
              <th>User</th>
              <th>Location</th>
              <th>Likes</th>
              <th>Comments</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, i) => (
              <tr key={i} className="text-sm border-b">
                <td className="p-4">
                  <div className="h-10 w-10 bg-gray-200 rounded-full" />
                </td>
                <td>{post.user}</td>
                <td className="text-blue-500">{post.location}</td>
                <td>{post.likes}</td>
                <td>{post.comments}</td>
                <td className="text-blue-500 font-medium cursor-pointer">
                  View
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
