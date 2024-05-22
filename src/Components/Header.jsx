const Header = () => {
  return (
    <header className="bg-orange-600 text-white flex items-center container mx-auto px-3 py-2 gap-4 justify-between border-t-4 border-black">
      <div className="logo">
        <div className="flex items-center gap-2">
          <h4 className="px-2 border-2 border-white rounded text-sm">Y</h4>
          <h3 className="text-xl text-black font-bold">Hacker News</h3>
        </div>
      </div>

      <nav className="flex items-center justify-between navbar-container text-black font-semibold">
        <ul className="flex ">
          <li className="border-r-2 px-2 border-black">new</li>
          <li className="border-r-2 px-2 border-black">past</li>
          <li className="border-r-2 px-2 border-black">comments</li>
          <li className="border-r-2 px-2 border-black">ask</li>
          <li className="border-r-2 px-2 border-black">show</li>
          <li className="border-r-2 px-2 border-black">jobs</li>
          <li className="px-2">submit</li>
        </ul>
        <ul>
          <li>login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
