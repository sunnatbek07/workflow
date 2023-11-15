import React, { useState } from 'react';
import './style.scss';
import Bell from '../../components/Ui/Icons/Bell';
import { Breadcrumb, Tabs, Table, Tag, Space } from 'antd';
import { Button, TextInput, Modal, Label, Textarea, Select } from 'flowbite-react';
import Search from './../../components/Ui/Icons/Search';
import Plus from '../../components/Ui/Icons/Plus';
import { Link } from 'react-router-dom';
import Trash from './../../components/Ui/Icons/Trash';
import Edit from './../../components/Ui/Icons/Edit';

const columns = [
  {
    title: 'Sociétés',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Pays',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Villes',
    dataIndex: 'villes',
    key: 'villes',
  },
  {
    title: 'Branches',
    dataIndex: 'branches',
    key: 'branches',
  },
  {
    title: 'E-mail',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Téléphone',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Site web',
    dataIndex: 'site',
    key: 'site',
  },
  {
    title: 'Commissaire respo.',
    dataIndex: 'respo',
    key: 'respo',
  },
  {
    title: 'Nombre de contrôle',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Trash />
        <Edit />
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John',
    lastName: 'Brown',
    villes: "Douala",
    branches: "VIE",
    address: 'alexander.foley@gmail.com',
    phoneNumber: '+237 6 99 88 77 66',
    site: "www.gropamai.cm",
    respo: "Phasellus aliquet ac sed.",
    number: '02',
  },
  {
    key: '2',
    name: 'Jim',
    lastName: 'Green',
    villes: "Proin eu eget.",
    branches: "NON VIE",
    address: 'alexander.foley@gmail.com',
    phoneNumber: '+237 6 99 88 77 66',
    site: "www.khm-group.com",
    respo: "Ornare id malesuada.",
    number: '13',
  },
];

const columns1 = [
  {
    title: 'Noms',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Prenoms',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: "N° Pièce d'identification",
    dataIndex: 'indenfication',
    key: 'indenfication',
  },
  {
    title: 'Date de délivrence',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Lieu de délivrence',
    dataIndex: 'deliverence',
    key: 'deliverence',
  },
  {
    title: 'E-mail',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'URL WebDAV.',
    dataIndex: 'url',
    key: 'url',
  },
  {
    title: 'Téléphone',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Trash />
        <Edit />
      </Space>
    ),
  },
];

const data1 = [
  {
    key: '1',
    name: 'John',
    lastName: 'Brown',
    indenfication: "101010101010101010",
    date: "2018-06-23",
    deliverence: "CAM LT05",
    address: 'alexander.foley@gmail.com',
    url: "CAM LT05",
    phoneNumber: '+237 6 99 88 77 66',
  },
  {
    key: '1',
    name: 'John',
    lastName: 'Brown',
    indenfication: "101010101010101010",
    date: "2018-06-23",
    deliverence: "CAM LT05",
    address: 'alexander.foley@gmail.com',
    url: "CAM LT05",
    phoneNumber: '+237 6 99 88 77 66',
  }
]

