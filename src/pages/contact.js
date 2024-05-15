"use client"
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../app/globals.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [human, setHuman] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!human) {
            setError('スパム防止のため、チェックボックスにチェックを入れてください。');
            return;
        }
        setError('');
        setSuccess(false);
        setLoading(true);  // ローディング状態を開始
    
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });
            if (res.status === 200) {
                setSuccess(true);
                setName('');
                setEmail('');
                setMessage('');
            } else {
                const data = await res.json();
                setError(data.error);
            }
        } catch (error) {
            setError('送信中にエラーが発生しました。');
        } finally {
            setLoading(false);  // ローディング状態を終了
        }
    };
    

    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">
                <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="">
                    <Image
                        src="/assets/miles-burke.jpg"
                        width={397}
                        height={306}
                        alt="img1"
                        className="object-cover text-centerx w-full rounded-2xl mb-8"
                        data-aos="fade-right"
                    />
                    </div>
                    <h1 className="text-4xl font-bold mb-8">コンタクト</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                お名前
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="お名前"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                メールアドレス
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="メールアドレス"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                メッセージ
                            </label>
                            <textarea
                                id="message"
                                placeholder="メッセージ"
                                rows="10"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            ></textarea>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="human-check"
                                type="checkbox"
                                checked={human}
                                onChange={(e) => setHuman(e.target.checked)}
                                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                            <label htmlFor="human-check" className="ml-2 block text-sm text-gray-900">
                                私は人間です
                            </label>
                        </div>
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        {success && <p className="text-green-500 text-sm mt-2">メールが送信されました。</p>}
                        <button
                            type="submit"
                            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#95c696] hover:bg-[#9cd49d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            disabled={loading}  // ローディング中はボタンを無効化
                        >
                            {loading ? (
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                </svg>
                            ) : (
                                '送信'
                            )}
                        </button>

                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
