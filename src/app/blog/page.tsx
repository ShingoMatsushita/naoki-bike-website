import type { Metadata } from 'next';
import Image from 'next/image';
import { ContactCTA } from '@/components/common/ContactCTA';
import { BlogFilter } from '@/components/features/BlogFilter';
import { getBlogPosts } from '@/lib/api/blog';

export const metadata: Metadata = {
  title: 'お知らせ・ブログ',
  description: '直樹バイクの最新情報、お知らせ、イベント情報などを発信しています。',
};

export default async function BlogPage() {
  // Fetch posts from microCMS
  const { contents: posts } = await getBlogPosts(20);

  // Fallback dummy data if no posts
  const fallbackPosts = [
    {
      id: '1',
      title: '新着バイク入荷のお知らせ - CB1300 SF・Ninja400',
      category: 'お知らせ' as const,
      publishedAt: '2026-04-01',
      thumbnail: { url: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=2070&auto=format&fit=crop', width: 1200, height: 800 },
      content: '',
      createdAt: '',
      updatedAt: '',
    },
    {
      id: '2',
      title: 'ゴールデンウィーク営業のご案内',
      category: 'お知らせ' as const,
      publishedAt: '2026-03-28',
      thumbnail: { url: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070&auto=format&fit=crop', width: 1200, height: 800 },
      content: '',
      createdAt: '',
      updatedAt: '',
    },
    {
      id: '3',
      title: '春のメンテナンスキャンペーン開催中！オイル交換20%OFF',
      category: 'イベント' as const,
      publishedAt: '2026-03-25',
      thumbnail: { url: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop', width: 1200, height: 800 },
      content: '',
      createdAt: '',
      updatedAt: '',
    },
    {
      id: '4',
      title: 'バイクのオイル交換時期について - 適切なタイミングとは',
      category: 'メンテナンス情報' as const,
      publishedAt: '2026-03-20',
      thumbnail: { url: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2072&auto=format&fit=crop', width: 1200, height: 800 },
      content: '',
      createdAt: '',
      updatedAt: '',
    },
    {
      id: '5',
      title: '春のツーリングスポット特集 - 関東近郊おすすめコース5選',
      category: 'コラム' as const,
      publishedAt: '2026-03-15',
      thumbnail: { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop', width: 1200, height: 800 },
      content: '',
      createdAt: '',
      updatedAt: '',
    },
    {
      id: '6',
      title: '定休日変更のお知らせ',
      category: 'お知らせ' as const,
      publishedAt: '2026-03-10',
      thumbnail: { url: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070&auto=format&fit=crop', width: 1200, height: 800 },
      content: '',
      createdAt: '',
      updatedAt: '',
    },
    {
      id: '7',
      title: 'バイクの冬眠前準備 - 長期保管のポイント',
      category: 'メンテナンス情報' as const,
      publishedAt: '2026-03-05',
      thumbnail: { url: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop', width: 1200, height: 800 },
      content: '',
      createdAt: '',
      updatedAt: '',
    },
    {
      id: '8',
      title: 'バイクカスタム相談会開催のお知らせ',
      category: 'イベント' as const,
      publishedAt: '2026-03-01',
      thumbnail: { url: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?q=80&w=2070&auto=format&fit=crop', width: 1200, height: 800 },
      content: '',
      createdAt: '',
      updatedAt: '',
    },
    {
      id: '9',
      title: 'バイク初心者向け - 車種選びのポイント',
      category: 'コラム' as const,
      publishedAt: '2026-02-25',
      thumbnail: { url: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=2070&auto=format&fit=crop', width: 1200, height: 800 },
      content: '',
      createdAt: '',
      updatedAt: '',
    },
    {
      id: '10',
      title: 'タイヤの寿命と交換時期の見極め方',
      category: 'メンテナンス情報' as const,
      publishedAt: '2026-02-20',
      thumbnail: { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop', width: 1200, height: 800 },
      content: '',
      createdAt: '',
      updatedAt: '',
    },
    {
      id: '11',
      title: '年末年始の営業時間のお知らせ',
      category: 'お知らせ' as const,
      publishedAt: '2026-02-15',
      thumbnail: { url: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070&auto=format&fit=crop', width: 1200, height: 800 },
      content: '',
      createdAt: '',
      updatedAt: '',
    },
    {
      id: '12',
      title: '雨の日のバイク走行 - 安全運転のコツ',
      category: 'コラム' as const,
      publishedAt: '2026-02-10',
      thumbnail: { url: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?q=80&w=2070&auto=format&fit=crop', width: 1200, height: 800 },
      content: '',
      createdAt: '',
      updatedAt: '',
    },
  ];

  // Use microCMS data if available, otherwise use fallback
  const displayPosts = posts.length > 0 ? posts : fallbackPosts;

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover object-center"
            alt="お知らせ"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Red Accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[--color-primary]/20 to-transparent"></div>

        <div className="container-custom text-center relative z-10">
          <p className="text-xs md:text-sm font-bold mb-3 text-white/90 tracking-widest uppercase">
            News & Blog
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            お知らせ・ブログ
          </h1>
        </div>
      </section>

      <BlogFilter posts={displayPosts} />

      <ContactCTA />
    </>
  );
}
