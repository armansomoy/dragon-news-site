import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import BreakingNews from '../Home/BreakingNews';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import { useParams } from 'react-router-dom';

const News = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
        <div className='grid lg:grid-cols-4'>
            <div className='col-span-3'>

            </div>
            <div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
        </div>
    );
};

export default News;