import React from "react";
import { AddLine } from "../../components/addLine/AddLine";
import { BubbleChartFill } from "../../components/BubbleChartFill/BubbleChartFill";
import { ButtonsIcon } from "../../components/ButtonsIcon/ButtonsIcon";
import { ButtonsLabel } from "../../components/ButtonLabel/ButtonsLabel";
import { CustomerService2Fill } from "../../components/CustomerService2Fill/CustomerService2Fill";
import { FileList2Fill } from "../../components/FileList2Fill/FileList2Fill";
import { MapPin2Line } from "../../components/mapPin2Line/MapPin2Line";
import { PaintBrushLine } from "../../components/PaintBrushLine/PaintBrushLine";
import { Ruler2Line } from "../../components/Ruler2Line/Ruler2Line";
import { User3Fill } from "../../components/User3Fill/User3Fill";
import "./style.css";

export const ProfileMain = () => {
    return (
        <div className="screen">
            <div className="div">
                <div className="navigation-web">
                    <div className="overlap">
                        <div className="overlap-2">
                            <img className="line-v" alt="Line v" src="line-v.svg" />
                            <div className="overview">
                                <div className="overlap-group-wrapper">
                                    <div className="overlap-group-2">
                                        <div className="link">Главная</div>
                                        <div className="text-wrapper"></div>
                                    </div>
                                </div>
                                <div className="navigation-web-2">
                                    <div className="icon-2"></div>
                                    <div className="link-2">Мои заказы</div>
                                </div>
                                <div className="overview-2">Основное</div>
                                <div className="navigation-web-3">
                                    <BubbleChartFill className="remix-icons-fill" color="white" />
                                    <div className="link-2">Мой бонус</div>
                                </div>
                                <div className="navigation-web-4">
                                    <User3Fill className="remix-icons-fill" />
                                    <div className="link-2">Профиль</div>
                                </div>
                                <div className="navigation-web-5">
                                    <FileList2Fill className="remix-icons-fill" color="white" />
                                    <div className="link-2">Новости</div>
                                </div>
                            </div>
                            <div className="navigation-web-6">
                                <CustomerService2Fill className="remix-icons-fill" color="white" />
                                <div className="link-2">Центр поддержки</div>
                            </div>
                        </div>
                        <div className="user-menu">
                            <div className="navigation-web-7">
                                <div className="link-2">Азат Хасаншин</div>
                                <img className="img" alt="Img" src="img.png" />
                            </div>
                        </div>
                        <img className="element" alt="Element" src="3.png" />
                    </div>
                </div>
                <div className="navigation-web-top">
                    <img className="line-h" alt="Line h" src="line-h.svg" />
                    <div className="buttons-px-icon">
                        <div className="link-wrapper">
                            <div className="link-3">
                                <AddLine className="icon-instance-node" />
                                <div className="lable-2">Новый заказ</div>
                            </div>
                        </div>
                    </div>
                    <div className="bell">
                        <div className="overlap-3">
                            <ButtonsIcon
                                className="buttons-12px-icon-transparent-active-onlight"
                                iconClassName="buttons-icon-instance"
                                text=""
                            />
                            <img className="circle" alt="Circle" src="circle.png" />
                        </div>
                    </div>
                    <ButtonsIcon className="buttons-px-icon-instance" iconClassName="buttons-icon-instance" text="" />
                    <div className="title">Главная</div>
                </div>
                <div className="welcome-henry-wrapper">
                    <div className="welcome-henry">Добрый день, Азат!</div>
                </div>
                <div className="group">
                    <div className="title-2">Мои заказы</div>
                    <div className="projects-item-v">
                        <div className="overlap-4">
                            <div className="div-wrapper">
                                <div className="overlap-group-3">
                                    <div className="link-4">
                                        <div className="lable-3">Подробнее</div>
                                    </div>
                                </div>
                            </div>
                            <div className="overlap-wrapper">
                                <div className="tag-wrapper">
                                    <div className="tag">Производим замеры</div>
                                </div>
                            </div>
                            <div className="details">
                                <div className="element-tags">
                                    <img className="bg-hover" alt="Bg hover" src="image.png" />
                                    <div className="lable-4">
                                        <div className="icon-3"></div>
                                        <div className="text-wrapper-2">4</div>
                                    </div>
                                </div>
                                <div className="element-tags-fffa">
                                    <img className="bg-hover-2" alt="Bg hover" src="bg-hover.svg" />
                                    <div className="lable-5">
                                        <div className="icon-3"></div>
                                        <div className="text-wrapper-2">4/36</div>
                                    </div>
                                </div>
                            </div>
                            <div className="lable-6">
                                <MapPin2Line className="icon-instance-node" />
                                <div className="text-wrapper-2">ул. Толстого</div>
                            </div>
                            <div className="name">Казань - Ремонт квартиры</div>
                            <div className="logo">
                                <Ruler2Line className="remix-icons-line" />
                            </div>
                        </div>
                    </div>
                    <div className="projects-item-v-2">
                        <div className="overlap-4">
                            <div className="div-wrapper">
                                <div className="overlap-group-3">
                                    <div className="link-4">
                                        <div className="lable-3">Подробнее</div>
                                    </div>
                                </div>
                            </div>
                            <div className="group-2">
                                <div className="overlap-5">
                                    <div className="tag">Покраска стен</div>
                                </div>
                            </div>
                            <div className="details">
                                <div className="element-tags">
                                    <img className="bg-hover-3" alt="Bg hover" src="bg-hover-2.svg" />
                                    <div className="lable-4">
                                        <div className="icon-3"></div>
                                        <div className="text-wrapper-2">4</div>
                                    </div>
                                </div>
                                <div className="element-tags-fffa">
                                    <img className="bg-hover-4" alt="Bg hover" src="bg-hover-3.svg" />
                                    <div className="lable-7">
                                        <div className="icon-3"></div>
                                        <div className="text-wrapper-2">12/36</div>
                                    </div>
                                </div>
                            </div>
                            <div className="lable-8">
                                <MapPin2Line className="icon-instance-node" />
                                <div className="text-wrapper-2">ул. Жуковского, 29</div>
                            </div>
                            <div className="name">Казань - Ремонт квартиры</div>
                            <div className="logo-2">
                                <div className="remix-icons-line-wrapper">
                                    <PaintBrushLine className="paint-brush-line" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group-3">
                    <div className="report">
                        <div className="overlap-6">
                            <div className="buttons-icon-2">
                                <div className="overlap-group-3">
                                    <div className="link-5">
                                        <div className="lable-3">Вывести средства</div>
                                    </div>
                                </div>
                            </div>
                            <div className="buttons-icon-3">
                                <div className="overlap-group-3">
                                    <div className="link-6">
                                        <div className="lable-3">Потратить</div>
                                    </div>
                                </div>
                            </div>
                            <div className="group-4">
                                <p className="p">Вы заработали на этой неделе</p>
                                <div className="price">43 400 руб.</div>
                            </div>
                            <img className="graph" alt="Graph" src="graph.svg" />
                        </div>
                    </div>
                    <div className="title-2">Мой бонус</div>
                </div>
                <div className="cta">
                    <div className="overlap-7">
                        <div className="cta-2">
                            <div className="mask-group-wrapper">
                                <img className="mask-group" alt="Mask group" src="mask-group.png" />
                            </div>
                        </div>
                        <p className="not-finding-what-you">Хотите зарабатывать вместе с нами?</p>
                        <ButtonsLabel
                            className="buttons-px-label"
                            divClassName="buttons-label-instance"
                            overlapGroupClassName="buttons-14px-label-filled-active-onlight"
                            text="Связаться с нами"
                        />
                        <p className="find-quick-answers-t">Мы ищем новых партнеров для открытия франшизы</p>
                    </div>
                </div>
                <div className="navigation-web-8">
                    <div className="link-7">
                        <div className="icon-4"></div>
                        <div className="lable-3">Казань</div>
                    </div>
                    <div className="links">
                        <div className="text-wrapper-2">Политика конфиденциальности</div>
                        <div className="text-wrapper-2">Лицензия</div>
                        <div className="text-wrapper-2">Франшиза</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileMain
