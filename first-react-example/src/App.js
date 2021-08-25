import "./App.css";
const items = [
  {
    name: "apple",
    image:
      "https://blogs-images.forbes.com/bethhoffman/files/2012/04/Apple.jpg",
    price: 0.87,
  },
  {
    name: "banana",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/1360px-Banana-Single.jpg",
    price: 1.27,
  },
  {
    name: "pineapple",
    image: "https://i.ndtvimg.com/mt/cooks/2014-11/pineapple-annanas.jpg",
  
    price: 2.3,
  },
];

const Application = function () {
  return (
    <div className="fruit-container">
      {items.map((item) => {
        return <img width="400px" height="400px" src={item.image} alt="abc" />;
      })}
      
      <header>
        <h1>fruits</h1>
      </header>
    </div>
  );
};
<nav>
  <ul>
    <li>Home</li>
    <li>Products</li>
    <li>Contact</li>
    <li>About</li>
  </ul>
</nav>;

export default Application;
