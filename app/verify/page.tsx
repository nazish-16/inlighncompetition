"use client";
import { useState, useRef } from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import { FaFilePdf, FaFileAlt } from 'react-icons/fa';
import AnimatedBackground from '@/components/AnimatedBackground';
import { BackToTop } from '@/components/BackToTop';
import { AnimatedWrapper } from '@/components/AnimatedWrapper';

const VerifyCertificatePage = () => {
    const [internId, setInternId] = useState('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [verificationStatus, setVerificationStatus] = useState<
        'idle' | 'success' | 'error'
    >('idle');
    const [message, setMessage] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleFile = (file: File | undefined | null) => {
        if (file) {
            setSelectedFile(file);
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreviewUrl(reader.result as string);
                };
                reader.readAsDataURL(file);
            } else {
                setPreviewUrl(null);
            }
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleFile(e.target.files?.[0]);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleClearFile = () => {
        setSelectedFile(null);
        setPreviewUrl(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    
    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        handleFile(e.dataTransfer.files?.[0]);
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setVerificationStatus('idle');
        setMessage('');

        await new Promise((resolve) => setTimeout(resolve, 2000));
        
        console.log('Verifying Intern ID:', internId);
        if (selectedFile) {
            console.log('Attached file:', selectedFile.name);
        }

        if (internId.toLowerCase() === 'itid000') {
            setVerificationStatus('success');
            setMessage('Certificate successfully verified! You can view it here.');
        } else {
            setVerificationStatus('error');
            setMessage(
                'Verification failed. Please check your Intern ID and try again.'
            );
        }

        setIsLoading(false);
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col relative">
            <Header />
            <AnimatedBackground/>
            <main className="flex-grow container mx-auto px-4 py-28 flex items-center justify-center relative z-10">
                <AnimatedWrapper>
                <div className="w-full max-w-lg text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Verify Certificate
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Enter your Intern ID and optionally attach an image of your certificate.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="internId" className="block text-sm font-medium text-gray-700 text-left mb-1">Enter Intern ID</label>
                            <input
                                type="text"
                                id="internId"
                                value={internId}
                                onChange={(e) => setInternId(e.target.value)}
                                placeholder="e.g., ITID000"
                                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md"
                                required
                            />
                        </div>

                        <div>
                             <label className="block text-sm font-medium text-gray-700 text-left mb-1">Attach Certificate Image (Optional)</label>
                             {selectedFile ? (
                                <div className="relative w-full max-w-sm mx-auto border rounded-md p-4 bg-gray-50">
                                    <div className="flex flex-col items-center justify-center">
                                        {selectedFile.type.startsWith('image/') && previewUrl ? (
                                            <Image
                                                src={previewUrl}
                                                alt="Certificate Preview"
                                                width={200}
                                                height={150}
                                                className="rounded-md object-contain h-auto max-h-48"
                                            />
                                        ) : (
                                            <div className="flex flex-col items-center justify-center text-center">
                                                {selectedFile.type === 'application/pdf' ? (
                                                    <FaFilePdf className="w-16 h-16 text-red-600" />
                                                ) : (
                                                    <FaFileAlt className="w-16 h-16 text-gray-500" />
                                                )}
                                            </div>
                                        )}
                                        <span className="mt-2 text-sm text-gray-700 font-medium truncate w-full px-2">{selectedFile.name}</span>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={handleClearFile}
                                        className="absolute top-0 right-0 m-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                                        aria-label="Remove image"
                                    >
                                        &#x2715;
                                    </button>
                                </div>
                             ) : (
                                <div
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    onClick={() => fileInputRef.current?.click()}
                                    className={`w-full px-4 py-8 border-2 border-dashed rounded-md text-center cursor-pointer transition ${
                                        isDragging ? 'border-teal-500 bg-teal-50' : 'border-gray-300 hover:border-gray-400'
                                    }`}
                                >
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                    <svg className="mx-auto h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                    </svg>
                                    <p className="mt-2 text-sm text-gray-600">
                                        Drag and drop files here, or{' '}
                                        <span className="font-semibold text-teal-600">
                                            click to select
                                        </span>
                                    </p>
                                </div>
                             )}
                        </div>
                        
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 disabled:bg-gray-400 flex items-center justify-center"
                            disabled={isLoading || !internId}
                        >
                            {isLoading ? (
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : (
                                'Verify'
                            )}
                        </button>
                    </form>

                    {verificationStatus !== 'idle' && (
                        <div
                            className={`mt-6 p-4 rounded-md text-sm ${verificationStatus === 'success'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-red-100 text-red-800'
                                }`}
                        >
                            {message}
                        </div>
                    )}
                    <p className="text-gray-500 mt-6 text-sm">
                        Enter your Intern ID (e.g., ITID000) in the field above to verify your internship certificate. You can find your Intern ID on your offer letter or experience letter.
                    </p>
                </div>
                </AnimatedWrapper>
            </main>
            <AnimatedWrapper>
            <footer className='p-3 text-center items-center flex justify-center bg-gray-200'>
                 <div className="flex items-center text-gray-800 text-sm">
                     © {new Date().getFullYear()} Inlighn
                 </div>
             </footer>
             </AnimatedWrapper>
        <BackToTop/>
        </div>
    );
};

export default VerifyCertificatePage;