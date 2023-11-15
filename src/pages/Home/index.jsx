import React from 'react';
import { Breadcrumb, Table, Space, Tag } from 'antd';
import Bell from '../../components/Ui/Icons/Bell';
import './style.scss';
import { Button, TextInput } from 'flowbite-react';
import Search from './../../components/Ui/Icons/Search';
import Plus from '../../components/Ui/Icons/Plus';
import { Link } from 'react-router-dom';

const columns = [
    {
        title: 'Libellé',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Code ISO',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'Description',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <Space size="middle">
                <Link to='/configuration/user/editor'>
                    <Button outline gradientDuoTone="cyanToBlue">Suspendre</Button>
                </Link>
                <Button color='failure'>Delete</Button>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John',
        lastName: 'Brown',
        phoneNumber: '+237 6 99 88 77 66',
        address: 'alexander.foley@gmail.com',
        tags: ['Validé'],
    },
    {
        key: '2',
        name: 'Jim',
        lastName: 'Green',
        phoneNumber: '+237 6 99 88 77 66',
        address: 'alexander.foley@gmail.com',
        tags: ['Actif'],
    },
    {
        key: '3',
        name: 'Joe',
        lastName: 'Black',
        phoneNumber: '+237 6 99 88 77 66',
        address: 'alexander.foley@gmail.com',
        tags: ['Inactif'],
    },
    {
        key: '3',
        name: 'Alexander',
        lastName: 'Foley',
        phoneNumber: '+237 6 99 88 77 66',
        address: 'alexander.foley@gmail.com',
        tags: ['Validé'],
    },
];

const Home = () => {

    return (
        <div>
            <header>
                <Breadcrumb
                    items={[
                        {
                            title: 'Configuration',
                        },
                        {
                            title: 'Liste des utilisateurs',
                        },
                    ]}
                />

                <Bell />
            </header>
            <div className='main'>
                <h2>Configuration</h2>
                <TextInput className='input' id="email4" type="email" icon={Search} placeholder="Vous cherchez quel utilisateur ..." required />
                <Link to='/configuration/user/editor'>
                    <Button color='blue' className='bg-[#4763E4]'>
                        <span className='mr-2'>Ajouter un utilisateur</span>
                        <Plus />
                    </Button>
                </Link>
                <Table className='mt-6' columns={columns} dataSource={data} />
            </div>
        </div>
    )
}

export default Home;