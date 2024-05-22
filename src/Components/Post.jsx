const Post = () => {
  return (
    <div className="bg-orange-100 container mx-auto px-3 py-2 gap-4 ">
      <ol>
        <li className="list-decimal mx-10 my-1">
          <div className="flex gap-2 items-center">
            <span className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              quod ratione
            </span>
            <span className="text-sm">(www.webaddress.com)</span>
          </div>
          <div className="flex items-center font-sm gap-1">
            <span>1054 points by dcminter 16 hours ago</span>
            <span className="text-sm border-x-2 border-slate-800 px-2">
              hide
            </span>
            <span className="text-sm">61 comments</span>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Post;
