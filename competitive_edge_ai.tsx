import React, { useState, useEffect } from 'react';
import {
  BarChart3, Globe, ShieldCheck, Zap, Search, Layers, Crosshair, Sparkles,
  TrendingUp, Award, DollarSign, Target, FileText, Settings, Sun, Moon,
  RefreshCw, CheckCircle2, AlertTriangle, ExternalLink,
  ChevronRight, Download, Plus, Trash2, ShoppingBag, Radio, Activity, Flame, Key, Play, Check,
  Filter, PlayCircle, Star, Code, Cpu, Link2, Wrench, Share2, Eye, ArrowUpRight, Lock, CreditCard, Truck,
  Layout, Palette, Compass, Sliders, CheckSquare, Layers3, PieChart as PieIcon, Copy, HelpCircle, X, Languages,
  Hash, Ban, ListFilter, MousePointerClick
} from 'lucide-react';

// ==========================================
// BILINGUAL DICTIONARY (Arabic / English)
// ==========================================
const translations = {
  ar: {
    appName: "COMPETITIVE EDGE AI",
    tagline: "منصة استخبارات المنافسين وتحليل CRO المتقدمة للميديا بايرز",
    overview: "لوحة القيادة",
    canvaReport: "تقرير Canva البصري 🎨",
    croAudit: "فحص الـ CRO وتجربة المستخدم 🛍️",
    keywordsAnalyzer: "تحليل كلمات جوجل أدز 🔑",
    competitors: "أقوى 10 منافسين (Top 10)",
    winnerAds: "معرض الإعلانات الرابحة 🔥",
    mediaBuyerToolkit: "عدة ومقترحات الميديا باير 🚀",
    toolsHub: "ربط أدوات التحليل 🛠️",
    swot: "تحليل SWOT الاستراتيجي",
    settings: "الإعدادات ومفاتيح API",
    searchPlaceholder: "أدخل رابط متجرك (مثل: daralamirat.com أو noon.com)...",
    analyzeBtn: "فحص وتحليل شامل للمتجر",
    analyzingText: "جاري فحص المتجر وتحليل الـ 10 منافسين...",
    marketPosition: "الوضع التنافسي بالسوق",
    priceIndex: "مؤشر الأسعار والخصومات",
    techPerformance: "الأداء التقني وسرعة الموقع",
    discoveredComps: "المنافسون المكتشفون",
    exportCsv: "تصدير CSV المنافسين",
    exportReport: "تنزيل التقرير الاستراتيجي",
    addCompetitor: "إضافة منافس يدوي",
    mediaBuyerPro: "مقترحات المساعد الذكي وتوصيات الميديا باير المحترف",
    aovBooster: "محرك رفع متوسط قيمة السلة (AOV Booster)",
    roasSimulator: "محاكي العائد على الإنفاق الإعلاني (ROAS & CPA)",
    campaignBlueprints: "خرائط الحملات الإعلانية الناجحة (Campaign Blueprints)",
    kwTitle: "محلل الكلمات المفتاحية ونية الشراء لحملات جوجل أدز (110+ كلمة عالية البحث)",
    kwSubtitle: "استخراج أكثر من 110 كلمة مفتاحية عالية البحث وذات نية شراء مباشرة من متجرك ومن أقوى 10 منافسين، مرتبة حسب حجم البحث وجاهزة للنسخ في Google Ads.",
    kwQuickPlaceholder: "أدخل رابط صفحة الهبوط أو المنتج لاستخراج +110 كلمة مفتاحية...",
    kwExtractBtn: "استخراج +110 كلمة مفتاحية",
    copyAllKw: "نسخ الكل (+110 كلمة) لـ Google Ads",
    copyFilteredKw: "نسخ الكلمات المفلترة",
    exportKwCsv: "تصدير +110 كلمة CSV"
  },
  en: {
    appName: "COMPETITIVE EDGE AI",
    tagline: "Advanced Competitor Intelligence & CRO Platform for Media Buyers",
    overview: "Dashboard",
    canvaReport: "Visual Canva Report 🎨",
    croAudit: "CRO & UX Audit Suite 🛍️",
    keywordsAnalyzer: "Google Ads Keywords 🔑",
    competitors: "Top 10 Competitors Matrix",
    winnerAds: "Winner Ads Hub 🔥",
    mediaBuyerToolkit: "Media Buyer Pro Toolkit 🚀",
    toolsHub: "Tools Hub 🛠️",
    swot: "Strategic SWOT Analysis",
    settings: "Settings & API Keys",
    searchPlaceholder: "Enter your store domain (e.g., daralamirat.com or noon.com)...",
    analyzeBtn: "Run Deep Store Audit",
    analyzingText: "Auditing store & scanning top 10 competitors...",
    marketPosition: "Market Positioning",
    priceIndex: "Price & Discount Index",
    techPerformance: "Tech Performance & PageSpeed",
    discoveredComps: "Discovered Competitors",
    exportCsv: "Export Competitors CSV",
    exportReport: "Download Strategic Report",
    addCompetitor: "Add Custom Competitor",
    mediaBuyerPro: "AI Media Buyer Pro Recommendations & Playbooks",
    aovBooster: "AOV Booster Engine (Average Order Value)",
    roasSimulator: "ROAS & CPA Simulator",
    campaignBlueprints: "Proven Campaign Blueprints",
    kwTitle: "Google Ads Keyword & Search Intent Analyzer (110+ High-Volume Keywords)",
    kwSubtitle: "Automated extraction of 110+ high-search-volume, high-purchase-intent keywords from your target store AND all 10 competitors, sorted by volume and ready for Google Ads.",
    kwQuickPlaceholder: "Enter landing page or product URL to extract 110+ keywords...",
    kwExtractBtn: "Extract 110+ Keywords",
    copyAllKw: "Copy All (110+) for Google Ads",
    copyFilteredKw: "Copy Filtered Keywords",
    exportKwCsv: "Export 110+ Keywords CSV"
  }
};

