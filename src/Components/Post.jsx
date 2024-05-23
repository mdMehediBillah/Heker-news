import postData from "./Data.jsx";

const Post = () => {
  // const postData = [
  //   {
  //     created_at: "2021-01-31T11:05:47.000Z",
  //     title: "Python vs. JavaScript – What Are the Key Differences?",
  //     url: "https://www.freecodecamp.org/news/python-vs-javascript-what-are-the-key-differences-between-the-two-popular-programming-languages/",
  //     author: "oedmarap",
  //     points: 1,
  //     story_text: null,
  //     comment_text: null,
  //     num_comments: 0,
  //     story_id: null,
  //     story_title: null,
  //     story_url: null,
  //     parent_id: null,
  //     created_at_i: 1612091147,
  //     _tags: ["story", "author_oedmarap", "story_25977892"],
  //     objectID: "25977892",
  //     _highlightResult: {
  //       title: {
  //         value:
  //           "Python vs. <em>JavaScript</em> – What Are the Key Differences?",
  //         matchLevel: "full",
  //         fullyHighlighted: false,
  //         matchedWords: ["javascript"],
  //       },
  //       url: {
  //         value:
  //           "https://www.freecodecamp.org/news/python-vs-<em>javascript</em>-what-are-the-key-differences-between-the-two-popular-programming-languages/",
  //         matchLevel: "full",
  //         fullyHighlighted: false,
  //         matchedWords: ["javascript"],
  //       },
  //       author: {
  //         value: "oedmarap",
  //         matchLevel: "none",
  //         matchedWords: [],
  //       },
  //     },
  //   },
  //   {
  //     created_at: "2021-01-31T06:31:13.000Z",
  //     title: "Sorry Java, Write Once Run Anywhere (WORA) Is Now JavaScript",
  //     url: "https://medium.com/swlh/sorry-java-write-once-run-anywhere-wora-is-now-javascript-92641161a73f",
  //     author: "uscoderjs",
  //     points: 14,
  //     story_text: null,
  //     comment_text: null,
  //     num_comments: 16,
  //     story_id: null,
  //     story_title: null,
  //     story_url: null,
  //     parent_id: null,
  //     created_at_i: 1612074673,
  //     _tags: ["story", "author_uscoderjs", "story_25976601"],
  //     objectID: "25976601",
  //     _highlightResult: {
  //       title: {
  //         value:
  //           "Sorry Java, Write Once Run Anywhere (WORA) Is Now <em>JavaScript</em>",
  //         matchLevel: "full",
  //         fullyHighlighted: false,
  //         matchedWords: ["javascript"],
  //       },
  //       url: {
  //         value:
  //           "https://medium.com/swlh/sorry-java-write-once-run-anywhere-wora-is-now-<em>javascript</em>-92641161a73f",
  //         matchLevel: "full",
  //         fullyHighlighted: false,
  //         matchedWords: ["javascript"],
  //       },
  //       author: {
  //         value: "uscoderjs",
  //         matchLevel: "none",
  //         matchedWords: [],
  //       },
  //     },
  //   },
  // ];
  console.log(new Date(1612091147));
  console.log(new Date());
  return (
    <div className="bg-orange-100 container mx-auto px-3 py-2 gap-4 ">
      <ol>
        {postData.map((post, index) => (
          <li key={index} className="list-decimal mx-10 my-1">
            <div className="flex gap-2 items-center">
              <span className="font-medium">{post.title}</span>
              <span className="text-sm">({post.url})</span>
            </div>
            <div className="flex items-center font-sm gap-1">
              <span>
                {post.points} points by {post.author} 16 hours ago
              </span>
              <span className="text-sm border-x-2 border-slate-800 px-2">
                hide
              </span>
              <span className="text-sm">{post.num_comments} comments</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Post;
