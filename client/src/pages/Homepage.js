import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DefaultLayout from './../components/DefaultLayout';
import { Row, Col} from 'antd';
import ItemList from './../components/ItemList';
import "../styles/DefaultLayout.css";


const Homepage = () => {
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    const getAllItems = async () => {
      try {
        const { data } = await axios.get('/api/items/get-item');
        setItemsData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllItems();
  }, []);
    // Your JSX content using itemsData
    return (
      <DefaultLayout>
        <Row >
          {itemsData.map((item, index) => (
            <li key={index}>
            <Col key={item.id} xs={24} lg={6} md={12} sm={6}>
              <ItemList item={item} />
            </Col>
            </li>
          ))}
        </Row>
      </DefaultLayout>
    );
};


export default Homepage;
