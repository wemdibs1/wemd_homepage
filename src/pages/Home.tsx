import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: "story", label: "위엠디 이야기" },
    { id: "branch", label: "본점 소개" },
    { id: "face", label: "얼굴 관리" },
    { id: "body", label: "바디 관리" },
    { id: "custom", label: "맞춤 케어" },
    { id: "contact", label: "입점 문의" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // 헤더 높이
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* 모바일: 로고 좌측, 데스크톱: 로고 좌측 */}
            <div className="flex items-center gap-4 md:gap-6 lg:gap-[40px] lg:ml-8">
              <button onClick={scrollToTop} className="flex items-center hover:opacity-80 transition-opacity">
                <img src="/logo.png" alt="We MD" className="h-11 w-auto" />
              </button>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-4 md:gap-6 lg:gap-[40px]">
                {menuItems.map((item, index) => {
                  const isHighlighted = ['얼굴 관리', '바디 관리', '맞춤 케어'].includes(item.label);
                  const isContact = item.label === '입점 문의';
                  const showDivider = item.label === '본점 소개';
                  
                  return (
                    <React.Fragment key={item.id}>
                      {isContact ? (
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className="px-4 md:px-6 py-2 bg-[#7D5D50] text-white text-sm md:text-base lg:text-[18px] rounded-full hover:bg-[#B90E0A] transition-all duration-300 shadow-md hover:shadow-lg animate-ring-glow"
                        >
                          {item.label}
                        </button>
                      ) : (
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className={`text-sm md:text-base lg:text-[18px] text-[#7D5D50] hover:text-[#B90E0A] transition-all duration-300 ${
                            isHighlighted ? 'font-extrabold' : ''
                          }`}
                        >
                          {item.label}
                        </button>
                      )}
                      {showDivider && (
                        <div className="h-3 w-0.5 bg-[#7D5D50]" />
                      )}
                    </React.Fragment>
                  );
                })}
              </nav>
            </div>

            {/* 데스크톱: We Make a Difference, 모바일: 햄버거 메뉴 */}
            <div className="flex items-center">
              <div className="hidden lg:block text-sm md:text-base lg:text-[18px] font-bold text-[#B90E0A] relative mr-4 md:mr-8">
                <span className="relative inline-block animate-shimmer bg-gradient-to-r from-[#B90E0A] via-[#FF6B6B] to-[#B90E0A] bg-[length:200%_100%] bg-clip-text text-transparent">
                  We Make a Difference
                </span>
              </div>
              {/* Mobile Menu Button - 상단바 우측 */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-[#7D5D50] hover:text-[#B90E0A] transition-colors"
              >
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm pt-20">
          <nav className="flex flex-col items-center gap-8 p-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-2xl font-medium text-[#7D5D50] hover:text-[#B90E0A] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative min-h-screen bg-no-repeat"
        >
          {/* 배경 오버레이 */}
          <div className="absolute inset-0 bg-[#D3BBA1]/30"></div>
          {/* 데스크톱 배경 이미지 */}
          <div className="hidden md:block absolute inset-0" style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundPosition: "right center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
          }}></div>
          {/* 모바일 배경 이미지 */}
          <div className="md:hidden absolute inset-0" style={{
            backgroundImage: "url('/hero-bg-mobile.png')",
            backgroundPosition: "right 30%",
            backgroundSize: "auto 100%",
            backgroundRepeat: "no-repeat"
          }}></div>
          {/* 데스크톱 레이아웃 */}
          <div className="hidden md:flex relative container mx-auto px-4 h-full items-start pt-[230px]">
            <div className="max-w-2xl ml-[200px] space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground/30">
                It's my time to heal.
              </h1>
              <p className="text-2xl text-foreground/60">
                나를 회복시킬 시간
              </p>
              <div className="w-24 h-0.5 bg-foreground/20"></div>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all"
              >
                본점 예약하기
              </Button>
            </div>
          </div>
          {/* 모바일 레이아웃 */}
          <div className="md:hidden relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center pt-[5%]">
            <div className="space-y-4 w-full max-w-sm flex flex-col items-center">
              <img src="/hero-mobile.png" alt="작은얼굴 1cm의 비밀" className="w-auto h-auto max-w-[336px]" />

              <div className="w-full max-w-[336px] flex justify-start">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-3 text-sm shadow-md hover:shadow-lg transition-all mt-4 text-white"
                  style={{ backgroundColor: '#BE3128' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a52820'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#BE3128'}
                >
                  본점 예약하기
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* WeMD Core Values Section */}
        <section id="story" className="min-h-screen py-20 relative" style={{background: 'linear-gradient(to bottom, #D3BBA1, #F5F5F0)'}}>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-[#7D5D50] mb-3 md:mb-4">WeMD Core Values</h2>
            <p className="text-base md:text-xl text-[#7D5D50] mb-12 md:mb-20">기술을 넘어, 손끝으로 전하는 진심</p>
            {/* 데스크톱: 5열 그리드 */}
            <div className="hidden md:grid md:grid-cols-5 gap-6">
              {/* Human */}
              <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-6 shadow-lg transition-all duration-300 group relative aspect-[3/4] overflow-hidden hover:shadow-[0_0_30px_rgba(125,93,80,0.4)] active:scale-95">
                <div className="absolute inset-0 p-3 md:p-6 flex flex-col opacity-100 group-hover:opacity-0 group-active:opacity-0 transition-opacity duration-300">
                  <div className="text-left mb-2 md:mb-4">
                    <h3 className="text-lg md:text-3xl font-bold text-[#7D5D50] mb-0.5 md:mb-1">Human</h3>
                    <p className="text-xs md:text-base text-[#7D5D50]/70">사람</p>
                  </div>
                  <div className="flex-1 flex items-end justify-end" style={{marginBottom: '30px'}}>
                     <img src="/4-4.jpg" alt="Human" className="w-[96%] h-auto object-contain object-right-bottom" />
                  </div>
                </div>
                <div className="absolute inset-0 p-3 md:p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#7D5D50'}}>
                  <p className="text-sm md:text-base text-white leading-relaxed text-center">
                    손끝으로 전하는 진심,<br/>
                    위엠디만의 독보적인 케어로<br/>
                    휴먼 중심의 에스테틱 여정을<br/>
                    완성합니다.
                  </p>
                </div>
              </div>
              
              {/* Technology */}
              <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-6 shadow-lg transition-all duration-300 group relative aspect-[3/4] overflow-hidden hover:shadow-[0_0_30px_rgba(125,93,80,0.4)] active:scale-95">
                <div className="absolute inset-0 p-3 md:p-6 flex flex-col opacity-100 group-hover:opacity-0 group-active:opacity-0 transition-opacity duration-300">
                  <div className="text-left mb-2 md:mb-4">
                    <h3 className="text-lg md:text-3xl font-bold text-[#7D5D50] mb-0.5 md:mb-1">Technology</h3>
                    <p className="text-xs md:text-base text-[#7D5D50]/70">기술</p>
                  </div>
                  <div className="flex-1 flex items-end justify-end" style={{marginBottom: '10px'}}>
                    <img src="/3-3.png" alt="Technology" className="w-4/5 h-auto object-contain object-right-bottom" />
                  </div>
                </div>
                <div className="absolute inset-0 p-3 md:p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#7D5D50'}}>
                  <p className="text-sm md:text-base text-white leading-relaxed text-center">
                    세계적 에스테틱 명인들의<br/>
                    노하우를 결합하여,<br/>
                    K-Healing 브랜드의<br/>
                    새로운 기준을 제시합니다.
                  </p>
                </div>
              </div>
              
              {/* Culture */}
              <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-6 shadow-lg transition-all duration-300 group relative aspect-[3/4] overflow-hidden hover:shadow-[0_0_30px_rgba(125,93,80,0.4)] active:scale-95">
                <div className="absolute inset-0 p-3 md:p-6 flex flex-col opacity-100 group-hover:opacity-0 group-active:opacity-0 transition-opacity duration-300">
                  <div className="text-left mb-2 md:mb-4">
                    <h3 className="text-lg md:text-3xl font-bold text-[#7D5D50] mb-0.5 md:mb-1">Culture</h3>
                    <p className="text-xs md:text-base text-[#7D5D50]/70">문화</p>
                  </div>
                  <div className="flex-1 flex items-end justify-end" style={{marginBottom: '0px'}}>
                    <img src="/culture-hand-v2.png" alt="Culture" className="w-[84.15%] h-auto object-contain object-right-bottom" />
                  </div>
                </div>
                <div className="absolute inset-0 p-3 md:p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#7D5D50'}}>
                  <p className="text-sm md:text-base text-white leading-relaxed text-center">
                    한국 전통 테라피의<br/>
                    철학과 기술을 계승하며,<br/>
                    웰니스 문화를 선도하는<br/>
                    에스테틱 브랜드로 자리합니다.
                  </p>
                </div>
              </div>
              
              {/* Harmony */}
              <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-6 shadow-lg transition-all duration-300 group relative aspect-[3/4] overflow-hidden hover:shadow-[0_0_30px_rgba(125,93,80,0.4)] active:scale-95">
                <div className="absolute inset-0 p-3 md:p-6 flex flex-col opacity-100 group-hover:opacity-0 group-active:opacity-0 transition-opacity duration-300">
                  <div className="text-left mb-2 md:mb-4">
                    <h3 className="text-lg md:text-3xl font-bold text-[#7D5D50] mb-0.5 md:mb-1">Harmony</h3>
                    <p className="text-xs md:text-base text-[#7D5D50]/70">조화</p>
                  </div>
                  <div className="flex-1 flex items-end justify-end" style={{marginBottom: '10px'}}>
                    <img src="/harmony-hand.jpg" alt="Harmony" className="w-4/5 h-auto object-contain object-right-bottom" />
                  </div>
                </div>
                <div className="absolute inset-0 p-3 md:p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#7D5D50'}}>
                  <p className="text-sm md:text-base text-white leading-relaxed text-center">
                    내면과 외면,<br/>
                    아름다움과 감성이<br/>
                    균형을 이루는,<br/>
                    통합적 휴식과 케어를<br/>
                    제공합니다.
                  </p>
                </div>
              </div>
              
              {/* Rest */}
              <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-6 shadow-lg transition-all duration-300 group relative aspect-[3/4] overflow-hidden hover:shadow-[0_0_30px_rgba(125,93,80,0.4)] active:scale-95">
                <div className="absolute inset-0 p-3 md:p-6 flex flex-col opacity-100 group-hover:opacity-0 group-active:opacity-0 transition-opacity duration-300">
                  <div className="text-left mb-2 md:mb-4">
                    <h3 className="text-lg md:text-3xl font-bold text-[#7D5D50] mb-0.5 md:mb-1">Rest</h3>
                    <p className="text-xs md:text-base text-[#7D5D50]/70">쉼</p>
                  </div>
                  <div className="flex-1 flex items-end justify-end" style={{marginBottom: '30px'}}>
                    <img src="/2-2.jpg" alt="Rest" className="w-[92%] h-auto object-contain object-right-bottom" />
                  </div>
                </div>
                <div className="absolute inset-0 p-3 md:p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#7D5D50'}}>
                  <p className="text-sm md:text-base text-white leading-relaxed text-center">
                    세심한 배려와 진심으로<br/>
                    몸과 마음이 동시에<br/>
                    편안함을 느끼며,<br/>
                    일상 속 여유와 평온을<br/>
                    즐길 수 있습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 모바일: 슬라이드 캐러셀 */}
            <div className="md:hidden relative">
              <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                <div className="flex gap-4 px-4">
                  {/* Human */}
                  <div className="flex-shrink-0 w-[42vw] bg-white rounded-xl p-4 shadow-lg transition-all duration-300 group relative aspect-[3/4] overflow-hidden active:scale-95 snap-center">
                    <div className="absolute inset-0 p-4 flex flex-col opacity-100 group-active:opacity-0 transition-opacity duration-300">
                      <div className="text-left mb-2">
                        <h3 className="text-xl font-bold text-[#7D5D50] mb-0.5">Human</h3>
                        <p className="text-sm text-[#7D5D50]/70">사람</p>
                      </div>
                      <div className="flex-1 flex items-end justify-end" style={{marginBottom: '30px'}}>
                        <img src="/4-4.jpg" alt="Human" className="w-[96%] h-auto object-contain object-right-bottom" />
                      </div>
                    </div>
                    <div className="absolute inset-0 p-4 flex items-center justify-center opacity-0 group-active:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#7D5D50'}}>
                      <p className="text-sm text-white leading-relaxed text-center">
                        손끝으로 전하는 진심,<br/>
                        위엠디만의 독보적인 케어로<br/>
                        휴먼 중심의 에스테틱 여정을<br/>
                        완성합니다.
                      </p>
                    </div>
                  </div>

                  {/* Technology */}
                  <div className="flex-shrink-0 w-[42vw] bg-white rounded-xl p-4 shadow-lg transition-all duration-300 group relative aspect-[3/4] overflow-hidden active:scale-95 snap-center">
                    <div className="absolute inset-0 p-4 flex flex-col opacity-100 group-active:opacity-0 transition-opacity duration-300">
                      <div className="text-left mb-2">
                        <h3 className="text-xl font-bold text-[#7D5D50] mb-0.5">Technology</h3>
                        <p className="text-sm text-[#7D5D50]/70">기술</p>
                      </div>
                      <div className="flex-1 flex items-end justify-end" style={{marginBottom: '10px'}}>
                        <img src="/3-3.png" alt="Technology" className="w-4/5 h-auto object-contain object-right-bottom" />
                      </div>
                    </div>
                    <div className="absolute inset-0 p-4 flex items-center justify-center opacity-0 group-active:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#7D5D50'}}>
                      <p className="text-sm text-white leading-relaxed text-center">
                        세계적 에스테틱 명인들의<br/>
                        노하우를 결합하여,<br/>
                        K-Healing 브랜드의<br/>
                        새로운 기준을 제시합니다.
                      </p>
                    </div>
                  </div>

                  {/* Culture */}
                  <div className="flex-shrink-0 w-[42vw] bg-white rounded-xl p-4 shadow-lg transition-all duration-300 group relative aspect-[3/4] overflow-hidden active:scale-95 snap-center">
                    <div className="absolute inset-0 p-4 flex flex-col opacity-100 group-active:opacity-0 transition-opacity duration-300">
                      <div className="text-left mb-2">
                        <h3 className="text-xl font-bold text-[#7D5D50] mb-0.5">Culture</h3>
                        <p className="text-sm text-[#7D5D50]/70">문화</p>
                      </div>
                      <div className="flex-1 flex items-end justify-end" style={{marginBottom: '0px'}}>
                        <img src="/culture-hand-v2.png" alt="Culture" className="w-[84.15%] h-auto object-contain object-right-bottom" />
                      </div>
                    </div>
                    <div className="absolute inset-0 p-4 flex items-center justify-center opacity-0 group-active:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#7D5D50'}}>
                      <p className="text-sm text-white leading-relaxed text-center">
                        한국 전통 테라피의<br/>
                        철학과 기술을 계승하며,<br/>
                        웰니스 문화를 선도하는<br/>
                        에스테틱 브랜드로 자리합니다.
                      </p>
                    </div>
                  </div>

                  {/* Harmony */}
                  <div className="flex-shrink-0 w-[42vw] bg-white rounded-xl p-4 shadow-lg transition-all duration-300 group relative aspect-[3/4] overflow-hidden active:scale-95 snap-center">
                    <div className="absolute inset-0 p-4 flex flex-col opacity-100 group-active:opacity-0 transition-opacity duration-300">
                      <div className="text-left mb-2">
                        <h3 className="text-xl font-bold text-[#7D5D50] mb-0.5">Harmony</h3>
                        <p className="text-sm text-[#7D5D50]/70">조화</p>
                      </div>
                      <div className="flex-1 flex items-end justify-end" style={{marginBottom: '10px'}}>
                        <img src="/harmony-hand.jpg" alt="Harmony" className="w-4/5 h-auto object-contain object-right-bottom" />
                      </div>
                    </div>
                    <div className="absolute inset-0 p-4 flex items-center justify-center opacity-0 group-active:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#7D5D50'}}>
                      <p className="text-sm text-white leading-relaxed text-center">
                        내면과 외면,<br/>
                        아름다움과 감성이<br/>
                        균형을 이루는,<br/>
                        통합적 휴식과 케어를<br/>
                        제공합니다.
                      </p>
                    </div>
                  </div>

                  {/* Rest */}
                  <div className="flex-shrink-0 w-[42vw] bg-white rounded-xl p-4 shadow-lg transition-all duration-300 group relative aspect-[3/4] overflow-hidden active:scale-95 snap-center">
                    <div className="absolute inset-0 p-4 flex flex-col opacity-100 group-active:opacity-0 transition-opacity duration-300">
                      <div className="text-left mb-2">
                        <h3 className="text-xl font-bold text-[#7D5D50] mb-0.5">Rest</h3>
                        <p className="text-sm text-[#7D5D50]/70">쉼</p>
                      </div>
                      <div className="flex-1 flex items-end justify-end" style={{marginBottom: '30px'}}>
                        <img src="/2-2.jpg" alt="Rest" className="w-[92%] h-auto object-contain object-right-bottom" />
                      </div>
                    </div>
                    <div className="absolute inset-0 p-4 flex items-center justify-center opacity-0 group-active:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#7D5D50'}}>
                      <p className="text-sm text-white leading-relaxed text-center">
                        세심한 배려와 진심으로<br/>
                        몸과 마음이 동시에<br/>
                        편안함을 느끼며,<br/>
                        일상 속 여유와 평온을<br/>
                        즐길 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4 text-sm text-[#7D5D50]/60">
                ← 좌우로 슬라이드하세요 →
              </div>
            </div>
          </div>
        </section>

        {/* 본점 소개 Section */}
        <section id="branch" className="min-h-screen bg-[#F5F5F0] pt-20 pb-10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-[#7D5D50] mb-8 md:mb-12">본점 소개</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* 오시는 길 카드 */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold text-[#7D5D50] mb-4 md:mb-6">오시는 길</h3>
                <div className="space-y-3">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    서울특별시 강동구 양재대로 1371,<br />
                    둔촌빌딩 307호
                  </p>
                  <p className="text-sm md:text-base text-gray-700">
                    <span className="font-semibold text-[#B90E0A]">TEL:</span> 02-6959-8989
                  </p>
                </div>
              </div>
              {/* 운영 시간 카드 */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold text-[#7D5D50] mb-4 md:mb-6">운영 시간</h3>
                <div className="space-y-2">
                  <p className="text-sm md:text-base text-gray-700">
                    <span className="font-semibold">평일:</span> 10:00 - 20:00
                  </p>
                  <p className="text-sm md:text-base text-gray-700">
                    <span className="font-semibold">주말:</span> 10:00 - 18:00
                  </p>
                  <p className="text-sm md:text-base text-[#B90E0A] font-semibold mt-3">
                    공휴일 휴무
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 얼굴 관리 Section */}
        <section id="face" className="bg-white">
          {/* 상단 배경 이미지 영역 - 모바일 축소 */}
          <div className="relative h-[250px] md:h-[500px]">
            <img src="/face-section-bg.png" alt="얼굴 관리" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-start pt-8 md:pt-16 px-6 md:px-16">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">얼굴 관리</h2>
              <p className="text-sm md:text-lg text-white/90">&lt;TEXT&gt;</p>
            </div>
          </div>

          {/* 가격 카드 영역 */}
          <div className="container mx-auto px-6 md:px-16 -mt-16 md:-mt-32 relative z-10">
            {/* 데스크톱: 그리드 */}
            <div className="hidden md:grid md:grid-cols-3 gap-6 mb-16">
              {[
                { title: "작은 얼굴 1회 관리" },
                { title: "작은 얼굴 1회 관리" },
                { title: "작은 얼굴 1회 관리" },
              ].map((item, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg">
                  <p className="text-lg text-gray-700 mb-6">{item.title}</p>
                  <p className="text-4xl font-bold text-[#B90E0A] mb-2">₩100,000</p>
                  <p className="text-sm text-gray-600">관리시간 <span className="font-semibold">50분</span></p>
                </div>
              ))}
            </div>
            {/* 모바일: 슬라이드 캐러셀 */}
            <div className="md:hidden mb-12">
              <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                <div className="flex gap-4 px-4">
                  {[
                    { title: "작은 얼굴 1회 관리" },
                    { title: "작은 얼굴 1회 관리" },
                    { title: "작은 얼굴 1회 관리" },
                  ].map((item, index, array) => (
                    <div key={index} className={`flex-shrink-0 w-[80vw] bg-white/90 backdrop-blur-sm rounded-3xl p-6 text-center shadow-lg snap-center ${index === 0 ? 'ml-0' : ''} ${index === array.length - 1 ? 'mr-4' : ''}`}>
                      <p className="text-base text-gray-700 mb-4">{item.title}</p>
                      <p className="text-3xl font-bold text-[#B90E0A] mb-2">₩100,000</p>
                      <p className="text-sm text-gray-600">관리시간 <span className="font-semibold">50분</span></p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center mt-4 text-sm text-[#7D5D50]/60">
                ← 좌우로 슬라이드하세요 →
              </div>
            </div>

            <p className="text-center text-gray-600 mb-16">모든 프로그램 금액은 부가세 포함된 금액입니다.</p>
            
            <h3 className="text-2xl md:text-3xl font-bold text-[#7D5D50] mb-12">프로그램 구성</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
              {[
                "세안 및 기초 피부 정돈",
                "얼굴 집중 관리",
                "어깨, 목 관리",
                "어깨, 목 관리",
                "어깨, 목 관리",
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-full aspect-square bg-gray-200 rounded-lg mb-4"></div>
                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            
            <p className="text-sm text-gray-500 pb-16">*관리 방법에 관한 안내 사항 sample</p>
          </div>
        </section>

        {/* 바디 관리 Section */}
        <section id="body" className="bg-[#F5F5F0]">
          {/* 상단 배경 이미지 영역 - 모바일 축소 */}
          <div className="relative h-[250px] md:h-[500px]">
            <img src="/body-section-bg.png" alt="바디 관리" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-start pt-8 md:pt-16 px-6 md:px-16">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">바디 관리</h2>
              <p className="text-sm md:text-lg text-white/90">&lt;TEXT&gt;</p>
            </div>
          </div>

          {/* 가격 카드 영역 */}
          <div className="container mx-auto px-6 md:px-16 -mt-16 md:-mt-32 relative z-10">
            {/* 데스크톱: 그리드 */}
            <div className="hidden md:grid md:grid-cols-3 gap-6 mb-16">
              {[
                { title: "예빠 몸매 1회 관리" },
                { title: "예빠 몸매 1회 관리" },
                { title: "예빠 몸매 1회 관리" },
              ].map((item, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg">
                  <p className="text-lg text-gray-700 mb-6">{item.title}</p>
                  <p className="text-4xl font-bold text-[#B90E0A] mb-2">₩100,000</p>
                  <p className="text-sm text-gray-600">관리시간 <span className="font-semibold">50분</span></p>
                </div>
              ))}
            </div>
            {/* 모바일: 슬라이드 캐러셀 */}
            <div className="md:hidden mb-12">
              <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                <div className="flex gap-4 px-4">
                  {[
                    { title: "예빠 몸매 1회 관리" },
                    { title: "예빠 몸매 1회 관리" },
                    { title: "예빠 몸매 1회 관리" },
                  ].map((item, index, array) => (
                    <div key={index} className={`flex-shrink-0 w-[80vw] bg-white/90 backdrop-blur-sm rounded-3xl p-6 text-center shadow-lg snap-center ${index === 0 ? 'ml-0' : ''} ${index === array.length - 1 ? 'mr-4' : ''}`}>
                      <p className="text-base text-gray-700 mb-4">{item.title}</p>
                      <p className="text-3xl font-bold text-[#B90E0A] mb-2">₩100,000</p>
                      <p className="text-sm text-gray-600">관리시간 <span className="font-semibold">50분</span></p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center mt-4 text-sm text-[#7D5D50]/60">
                ← 좌우로 슬라이드하세요 →
              </div>
            </div>

            <p className="text-center text-gray-600 mb-16">모든 프로그램 금액은 부가세 포함된 금액입니다.</p>
                  <h3 className="text-xl md:text-3xl font-bold text-[#7D5D50] mb-6 md:mb-12">프로그램 구성</h3>            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
              {[
                "세안 및 기초 피부 정돈",
                "얼굴 집중 관리",
                "어깨, 목 관리",
                "어깨, 목 관리",
                "어깨, 목 관리",
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-full aspect-square bg-gray-200 rounded-lg mb-4"></div>
                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            
            <p className="text-sm text-gray-500 pb-16">*관리 방법에 관한 안내 사항 sample</p>
          </div>
        </section>

        {/* 맞춤 케어 Section */}
        <section id="custom" className="bg-white">
          {/* 상단 배경 이미지 영역 - 모바일 축소 */}
          <div className="relative h-[250px] md:h-[500px]">
            <img src="/custom-section-bg.png" alt="맞춤 케어" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-start pt-8 md:pt-16 px-6 md:px-16">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">맞춤 케어</h2>
              <p className="text-sm md:text-lg text-white/90">&lt;TEXT&gt;</p>
            </div>
          </div>

          {/* 가격 카드 영역 */}
          <div className="container mx-auto px-6 md:px-16 -mt-16 md:-mt-32 relative z-10">
            {/* 데스크톱: 그리드 */}
            <div className="hidden md:grid md:grid-cols-3 gap-6 mb-16">
              {[
                { title: "예빠 몸매 1회 관리" },
                { title: "예빠 몸매 1회 관리" },
                { title: "예빠 몫8매 1회 관리" },
              ].map((item, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg">
                  <p className="text-lg text-gray-700 mb-6">{item.title}</p>
                  <p className="text-4xl font-bold text-[#B90E0A] mb-2">₩100,000</p>
                  <p className="text-sm text-gray-600">관리시간 <span className="font-semibold">50분</span></p>
                </div>
              ))}
            </div>
            {/* 모바일: 슬라이드 캐러셀 */}
            <div className="md:hidden mb-12">
              <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                <div className="flex gap-4 px-4">
                  {[
                    { title: "예빠 몫8매 1회 관리" },
                    { title: "예빠 몫8매 1회 관리" },
                    { title: "예빠 몫8매 1회 관리" },
                  ].map((item, index, array) => (
                    <div key={index} className={`flex-shrink-0 w-[80vw] bg-white/90 backdrop-blur-sm rounded-3xl p-6 text-center shadow-lg snap-center ${index === 0 ? 'ml-0' : ''} ${index === array.length - 1 ? 'mr-4' : ''}`}>
                      <p className="text-base text-gray-700 mb-4">{item.title}</p>
                      <p className="text-3xl font-bold text-[#B90E0A] mb-2">₩100,000</p>
                      <p className="text-sm text-gray-600">관리시간 <span className="font-semibold">50분</span></p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center mt-4 text-sm text-[#7D5D50]/60">
                ← 좌우로 슬라이드하세요 →
              </div>
            </div>

            <p className="text-center text-gray-600 mb-16">모든 프로그램 금액은 부가세 포함된 금액입니다.</p>
            
            <h3 className="text-2xl md:text-3xl font-bold text-[#7D5D50] mb-12">프로그램 구성</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
              {[
                "세안 및 기초 피부 정돈",
                "얼굴 집중 관리",
                "어깨, 목 관리",
                "어깨, 목 관리",
                "어깨, 목 관리",
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-full aspect-square bg-gray-200 rounded-lg mb-4"></div>
                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            
            <p className="text-sm text-gray-500 pb-16">*관리 방법에 관한 안내 사항 sample</p>
          </div>
        </section>

        {/* 입점 문의 Section */}
        <section id="contact" className="min-h-screen bg-[#F5F5F0] py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-[#7D5D50] mb-6 md:mb-8">입점 문의</h2>
            <div className="max-w-2xl mx-auto space-y-8">
              <p className="text-xl text-foreground/80 text-center">
                위엠디와 함께 성장할 파트너를 찾습니다.
              </p>
              <div className="bg-white p-8 rounded-lg shadow-md space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#7D5D50] mb-2">이메일 문의</h3>
                  <p className="text-foreground/70">contact@wemdibs.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#7D5D50] mb-2">전화 문의</h3>
                  <p className="text-foreground/70">02-6959-8989</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#7D5D50] text-[#F0F0E4] py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Tagline */}
            <div className="space-y-4">
              <img src="/logo-white.png" alt="We MD" className="h-16 w-auto" />
              <p className="text-xl font-bold">We Make a Difference</p>
            </div>

            {/* Company Info */}
            <div className="space-y-2">
              <p className="text-lg font-semibold">위엠디아이비에스 주식회사</p>
              <p className="text-base">본사: 서울특별시 강동구 양재대로 1371, 둔촌빌딩 307호</p>
              <p className="text-base">TEL: 02-6959-8989</p>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 items-start">
              <a
                href="#"
                className="bg-[#F0F0E4]/10 hover:bg-[#F0F0E4]/20 p-3 rounded-full transition-colors flex items-center justify-center w-12 h-12"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-[#F0F0E4]/10 hover:bg-[#F0F0E4]/20 p-3 rounded-full transition-colors flex items-center justify-center w-12 h-12"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-[#F0F0E4]/10 hover:bg-[#F0F0E4]/20 p-3 rounded-full transition-colors flex items-center justify-center w-12 h-12"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-[#F0F0E4]/10 hover:bg-[#F0F0E4]/20 p-3 rounded-full transition-colors flex items-center justify-center w-12 h-12"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-[#F0F0E4]/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#F0F0E4]/60">
              <p>© 2025 WeMD ibs. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-[#F0F0E4] transition-colors">개인정보처리방침</a>
                <a href="#" className="hover:text-[#F0F0E4] transition-colors">이용약관</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* 모바일 하단 고정 네비게이션 */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50" style={{backgroundColor: '#D3BBA1'}}>
        <div className="grid grid-cols-4 h-20">
          <a href="#inquiry" className="flex flex-col items-center justify-center gap-1 hover:bg-black/10 transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <span className="text-xs text-white">입점 문의</span>
          </a>
          <a href="#location" className="flex flex-col items-center justify-center gap-1 hover:bg-black/10 transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span className="text-xs text-white">오시는 길</span>
          </a>
          <a href="#plustalk" className="flex flex-col items-center justify-center gap-1 hover:bg-black/10 transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-xs text-white">플러스톡</span>
          </a>
          <a href="tel:02-6959-8989" className="flex flex-col items-center justify-center gap-1 hover:bg-black/10 transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-xs text-white">전화 예약</span>
          </a>
        </div>
      </div>
    </div>
  );
}
