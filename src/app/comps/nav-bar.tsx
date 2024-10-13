import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import myLogo from '../images/mylogo.png';

export function NavBar() {
    const [spin, setSpin] = useState(false);
    const [primaryColor, setPrimaryColor] = useState('rgb(215, 207, 187)')
    const [secondaryColor, setSecondaryColor] = useState('rgb(86, 84, 73)')

    const updateColor = (color: string, setter: (color: string) => void, cssVar: string) => {
        setter(color)
        document.documentElement.style.setProperty(cssVar, color)
    }


    useEffect(() => {
        // Start the spinning animation after the component mounts
        setSpin(true);
        // Stop spinning after 2 seconds (adjust the duration as needed)
        const timer = setTimeout(() => {
            setSpin(false);
        }, 2000);
        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', zIndex: 9999, position: 'relative' }}>
            <div style={{ display: 'flex', gap: '30px' }}>
                <Link href="/" className="flex items-center">
                    <Image
                        src={myLogo} // Replace with your logo path
                        alt="Logo"
                        width={48} // Set desired width
                        height={48} // Set desired height
                        className={`rounded-full ${spin ? 'spin' : ''}`} // Add spin class conditionally
                    />
                </Link>
                <div className="flex items-center space-x-4">
                    <div className="relative" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <strong className='primary-font'>Primary</strong>
                        <input
                            type="color"
                            value={primaryColor}
                            onChange={(e) => updateColor(e.target.value, setPrimaryColor, '--primary')}
                            className="sr-only"
                            id="primaryColorPicker"
                        />
                        <label
                            htmlFor="primaryColorPicker"
                            className="block w-8 h-8 rounded-full cursor-pointer border border-gray-300"
                            style={{ backgroundColor: primaryColor, border: '2px solid #000' }}
                            title="Primary Color"
                        />
                    </div>
                    <div className="relative" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <strong className='primary-font'>Secondary</strong>
                        <input
                            type="color"
                            value={secondaryColor}
                            onChange={(e) => updateColor(e.target.value, setSecondaryColor, '--secondary')}
                            className="sr-only"
                            id="secondaryColorPicker"
                        />
                        <label
                            htmlFor="secondaryColorPicker"
                            className="block w-8 h-8 rounded-full cursor-pointer border border-gray-300"
                            style={{ backgroundColor: secondaryColor, border: '2px solid #000' }}
                            title="Secondary Color"
                        />
                    </div>
                </div>
            </div>
            <nav className="hidden md:block">
                <ul className="flex space-x-4 primary-font">
                    {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                        <li key={item}>
                            <Link href={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`} className="px-3 py-2 rounded transition-colors">
                                <p className='navbar'>{item}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <style jsx>{`
                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                .spin {
                    animation: spin 2s linear forwards; // Adjust duration here
                }
            `}</style>
        </div>
    );
}