const columns2 = [
  {
    title: 'Noms',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Prenoms',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Numéro Tél.',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'E-mail',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Date d\'ajout',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Profil',
    dataIndex: 'profil',
    key: 'profil',
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

const data2 = [
  {
    key: '1',
    name: 'John',
    lastName: 'Brown',
    phoneNumber: '+237 6 99 88 77 66',
    address: 'alexander.foley@gmail.com',
    date: "2018-06-23",
    profil: "-",
  },
  {
    key: '1',
    name: 'John',
    lastName: 'Brown',
    phoneNumber: '+237 6 99 88 77 66',
    address: 'alexander.foley@gmail.com',
    date: "2018-06-23",
    profil: "-",
  }
]

const columns3 = [
  {
    title: 'Libellé',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Description',
    dataIndex: 'desc',
    key: 'desc',
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

const columns4 = [
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
      <Space size="middle" className='flex items-center'>
        <Button outline gradientDuoTone="cyanToBlue">Modifier</Button>
        <Button color='failure'>Supprimer</Button>
      </Space>
    ),
  },
]

const data3 = [
  {
    key: '1',
    name: 'John',
    lastName: 'Brown',
    desc: '-',
  },
]

const data4 = [
  {
    key: '1',
    name: 'Equipe #1',
    address: 'Première équipe de test',
  },
  {
    key: '2',
    name: 'Equipe #2',
    address: '-',
  },
  {
    key: '3',
    name: 'Equipe #3',
    address: '-',
  },
  {
    key: '4',
    name: 'Equipe #4',
    address: '-',
  },
]

const data5 = [
  {
    key: '1',
    name: 'Essai digilente',
    address: '-',
  },
]


const Controls = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [craModal, setCraModal] = useState(false);

  const onChange = (key) => {
    // console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Société',
      children: <div className='p-8'>
        <div className='flex items-center justify-between'>
          <p>Liste des sociétés</p>
          <Button color='blue' onClick={() => setOpenModal(true)} className='bg-[#4763E4]'>
            <span className='mr-2'>Ajouter</span>
            <Plus />
          </Button>
        </div>
        <TextInput className='input' id="email4" type="email" icon={Search} placeholder="Vous cherchez quel utilisateur ..." required />
        <Table className='mt-6' columns={columns} dataSource={data} />
      </div>,
    },
    {
      key: '2',
      label: 'Commissaires contrôleurs',
      children: <div className='p-8'>
        <div className='flex items-center justify-between'>
          <p>Liste des commissaires contrôleurs</p>
          <Button color='blue' onClick={() => setOpenModal(true)} className='bg-[#4763E4]'>
            <span className='mr-2'>Ajouter</span>
            <Plus />
          </Button>
        </div>
        <TextInput className='input' id="email4" type="email" icon={Search} placeholder="Vous cherchez quel utilisateur ..." required />
        <Table className='mt-6' columns={columns1} dataSource={data1} />
      </div>,
    },
    {
      key: '3',
      label: 'CRCA',
      children: <div className='p-8'>
        <div className='flex items-center justify-between'>
          <p>Les membres de la CRCA</p>
          <Button color='blue' onClick={() => setCraModal(true)} className='bg-[#4763E4]'>
            <span className='mr-2'>Ajouter</span>
            <Plus />
          </Button>
        </div>
        <TextInput className='input' id="email4" type="email" icon={Search} placeholder="Vous cherchez quel utilisateur ..." required />
        <Table className='mt-6' columns={columns2} dataSource={data2} />
      </div>,
    },
    {
      key: '4',
      label: 'Paramètres de contrôle',
      children: <div className='main'>
        <div className='table1'>
          <div className='table1-header'>
            <p>Liste des brigades</p>
            <Button color='blue' onClick={() => setOpenModal(true)} className='bg-[#4763E4]'>
              <span className='mr-2'>Ajouter</span>
              <Plus />
            </Button>
          </div>
          <TextInput className='input' id="email4" type="email" icon={Search} placeholder="Vous cherchez quel utilisateur ..." required />
          <Table className='mt-6' columns={columns3} dataSource={data3} />
        </div>
        <div className='tb_wrapper'>
          <div className='tb-container'>
            <div className='table1-header'>
              <p>Liste des équipes de contrôle</p>
              <Button color='blue' onClick={() => setOpenModal1(true)} className='bg-[#4763E4]'>
                <span className='mr-2'>Ajouter</span>
                <Plus />
              </Button>
            </div>
            <TextInput className='input w-full' id="email4" type="email" icon={Search} placeholder="Vous cherchez quel utilisateur ..." required />
            <Table pagination={false} className='mt-6 w-full' columns={columns4} dataSource={data4} />
          </div>
          <div className='tb-container'>
            <div className='table1-header'>
              <p>Liste des diligences</p>
              <Button onClick={() => setOpenModal2(true)} color='blue' className='bg-[#4763E4]'>
                <span className='mr-2'>Ajouter</span>
                <Plus />
              </Button>
            </div>
            <TextInput className='input w-full' id="email4" type="email" icon={Search} placeholder="Vous cherchez quel utilisateur ..." required />
            <Table pagination={false} className='mt-6 w-full' columns={columns4} dataSource={data5} />
          </div>
        </div>
      </div>,
    },
  ];

  return (
    <div>
      <header>
        <Breadcrumb
          items={[
            {
              title: 'Contrôle',
            },
            {
              title: 'Gestion des sociétés',
            },
          ]}
        />

        <Bell />
      </header>
      <div className='main'>
        <h2>Contrôle</h2>
        <Tabs className='mb-5' defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
      <Modal size={"6xl"} dismissible show={craModal} onClose={() => setCraModal(false)}>
        <Modal.Header className='mb-[38px]'>Ipsum condimentum viverra nunc pharetra dictumst.</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="base" value="Membre" />
              </div>
              <TextInput placeholder='John Doe' id="base" type="enail" sizing="md" />
            </div>
            <div className="max-w-full h-[200px]">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Profil" />
              </div>
              <Textarea id="comment" className='h-[150px]' placeholder="Decrivez ...." required rows={4} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setCraModal(false)}>Enregistrer</Button>
          <Button color="gray" onClick={() => setCraModal(false)}>
            Annuler
          </Button>
        </Modal.Footer>
      </Modal>
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
            <div className="max-w-full h-[200px]">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Description" />
              </div>
              <Textarea id="comment" className='h-[150px]' placeholder="Decrivez ...." required rows={4} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="base" value="Commissaire de contrôle" />
              </div>
              <TextInput placeholder='John Doe' id="base" type="enail" sizing="md" />
            </div>
            <div className="max-w-full">
              <div className="mb-2 block">
                <Label htmlFor="countries" value="Rôle" />
              </div>
              <Select id="countries" required>
                <option>Web Developer</option>
                <option>Mobile Developer</option>
                <option>Software Engineer</option>
                <option>Graphic Designer</option>
              </Select>
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

export default Controls;