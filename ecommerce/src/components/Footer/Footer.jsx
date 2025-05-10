import React from "react";
import './Footer.css'
import { FooterList } from "./FooterList";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitterSquare, FaInstagram, FaTiktok, FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { SiMercadopago } from "react-icons/si";


export const Footer = () => {
    return(
        <footer className="footerSection" id="footer">
            <FooterList>
                <li className="fLinks">Sucursales</li>
                <li className="fLinks">Nuestro equipo</li>
                <li className="fLinks">Conoce más</li>
                <li className="fLinks">Legales</li>
            </FooterList>
            <FooterList>
                <li className="fLinks">Historia</li>
                <li className="fLinks">Trabajá con nostros</li>
                <li className="fLinks">Código de ética</li>
                <li className="fLinks">Hot Sale</li>
            </FooterList>
            <FooterList>
            <li className="fLinks">Términos y condiciones</li>
                <li className="fLinks">Ahorro</li>
                <li className="fLinks">Promociones</li>
                <li className="fLinks">Easy</li>
            </FooterList>
            <FooterList>
                <li><h2>Siguenos</h2></li>
                <li>
                    <IoLogoFacebook className="icono"/>
                    <FaTwitterSquare className="icono"/>
                    <FaInstagram className="icono"/>
                    <FaTiktok className="icono"/>
                    </li>
                <li><h2>Medios de pago</h2></li>
                <li>
                    <FaCcMastercard className="icono"/>
                    <FaCcVisa className="icono"/>
                    <SiMercadopago className="icono"/>
                </li>
            </FooterList>
        </footer>
    )
}