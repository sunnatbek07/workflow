import React, { useState } from 'react';
import logoDark from '../../../public/logoDark.svg';
import patternHexagon from '../../../public/pattern_hexagon.png';
import './style.scss';
import { Sidebar, Button } from 'flowbite-react';
import Settings from '../Ui/Icons/Settings';
import Folder from './../Ui/Icons/Folder';
import Note from './../Ui/Icons/Note';
import Display from './../Ui/Icons/Display';
import Shield from './../Ui/Icons/Shield';
import { Link, NavLink } from 'react-router-dom';
import timCook from "../../../public/timCook.svg";


const Sidebarr = () => {
    return (
        <aside>
            <div className='a_main'>
                <div className='aside_header'>
                    <img src={logoDark} alt="Dark logo" />
                </div>
                <div className="mask relative">
                    <img src={patternHexagon} className='absolute top-0 z-[1]' alt="Mak" />

                    <div className='content relative z-10'>
                        <Sidebar className='w-full' aria-label="Sidebar with multi-level dropdown example">
                            <Sidebar.Items>
                                <Sidebar.ItemGroup>
                                    <Sidebar.Collapse icon={Settings} label="Configuration">
                                        <NavLink to='/'>
                                            <Sidebar.Item>Utilisateurs</Sidebar.Item>
                                        </NavLink>
                                        <NavLink to='/base'>
                                            <Sidebar.Item>Base</Sidebar.Item>
                                        </NavLink>
                                        <NavLink to='/controle'>
                                            <Sidebar.Item>Contrôle</Sidebar.Item>
                                        </NavLink>
                                        <Sidebar.Item className="hover:cursor-not-allowed">Alertes</Sidebar.Item>
                                        <Sidebar.Item className="hover:cursor-not-allowed">Rôles</Sidebar.Item>
                                        <Sidebar.Item className="hover:cursor-not-allowed">Préferences</Sidebar.Item>
                                        <Sidebar.Item className="hover:cursor-not-allowed">Calendrier</Sidebar.Item>
                                    </Sidebar.Collapse>
                                    <Sidebar.Collapse className="hover:cursor-not-allowed" icon={Folder} label="Configuration">
                                        <Sidebar.Item>Base</Sidebar.Item>
                                    </Sidebar.Collapse>
                                    <Sidebar.Collapse className="hover:cursor-not-allowed" icon={Note} label="Configuration">
                                        <Sidebar.Item>Base</Sidebar.Item>
                                    </Sidebar.Collapse>
                                    <Sidebar.Collapse className="hover:cursor-not-allowed" icon={Display} label="Configuration">
                                        <Sidebar.Item>Base</Sidebar.Item>
                                    </Sidebar.Collapse>
                                    <Sidebar.Collapse className="hover:cursor-not-allowed" icon={Shield} label="Configuration">
                                        <Sidebar.Item>Base</Sidebar.Item>
                                    </Sidebar.Collapse>
                                </Sidebar.ItemGroup>
                            </Sidebar.Items>
                        </Sidebar>
                    </div>
                </div>
            </div>

            <div className='aside_footer'>
                <img src={timCook} alt="User avatar" />
                <div className='text'>
                    <h5>Tim Cook</h5>
                    <p>timcook@force.com</p>
                </div>
            </div>
        </aside>
    )
}

export default Sidebarr