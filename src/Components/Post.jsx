import postData from "./postData.jsx";
import { useState } from "react";
// import axios from "axios";

// const dataApi = async () => {
//   try {
//     const data = await fetch("https://hn.algolia.com/api/v1/items/3");
//     const result = await data.json();
//     console.log(result);
//   } catch (error) {
//     "Server error", error;
//   }
// };

// dataApi();

// working
// axios
//   .get("https://hn.algolia.com/api/v1/items/3")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// trying
// const dataApi = async () => {
//   try {
//     const data = await axios.get("https://hn.algolia.com/api/v1/items/3");
//     const response = await response.data;
//     console.log(response);
//   } catch (error) {
//     "Server error", error;
//   }
// };
// dataApi();
// const dataReset = {
//   created_at: "2021-01-31T11:05:47.000Z",
//   title: "Python vs. JavaScript – What Are the Key Differences?",
//   url: "https://www.freecodecamp.org/news/python-vs-javascript-what-are-the-key-differences-between-the-two-popular-programming-languages/",
//   author: "oedmarap",
//   points: 1,
//   story_text: null,
//   comment_text: null,
//   num_comments: 0,
//   story_id: null,
//   story_title: null,
//   story_url: null,
//   parent_id: null,
//   created_at_i: 1612091147,
//   _tags: ["story", "author_oedmarap", "story_25977892"],
//   objectID: "25977892",
//   _highlightResult: {
//     title: {
//       value: "Python vs. <em>JavaScript</em> – What Are the Key Differences?",
//       matchLevel: "full",
//       fullyHighlighted: false,
//       matchedWords: ["javascript"],
//     },
//     url: {
//       value:
//         "https://www.freecodecamp.org/news/python-vs-<em>javascript</em>-what-are-the-key-differences-between-the-two-popular-programming-languages/",
//       matchLevel: "full",
//       fullyHighlighted: false,
//       matchedWords: ["javascript"],
//     },
//     author: {
//       value: "oedmarap",
//       matchLevel: "none",
//       matchedWords: [],
//     },
//   },
// };

const Post = () => {
  const [idNumber, setIdNumber] = useState(1);
  // const [arrayData, setArrayData] = useState([]);

  const dataApi = async () => {
    // setArrayData((pre) => [...pre, idNumber]);
    // setIdNumber((pre) => pre + 1);
    //   console.log("setArrayData");
    try {
      const data = await fetch(
        `https://hn.algolia.com/api/v1/items/${idNumber}`
      );
      const result = await data.json();
      console.log(result);
    } catch (error) {
      "Server error", error;
    }
  };

  dataApi();

  return (
    <div className="bg-orange-100 container mx-auto px-3 py-2 gap-4 ">
      <ol>
        {postData.map((post, index) => (
          <li key={index} className="list-decimal mx-10 my-1">
            <div className="flex gap-2 items-center">
              <span className="font-medium">{post.title}</span>
              <a href={post.url}>
                <span className="text-sm max-w-40 line-clamp-1">
                  ({post.url})
                </span>
              </a>
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
