import { Input,  } from 'antd';
const { Search } = Input;

const onSearch = (value) => console.log(value);


const HeaderDashboard = () => {
  return (
    <Search
    placeholder="Sreach"
    enterButton="Search"
    size="large"
    onSearch={onSearch}
  />
  )
};

export default HeaderDashboard;