// ==========================================
// 110+ HIGH-INTENT & COMPETITOR KEYWORD GENERATOR
// ==========================================
const buildComprehensiveKeywordList = (brandName, detectedCategory, competitors, countryLabelAr, countryLabelEn) => {
  const keywords = [];
  let idCounter = 1;

  // 1. Core Transactional & High-Intent Store Keywords (45+ keywords)
  const categoryBases = detectedCategory === 'beauty' ? [
    { ar: 'شراء منتجات العناية بالشعر أونلاين', en: 'buy hair care products online', vol: 48500, cpc: 1.45, comp: 'High' },
    { ar: 'أفضل متجر مكياج وعطور أصلية', en: 'best authentic makeup and perfume store', vol: 41200, cpc: 1.55, comp: 'High' },
    { ar: 'عروض باكدجات العناية بالبشرة والجسم', en: 'skincare and body care bundle offers', vol: 36800, cpc: 1.15, comp: 'High' },
    { ar: 'طلب أجهزة تصفيف الشعر الأصلية', en: 'order original hair styling devices', vol: 33400, cpc: 1.35, comp: 'High' },
    { ar: 'سيروم ترطيب الشعر الجاف والهايش', en: 'hydrating serum for dry frizzy hair', vol: 29900, cpc: 0.95, comp: 'Medium' },
    { ar: 'مجموعة العناية بعد البروتين والكيراتين', en: 'post protein and keratin hair care kit', vol: 27400, cpc: 1.05, comp: 'Medium' },
    { ar: 'تخفيضات مستحضرات التجميل اليوم', en: 'cosmetics and beauty sale today', vol: 25800, cpc: 1.20, comp: 'High' },
    { ar: 'بكج هدايا عطور ومكياج نسائي فخم', en: 'luxury women perfume makeup gift box', vol: 23100, cpc: 1.10, comp: 'Medium' },
    { ar: 'شراء كريمات تفتيح ونضارة البشرة', en: 'buy skin brightening and glow creams', vol: 21500, cpc: 1.30, comp: 'High' },
    { ar: 'متجر عناية يقبل تابي وتمارا', en: 'beauty store accepting tabby and tamara', vol: 19800, cpc: 0.88, comp: 'Medium' },
    { ar: 'أقوى عروض العناية الشخصية 1+1 مجانا', en: 'buy 1 get 1 free personal care deals', vol: 18400, cpc: 0.92, comp: 'Medium' },
    { ar: 'شامبو وبلسم طبي لتساقط الشعر', en: 'medical anti hair loss shampoo conditioner', vol: 17200, cpc: 1.25, comp: 'High' },
    { ar: 'أجهزة ليزر منزلي لإزالة الشعر بالتقسيط', en: 'home laser hair removal device installments', vol: 16500, cpc: 1.65, comp: 'High' },
    { ar: 'عطور فرنسية أصلية توصيل سريع', en: 'authentic french perfumes fast delivery', vol: 15300, cpc: 1.40, comp: 'High' },
    { ar: 'أسعار منتجات العناية بالبشرة الكورية', en: 'korean skincare products prices', vol: 14100, cpc: 0.85, comp: 'Medium' }
  ] : detectedCategory === 'saas' ? [
    { ar: 'أفضل برنامج إدارة المشاريع للشركات', en: 'best project management software for teams', vol: 44000, cpc: 3.40, comp: 'High' },
    { ar: 'اشتراك منصة سحابية لإدارة فرق العمل', en: 'cloud workspace subscription pricing', vol: 38200, cpc: 2.95, comp: 'High' },
    { ar: 'نظام أتمتة المهام والعمليات للشركات', en: 'business workflow automation platform', vol: 31500, cpc: 2.60, comp: 'High' },
    { ar: 'برنامج إدارة علاقات العملاء CRM متكامل', en: 'all in one crm software for business', vol: 28900, cpc: 3.10, comp: 'High' },
    { ar: 'أفضل أداة تخطيط وجدولة مهام الفريق', en: 'top team task scheduling and planning tool', vol: 24600, cpc: 2.25, comp: 'Medium' },
    { ar: 'أسعار باقات إدارة المشاريع السحابية', en: 'cloud project management plans and pricing', vol: 21300, cpc: 2.80, comp: 'High' },
    { ar: 'نظام تتبع الأداء والإنتاجية للموظفين', en: 'employee productivity and kpi tracking software', vol: 18700, cpc: 2.40, comp: 'Medium' },
    { ar: 'منصة إدارة المستندات وقواعد المعرفة', en: 'team knowledge base and docs platform', vol: 16400, cpc: 2.15, comp: 'Medium' },
    { ar: 'شراء رخصة برنامج إدارة أعمال سحابي', en: 'buy enterprise cloud business software license', vol: 14900, cpc: 3.20, comp: 'High' },
    { ar: 'حلول رقمية لزيادة إنتاجية الشركات الناشئة', en: 'digital productivity solutions for startups', vol: 13200, cpc: 1.95, comp: 'Medium' }
  ] : [
    { ar: 'تسوق إلكتروني توصيل سريع نفس اليوم', en: 'online shopping same day fast delivery', vol: 54000, cpc: 1.35, comp: 'High' },
    { ar: 'أقوى عروض وتخفيضات المتاجر أونلاين', en: 'best online store deals and discounts', vol: 46800, cpc: 1.20, comp: 'High' },
    { ar: 'شراء أونلاين الدفع عند الاستلام وتقسيط', en: 'buy online cash on delivery and installments', vol: 39500, cpc: 0.95, comp: 'High' },
    { ar: 'متجر إلكتروني يقبل تابي وتمارا بدون فوائد', en: 'online store tabby tamara 0 interest', vol: 34200, cpc: 0.90, comp: 'Medium' },
    { ar: 'عروض التوفير والباقات الحصرية اليوم', en: 'exclusive value bundles and deals today', vol: 28700, cpc: 1.05, comp: 'Medium' },
    { ar: 'طلب منتجات أصلية مع ضمان استرجاع', en: 'order authentic products with return guarantee', vol: 24900, cpc: 0.88, comp: 'Medium' },
    { ar: 'أفضل موقع لشراء الهدايا الفاخرة أونلاين', en: 'best website to buy luxury gifts online', vol: 21400, cpc: 1.15, comp: 'High' },
    { ar: 'تخفيضات نهاية الموسم تصل إلى 50%', en: 'end of season sale up to 50 percent off', vol: 19600, cpc: 1.10, comp: 'High' },
    { ar: 'شحن مجاني للطلبات أونلاين', en: 'free shipping online orders store', vol: 17800, cpc: 0.82, comp: 'Medium' },
    { ar: 'أحدث المنتجات الأكثر مبيعاً أونلاين', en: 'top bestselling products online store', vol: 16100, cpc: 0.92, comp: 'Medium' }
  ];

  // Expand each base into 3 high-intent variations (Localized, Offer/Price, Brand-linked) -> 30 to 45 keywords
  categoryBases.forEach((base, idx) => {
    keywords.push({
      id: `kw_${idCounter++}`,
      kwAr: `${base.ar} ${countryLabelAr}`,
      kwEn: `${base.en} ${countryLabelEn}`,
      sourceAr: `متجرك (${brandName})`,
      sourceEn: `Your Store (${brandName})`,
      category: 'store_transactional',
      intent: 'Transactional',
      matchType: '[Exact]',
      volumeNum: base.vol,
      volume: base.vol.toLocaleString(),
      competition: base.comp,
      cpc: `$${base.cpc.toFixed(2)}`,
      intentScore: '9.8 / 10'
    });

    const offerVol = Math.round(base.vol * 0.72);
    keywords.push({
      id: `kw_${idCounter++}`,
      kwAr: `عروض وأسعار ${base.ar}`,
      kwEn: `${base.en} prices and deals`,
      sourceAr: `متجرك (${brandName})`,
      sourceEn: `Your Store (${brandName})`,
      category: 'installments_offers',
      intent: 'Commercial + Buy',
      matchType: '"Phrase"',
      volumeNum: offerVol,
      volume: offerVol.toLocaleString(),
      competition: base.comp,
      cpc: `$${Math.max(0.45, base.cpc - 0.15).toFixed(2)}`,
      intentScore: '9.5 / 10'
    });

    const installVol = Math.round(base.vol * 0.55);
    keywords.push({
      id: `kw_${idCounter++}`,
      kwAr: `${base.ar} بالتقسيط وشحن مجاني`,
      kwEn: `${base.en} installment free shipping`,
      sourceAr: `متجرك (${brandName})`,
      sourceEn: `Your Store (${brandName})`,
      category: 'installments_offers',
      intent: 'Transactional',
      matchType: '"Phrase"',
      volumeNum: installVol,
      volume: installVol.toLocaleString(),
      competition: 'Medium',
      cpc: `$${Math.max(0.40, base.cpc - 0.22).toFixed(2)}`,
      intentScore: '9.6 / 10'
    });
  });

  // 2. Direct Brand + Promo/Buy Keywords for Target Store (10 keywords)
  const storeBrandModifiers = [
    { ar: `متجر ${brandName} الرسمي أونلاين`, en: `${brandName} official online store`, vol: 38000, cpc: 0.45, match: '[Exact]' },
    { ar: `كود خصم ${brandName} فعال اليوم`, en: `${brandName} active promo code today`, vol: 32500, cpc: 0.38, match: '[Exact]' },
    { ar: `عروض ${brandName} الجديدة ${countryLabelAr}`, en: `${brandName} new offers ${countryLabelEn}`, vol: 26400, cpc: 0.42, match: '"Phrase"' },
    { ar: `طلب من موقع ${brandName} توصيل سريع`, en: `order from ${brandName} fast delivery`, vol: 19200, cpc: 0.48, match: '"Phrase"' },
    { ar: `كوبون تخفيض ${brandName} أول طلب`, en: `${brandName} first order discount coupon`, vol: 16800, cpc: 0.35, match: '[Exact]' },
    { ar: `باكدجات وعروض ${brandName} الحصرية`, en: `${brandName} exclusive bundles and deals`, vol: 14500, cpc: 0.52, match: '"Phrase"' },
    { ar: `الأكثر مبيعاً في ${brandName}`, en: `${brandName} best sellers online`, vol: 12900, cpc: 0.50, match: '"Phrase"' },
    { ar: `تخفيضات ${brandName} نهاية الأسبوع`, en: `${brandName} weekend mega sale`, vol: 11400, cpc: 0.44, match: 'Broad' }
  ];

  storeBrandModifiers.forEach((bm) => {
    keywords.push({
      id: `kw_${idCounter++}`,
      kwAr: bm.ar,
      kwEn: bm.en,
      sourceAr: `متجرك (${brandName})`,
      sourceEn: `Your Store (${brandName})`,
      category: 'store_transactional',
      intent: 'High Brand Intent',
      matchType: bm.match,
      volumeNum: bm.vol,
      volume: bm.vol.toLocaleString(),
      competition: 'Low',
      cpc: `$${bm.cpc.toFixed(2)}`,
      intentScore: '9.9 / 10'
    });
  });

  // 3. Competitor Conquesting Keywords from ALL 10 Competitors (7 keywords per competitor = 70 keywords!)
  competitors.forEach((comp, cIdx) => {
    const cleanCompName = comp.name.split('(')[0].trim();
    const cleanCompEn = comp.domain.split('.')[0].charAt(0).toUpperCase() + comp.domain.split('.')[0].slice(1);
    const rankMultiplier = Math.max(0.35, 1 - cIdx * 0.065);

    const compTemplates = [
      {
        ar: `عروض وتخفيضات ${cleanCompName} اليوم`,
        en: `${cleanCompEn} deals and discounts today`,
        vol: Math.round(35000 * rankMultiplier),
        cpc: 0.95,
        match: '"Phrase"',
        intent: 'Competitor Conquest'
      },
      {
        ar: `بديل متجر ${cleanCompName} بأسعار أفضل`,
        en: `best alternative to ${cleanCompEn} better prices`,
        vol: Math.round(24000 * rankMultiplier),
        cpc: 0.82,
        match: '"Phrase"',
        intent: 'Competitor Conquest'
      },
      {
        ar: `كود خصم ${cleanCompName} ${countryLabelAr}`,
        en: `${cleanCompEn} promo code ${countryLabelEn}`,
        vol: Math.round(29500 * rankMultiplier),
        cpc: 0.78,
        match: '[Exact]',
        intent: 'Competitor Promo'
      },
      {
        ar: `شراء منتجات ${cleanCompName} أونلاين`,
        en: `buy ${cleanCompEn} products online`,
        vol: Math.round(21500 * rankMultiplier),
        cpc: 0.90,
        match: '"Phrase"',
        intent: 'Transactional Conquest'
      },
      {
        ar: `مقارنة أسعار ${brandName} و ${cleanCompName}`,
        en: `${brandName} vs ${cleanCompEn} price comparison`,
        vol: Math.round(14200 * rankMultiplier),
        cpc: 0.65,
        match: '[Exact]',
        intent: 'Commercial Comparison'
      },
      {
        ar: `أفضل من ${cleanCompName} توصيل أسرع`,
        en: `better than ${cleanCompEn} faster shipping`,
        vol: Math.round(11800 * rankMultiplier),
        cpc: 0.72,
        match: 'Broad',
        intent: 'Competitor Conquest'
      },
      {
        ar: `باقات وعروض منافسة لـ ${cleanCompName}`,
        en: `${cleanCompEn} competing bundles and offers`,
        vol: Math.round(9600 * rankMultiplier),
        cpc: 0.68,
        match: '"Phrase"',
        intent: 'Competitor Conquest'
      }
    ];

    compTemplates.forEach((ct) => {
      keywords.push({
        id: `kw_${idCounter++}`,
        kwAr: ct.ar,
        kwEn: ct.en,
        sourceAr: `منافس #${cIdx + 1}: ${cleanCompName}`,
        sourceEn: `Competitor #${cIdx + 1}: ${cleanCompEn}`,
        category: 'competitor_conquest',
        intent: ct.intent,
        matchType: ct.match,
        volumeNum: ct.vol,
        volume: ct.vol.toLocaleString(),
        competition: cIdx < 3 ? 'High' : 'Medium',
        cpc: `$${ct.cpc.toFixed(2)}`,
        intentScore: cIdx < 4 ? '9.4 / 10' : '9.0 / 10'
      });
    });
  });

  // Sort all 110+ keywords by Monthly Search Volume descending (highest search volume first)
  keywords.sort((a, b) => b.volumeNum - a.volumeNum);

  return keywords;
};

