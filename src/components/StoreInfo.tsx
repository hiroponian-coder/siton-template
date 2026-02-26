import React from 'react';
import { getStoreProfile } from '@/lib/supabase';
import { MapPin, Clock, Phone, Instagram, MessageCircle, Twitter } from 'lucide-react';

export default async function StoreInfo() {
    const siteId = process.env.NEXT_PUBLIC_SITE_ID;
    if (!siteId) return null;

    const profile = await getStoreProfile(siteId);
    if (!profile) return null;

    const hasContactInfo = profile.address || profile.business_hours || profile.contact_method;
    const hasSns = profile.instagram_id || profile.line_id || profile.x_id;

    if (!hasContactInfo && !hasSns) return null;

    return (
        <div className="w-full max-w-4xl mx-auto my-12 p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-100 pb-3">店舗情報 / アクセス</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 text-gray-700">
                    {profile.address && (
                        <div className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-gray-400 mt-0.5 shrink-0" />
                            <div>
                                <p className="font-semibold">{profile.address}</p>
                                {profile.access_info && <p className="text-sm text-gray-500 mt-1">{profile.access_info}</p>}
                                {profile.parking_info && <p className="text-sm text-gray-500 mt-1">駐車場: {profile.parking_info}</p>}
                            </div>
                        </div>
                    )}
                    {profile.business_hours && (
                        <div className="flex items-start gap-3">
                            <Clock className="h-5 w-5 text-gray-400 mt-0.5 shrink-0" />
                            <div>
                                <p>{profile.business_hours}</p>
                                {profile.seats_count && <p className="text-sm text-gray-500 mt-1">席数: {profile.seats_count}</p>}
                            </div>
                        </div>
                    )}
                    {profile.contact_method && (
                        <div className="flex items-start gap-3">
                            <Phone className="h-5 w-5 text-gray-400 mt-0.5 shrink-0" />
                            <p>{profile.contact_method}</p>
                        </div>
                    )}
                </div>
                <div className="space-y-4">
                    {profile.address && (
                        <div className="w-full h-48 rounded-xl overflow-hidden border border-gray-100 shadow-sm relative">
                            <iframe
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                src={`https://maps.google.com/maps?q=${encodeURIComponent(`${profile.address} ${profile.store_name || ''}`)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                                className="absolute inset-0 w-full h-full"
                            ></iframe>
                        </div>
                    )}
                    {hasSns && (
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">SNS / リンク</h3>
                            <div className="flex flex-col gap-3">
                                {profile.instagram_id && (
                                    <a href={`https://instagram.com/${profile.instagram_id.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-pink-600 hover:opacity-80 transition-opacity">
                                        <Instagram className="h-5 w-5" />
                                        <span className="text-sm font-medium">@{profile.instagram_id.replace('@', '')}</span>
                                    </a>
                                )}
                                {profile.line_id && (
                                    <a href={profile.line_id.startsWith('http') ? profile.line_id : `https://lin.ee/${profile.line_id}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#06C755] hover:opacity-80 transition-opacity">
                                        <MessageCircle className="h-5 w-5" />
                                        <span className="text-sm font-medium">LINE公式アカウント</span>
                                    </a>
                                )}
                                {profile.x_id && (
                                    <a href={`https://x.com/${profile.x_id.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-black hover:opacity-80 transition-opacity">
                                        <Twitter className="h-5 w-5" />
                                        <span className="text-sm font-medium">@{profile.x_id.replace('@', '')}</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                    {profile.coupon_info && (
                        <div className="mt-6 p-4 bg-orange-50 border border-orange-100 rounded-xl">
                            <h3 className="text-xs font-bold text-orange-800 mb-1 uppercase tracking-wider">クーポン・特典</h3>
                            <p className="text-orange-900 font-medium">{profile.coupon_info}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}