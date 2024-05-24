import postData from "./postData.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

// useEffect(() => {
//   const [post, setPost] = useState('');
//   const dataApi = async () => {
//     try {
//       const data = await fetch(`https://hn.algolia.com/api/v1/items/${post}`);
//       const result = await data.json();
//       console.log(result);
//     } catch (error) {
//       "Server error", error;
//     }
//   };
//   dataApi();
// }, []);

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
  return (
    // <div className="bg-orange-100 container mx-auto px-3 py-2 gap-4 ">
    //   <ol>
    //     <li className="list-decimal mx-10 my-1">
    //       <div className="flex gap-2 items-center">
    //         <span className="font-medium">{dataReset.title}</span>
    //         <span className="text-sm">({dataReset.url})</span>
    //       </div>
    //       <div className="flex items-center font-sm gap-1">
    //         <span>
    //           {dataReset.points} points by {dataReset.author} 16 hours ago
    //         </span>
    //         <span className="text-sm border-x-2 border-slate-800 px-2">
    //           hide
    //         </span>
    //         <span className="text-sm">{dataReset.num_comments} comments</span>
    //       </div>
    //     </li>
    //   </ol>
    // </div>
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