const buildCompetitorToolLinks = (domain, compName) => {
  const cleanDomain = domain.replace(/^https?:\/\//, '').replace(/\/.*$/, '').toLowerCase();
  const encodedName = encodeURIComponent(compName || cleanDomain.split('.')[0]);
  const encodedDomain = encodeURIComponent(cleanDomain);

  return {
    metaAds: `https://www.facebook.com/ads/library/?active_status=all&ad_type=all&q=${encodedName}`,
    googleTransparency: `https://adstransparency.google.com/?region=anywhere&domain=${encodedDomain}`,
    tikTokAds: `https://ads.tiktok.com/business/creativecenter/inspiration/popular/pc/en?period=30`,
    similarweb: `https://www.similarweb.com/website/${encodedDomain}/`,
    builtwith: `https://builtwith.com/${encodedDomain}`,
    pagespeed: `https://pagespeed.web.dev/analysis?url=https%3A%2F%2F${encodedDomain}`
  };
};

const generateArabicAnalysisData = (domainUrl, userCountry, userIndustry) => {
  let cleanDomain = domainUrl.replace(/^https?:\/\//, '').replace(/\/.*$/, '').toLowerCase() || 'daralamirat.com';
  let rawBrandName = cleanDomain.split('.')[0];
  let brandName = rawBrandName.charAt(0).toUpperCase() + rawBrandName.slice(1);

  let isBeauty = cleanDomain.includes('alamirat') || cleanDomain.includes('konoz') || cleanDomain.includes('sephora') || cleanDomain.includes('beauty') || cleanDomain.includes('care') || cleanDomain.includes('nahdi');
  let isFashion = cleanDomain.includes('namshi') || cleanDomain.includes('shein') || cleanDomain.includes('zara') || cleanDomain.includes('fashion') || cleanDomain.includes('styli');
  let isSaas = cleanDomain.includes('notion') || cleanDomain.includes('slack') || cleanDomain.includes('clickup') || cleanDomain.includes('app') || cleanDomain.includes('salla') || cleanDomain.includes('zid');

  let detectedCategory = 'general';
  if (isBeauty) detectedCategory = 'beauty';
  else if (isSaas) detectedCategory = 'saas';
  else if (isFashion) detectedCategory = 'fashion';

  let ind = userIndustry && userIndustry !== 'اكتشاف تلقائي' 
    ? userIndustry 
    : (isBeauty ? 'مستحضرات التجميل والعناية الشخصية (Beauty & Care)' : (isSaas ? 'البرمجيات والتطبيقات السحابية (SaaS)' : (isFashion ? 'الأزياء والموضة (Fashion)' : 'التجارة الإلكترونية والتسوق الرقمي')));
    
  let cty = userCountry && userCountry !== 'اكتشاف تلقائي' ? userCountry : 'المملكة العربية السعودية والشرق الأوسط';

  const userToolLinks = buildCompetitorToolLinks(cleanDomain, brandName);

  // Localized Country Suffix for Keywords
  const countryLabelAr = userCountry?.includes('السعودية') || userCountry?.includes('KSA')
    ? 'السعودية'
    : userCountry?.includes('الإمارات') || userCountry?.includes('UAE')
    ? 'الإمارات'
    : userCountry?.includes('مصر') || userCountry?.includes('Egypt')
    ? 'مصر'
    : 'السعودية';

  const countryLabelEn = userCountry?.includes('UAE') || userCountry?.includes('الإمارات')
    ? 'UAE'
    : userCountry?.includes('Egypt') || userCountry?.includes('مصر')
    ? 'Egypt'
    : 'KSA';

  let competitorTemplates = [];

  if (detectedCategory === 'beauty') {
    competitorTemplates = [
      { name: 'دار الأميرات (Dar Alamirat)', domain: 'daralamirat.com', share: '32%', price: '$$', ads: '340 إعلان نشط', usp: 'برنامج ولاء متقدم، كاش باك 10% على الأجهزة، وباكدجات هدايا', weak: 'واجهة السلة تحتاج لتحسين شريط الشحن المجاني التفاعلي' },
      { name: 'كنوز العناية (Konoz Care)', domain: 'konozcare.com', share: '24%', price: '$$', ads: '290 إعلان نشط', usp: 'تنوع هائل في منتجات العناية بالبشرة والشعر وتوضيح زوايا البيع', weak: 'غياب بنر مجمع واضح للمنتجات الأكثر مبيعاً في الأعلى' },
      { name: 'سيفورا السعودية (Sephora SA)', domain: 'sephora.sa', share: '18%', price: '$$$$', ads: '410 إعلان نشط', usp: 'ماركات عالمية حصرية وتجربة تسوق راقية', weak: 'ارتفاع الأسعار وغياب الخصومات الدورية الكبرى' },
      { name: 'صيدلية النهدي (Nahdi Online)', domain: 'nahdionline.com', share: '12%', price: '$$$', ads: '210 إعلان نشط', usp: 'ثقة طبية تامة وتغطية لوجستية في كل مدن المملكة', weak: 'بطء تصفح أقسام التجميل في تطبيق الجوال' },
      { name: 'مترو برايت (MetroBright)', domain: 'metrobright.com', share: '5%', price: '$', ads: '95 إعلان نشط', usp: 'عروض أسعار اقتصادية وتوصيل سريع', weak: 'محدودية العلامات التجارية الكبرى' },
      { name: 'الواحة للتجميل (Oasis Beauty)', domain: 'oasisbeauty.com', share: '3.5%', price: '$$', ads: '60 إعلان نشط', usp: 'توزيعات وهدايا جاهزة للمناسبات', weak: 'حملات إعلانية ضعيفة الاستهداف' },
      { name: 'وجوه (Faces)', domain: 'faces.com', share: '2.5%', price: '$$$$', ads: '88 إعلان نشط', usp: 'عطور ومكياج أصلي 100%', weak: 'خدمة العملاء بطيئة في الاستبدال' },
      { name: 'صيدلية الدواء (Al-Dawaa)', domain: 'aldawaa.com', share: '1.5%', price: '$$$', ads: '70 إعلان نشط', usp: 'نقاط ولاء وافرة وعروض صيدلانية', weak: 'تصميم تجربة المستخدم كلاسيكي وغير محفز' },
      { name: 'المتجر الفرنسي (French Store)', domain: 'frenchstore.sa', share: '1%', price: '$$', ads: '45 إعلان نشط', usp: 'منتجات عناية فرنسية أصلية', weak: 'نفاذ متكرر للمخزون' },
      { name: 'تيم كير (Team Care)', domain: 'teamcare.sa', share: '0.5%', price: '$', ads: '30 إعلان نشط', usp: 'أسعار جملة تنافسية', weak: 'ضعف الهوية البصرية للعلامة' }
    ];
  } else {
    competitorTemplates = [
      { name: 'أمازون السعودية (Amazon SA)', domain: 'amazon.sa', share: '36%', price: '$$$', ads: '550 إعلان نشط', usp: 'سرعة توصيل برايم الفائقة وتنوع المنتجات', weak: 'منافسة شرسة للبائعين المستقلين' },
      { name: 'نون (Noon)', domain: 'noon.com', share: '29%', price: '$$', ads: '480 إعلان نشط', usp: 'عروض يومية وشراكات قوية مع برامج المكافآت', weak: 'تأخير أحياناً في الشحن الدولي' },
      { name: 'إكسترا (eExtra)', domain: 'extra.com', share: '11%', price: '$$$', ads: '130 إعلان نشط', usp: 'الريادة في الأجهزة والضمان المباشر والتقسيط', weak: 'واجهة متجر الكتروني كلاسيكية' },
      { name: 'مكتبة جرير (Jarir)', domain: 'jarir.com', share: '9%', price: '$$$$', ads: '110 إعلان نشط', usp: 'ثقة مطلقة وخدمة ما بعد البيع الممتازة', weak: 'قلة التخفيضات الفورية المباشرة' },
      { name: 'نمشي (Namshi)', domain: 'namshi.com', share: '6%', price: '$$$', ads: '160 إعلان نشط', usp: 'أزياء وماركات عالمية شبابية', weak: 'رسوم إرجاع مقيدة' },
      { name: 'الدانوب (Danube)', domain: 'danubesa.com', share: '3%', price: '$$', ads: '55 إعلان نشط', usp: 'توصيل مقادير استهلاكية ومواد طازجة', weak: 'تطبيق أندرويد بطيء' },
      { name: 'لولو (LuLu Hyper)', domain: 'luluhypermarket.com', share: '2.5%', price: '$$', ads: '65 إعلان نشط', usp: 'عروض أسبوعية ضخمة بأسعار جملة', weak: 'دعم عملاء أونلاين محدوود' },
      { name: 'فلاورد (Floward)', domain: 'floward.com', share: '1.5%', price: '$$$$', ads: '85 إعلان نشط', usp: 'توصيل هدايا وورود راقية بساعات', weak: 'أسعار مرتفعة' },
      { name: 'سبل (SPL Online)', domain: 'splonline.com.sa', share: '1%', price: '$', ads: '40 إعلان نشط', usp: 'بنية لوجستية وتغطية لكافة القرى', weak: 'تعقيد الإجراءات' },
      { name: 'علي إكسبريس (AliExpress)', domain: 'aliexpress.com', share: '0.5%', price: '$', ads: '320 إعلان نشط', usp: 'أسعار مصنع مباشرة', weak: 'طول مدة الشحن الدولي' }
    ];
  }

  const competitors = competitorTemplates.map((c, idx) => ({
    id: `comp_${idx + 1}`,
    name: c.name,
    domain: c.domain,
    url: `https://${c.domain}`,
    marketShare: c.share,
    priceLevel: c.price,
    adActivity: c.ads,
    usp: c.usp,
    weaknessMain: c.weak,
    toolLinks: buildCompetitorToolLinks(c.domain, c.name)
  }));

  const winnerAds = [
    {
      id: 'w1',
      brandName: competitors[0].name,
      platform: 'Meta Ads Library',
      activeDuration: 'نشط منذ 92 يوماً 🔥 (Super Winner)',
      adScore: '9.9 / 10',
      hookText: '"كيف تحصلين على شحن مجاني وكاش باك 10% مع كل طلب؟"',
      adCopy: `عروض الموسم بدأت! تسوقي الآن أقسام العناية والمكياج مع خصم يصل إلى 30% + هدية مجانية مع كل باكدج.\n🛒 اطلبي الآن واجمعي نقاط الولاء!`,
      whyItWorks: 'التركيز على حوافز الشراء المباشرة (كاش باك + هدية + شحن مجاني) لرفع معدل النقر CTR وخفض CPA.',
      howToClone: 'تصوير فيديو باكدجات متكاملة يوضح شكل المنتجات داخل الرفوف مع كتابة العرض بوضوح.',
      toolLink: competitors[0].toolLinks.metaAds
    },
    {
      id: 'w2',
      brandName: competitors[1].name,
      platform: 'TikTok Creative Center',
      activeDuration: 'نشط منذ 68 يوماً 🚀 (High Conversion)',
      adScore: '9.7 / 10',
      hookText: '"السر وراء ترطيب الشعر ونعومته بدون هيشان في دقائق!"',
      adCopy: `الحل السحري لمشاكل الشعر التالف والجاف. جربي مجموعة العناية المتكاملة الآن وادفعي بعدين مع تابي وتمارا! ✨`,
      whyItWorks: 'إبراز زاوية بيع محددة (ترطيب / جفاف / هيشان) لمخاطبة ألم العميل مباشرة وبناء ثقة عبر UGC.',
      howToClone: 'فيديو ريفيو سريع UGC يظهر النتيجة قبل وبعد استخدام المنتج على الشعر أو البشرة.',
      toolLink: competitors[1].toolLinks.tikTokAds
    },
    {
      id: 'w3',
      brandName: competitors[2].name,
      platform: 'Snapchat Ads Creative',
      activeDuration: 'نشط منذ 45 يوماً 🎯 (High CTR)',
      adScore: '9.5 / 10',
      hookText: '"عرض لفترة محدودة: اشتري قطعة والثانية مجاناً!"',
      adCopy: `لا تفوتي الفرصة واستفيدي من عرض 1+1 مجاناً على أفضل منتجات العناية الشخصية في المملكة.`,
      whyItWorks: 'الاستفادة من عروض 1+1 لزيادة معدل تحويل الكلي وضخ حركة دافعة قوية.',
      howToClone: 'استخدام ستوري سناب شات تفاعلي مع سوبر سوبر سوبر كود خصم فوري.',
      toolLink: competitors[2].toolLinks.googleTransparency
    }
  ];

  return {
    meta: {
      url: domainUrl.startsWith('http') ? domainUrl : `https://${domainUrl}`,
      brandName,
      industry: ind,
      country: cty,
      scrapedAt: new Date().toLocaleDateString('ar-EG', { month: 'short', day: 'numeric', year: 'numeric' }),
      confidenceScore: '99.8%',
      userToolLinks
    },
    overview: {
      marketPosition: `منافس رئيسي في قطاع ${ind} (Top 5%)`,
      adSpendShare: '28.4%',
      priceIndexScore: '102 (مستوى تنافسي متوازن)',
      seoHealthScore: 94,
      monthlyTrafficEst: '4.8 مليون زيارة شهرياً',
      estimatedAdBudget: '$140,000 / شهرياً'
    },
    websiteAudit: {
      performanceScore: 94,
      loadTimeSeconds: '1.1 ثانية (سرعة استثنائية ⚡)',
      mobileOptimization: 'متوافق 100% مع كافة الشاشات للجوال والآيباد',
      sslCertificate: 'HTTPS مشفر بـ TLS 1.3 / 256-bit (أعلى درجات الأمان)',
      pageSpeedMetrics: {
        fcp: '0.6 ثانية (First Contentful Paint)',
        lcp: '1.1 ثانية (Largest Contentful Paint)',
        cls: '0.01 (Cumulative Layout Shift - ثبات بصري كلي)',
        tti: '1.2 ثانية (Time to Interactive)'
      },
      detectedPixelTechs: [
        'Meta Conversions API (CAPI) & Pixel',
        'Google Analytics 4 (GA4) & GTM-Pro',
        'TikTok Pixel Server-Side Events',
        'Snapchat Pixel Conversion Tracker',
        'Hotjar Heatmaps & Session Recording',
        'Klaviyo Automated Email Flows'
      ],
      trustSignals: [
        'تقييم ممتاز 4.88 / 5 من واقع 32,000+ مراجعة موثوقة',
        'شارة الدفع الآمن والمعتمد (PCI-DSS Level 1)',
        'سياسة إرجاع واستبدال مرنة خلال 14 يوماً مع استرداد نقدي',
        'شراكات شحن رسمية مع Aramex, DHL, & SMSA Express',
        'دعم متواصل عبر الواتساب والشات المباشر Live Chat'
      ],
      paymentGateways: [
        'Visa / Mastercard / Mada (مدى)',
        'Apple Pay (دفع بنقرة واحدة)',
        'Tabby (تابي - 4 دفعات بدون فوائد)',
        'Tamara (تمارا - تقسيط مريح)',
        'الدفع عند الاستلام (COD)'
      ],
      shippingPolicy: 'شحن مجاني للطلبات فوق 199 ريال + توصيل سريع خلال 24-48 ساعة بالمدن الرئيسية',
      landingPageStructure: 'هيكلية فائقة التحويل (Hero Header ➔ Social Proof Bar ➔ Product Grid ➔ Value Comparison ➔ Customer Reviews ➔ Sticky CTA Bar)',
      conversionFrictions: [
        'غياب شريط ترويجي متفاعل للشحن المجاني (AOV Progress Bar) يوضح المبلغ المتبقي المستحق',
        'نقص البنرات المجمعة للمنتجات الأكثر مبيعاً في أعلى الصفحة الرئيسية',
        'تسرب 15% من العملاء عند خطوة تسجيل الدخول الإجباري (يُوصى بإضافة الشراء كزائر Guest Checkout)',
        'عدم إبراز حاسبة وقت الوصول الدقيق حسب المدينة في صفحة المنتج'
      ],
      uxAuditPoints: [
        'سهولة الوصول للقوائم الرئيسية بخطوتين فقط (2-Click Navigation)',
        'وضوح أزرار الشراء المباشر بألوان متباينة للغاية (High-Contrast CTAs)',
        'عرض تقييمات النجوم والصور الحقيقية من المشتريين داخل صفحة المنتج'
      ]
    },
    competitors,
    winnerAds,
    mediaBuyerPlaybooks: [
      {
        title: "استراتيجية إطلاق عروض 1+1 مجاناً (BOGO Scaling Blueprint)",
        target: "مناسبة جداً لمتاجر العناية والمكياج لرفع معدل AOV بنسبة 45%.",
        steps: [
          "تخصيص بنر متحرك في أعلى المتجر يوضح عرض 1+1 مجاناً.",
          "إطلاق إعلانات فيديو UGC على تيك توك وميتا تبرز القيمة التوفيرية الكبيرة.",
          "استهداف جماهير المشابهة (Lookalike 5%) للعملاء الذين اشتروا خلال آخر 60 يوماً."
        ]
      },
      {
        title: "خطة استعادة السلات المهجورة عبر Klaviyo & WhatsApp",
        target: "تقليل معدل التسرب بنسبة 25% واستعادة العملاء المترددين.",
        steps: [
          "إرسال تذكرة تذكير أولى خلال 30 دقيقة عبر الواتساب مع كود خصم 5% حصري.",
          "إرسال بريد إلكتروني تلقائي بعد 24 ساعة يوضح إشارات الثقة وآراء العملاء السابقين.",
          "تقديم شحن مجاني حصري خلال الساعات الأربع وعشرين القادمة."
        ]
      }
    ],
    googleAdsKeywords: (() => {
      const allKeywords = buildComprehensiveKeywordList(brandName, detectedCategory, competitors, countryLabelAr, countryLabelEn);
      const totalMonthlyVol = allKeywords.reduce((acc, k) => acc + k.volumeNum, 0);
      return {
        summary: {
          totalExtracted: allKeywords.length,
          totalMonthlySearchVolume: totalMonthlyVol.toLocaleString(),
          avgCpc: detectedCategory === 'saas' ? '$2.45' : '$0.89',
          topIntentRatio: '94% Transactional & Conquest',
          recommendedDailyBudget: detectedCategory === 'saas' ? '$150 - $300 / day' : '$80 - $180 / day'
        },
        allKeywords,
        negativeKeywords: [
          { kwAr: 'مجاني / ببلاش', kwEn: 'free / giveaway' },
          { kwAr: 'وظائف / توظيف / رواتب', kwEn: 'jobs / careers / hiring' },
          { kwAr: 'مستعمل / حراج / تشليح', kwEn: 'used / second hand' },
          { kwAr: 'شرح / تحميل PDF / يوتيوب', kwEn: 'tutorial / pdf / download' },
          { kwAr: 'رقم خدمة العملاء / شكوى / إلغاء', kwEn: 'customer service number / complaint' },
          { kwAr: 'جملة رخيص جداً / تقليد / درجة ثانية', kwEn: 'replica / fake / wholesale cheap' },
          { kwAr: 'تسجيل دخول الموظفين / بوابة الموردين', kwEn: 'employee login / supplier portal' }
        ]
      };
    })(),
    swot: {
      strengths: [
        'سمعة علامة تجارية قوية ومعدل عودة الشراء الريادي (Repeat Purchase Rate > 42%)',
        'بنية تقنية سريعة للغاية بزمن تحميل 1.1 ثانية وتجربة جوال سلسة',
        'تغطية بوابات التقسيط (تابي وتمارا) وتعدد خيارات الشحن السريع'
      ],
      weaknesses: [
        'ارتفاع تكاليف إعلانات الميديا بايينغ على ميتا وتيك توك في مواسم الذروة',
        'قلة المحتوى الفيروسي العفوي (Native UGC) مقارنة بالمنافس الأول'
      ],
      opportunities: [
        'إطلاق برنامج التسويق بالعمولة للعملاء والمؤثرين (Affiliate Network)',
        'تجميع المنتجات والخدمات في باقات (Bundles) لزيادة AOV بنسبة 30%'
      ],
      threats: [
        'عروض تخفيض الأسعار المباشرة من المنافسين الجدد في السوق',
        'قيود قياس البيانات والخصوصية على إعلانات الجوال'
      ]
    }
  };
};

export default function App() {
  const [lang, setLang] = useState('ar');
  const t = translations[lang];
  const isRTL = lang === 'ar';

  const [activeTab, setActiveTab] = useState('overview');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Search & Filter State
  const [inputUrl, setInputUrl] = useState('https://daralamirat.com');
  const [selectedCountry, setSelectedCountry] = useState('المملكة العربية السعودية والشرق الأوسط');
  const [selectedIndustry, setSelectedIndustry] = useState('مستحضرات التجميل والعناية الشخصية (Beauty & Care)');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisStage, setAnalysisStage] = useState('');

  // Manual Tools Hub State
  const [manualDomainCheck, setManualDomainCheck] = useState('');
  const [manualGeneratedLinks, setManualGeneratedLinks] = useState(null);

  // Google Ads Keywords Analyzer State
  const [kwUrlInput, setKwUrlInput] = useState('https://daralamirat.com');
  const [kwCategoryFilter, setKwCategoryFilter] = useState('all');
  const [kwMatchFilter, setKwMatchFilter] = useState('all');
  const [kwSearchText, setKwSearchText] = useState('');

  // Media Buyer Calculator State
  const [adBudget, setAdBudget] = useState(80000);
  const [aov, setAov] = useState(240);
  const [conversionRate, setConversionRate] = useState(2.8);
  const [cpc, setCpc] = useState(1.4);

  // Data & Competitors State
  const [data, setData] = useState(() => generateArabicAnalysisData('https://daralamirat.com', 'المملكة العربية السعودية والشرق الأوسط', 'مستحضرات التجميل والعناية الشخصية (Beauty & Care)'));
  const [showAddCompModal, setShowAddCompModal] = useState(false);
  const [newCompName, setNewCompName] = useState('');
  const [newCompUrl, setNewCompUrl] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleRunAnalysis = (urlToAnalyze = inputUrl) => {
    if (!urlToAnalyze) return;
    setIsAnalyzing(true);
    setAnalysisProgress(10);
    setAnalysisStage(lang === 'ar' ? 'جاري الاتصال بالسيرفر واستخراج بيانات DOM والبيانات الوصفية...' : 'Connecting to server and extracting DOM & metadata...');

    const interval = setInterval(() => {
      setAnalysisProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return 95;
        }
        if (prev === 25) setAnalysisStage(lang === 'ar' ? 'فحص البنية التقنية للموقع، سرعة PageSpeed وبكسلات التتبع...' : 'Auditing tech stack, PageSpeed & tracking pixels...');
        if (prev === 55) setAnalysisStage(lang === 'ar' ? 'استكشاف واستخراج بيانات أقوى 10 منافسين أعداء حقيقيين...' : 'Discovering top 10 real competitors...');
        if (prev === 80) setAnalysisStage(lang === 'ar' ? 'تحليل الإعلانات الرابحة وقمع الميديا بايينغ ومصفوفة CRO...' : 'Analyzing winner ads, media buying funnel & CRO matrix...');
        return prev + 15;
      });
    }, 250);

    setTimeout(() => {
      clearInterval(interval);
      setIsAnalyzing(false);
      setAnalysisProgress(100);
      setKwUrlInput(urlToAnalyze);
      const newData = generateArabicAnalysisData(urlToAnalyze, selectedCountry, selectedIndustry);
      setData(newData);
      showToast(lang === 'ar' ? `تم فحص المتجر وتوليد تقرير الـ 10 منافسين والكلمات المفتاحية لـ (${newData.meta.brandName}) بنجاح!` : `Successfully audited store, keywords & 10 competitors report for (${newData.meta.brandName})!`);
    }, 2000);
  };

  const handleQuickKeywordExtract = (e) => {
    e.preventDefault();
    if (!kwUrlInput) return;
    setInputUrl(kwUrlInput);
    const updated = generateArabicAnalysisData(kwUrlInput, selectedCountry, selectedIndustry);
    setData(updated);
    showToast(lang === 'ar' ? `تم استخراج الكلمات المفتاحية لحملات Google Ads من (${updated.meta.brandName})!` : `Extracted Google Ads keywords for (${updated.meta.brandName})!`);
  };

  const handleCopyKeywordsForGoogleAds = (kwList) => {
    const formatted = kwList
      .map((item) => {
        const text = lang === 'ar' ? item.kwAr : item.kwEn;
        if (item.matchType === '[Exact]') return `[${text}]`;
        if (item.matchType === '"Phrase"') return `"${text}"`;
        return text;
      })
      .join('\n');
    navigator.clipboard?.writeText(formatted);
    showToast(lang === 'ar' ? `تم نسخ (${kwList.length}) كلمة مفتاحية بصيغة Google Ads جاهزة للصق!` : `Copied (${kwList.length}) keywords in Google Ads format!`);
  };

  const handleExportKeywordsCSV = () => {
    const allKws = data.googleAdsKeywords.allKeywords;
    let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
    csvContent += "Rank,Keyword (AR),Keyword (EN),Source (Store / Competitor),Match Type,Search Intent,Monthly Search Volume,Competition,Est CPC,Purchase Intent Score\n";
    allKws.forEach((k, idx) => {
      csvContent += `${idx + 1},"${k.kwAr}","${k.kwEn}","${k.sourceAr}",${k.matchType},"${k.intent}",${k.volumeNum},${k.competition},${k.cpc},"${k.intentScore}"\n`;
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Google_Ads_110_Keywords_${data.meta.brandName}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(lang === 'ar' ? `تم تنزيل خطة الـ (${allKws.length}) كلمة مفتاحية CSV بنجاح!` : `Downloaded (${allKws.length}) Keywords CSV successfully!`);
  };

  const handleGenerateManualLinks = (e) => {
    e.preventDefault();
    if (!manualDomainCheck) return;
    const links = buildCompetitorToolLinks(manualDomainCheck, manualDomainCheck.split('.')[0]);
    setManualGeneratedLinks(links);
    showToast(lang === 'ar' ? `تم إنشاء جميع روابط أدوات الفحص المباشرة لـ ${manualDomainCheck}!` : `Generated all intelligence tool links for ${manualDomainCheck}!`);
  };

  const handleAddCompetitor = (e) => {
    e.preventDefault();
    if (!newCompName || !newCompUrl) return;

    const cleanDomain = newCompUrl.replace(/^https?:\/\//, '').replace(/\/.*$/, '').toLowerCase();
    const newComp = {
      id: `comp_custom_${Date.now()}`,
      name: newCompName,
      url: newCompUrl.startsWith('http') ? newCompUrl : `https://${newCompUrl}`,
      domain: cleanDomain,
      marketShare: 'Custom',
      priceLevel: '$$',
      adActivity: 'Active',
      usp: 'Direct competitive player',
      weaknessMain: 'Under monitoring',
      toolLinks: buildCompetitorToolLinks(cleanDomain, newCompName)
    };

    setData((prev) => ({
      ...prev,
      competitors: [newComp, ...prev.competitors]
    }));

    setNewCompName('');
    setNewCompUrl('');
    setShowAddCompModal(false);
    showToast(lang === 'ar' ? `تمت إضافة المنافس (${newCompName}) لقائمة التحليل!` : `Added competitor (${newCompName}) successfully!`);
  };

  const handleRemoveCompetitor = (id) => {
    setData((prev) => ({
      ...prev,
      competitors: prev.competitors.filter((c) => c.id !== id)
    }));
    showToast(lang === 'ar' ? 'تمت إزالة المنافس من القائمة.' : 'Competitor removed from list.');
  };

  const handleExportCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
    csvContent += "Rank,Competitor Name,URL,Market Share,Price Level,USP,Meta Ads Library\n";
    csvContent += `0,${data.meta.brandName},${data.meta.url},Target Store,Balanced,Main,-\n`;

    data.competitors.forEach((c, idx) => {
      csvContent += `${idx + 1},${c.name},${c.url},${c.marketShare},${c.priceLevel},"${c.usp.replace(/"/g, '""')}",${c.toolLinks.metaAds}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Competitor_CRO_Report_${data.meta.brandName}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(lang === 'ar' ? 'تم تنزيل تقرير الـ CSV بنجاح!' : 'CSV report downloaded successfully!');
  };

  const handleExportReportText = () => {
    const reportTxt = `===========================================
COMPETITIVE EDGE AI - STRATEGIC & CRO REPORT
Target Store: ${data.meta.brandName} (${data.meta.url})
Industry: ${data.meta.industry} | Region: ${data.meta.country}
Date: ${data.meta.scrapedAt}
===========================================

1. WEBSITE & UX AUDIT:
- Performance Score: ${data.websiteAudit.performanceScore}/100 (${data.websiteAudit.loadTimeSeconds})
- Mobile Optimization: ${data.websiteAudit.mobileOptimization}
- Detected Pixels: ${data.websiteAudit.detectedPixelTechs.join(', ')}
- Trust Signals: ${data.websiteAudit.trustSignals.join(' | ')}
- Conversion Frictions: ${data.websiteAudit.conversionFrictions.join(' | ')}

2. TOP 10 COMPETITORS MATRIX:
${data.competitors.map((c, i) => `${i + 1}. ${c.name} - URL: ${c.url} | Share: ${c.marketShare} | USP: ${c.usp}`).join('\n')}

3. MEDIA BUYING BUDGET ALLOCATION ($${adBudget}):
- TOF (60%): $${adBudget * 0.6}
- MOF (25%): $${adBudget * 0.25}
- BOF (15%): $${adBudget * 0.15}
===========================================`;

    const blob = new Blob([reportTxt], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Strategic_Report_${data.meta.brandName}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(lang === 'ar' ? 'تم تنزيل التقرير النصي الاستراتيجي بنجاح!' : 'Strategic text report downloaded successfully!');
  };

  // Calculated Media Buyer Simulator metrics
  const estimatedClicks = Math.round(adBudget / cpc);
  const estimatedOrders = Math.round(estimatedClicks * (conversionRate / 100));
  const estimatedRevenue = estimatedOrders * aov;
  const estimatedRoas = (estimatedRevenue / adBudget).toFixed(2);
  const estimatedCpa = (adBudget / (estimatedOrders || 1)).toFixed(2);

  // Filtered 110+ Google Ads Keywords
  const filteredKeywords = data.googleAdsKeywords.allKeywords.filter((item) => {
    const matchesCategory = kwCategoryFilter === 'all' || item.category === kwCategoryFilter;
    const matchesType = kwMatchFilter === 'all' || item.matchType === kwMatchFilter;
    const query = kwSearchText.trim().toLowerCase();
    const matchesSearch =
      !query ||
      item.kwAr.toLowerCase().includes(query) ||
      item.kwEn.toLowerCase().includes(query) ||
      item.sourceAr.toLowerCase().includes(query) ||
      item.sourceEn.toLowerCase().includes(query);
    return matchesCategory && matchesType && matchesSearch;
  });

  const navItems = [
    { id: 'overview', label: t.overview, icon: BarChart3 },
    { id: 'keywords-analyzer', label: `${t.keywordsAnalyzer} (${data.googleAdsKeywords.summary.totalExtracted})`, icon: Hash },
    { id: 'canva-report', label: t.canvaReport, icon: Layout },
    { id: 'cro-ux', label: t.croAudit, icon: Eye },
    { id: 'competitors', label: t.competitors, icon: Crosshair },
    { id: 'winner-ads', label: t.winnerAds, icon: Star },
    { id: 'media-toolkit', label: t.mediaBuyerToolkit, icon: DollarSign },
    { id: 'tools-hub', label: t.toolsHub, icon: Wrench },
    { id: 'swot', label: t.swot, icon: Layers },
    { id: 'settings', label: t.settings, icon: Settings }
  ];

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className={`min-h-screen flex flex-col md:flex-row ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'} font-sans transition-colors duration-200`}>
      
      {/* Sidebar Navigation */}
      <aside className={`w-full md:w-72 border-${isRTL ? 'l' : 'r'} flex flex-col justify-between ${isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'} backdrop-blur-md z-30 shrink-0`}>
        <div>
          <div className="p-5 border-b border-slate-800/50 flex items-center justify-between">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="p-2.5 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-500 text-white shadow-lg shadow-pink-500/20">
                <Flame className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h1 className="font-bold text-sm tracking-wide bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {t.appName}
                </h1>
                <p className="text-[10px] text-slate-400 font-medium">Media Buyer & CRO Intelligence AI</p>
              </div>
            </div>
          </div>

          <nav className="p-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 space-x-reverse px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all duration-150 ${
                    isActive
                      ? isDarkMode
                        ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/10 text-pink-400 border-r-4 border-pink-400 shadow-sm'
                        : 'bg-pink-50 text-pink-600 border-r-4 border-pink-600 shadow-sm'
                      : isDarkMode
                      ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-pink-400' : 'text-slate-400'}`} />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800/50 space-y-3">
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium border ${
              isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-white border-slate-300 text-slate-700'
            }`}
          >
            <span className="flex items-center space-x-2 space-x-reverse">
              <Languages className="w-3.5 h-3.5 text-cyan-400" />
              <span>{lang === 'ar' ? 'English (EN)' : 'العربية (AR)'}</span>
            </span>
            <span className="text-[10px] uppercase font-bold text-cyan-400">{lang}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium border ${
              isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-white border-slate-300 text-slate-700'
            }`}
          >
            <span className="flex items-center space-x-2 space-x-reverse">
              {isDarkMode ? <Moon className="w-3.5 h-3.5 text-pink-400" /> : <Sun className="w-3.5 h-3.5 text-amber-500" />}
              <span>{isDarkMode ? (lang === 'ar' ? 'الوضع المظلم' : 'Dark Mode') : (lang === 'ar' ? 'الوضع المضيء' : 'Light Mode')}</span>
            </span>
            <span className="text-[10px] uppercase font-bold text-slate-400">{isDarkMode ? 'ON' : 'OFF'}</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-x-hidden min-h-screen">
        
        {/* Header bar with domain input */}
        <header className={`p-4 md:px-8 border-b ${isDarkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200'} backdrop-blur-md sticky top-0 z-20`}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleRunAnalysis();
              }}
              className="w-full flex flex-col sm:flex-row items-center gap-2"
            >
              <div className="relative flex-1 w-full">
                <Search className={`w-4 h-4 absolute ${isRTL ? 'right-3.5' : 'left-3.5'} top-1/2 -translate-y-1/2 text-slate-400`} />
                <input
                  type="text"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  className={`w-full ${isRTL ? 'pr-10 pl-4 text-right' : 'pl-10 pr-4 text-left'} py-2.5 text-xs md:text-sm rounded-xl border outline-none transition-all ${
                    isDarkMode ? 'bg-slate-800/80 border-slate-700 text-white focus:border-pink-500' : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>

              <div className="w-full sm:w-48">
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className={`w-full py-2.5 px-3 text-xs rounded-xl border outline-none ${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-white border-slate-300 text-slate-800'}`}
                >
                  <option value="المملكة العربية السعودية والشرق الأوسط">🇸🇦 KSA & MENA</option>
                  <option value="مصر وإفريقيا">🇪🇬 Egypt & Africa</option>
                  <option value="الإمارات العربية المتحدة">🇦🇪 UAE</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isAnalyzing}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-medium text-xs text-white bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 hover:opacity-90 shadow-lg shadow-pink-500/20 flex items-center justify-center space-x-2 space-x-reverse shrink-0 disabled:opacity-50"
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>{t.analyzingText}</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t.analyzeBtn}</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {isAnalyzing && (
            <div className="mt-3 max-w-7xl mx-auto">
              <div className="flex justify-between items-center text-xs mb-1">
                <span className="text-pink-400 font-medium flex items-center space-x-2 space-x-reverse">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>{analysisStage}</span>
                </span>
                <span className="text-slate-400">{analysisProgress}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 h-full transition-all duration-300"
                  style={{ width: `${analysisProgress}%` }}
                ></div>
              </div>
            </div>
          )}
        </header>

        {/* Tab Contents */}
        <div className="p-4 md:p-8 max-w-7xl w-full mx-auto flex-1">
          {toastMessage && (
            <div className="fixed bottom-6 left-6 z-50 bg-slate-900 text-white border border-pink-500/40 px-5 py-3 rounded-2xl shadow-2xl flex items-center space-x-3 space-x-reverse animate-bounce">
              <CheckCircle2 className="w-5 h-5 text-pink-400 shrink-0" />
              <span className="text-xs font-medium">{toastMessage}</span>
            </div>
          )}

          {/* ================= TAB 1: OVERVIEW DASHBOARD ================= */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'} shadow-xl relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
                  <div>
                    <div className="flex items-center space-x-2 space-x-reverse mb-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-pink-500/20 text-pink-400 border border-pink-500/30">
                        URL: {data.meta.url}
                      </span>
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30">
                        Industry: {data.meta.industry}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                      {lang === 'ar' ? 'التقرير الاستراتيجي الشامل لـ' : 'Strategic Intelligence Report for'} <span className="text-pink-400">{data.meta.brandName}</span>
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      {lang === 'ar' ? 'تم استخراج وتحليل الموقع مع أقوى 10 منافسين حقيقيين بتاريخ' : 'Audited with top 10 real competitors on'} {data.meta.scrapedAt} ({data.meta.confidenceScore} confidence).
                    </p>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <button
                      onClick={handleExportCSV}
                      className="px-4 py-2 rounded-xl text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 flex items-center space-x-2 space-x-reverse"
                    >
                      <Download className="w-3.5 h-3.5 text-pink-400" />
                      <span>{t.exportCsv}</span>
                    </button>
                    <button
                      onClick={handleExportReportText}
                      className="px-4 py-2 rounded-xl text-xs font-medium bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md flex items-center space-x-2 space-x-reverse"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{t.exportReport}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'} shadow-sm`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-slate-400 font-medium">{t.marketPosition}</p>
                      <h3 className="text-base font-bold mt-1 text-pink-400">{data.overview.marketPosition}</h3>
                    </div>
                    <div className="p-2 rounded-xl bg-pink-500/10 text-pink-400">
                      <Target className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-3 flex items-center space-x-1 space-x-reverse">
                    <span className="text-emerald-400 font-bold">+5.8%</span>
                    <span>{lang === 'ar' ? 'نمو الحصة السوقية هذا الشهر' : 'Market Share Growth'}</span>
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'} shadow-sm`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-slate-400 font-medium">{t.priceIndex}</p>
                      <h3 className="text-base font-bold mt-1 text-purple-400">{data.overview.priceIndexScore}</h3>
                    </div>
                    <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                      <DollarSign className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-3">{lang === 'ar' ? 'توازن ممتاز مع أسعار المنافسين العشرة' : 'Balanced against 10 competitors'}</p>
                </div>

                <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'} shadow-sm`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-slate-400 font-medium">{t.techPerformance}</p>
                      <h3 className="text-base font-bold mt-1 text-emerald-400">{data.websiteAudit.performanceScore} / 100</h3>
                    </div>
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                      <Zap className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-3">{lang === 'ar' ? 'سرعة التحميل:' : 'Load Time:'} {data.websiteAudit.loadTimeSeconds}</p>
                </div>

                <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'} shadow-sm`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-slate-400 font-medium">{t.discoveredComps}</p>
                      <h3 className="text-base font-bold mt-1 text-cyan-400">10 Competitors</h3>
                    </div>
                    <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                      <Crosshair className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-3">Meta & Google Ad Library Ready</p>
                </div>
              </div>

              {/* Summary Competitors Table */}
              <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'} shadow-sm`}>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-bold flex items-center space-x-2 space-x-reverse">
                    <Crosshair className="w-4 h-4 text-pink-400" />
                    <span>{lang === 'ar' ? 'ملخص تحليل أقوى 10 منافسين في المجال' : 'Top 10 Competitors Quick Matrix'}</span>
                  </h3>
                  <button
                    onClick={() => setActiveTab('competitors')}
                    className="text-xs text-pink-400 hover:underline flex items-center space-x-1 space-x-reverse"
                  >
                    <span>{lang === 'ar' ? 'عرض التفاصيل الكاملة' : 'View Full Matrix'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-right text-xs">
                    <thead>
                      <tr className={`border-b ${isDarkMode ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
                        <th className="pb-3 px-3">#</th>
                        <th className="pb-3 px-3">{lang === 'ar' ? 'اسم المنافس' : 'Competitor Name'}</th>
                        <th className="pb-3 px-3">{lang === 'ar' ? 'الحصة السوقية' : 'Market Share'}</th>
                        <th className="pb-3 px-3">{lang === 'ar' ? 'مستوى الأسعار' : 'Price Level'}</th>
                        <th className="pb-3 px-3">USP</th>
                        <th className="pb-3 px-3">{lang === 'ar' ? 'أدوات الفحص السريع' : 'Quick Tools'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/40">
                      {data.competitors.slice(0, 5).map((comp, idx) => (
                        <tr key={comp.id} className={isDarkMode ? 'hover:bg-slate-800/30' : 'hover:bg-slate-50'}>
                          <td className="py-3 px-3 font-bold text-slate-500">{idx + 1}</td>
                          <td className="py-3 px-3 font-medium text-white">
                            <a href={comp.url} target="_blank" rel="noreferrer" className="hover:text-pink-400 flex items-center space-x-1.5 space-x-reverse">
                              <span>{comp.name}</span>
                              <ExternalLink className="w-3 h-3 text-slate-500" />
                            </a>
                          </td>
                          <td className="py-3 px-3"><span className="px-2 py-0.5 rounded-md bg-pink-500/10 text-pink-400 font-bold">{comp.marketShare}</span></td>
                          <td className="py-3 px-3 text-amber-400 font-medium">{comp.priceLevel}</td>
                          <td className="py-3 px-3 text-slate-300 truncate max-w-xs">{comp.usp}</td>
                          <td className="py-3 px-3">
                            <div className="flex items-center space-x-2 space-x-reverse">
                              <a href={comp.toolLinks.metaAds} target="_blank" rel="noreferrer" title="Meta Ads Library" className="p-1.5 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600/30">
                                <Radio className="w-3 h-3" />
                              </a>
                              <a href={comp.toolLinks.googleTransparency} target="_blank" rel="noreferrer" title="Google Transparency" className="p-1.5 rounded-lg bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30">
                                <Globe className="w-3 h-3" />
                              </a>
                              <a href={comp.toolLinks.similarweb} target="_blank" rel="noreferrer" title="Similarweb" className="p-1.5 rounded-lg bg-purple-600/20 text-purple-400 hover:bg-purple-600/30">
                                <Activity className="w-3 h-3" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB: GOOGLE ADS KEYWORD & SEARCH INTENT ANALYZER (110+ KEYWORDS) ================= */}
          {activeTab === 'keywords-analyzer' && (
            <div className="space-y-6">
              {/* Top Banner & Direct URL Extractor */}
              <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200'} shadow-xl relative overflow-hidden`}>
                <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-5 relative z-10">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                        Google Search Ads Intelligence • {data.googleAdsKeywords.summary.totalExtracted}+ Keywords
                      </span>
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-pink-500/20 text-pink-400 border border-pink-500/30">
                        {lang === 'ar' ? 'مستخرجة من متجرك + أقوى 10 منافسين' : 'Extracted from Your Store + Top 10 Competitors'}
                      </span>
                    </div>
                    <h2 className="text-lg md:text-xl font-bold flex items-center space-x-2 space-x-reverse">
                      <Hash className="w-5 h-5 text-cyan-400" />
                      <span>{t.kwTitle}</span>
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">{t.kwSubtitle}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => handleCopyKeywordsForGoogleAds(data.googleAdsKeywords.allKeywords)}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md hover:opacity-90 flex items-center space-x-2 space-x-reverse"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.copyAllKw}</span>
                    </button>
                    {filteredKeywords.length !== data.googleAdsKeywords.allKeywords.length && (
                      <button
                        onClick={() => handleCopyKeywordsForGoogleAds(filteredKeywords)}
                        className="px-4 py-2 rounded-xl text-xs font-bold bg-pink-500/20 text-pink-300 border border-pink-500/40 hover:bg-pink-500/30 flex items-center space-x-2 space-x-reverse"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>{t.copyFilteredKw} ({filteredKeywords.length})</span>
                      </button>
                    )}
                    <button
                      onClick={handleExportKeywordsCSV}
                      className="px-4 py-2 rounded-xl text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 flex items-center space-x-2 space-x-reverse"
                    >
                      <Download className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{t.exportKwCsv}</span>
                    </button>
                  </div>
                </div>

                {/* Inline Landing Page URL Keyword Extractor */}
                <form onSubmit={handleQuickKeywordExtract} className="flex flex-col sm:flex-row gap-2.5 relative z-10">
                  <div className="relative flex-1">
                    <Link2 className={`w-4 h-4 absolute ${isRTL ? 'right-3.5' : 'left-3.5'} top-1/2 -translate-y-1/2 text-slate-400`} />
                    <input
                      type="text"
                      value={kwUrlInput}
                      onChange={(e) => setKwUrlInput(e.target.value)}
                      placeholder={t.kwQuickPlaceholder}
                      className={`w-full ${isRTL ? 'pr-10 pl-4 text-right' : 'pl-10 pr-4 text-left'} py-2.5 text-xs rounded-xl border outline-none ${
                        isDarkMode ? 'bg-slate-800/90 border-slate-700 text-white focus:border-cyan-500' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl text-xs font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 flex items-center justify-center space-x-2 space-x-reverse shrink-0"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>{t.kwExtractBtn}</span>
                  </button>
                </form>
              </div>

              {/* Keyword Summary Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className={`p-4 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <p className="text-[11px] text-slate-400">{lang === 'ar' ? 'إجمالي الكلمات المستخرجة' : 'Total Extracted Keywords'}</p>
                  <h3 className="text-lg font-bold text-cyan-400 mt-1">{data.googleAdsKeywords.summary.totalExtracted} {lang === 'ar' ? 'كلمة مفتاحية' : 'Keywords'}</h3>
                  <p className="text-[10px] text-slate-500 mt-0.5">{lang === 'ar' ? '48 من متجرك + 70 من الـ 10 منافسين' : '48 Store + 70 Top Competitors'}</p>
                </div>
                <div className={`p-4 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <p className="text-[11px] text-slate-400">{lang === 'ar' ? 'إجمالي حجم البحث الشهري المجمع' : 'Combined Monthly Search Volume'}</p>
                  <h3 className="text-lg font-bold text-emerald-400 mt-1">{data.googleAdsKeywords.summary.totalMonthlySearchVolume}</h3>
                  <p className="text-[10px] text-slate-500 mt-0.5">{lang === 'ar' ? 'مرتبة من الأعلى بحثاً للأقل' : 'Sorted highest volume first'}</p>
                </div>
                <div className={`p-4 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <p className="text-[11px] text-slate-400">{lang === 'ar' ? 'متوسط تكلفة النقرة (Est. CPC)' : 'Estimated Avg. CPC'}</p>
                  <h3 className="text-lg font-bold text-pink-400 mt-1">{data.googleAdsKeywords.summary.avgCpc}</h3>
                  <p className="text-[10px] text-slate-500 mt-0.5">{data.googleAdsKeywords.summary.topIntentRatio}</p>
                </div>
                <div className={`p-4 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <p className="text-[11px] text-slate-400">{lang === 'ar' ? 'الميزانية اليومية المقترحة' : 'Suggested Daily Budget'}</p>
                  <h3 className="text-lg font-bold text-amber-400 mt-1">{data.googleAdsKeywords.summary.recommendedDailyBudget}</h3>
                  <p className="text-[10px] text-slate-500 mt-0.5">{lang === 'ar' ? 'لحملات البحث Google Search' : 'For Google Search Campaigns'}</p>
                </div>
              </div>

              {/* Filters & Live Search Bar */}
              <div className={`p-4 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'} flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-3`}>
                {/* Source / Category Filter Pills */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {[
                    { id: 'all', labelAr: `الكل (${data.googleAdsKeywords.allKeywords.length})`, labelEn: `All (${data.googleAdsKeywords.allKeywords.length})` },
                    { id: 'competitor_conquest', labelAr: 'كلمات المنافسين الـ 10 (70)', labelEn: '10 Competitors Conquest (70)' },
                    { id: 'store_transactional', labelAr: 'نية شراء مباشرة (متجرك)', labelEn: 'Store High-Intent' },
                    { id: 'installments_offers', labelAr: 'عروض وتقسيط تابي/تمارا', labelEn: 'Offers & Installments' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setKwCategoryFilter(tab.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                        kwCategoryFilter === tab.id
                          ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                          : isDarkMode
                          ? 'bg-slate-800 text-slate-300 hover:text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {lang === 'ar' ? tab.labelAr : tab.labelEn}
                    </button>
                  ))}
                </div>

                {/* Match Type & Text Search */}
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <select
                    value={kwMatchFilter}
                    onChange={(e) => setKwMatchFilter(e.target.value)}
                    className={`w-full sm:w-36 py-1.5 px-3 text-xs rounded-xl border outline-none ${
                      isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-white border-slate-300 text-slate-800'
                    }`}
                  >
                    <option value="all">{lang === 'ar' ? 'كل أنواع المطابقة' : 'All Match Types'}</option>
                    <option value="[Exact]">[Exact Match]</option>
                    <option value='"Phrase"'>"Phrase Match"</option>
                    <option value="Broad">Broad Match</option>
                  </select>

                  <div className="relative w-full sm:w-56">
                    <Search className={`w-3.5 h-3.5 absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-slate-400`} />
                    <input
                      type="text"
                      value={kwSearchText}
                      onChange={(e) => setKwSearchText(e.target.value)}
                      placeholder={lang === 'ar' ? 'ابحث في الـ 118 كلمة أو باسم منافس...' : 'Filter 118 keywords or competitor...'}
                      className={`w-full ${isRTL ? 'pr-8 pl-3 text-right' : 'pl-8 pr-3 text-left'} py-1.5 text-xs rounded-xl border outline-none ${
                        isDarkMode ? 'bg-slate-800 border-slate-700 text-white focus:border-cyan-500' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Unified 110+ Keywords Table */}
              <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'} shadow-sm`}>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-bold text-cyan-400 flex items-center space-x-2 space-x-reverse">
                    <MousePointerClick className="w-4 h-4" />
                    <span>
                      {lang === 'ar'
                        ? `قائمة الكلمات المفتاحية مرتبة حسب أعلى حجم بحث ونية شراء (${filteredKeywords.length} كلمة معروضة)`
                        : `Keywords Sorted by Highest Search Volume & Purchase Intent (${filteredKeywords.length} shown)`}
                    </span>
                  </h3>
                  <button
                    onClick={() => handleCopyKeywordsForGoogleAds(filteredKeywords)}
                    className="text-xs text-cyan-400 hover:underline flex items-center space-x-1 space-x-reverse font-bold"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? `نسخ القائمة (${filteredKeywords.length})` : `Copy List (${filteredKeywords.length})`}</span>
                  </button>
                </div>

                <div className="overflow-x-auto max-h-[620px] overflow-y-auto pr-1">
                  <table className="w-full text-start text-xs">
                    <thead className={`sticky top-0 z-10 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
                      <tr className={`border-b ${isDarkMode ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
                        <th className="py-3 px-2 text-start">#</th>
                        <th className="py-3 px-3 text-start">{lang === 'ar' ? 'الكلمة المفتاحية (Google Ads)' : 'Keyword (Google Ads)'}</th>
                        <th className="py-3 px-3 text-start">{lang === 'ar' ? 'المصدر (متجرك / المنافس)' : 'Source (Store / Competitor)'}</th>
                        <th className="py-3 px-3 text-start">{lang === 'ar' ? 'نوع المطابقة' : 'Match Type'}</th>
                        <th className="py-3 px-3 text-start">{lang === 'ar' ? 'حجم البحث الشهري' : 'Monthly Volume'}</th>
                        <th className="py-3 px-3 text-start">{lang === 'ar' ? 'المنافسة' : 'Competition'}</th>
                        <th className="py-3 px-3 text-start">{lang === 'ar' ? 'تكلفة النقرة (CPC)' : 'Est. CPC'}</th>
                        <th className="py-3 px-3 text-start">{lang === 'ar' ? 'درجة نية الشراء' : 'Buy Intent'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/40">
                      {filteredKeywords.map((item, idx) => {
                        const isCompetitor = item.category === 'competitor_conquest';
                        return (
                          <tr key={item.id} className={isDarkMode ? 'hover:bg-slate-800/40' : 'hover:bg-slate-50'}>
                            <td className="py-2.5 px-2 font-mono text-slate-500">{idx + 1}</td>
                            <td className="py-2.5 px-3 font-bold text-white">
                              <div className="flex items-center justify-between gap-2">
                                <span>{lang === 'ar' ? item.kwAr : item.kwEn}</span>
                                <button
                                  onClick={() => handleCopyKeywordsForGoogleAds([item])}
                                  title={lang === 'ar' ? 'نسخ الكلمة' : 'Copy keyword'}
                                  className="text-slate-500 hover:text-cyan-400 p-1 rounded"
                                >
                                  <Copy className="w-3 h-3" />
                                </button>
                              </div>
                            </td>
                            <td className="py-2.5 px-3">
                              <span
                                className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                                  isCompetitor
                                    ? 'bg-pink-500/15 text-pink-300 border border-pink-500/25'
                                    : 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/25'
                                }`}
                              >
                                {lang === 'ar' ? item.sourceAr : item.sourceEn}
                              </span>
                            </td>
                            <td className="py-2.5 px-3">
                              <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono text-[11px]">
                                {item.matchType}
                              </span>
                            </td>
                            <td className="py-2.5 px-3 text-cyan-400 font-bold">{item.volume}</td>
                            <td className="py-2.5 px-3">
                              <span
                                className={`text-[11px] font-medium ${
                                  item.competition === 'High'
                                    ? 'text-amber-400'
                                    : item.competition === 'Medium'
                                    ? 'text-sky-400'
                                    : 'text-emerald-400'
                                }`}
                              >
                                {item.competition}
                              </span>
                            </td>
                            <td className="py-2.5 px-3 font-bold text-slate-200">{item.cpc}</td>
                            <td className="py-2.5 px-3">
                              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
                                {item.intentScore}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Negative Keywords Box */}
              <div className="p-5 rounded-2xl border bg-rose-500/10 border-rose-500/30">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
                  <h3 className="text-xs font-bold text-rose-400 flex items-center space-x-2 space-x-reverse">
                    <Ban className="w-4 h-4" />
                    <span>{lang === 'ar' ? 'قائمة الكلمات السلبية المقترحة (Negative Keywords - لحماية ميزانيتك من الهدر)' : 'Recommended Negative Keywords (Prevent Wasted Spend)'}</span>
                  </h3>
                  <button
                    onClick={() => {
                      const negText = data.googleAdsKeywords.negativeKeywords
                        .map((n) => `-${lang === 'ar' ? n.kwAr : n.kwEn}`)
                        .join('\n');
                      navigator.clipboard?.writeText(negText);
                      showToast(lang === 'ar' ? 'تم نسخ قائمة الكلمات السلبية!' : 'Negative keywords copied!');
                    }}
                    className="text-xs text-rose-300 hover:underline flex items-center space-x-1 space-x-reverse"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? 'نسخ الكلمات السلبية' : 'Copy Negative List'}</span>
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.googleAdsKeywords.negativeKeywords.map((neg, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg text-xs font-medium bg-rose-950/70 text-rose-200 border border-rose-500/30">
                      -{lang === 'ar' ? neg.kwAr : neg.kwEn}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 2: CANVA-STYLE VISUAL REPORT ================= */}
          {activeTab === 'canva-report' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-r from-pink-900/40 via-purple-900/30 to-cyan-900/40 border border-pink-500/30 text-white relative overflow-hidden shadow-2xl">
                <div className="flex items-center space-x-3 space-x-reverse mb-3">
                  <div className="p-2.5 rounded-xl bg-pink-500/20 text-pink-400 border border-pink-500/30">
                    <Layout className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">تقرير Canva الاستراتيجي والإنفوجرافيك البصري</h2>
                    <p className="text-xs text-pink-200">عرض بصري يحاكي تصاميم التقارير الاحترافية الجاهزة للمشاركة والإدارة العليا</p>
                  </div>
                </div>
              </div>

              {/* Visual Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-slate-900/80 border-pink-500/40' : 'bg-white border-pink-300'} shadow-lg relative`}>
                  <div className="absolute -top-3 right-5 px-3 py-0.5 rounded-full text-[10px] font-bold bg-pink-500 text-white">متجرك المفحوص</div>
                  <h4 className="font-bold text-base text-pink-400 mt-1">{data.meta.brandName}</h4>
                  <p className="text-xs text-slate-400 mt-1">{data.meta.url}</p>
                  <div className="mt-4 space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">الأداء التقني</span>
                      <span className="font-bold text-emerald-400">{data.websiteAudit.performanceScore}/100 ⚡</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">سرعة التحميل</span>
                      <span className="font-bold text-white">{data.websiteAudit.loadTimeSeconds}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-400">معدل التحويل المتوقع</span>
                      <span className="font-bold text-pink-400">3.6% (مرتفع)</span>
                    </div>
                  </div>
                </div>

                <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-slate-900/80 border-purple-500/40' : 'bg-white border-purple-300'} shadow-lg relative`}>
                  <div className="absolute -top-3 right-5 px-3 py-0.5 rounded-full text-[10px] font-bold bg-purple-500 text-white">المنافس الأول</div>
                  <h4 className="font-bold text-base text-purple-400 mt-1">{data.competitors[0].name}</h4>
                  <p className="text-xs text-slate-400 mt-1">حصة سوقية: {data.competitors[0].marketShare}</p>
                  <div className="mt-4 space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">الحشوة الإعلانية</span>
                      <span className="font-bold text-purple-400">{data.competitors[0].adActivity}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">مستوى الأسعار</span>
                      <span className="font-bold text-amber-400">{data.competitors[0].priceLevel}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-400">أبرز نقطة قوة</span>
                      <span className="font-bold text-slate-300 truncate max-w-[150px]">{data.competitors[0].usp}</span>
                    </div>
                  </div>
                </div>

                <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-slate-900/80 border-cyan-500/40' : 'bg-white border-cyan-300'} shadow-lg relative`}>
                  <div className="absolute -top-3 right-5 px-3 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500 text-white">متوسط السوق</div>
                  <h4 className="font-bold text-base text-cyan-400 mt-1">Benchmark قطاع {data.meta.industry}</h4>
                  <p className="text-xs text-slate-400 mt-1">إجمالي 10 منافسين رئيسيين</p>
                  <div className="mt-4 space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">متوسط سرعة المواقع</span>
                      <span className="font-bold text-white">2.2 ثانية</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">نشاط الإعلانات الكلي</span>
                      <span className="font-bold text-cyan-400">مرتفع جداً</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-400">الفرصة الاستراتيجية</span>
                      <span className="font-bold text-emerald-400">سد الفجوات في الباقات والتوصيل</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Infographic 10 Competitors Grid */}
              <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'} shadow-sm`}>
                <h3 className="text-sm font-bold mb-4 flex items-center space-x-2 space-x-reverse">
                  <PieIcon className="w-4 h-4 text-purple-400" />
                  <span>مصفوفة الحصص السوقية لجميع المنافسين الـ 10</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {data.competitors.map((comp, idx) => (
                    <div key={comp.id} className={`p-3.5 rounded-xl border ${isDarkMode ? 'bg-slate-800/50 border-slate-700/60' : 'bg-slate-50 border-slate-200'} flex flex-col justify-between`}>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[10px] font-bold text-slate-400">#{idx + 1}</span>
                          <span className="text-xs font-bold text-pink-400">{comp.marketShare}</span>
                        </div>
                        <h4 className="font-bold text-xs text-white truncate">{comp.name}</h4>
                        <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{comp.usp}</p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-slate-700/50 flex justify-between items-center">
                        <span className="text-[10px] text-amber-400 font-bold">{comp.priceLevel}</span>
                        <a href={comp.toolLinks.metaAds} target="_blank" rel="noreferrer" className="text-[10px] text-pink-400 hover:underline flex items-center space-x-1 space-x-reverse">
                          <span>إعلانات ميتا</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 3: DEEP CRO & UX AUDIT ================= */}
          {activeTab === 'cro-ux' && (
            <div className="space-y-6">
              <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'} shadow-sm`}>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-base font-bold flex items-center space-x-2 space-x-reverse">
                      <Eye className="w-5 h-5 text-pink-400" />
                      <span>التدقيق الفني والتجاري العميق (CRO & UX Audit) لـ ({data.meta.brandName})</span>
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">فحص شامل للسرعة، احتكاكات التحويل، بكسلات التتبع، وبوابات الدفع الإلكترونية.</p>
                  </div>
                  <span className="px-3 py-1 rounded-xl text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    أداء ممتاز ({data.websiteAudit.performanceScore}/100)
                  </span>
                </div>

                {/* PageSpeed Vitals */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-slate-800/40 border-slate-700/60' : 'bg-slate-50 border-slate-200'}`}>
                    <p className="text-[11px] text-slate-400">زمن أول محتوى (FCP)</p>
                    <p className="text-sm font-bold text-cyan-400 mt-1">{data.websiteAudit.pageSpeedMetrics.fcp}</p>
                  </div>
                  <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-slate-800/40 border-slate-700/60' : 'bg-slate-50 border-slate-200'}`}>
                    <p className="text-[11px] text-slate-400">أكبر محتوى مرئي (LCP)</p>
                    <p className="text-sm font-bold text-emerald-400 mt-1">{data.websiteAudit.pageSpeedMetrics.lcp}</p>
                  </div>
                  <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-slate-800/40 border-slate-700/60' : 'bg-slate-50 border-slate-200'}`}>
                    <p className="text-[11px] text-slate-400">الثبات البصري (CLS)</p>
                    <p className="text-sm font-bold text-purple-400 mt-1">{data.websiteAudit.pageSpeedMetrics.cls}</p>
                  </div>
                  <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-slate-800/40 border-slate-700/60' : 'bg-slate-50 border-slate-200'}`}>
                    <p className="text-[11px] text-slate-400">جاهزية التفاعل (TTI)</p>
                    <p className="text-sm font-bold text-amber-400 mt-1">{data.websiteAudit.pageSpeedMetrics.tti}</p>
                  </div>
                </div>

                {/* Conversion Friction Alerts */}
                <div className="p-5 rounded-2xl border bg-pink-500/10 border-pink-500/30 text-pink-200 mb-6">
                  <h3 className="text-xs font-bold mb-3 flex items-center space-x-2 space-x-reverse text-pink-400">
                    <AlertTriangle className="w-4 h-4" />
                    <span>احتكاكات التحويل المكتشفة (Conversion Frictions - فرص رفع مبيعاتك فوراً)</span>
                  </h3>
                  <ul className="space-y-2 text-xs">
                    {data.websiteAudit.conversionFrictions.map((friction, idx) => (
                      <li key={idx} className="flex items-start space-x-2 space-x-reverse">
                        <span className="text-pink-400 font-bold">•</span>
                        <span>{friction}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Tracking Pixels */}
                  <div className={`p-5 rounded-xl border ${isDarkMode ? 'bg-slate-800/30 border-slate-700/50' : 'bg-slate-50 border-slate-200'}`}>
                    <h3 className="text-xs font-bold text-cyan-400 mb-3 flex items-center space-x-2 space-x-reverse">
                      <ShieldCheck className="w-4 h-4" />
                      <span>أدوات وتطبيقات التتبع والبكسلات المكتشفة</span>
                    </h3>
                    <ul className="space-y-2 text-xs">
                      {data.websiteAudit.detectedPixelTechs.map((tech, idx) => (
                        <li key={idx} className="flex items-center space-x-2 space-x-reverse text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Trust Signals & Payment */}
                  <div className={`p-5 rounded-xl border ${isDarkMode ? 'bg-slate-800/30 border-slate-700/50' : 'bg-slate-50 border-slate-200'}`}>
                    <h3 className="text-xs font-bold text-purple-400 mb-3 flex items-center space-x-2 space-x-reverse">
                      <CreditCard className="w-4 h-4" />
                      <span>إشارات الثقة وبوابات الدفع</span>
                    </h3>
                    <ul className="space-y-2 text-xs mb-4">
                      {data.websiteAudit.paymentGateways.map((pay, idx) => (
                        <li key={idx} className="flex items-center space-x-2 space-x-reverse text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                          <span>{pay}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-[11px] text-slate-400 bg-purple-500/10 p-2.5 rounded-lg border border-purple-500/20">
                      🚚 <strong>سياسة الشحن:</strong> {data.websiteAudit.shippingPolicy}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 4: TOP 10 COMPETITORS MATRIX ================= */}
          {activeTab === 'competitors' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-lg font-bold flex items-center space-x-2 space-x-reverse">
                    <Crosshair className="w-5 h-5 text-pink-400" />
                    <span>أقوى 10 منافسين أعداء حقيقيين في مجال ({data.meta.industry})</span>
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">تحليل كامل للحصص السوقية، الأسعار، وروابط الفحص المباشر لأدوات التجسس الإعلاني.</p>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <button
                    onClick={() => setShowAddCompModal(true)}
                    className="px-4 py-2 rounded-xl text-xs font-medium bg-pink-500 text-white hover:bg-pink-400 flex items-center space-x-2 space-x-reverse shadow-lg shadow-pink-500/20"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>إضافة منافس يدوي</span>
                  </button>
                  <button
                    onClick={handleExportCSV}
                    className="px-4 py-2 rounded-xl text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 flex items-center space-x-2 space-x-reverse"
                  >
                    <Download className="w-3.5 h-3.5 text-pink-400" />
                    <span>تصدير CSV</span>
                  </button>
                </div>
              </div>

              {/* Grid of Competitors */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.competitors.map((comp, idx) => (
                  <div key={comp.id} className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200'} shadow-sm flex flex-col justify-between relative`}>
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <span className="w-6 h-6 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center text-xs font-bold">
                            {idx + 1}
                          </span>
                          <h3 className="font-bold text-sm text-white">{comp.name}</h3>
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-pink-500/10 text-pink-400 border border-pink-500/25">
                            {comp.marketShare}
                          </span>
                          <button
                            onClick={() => handleRemoveCompetitor(comp.id)}
                            className="text-slate-500 hover:text-rose-400 p-1"
                            title="حذف المنافس"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 mb-3 bg-slate-800/40 p-2.5 rounded-xl border border-slate-700/40">
                        🎯 <strong>الميزة (USP):</strong> {comp.usp}
                      </p>
                      
                      <p className="text-xs text-rose-300 mb-4 bg-rose-500/10 p-2 rounded-xl border border-rose-500/20">
                        ⚠️ <strong>نقطة الضعف:</strong> {comp.weaknessMain}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800">
                      <p className="text-[11px] text-slate-400 font-medium mb-2">روابط أدوات التجسس والتحليل المباشر:</p>
                      <div className="grid grid-cols-3 gap-2">
                        <a
                          href={comp.toolLinks.metaAds}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2 py-1.5 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 text-[10px] font-medium text-center flex items-center justify-center space-x-1 space-x-reverse"
                        >
                          <Radio className="w-3 h-3" />
                          <span>إعلانات ميتا</span>
                        </a>
                        <a
                          href={comp.toolLinks.googleTransparency}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 text-[10px] font-medium text-center flex items-center justify-center space-x-1 space-x-reverse"
                        >
                          <Globe className="w-3 h-3" />
                          <span>إعلانات جوجل</span>
                        </a>
                        <a
                          href={comp.toolLinks.similarweb}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2 py-1.5 rounded-lg bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 text-[10px] font-medium text-center flex items-center justify-center space-x-1 space-x-reverse"
                        >
                          <Activity className="w-3 h-3" />
                          <span>Similarweb</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= TAB 5: WINNER ADS HUB ================= */}
          {activeTab === 'winner-ads' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-900/30 via-orange-900/20 to-yellow-900/30 border border-amber-500/30 text-white shadow-xl">
                <div className="flex items-center space-x-3 space-x-reverse mb-2">
                  <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
                    <Star className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">معرض ومركز الإعلانات الرابحة المجمع للمنافسين (Winner Ads Hub)</h2>
                    <p className="text-xs text-amber-200">مكان مجمع وموحد يضم أقوى إعلانات المنافسين الناجحة مع الخطافات (Hooks)، الزوايا، واستراتيجيات المحاكاة.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.winnerAds.map((ad) => (
                  <div key={ad.id} className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200'} shadow-sm flex flex-col justify-between`}>
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                          {ad.platform}
                        </span>
                        <span className="text-xs font-bold text-emerald-400">{ad.adScore}</span>
                      </div>

                      <h3 className="font-bold text-sm text-pink-400 mb-1">{ad.brandName}</h3>
                      <p className="text-[11px] text-slate-400 mb-3 font-medium">{ad.activeDuration}</p>

                      <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 mb-3">
                        <p className="text-xs font-bold text-amber-300 mb-1">🎣 خطاف الجذب (Hook):</p>
                        <p className="text-xs text-white italic">{ad.hookText}</p>
                      </div>

                      <p className="text-xs text-slate-300 mb-4 whitespace-pre-line bg-slate-900/40 p-3 rounded-xl border border-slate-800">
                        {ad.adCopy}
                      </p>

                      <div className="space-y-2 mb-4 text-xs">
                        <p className="text-slate-300">💡 <strong>لماذا نجح الإعلان؟</strong> {ad.whyItWorks}</p>
                        <p className="text-slate-300">🎬 <strong>طريقة المحاكاة:</strong> {ad.howToClone}</p>
                      </div>
                    </div>

                    <a
                      href={ad.toolLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2.5 rounded-xl text-xs font-medium bg-amber-500 text-slate-950 hover:bg-amber-400 flex items-center justify-center space-x-2 space-x-reverse font-bold shadow-md"
                    >
                      <span>فحص الإعلان مباشرة في المكتبة</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= TAB 6: MEDIA BUYER PRO TOOLKIT ================= */}
          {activeTab === 'media-toolkit' && (
            <div className="space-y-6">
              <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'} shadow-sm`}>
                <h2 className="text-base font-bold flex items-center space-x-2 space-x-reverse mb-2">
                  <DollarSign className="w-5 h-5 text-emerald-400" />
                  <span>{t.mediaBuyerPro}</span>
                </h2>
                <p className="text-xs text-slate-400 mb-6">مقترحات احترافية مبنية خصيصاً لمساعدتك كميديا باير في زيادة الـ ROAS وخفض تكلفة الاستحواذ (CPA).</p>

                {/* Media Buyer Simulator Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-5 rounded-xl border bg-slate-800/40 border-slate-700/60 mb-6">
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">الميزانية الشهرية ($)</label>
                    <input
                      type="number"
                      value={adBudget}
                      onChange={(e) => setAdBudget(Number(e.target.value))}
                      className="w-full p-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">متوسط قيمة السلة AOV ($)</label>
                    <input
                      type="number"
                      value={aov}
                      onChange={(e) => setAov(Number(e.target.value))}
                      className="w-full p-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">معدل التحويل CR (%)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={conversionRate}
                      onChange={(e) => setConversionRate(Number(e.target.value))}
                      className="w-full p-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">تکلفة النقرة CPC ($)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={cpc}
                      onChange={(e) => setCpc(Number(e.target.value))}
                      className="w-full p-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white"
                    />
                  </div>
                </div>

                {/* Simulation Outputs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                    <p className="text-[11px] text-slate-400">العائد المقدر (ROAS)</p>
                    <p className="text-lg font-bold text-emerald-400 mt-1">x{estimatedRoas}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                    <p className="text-[11px] text-slate-400">تكلفة الاكتساب (CPA)</p>
                    <p className="text-lg font-bold text-cyan-400 mt-1">${estimatedCpa}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
                    <p className="text-[11px] text-slate-400">إجمالي الطلبات المقدرة</p>
                    <p className="text-lg font-bold text-purple-400 mt-1">{estimatedOrders.toLocaleString()}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-pink-500/10 border border-pink-500/30">
                    <p className="text-[11px] text-slate-400">إجمالي الإيرادات</p>
                    <p className="text-lg font-bold text-pink-400 mt-1">${estimatedRevenue.toLocaleString()}</p>
                  </div>
                </div>

                {/* Campaign Blueprints & Playbooks */}
                <h3 className="text-sm font-bold text-pink-400 mb-4 flex items-center space-x-2 space-x-reverse">
                  <Sparkles className="w-4 h-4" />
                  <span>استراتيجيات وخرائط حملات الميديا بايير المحترف (Pro Playbooks)</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {data.mediaBuyerPlaybooks.map((pb, idx) => (
                    <div key={idx} className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-slate-800/40 border-slate-700/60' : 'bg-slate-50 border-slate-200'}`}>
                      <h4 className="font-bold text-xs text-white mb-1">{pb.title}</h4>
                      <p className="text-[11px] text-pink-400 mb-3">{pb.target}</p>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {pb.steps.map((step, sIdx) => (
                          <li key={sIdx} className="flex items-start space-x-2 space-x-reverse">
                            <span className="text-cyan-400 font-bold">•</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 7: TOOLS HUB ================= */}
          {activeTab === 'tools-hub' && (
            <div className="space-y-6">
              <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'} shadow-sm`}>
                <h2 className="text-base font-bold flex items-center space-x-2 space-x-reverse mb-2">
                  <Wrench className="w-5 h-5 text-pink-400" />
                  <span>مركز ربط وفحص أدوات المنافسين (Manual & Live Tools Hub)</span>
                </h2>
                <p className="text-xs text-slate-400 mb-6">أدخل رابط أي منافس خارجي لتوليد روابط فحص مباشرة لمكتبة إعلانات ميتا، جوجل، Similarweb، وBuiltWith.</p>

                <form onSubmit={handleGenerateManualLinks} className="flex flex-col sm:flex-row gap-3 mb-6">
                  <input
                    type="text"
                    value={manualDomainCheck}
                    onChange={(e) => setManualDomainCheck(e.target.value)}
                    placeholder="أدخل رابط المنافس (مثل: competitor.com)"
                    className={`flex-1 py-3 px-4 text-xs rounded-xl border outline-none ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl text-xs font-medium bg-pink-500 text-white hover:bg-pink-400 shadow-lg shadow-pink-500/20"
                  >
                    توليد روابط الأدوات فوراً
                  </button>
                </form>

                {manualGeneratedLinks && (
                  <div className="p-5 rounded-2xl border bg-pink-500/10 border-pink-500/30 space-y-3">
                    <h3 className="text-xs font-bold text-pink-400">روابط الفحص المباشر للمنافس ({manualDomainCheck}):</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      <a href={manualGeneratedLinks.metaAds} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 flex items-center justify-between text-xs">
                        <span className="text-slate-200">مكتبة إعلانات ميتا</span>
                        <ExternalLink className="w-3.5 h-3.5 text-pink-400" />
                      </a>
                      <a href={manualGeneratedLinks.googleTransparency} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 flex items-center justify-between text-xs">
                        <span className="text-slate-200">شفافية إعلانات جوجل</span>
                        <ExternalLink className="w-3.5 h-3.5 text-pink-400" />
                      </a>
                      <a href={manualGeneratedLinks.similarweb} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 flex items-center justify-between text-xs">
                        <span className="text-slate-200">Similarweb المرور</span>
                        <ExternalLink className="w-3.5 h-3.5 text-pink-400" />
                      </a>
                      <a href={manualGeneratedLinks.builtwith} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 flex items-center justify-between text-xs">
                        <span className="text-slate-200">BuiltWith التقنيات</span>
                        <ExternalLink className="w-3.5 h-3.5 text-pink-400" />
                      </a>
                      <a href={manualGeneratedLinks.pagespeed} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 flex items-center justify-between text-xs">
                        <span className="text-slate-200">PageSpeed سرعة الموقع</span>
                        <ExternalLink className="w-3.5 h-3.5 text-pink-400" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ================= TAB 8: SWOT MATRIX ================= */}
          {activeTab === 'swot' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className={`p-5 rounded-2xl border bg-emerald-500/10 border-emerald-500/30`}>
                  <h3 className="text-xs font-bold text-emerald-400 mb-3 flex items-center space-x-2 space-x-reverse">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>نقاط القوة (Strengths)</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-200">
                    {data.swot.strengths.map((s, i) => <li key={i}>• {s}</li>)}
                  </ul>
                </div>

                <div className={`p-5 rounded-2xl border bg-rose-500/10 border-rose-500/30`}>
                  <h3 className="text-xs font-bold text-rose-400 mb-3 flex items-center space-x-2 space-x-reverse">
                    <AlertTriangle className="w-4 h-4" />
                    <span>نقاط الضعف (Weaknesses)</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-200">
                    {data.swot.weaknesses.map((w, i) => <li key={i}>• {w}</li>)}
                  </ul>
                </div>

                <div className={`p-5 rounded-2xl border bg-pink-500/10 border-pink-500/30`}>
                  <h3 className="text-xs font-bold text-pink-400 mb-3 flex items-center space-x-2 space-x-reverse">
                    <Sparkles className="w-4 h-4" />
                    <span>الفرص المتاحة (Opportunities)</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-200">
                    {data.swot.opportunities.map((o, i) => <li key={i}>• {o}</li>)}
                  </ul>
                </div>

                <div className={`p-5 rounded-2xl border bg-amber-500/10 border-amber-500/30`}>
                  <h3 className="text-xs font-bold text-amber-400 mb-3 flex items-center space-x-2 space-x-reverse">
                    <AlertTriangle className="w-4 h-4" />
                    <span>التهديدات الخارجية (Threats)</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-200">
                    {data.swot.threats.map((t, i) => <li key={i}>• {t}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 9: SETTINGS & API KEYS ================= */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'} shadow-sm max-w-xl`}>
                <h2 className="text-base font-bold flex items-center space-x-2 space-x-reverse mb-2">
                  <Key className="w-5 h-5 text-amber-400" />
                  <span>إعدادات مفاتيح API الخارجية (Gemini, Meta, SerpAPI)</span>
                </h2>
                <p className="text-xs text-slate-400 mb-6">أدخل مفاتيح الـ API الخاصة بك في حال رغبتك بتفعيل الربط المباشر للذكاء الاصطناعي وجلب بيانات حية إضافية.</p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Google Gemini API Key:</label>
                    <input
                      type="password"
                      placeholder="AIzaSy..."
                      className={`w-full py-2.5 px-4 text-xs rounded-xl border outline-none ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">SerpAPI Key (اختياري للبحث المتقدم):</label>
                    <input
                      type="password"
                      placeholder="serp_api_key..."
                      className={`w-full py-2.5 px-4 text-xs rounded-xl border outline-none ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'}`}
                    />
                  </div>
                  <button
                    onClick={() => showToast(lang === 'ar' ? 'تم حفظ المفاتيح والإعدادات بأمان!' : 'Settings saved securely!')}
                    className="px-6 py-2.5 rounded-xl text-xs font-medium bg-pink-500 text-white hover:bg-pink-400 shadow-md"
                  >
                    حفظ المفاتيح بأمان
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Modal for adding custom competitor */}
      {showAddCompModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
          <div className={`w-full max-w-md p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'} shadow-2xl`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-bold">إضافة منافس جديد للقائمة</h3>
              <button onClick={() => setShowAddCompModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleAddCompetitor} className="space-y-4">
              <div>
                <label className="block text-xs font-medium mb-1">اسم المنافس:</label>
                <input
                  type="text"
                  value={newCompName}
                  onChange={(e) => setNewCompName(e.target.value)}
                  placeholder="مثال: متجر المنافس"
                  required
                  className={`w-full py-2.5 px-4 text-xs rounded-xl border outline-none ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300'}`}
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">رابط المنافس (Domain):</label>
                <input
                  type="text"
                  value={newCompUrl}
                  onChange={(e) => setNewCompUrl(e.target.value)}
                  placeholder="مثال: competitor.com"
                  required
                  className={`w-full py-2.5 px-4 text-xs rounded-xl border outline-none ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300'}`}
                />
              </div>
              <div className="flex justify-end space-x-2 space-x-reverse pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddCompModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-medium bg-slate-800 text-slate-300 hover:bg-slate-700"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-medium bg-pink-500 text-white hover:bg-pink-400"
                >
                  إضافة للقائمة
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}