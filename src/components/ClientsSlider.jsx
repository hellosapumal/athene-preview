import { useEffect, useState } from 'react';
import './ClientsSlider.css';

const ClientsSlider = () => {
    // Dynamically import all image files from the assets/clients directory
    const logoImports = import.meta.glob('../assets/clients/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' });

    const [clients, setClients] = useState([]);

    useEffect(() => {
        // Transform the imported object into an array of client objects
        const loadedClients = Object.entries(logoImports).map(([path, url], index) => {
            // Extract filename from path (e.g., "../assets/clients/TechCorp.png" -> "TechCorp")
            // Handle multiple extensions by splitting by dot and taking the first part(s)
            const fileNameWithExt = path.split('/').pop();
            const fileName = fileNameWithExt.substring(0, fileNameWithExt.lastIndexOf('.'));

            // Format name: Replace hyphens/underscores with spaces and capitalize
            const formattedName = fileName
                .replace(/[-_]/g, ' ')
                .replace(/\b\w/g, char => char.toUpperCase());

            return {
                id: index,
                name: formattedName,
                logo: url
            };
        });

        setClients(loadedClients);
    }, []);

    // If no clients are loaded yet (folder is empty), we can show a message or nothing
    // For now, let's handle the empty state gracefully or show placeholders if needed.
    // But user specifically asked to get from folder. 

    // Duplicate clients to create seamless loop
    // For horizontal scroll, we need enough duplicates to fill the screen width + buffer
    const duplicatedClients = clients.length > 0
        ? [...clients, ...clients, ...clients, ...clients]
        : [];

    // Split clients into two groups for variety if we have enough, otherwise just use same list
    const midPoint = Math.ceil(clients.length / 2);
    const firstRowClients = clients.length > 0 ? [...clients, ...clients, ...clients, ...clients] : [];
    // For the second row, maybe shift the order or use the same
    const secondRowClients = clients.length > 0 ? [...clients.slice(midPoint), ...clients.slice(0, midPoint), ...clients.slice(midPoint), ...clients.slice(0, midPoint), ...clients.slice(midPoint), ...clients.slice(0, midPoint), ...clients.slice(midPoint), ...clients.slice(0, midPoint)] : [];


    if (clients.length === 0) {
        return (
            <section className="clients-section py-20">
                <div className="container">
                    <div className="section-header text-center mb-12">
                        <h2>Our Valued Clients</h2>
                        <p>Trusted by leading organizations across industries</p>
                    </div>
                    <div className="text-center text-gray-500 py-10 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                        <p>No client logos found.</p>
                        <p className="text-sm mt-2">Please add .png, .jpg, .jpeg, or .svg files to <code>src/assets/clients</code></p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="clients-section py-20">
            <div className="container-fluid"> {/* Use fluid container for full width feel or standard container */}
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
