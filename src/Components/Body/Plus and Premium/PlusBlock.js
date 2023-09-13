const PlusBlock = (props) => (
  <div className="plusblock">
    <div>
      <img src={props.img} />
    </div>
    <h4>{props.title}</h4>
    <p>{props.data}</p>
  </div>
);
export default PlusBlock;
