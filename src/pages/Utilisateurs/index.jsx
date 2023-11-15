import React from 'react';
import { Breadcrumb } from 'antd';
import Bell from '../../components/Ui/Icons/Bell';
import { Link } from 'react-router-dom';
import "./style.scss";
import { Label, TextInput, Button } from 'flowbite-react';

const Utilisateurs = () => {
    return (
        <div>
            <header>
                <Breadcrumb
                    items={[
                        {
                            title: 'Configuration',
                        },
                        {
                            title: <Link to='/'>Liste des utilisateurs</Link>
                        },
                        {
                            title: 'Edition d\'un compte'
                        }
                    ]}
                />

                <Bell />
            </header>
            <div className='main'>
                <h2>Configuration</h2>

                <div className='edit'>
                    <h4>Editer un compte</h4>

                    <div className='inputs'>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="base" value="Adresse e-mail" />
                            </div>
                            <TextInput id="base" type="email" sizing="md" />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="base" value="Numéro de téléphone" />
                            </div>
                            <TextInput id="base" type="tel" sizing="md" />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="base" value="Nom" />
                            </div>
                            <TextInput id="base" type="text" sizing="md" />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="base" value="Prénom" />
                            </div>
                            <TextInput id="base" type="text" sizing="md" />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="base" value="Date de création de compte" />
                            </div>
                            <TextInput id="base" type="date" sizing="md" />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="base" value="Date de dernière connexion" />
                            </div>
                            <TextInput id="base" type="date" sizing="md" />
                        </div>
                    </div>

                    <Button color="blue">Modifier</Button>
                </div>
            </div>
        </div>
    )
}

export default Utilisateurs