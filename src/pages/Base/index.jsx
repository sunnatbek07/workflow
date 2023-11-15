import React, { useState } from 'react';
import { Breadcrumb, Table, Space, Tag } from 'antd';
import Bell from '../../components/Ui/Icons/Bell';
import { Button, TextInput, Modal, Label, Textarea } from 'flowbite-react';
import Search from './../../components/Ui/Icons/Search';
import Plus from './../../components/Ui/Icons/Plus';


import './style.scss';
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
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Button onClick={() => setOpenModal(true)} outline gradientDuoTone="cyanToBlue">Modifier</Button>
        <Button color='failure'>Supprimer</Button>
      </Space>
    ),
  },
]

const columns1 = [
  {
    title: 'Libellé',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Description',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Button outline gradientDuoTone="cyanToBlue">Modifier</Button>
        <Button color='failure'>Supprimer</Button>
      </Space>
    ),
  },
]

const data = [
  {
    key: '1',
    name: 'John',
    lastName: 'Brown',
    address: 'alexander.foley@gmail.com',
  },
  {
    key: '2',
    name: 'Jim',
    lastName: 'Green',
    address: 'alexander.foley@gmail.com',
  },
]

const data1 = [
  {
    key: '1',
    name: 'John',
    lastName: 'Brown',
    address: 'Libero scelerisque massa quis mauris nisl.',
  },
  {
    key: '2',
    name: 'Jim',
    lastName: 'Green',
    address: '-',
  },
  {
    key: '3',
    name: 'John',
    lastName: 'Brown',
    address: '-',
  },
  {
    key: '4',
    name: 'Jim',
    lastName: 'Green',
    address: '-',
  },
]

const data2 = [
  {
    key: '1',
    name: 'SWOT',
    address: '-',
  },
]

const Base = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  return (
    <div>
      <header>
        <Breadcrumb
          items={[
            {
              title: 'Base',
            },
          ]}
        />

        <Bell />
      </header>
      <div className='main'>
        <h2>Base</h2>
        <div className='table1'>
          <div className='table1-header'>
            <p>Liste des pays</p>
            <Button color='blue' onClick={() => setOpenModal(true)} className='bg-[#4763E4]'>
              <span className='mr-2'>Ajouter</span>
              <Plus />
            </Button>
          </div>
          <TextInput className='input' id="email4" type="email" icon={Search} placeholder="Vous cherchez quel utilisateur ..." required />
          <Table className='mt-6' columns={columns} dataSource={data} />
        </div>
        <div className='tb_wrapper'>
          <div className='tb-container'>
            <div className='table1-header'>
              <p>Liste des pays</p>
              <Button color='blue' onClick={() => setOpenModal1(true)} className='bg-[#4763E4]'>
                <span className='mr-2'>Ajouter</span>
                <Plus />
              </Button>
            </div>
            <TextInput className='input w-full' id="email4" type="email" icon={Search} placeholder="Vous cherchez quel utilisateur ..." required />
            <Table pagination={false} className='mt-6 w-full' columns={columns1} dataSource={data1} />
          </div>
          <div className='tb-container'>
            <div className='table1-header'>
              <p>Liste des pays</p>
              <Button onClick={() => setOpenModal2(true)} color='blue' className='bg-[#4763E4]'>
                <span className='mr-2'>Ajouter</span>
                <Plus />
              </Button>
            </div>
            <TextInput className='input w-full' id="email4" type="email" icon={Search} placeholder="Vous cherchez quel utilisateur ..." required />
            <Table pagination={false} className='mt-6 w-full' columns={columns1} dataSource={data2} />
          </div>
        </div>
      </div>
      <Modal size={"6xl"} dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className='mb-[38px]'>Enregistrement d'un pays</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="base" value="Libellé" />
              </div>
              <TextInput placeholder='Enter email' id="base" type="enail" sizing="md" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="base" value="Code ISO*" />
              </div>
              <TextInput placeholder='Code ISO*' id="base" type="text" sizing="md" />
            </div>
            <div className="max-w-full h-[200px]">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Description" />
              </div>
              <Textarea id="comment" className='h-[150px]' placeholder="Decrivez ...." required rows={4} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Enregistrer</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Annuler
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size={"6xl"} dismissible show={openModal1} onClose={() => setOpenModal1(false)}>
        <Modal.Header className='mb-[38px]'>Enregistrement d'une ville</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="base" value="Libellé" />
              </div>
              <TextInput placeholder='Enter email' id="base" type="enail" sizing="md" />
            </div>
            <div className="max-w-full h-[200px]">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Description" />
              </div>
              <Textarea id="comment" className='h-[150px]' placeholder="Decrivez ...." required rows={4} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color='blue' onClick={() => setOpenModal1(false)}>Enregistrer</Button>
          <Button color="gray" onClick={() => setOpenModal1(false)}>
            Annuler
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size={"6xl"} dismissible show={openModal2} onClose={() => setOpenModal2(false)}>
        <Modal.Header className='mb-[38px]'>Enregistrement d'une méthode d'évaluation</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="base" value="Libellé" />
              </div>
              <TextInput placeholder='Enter email' id="base" type="enail" sizing="md" />
            </div>
            <div className="max-w-full h-[200px]">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Description" />
              </div>
              <Textarea id="comment" className='h-[150px]' placeholder="Decrivez ...." required rows={4} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color='blue' onClick={() => setOpenModal2(false)}>Enregistrer</Button>
          <Button color="gray" onClick={() => setOpenModal2(false)}>
            Annuler
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Base;