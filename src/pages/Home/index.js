import { Link } from 'react-router-dom';

const Home = (props) => {
  console.log(props.members);
  return (
    <ul>
      {props.members.map((item) =>
        item.type === 'pj' ? (
          <li>
            <Link to={`/company/${item.id}`}>{item.name}</Link>
          </li>
        ) : (
          <li>
            <Link to={`/custumer/${item.id}`}>{item.name}</Link>
          </li>
        )
      )}
    </ul>
  );
};
export default Home;
