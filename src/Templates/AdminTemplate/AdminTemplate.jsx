import React from 'react'
import { Outlet, useNavigate,Navigate } from 'react-router-dom'
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import _ from "lodash";
import { TOKEN, USER_LOGIN } from '../../utils/settings/config';
import Header from '../../components/Header/Header';

const {  Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function AdminTemplate() {
    const { userLogin } = useSelector(state => state.userManagermentReducer);
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };

    useEffect(() => {
        window.scrollTo(0, 0);

    })
    const navigate = useNavigate()
    if (!localStorage.getItem(USER_LOGIN)) {
        alert('Bạn không có quyền truy cập vào trang này !')
        return <Navigate to="/"/>
    }
    if (userLogin.maLoaiNguoiDung !== 'QuanTri') {
        alert('Bạn không có quyền truy cập vào trang này !')
        return <Navigate to="/"/>

    }

    const operations = <Fragment>
    {!_.isEmpty(userLogin) ? <Fragment> <button onClick={() => {
        navigate('/profile')
    }}> <div style={{ width: 50, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="text-2xl ml-5 rounded-full bg-red-200">{userLogin.taiKhoan.substr(0, 1)}</div>Hello ! {userLogin.taiKhoan}</button> <button onClick={() => {
        localStorage.removeItem(USER_LOGIN);
        localStorage.removeItem(TOKEN);
        navigate('/home');
        window.location.reload();
    }} className="text-blue-800">Đăng xuất</button> </Fragment> : ''}
</Fragment>
  return (
    <Fragment>
        
    <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo p-5">
                <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="..." />
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<UserOutlined />}>
                    <NavLink to="/admin/users">Users</NavLink>
                </Menu.Item>
                <SubMenu key="sub1" icon={<FileOutlined />} title="Films">
                    <Menu.Item key="10" icon={<FileOutlined />}>
                        <NavLink to="/admin/films">Films</NavLink>
                       
                    </Menu.Item>
                    <Menu.Item key="11" icon={<FileOutlined />}>
                    <NavLink to="/admin/films/addnew">Add new</NavLink>

                       
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="3" icon={<DesktopOutlined />}>
                    <NavLink to="/admin/showtimes">Showtime</NavLink>

                </Menu.Item>

            </Menu>
        </Sider>
        <Layout className="site-layout">
            <Header/>
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: '85vh' }}>
                    <Outlet/>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    </Layout>
</Fragment>
  )
}
