// TODO
const {useState} = React;
const MyListItem = (props) => {
  const [isDone, setIsDone] = useState(false);
  const style = {
    fontWeight: isDone ? 'bold' : 'normal',
  };
  return (
    <li
    style={style} onMouseEnter={() => setIsDone(!isDone)}
    style={style} onMouseLeave={() => setIsDone(!isDone)}
    >
      {props.item}
    </li>
  );
};
const MyList = (props) => {
  const onListItemClick = (event) => {
    console.log('I got clicked');
  };
  return (
    <ul>
      {props.items.map((item) => (
        <MyListItem item={item} />
      ))}
    </ul>
  );
};

const App = () => <div>
  <h2>Grocery List</h2>
  <MyList items={['Cucumbers', 'Kale', 'Chicken']}/>
</div>;

ReactDOM.render(
  <App />,
  document.getElementById(
    'app'
  )
);


