import { useEffect, useState } from 'react';
import './ClientsSlider.css';

// Import all client logos directly
import logo1 from '../assets/clients/Adamjee & Luckmanjee (Pvt) Ltd.jpg';
import logo2 from '../assets/clients/Animal Venom Research Institute_Galaha.png';
import logo3 from '../assets/clients/CDP Lanka_Battaramulla.jpg';
import logo4 from '../assets/clients/CML Edwards Plant Complex_Sapugaskanda.jpg';
import logo5 from '../assets/clients/Cape Weligama.jpg';
import logo6 from '../assets/clients/Durdens Hospital Laboratories _Kalubowila, Norris Cannel, Anuradhapura, Jaffna.jpg';
import logo7 from '../assets/clients/Durdens Hospital – Kollupitiya.jpg';
import logo8 from '../assets/clients/EPIC Lanka (Pvt) Ltd.png';
import logo9 from '../assets/clients/Elizabeth Moir Senior & Junior International Schools.jpg';
import logo10 from '../assets/clients/Expo Grand Complex_Kotahena.jpg';
import logo11 from '../assets/clients/Fenex Engineering (Pvt) Ltd_Homagama, Matara, Kotahena.jpg';
import logo12 from '../assets/clients/Glorius Residencies_Colombo.png';
import logo13 from '../assets/clients/ICC LAMC Project_Dehiwala And ICC Departmental Store Complex Project_Wellawatte.jpg';
import logo14 from '../assets/clients/Meridian Apartment_Rajagiriya.jpg';
import logo15 from '../assets/clients/Tess Lanka Rice Mills_Aralaganwila.png';
import logo16 from '../assets/clients/Tudawe Engineering.jpg';
import logo17 from '../assets/clients/YWCA_Colombo.png';

const ClientsSlider = () => {
    const clients = [
        { id: 1, name: 'Adamjee & Luckmanjee', logo: logo1 },
        { id: 2, name: 'Animal Venom Research Institute', logo: logo2 },
        { id: 3, name: 'CDP Lanka', logo: logo3 },
        { id: 4, name: 'CML Edwards Plant Complex', logo: logo4 },
        { id: 5, name: 'Cape Weligama', logo: logo5 },
        { id: 6, name: 'Durdens Hospital Laboratories', logo: logo6 },
        { id: 7, name: 'Durdens Hospital', logo: logo7 },
        { id: 8, name: 'EPIC Lanka', logo: logo8 },
        { id: 9, name: 'Elizabeth Moir Schools', logo: logo9 },
        { id: 10, name: 'Expo Grand Complex', logo: logo10 },
        { id: 11, name: 'Fenex Engineering', logo: logo11 },
        { id: 12, name: 'Glorius Residencies', logo: logo12 },
        { id: 13, name: 'ICC LAMC Project', logo: logo13 },
        { id: 14, name: 'Meridian Apartment', logo: logo14 },
        { id: 15, name: 'Tess Lanka Rice Mills', logo: logo15 },
        { id: 16, name: 'Tudawe Engineering', logo: logo16 },
        { id: 17, name: 'YWCA Colombo', logo: logo17 },
    ];

    // Duplicate clients to create seamless loop
    const midPoint = Math.ceil(clients.length / 2);
    const firstRowClients = [...clients, ...clients, ...clients, ...clients];
    const secondRowClients = [...clients.slice(midPoint), ...clients.slice(0, midPoint), ...clients.slice(midPoint), ...clients.slice(0, midPoint), ...clients.slice(midPoint), ...clients.slice(0, midPoint), ...clients.slice(midPoint), ...clients.slice(0, midPoint)];

    return (
        <section className="clients-section py-20">
            <div className="container-fluid">
                <div className="container">
                    <div className="section-header text-left mb-12">
                        <h2>Our Valued Clients</h2>
                        <p>Trusted by leading organizations across industries</p>
                    </div>
                </div>

                <div className="clients-slider-container">
                    {/* Row 1 - Scroll Left */}
                    <div className="clients-row scroll-left">
                        <div className="clients-track">
                            {firstRowClients.map((client, index) => (
                                <div key={`r1-${index}`} className="client-logo-card" title={client.name}>
                                    <img src={client.logo} alt={client.name} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 2 - Scroll Right */}
                    <div className="clients-row scroll-right">
                        <div className="clients-track">
                            {secondRowClients.map((client, index) => (
                                <div key={`r2-${index}`} className="client-logo-card" title={client.name}>
                                    <img src={client.logo} alt={client.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsSlider;
