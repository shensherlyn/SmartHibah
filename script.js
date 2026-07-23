// ==========================================================================
// 🌐 SISTEM DWI-BAHASA (BM / EN) + NAV + CHATBOT + ANIMASI
// SATU-SATUNYA fail JS untuk seluruh laman web. Semua halaman (index,
// pakej, panduan, hubungi) mesti link fail ni SAHAJA — jangan ada
// <script> inline lain yang declare setLanguage() atau i18nTokens.
// ==========================================================================

const i18nTokens = {
  bm: {
    // Navbar
    nav_home: "Laman Utama",
    nav_pakej: "Pakej",
    nav_panduan: "Panduan",
    nav_hubungi: "Hubungi Kami",
    nav_login: "Login",
    nav_login_mobile: "Log Masuk",

    // Hero Section
    hero_badge: "100% Patuh Syariah",
    hero_title: "Lindungi Masa Depan Insan Tersayang Bermula Hari Ini.",
    hero_desc: "SmartHibah membantu anda menyusun pemberian aset kepada keluarga atau penerima pilihan dengan lebih jelas, mudah dan teratur. Elakkan waris anda daripada terbeban dengan proses yang rumit.",
    hero_btn_create: "Buat Sekarang",
    hero_btn_more: "Ketahui Lebih Lanjut",

    // Why Section
    why_label: "Kenapa Buat Hibah Sekarang?",
    why_title: "Perancangan Harta Paling Bijak",
    why_sub: "Berikan kepastian kepada insan tersayang tanpa melalui proses tuntutan Faraid yang panjang.",
    why_card1_title: "Elak Konflik",
    why_card1_desc: "Mengurangkan risiko perebutan harta di kalangan waris selepas kematian.",
    why_card2_title: "Sangat Fleksibel",
    why_card2_desc: "Boleh diberikan kepada sesiapa sahaja, termasuk anak angkat atau bukan waris Faraid.",
    why_card3_title: "Sah & Terikat",
    why_card3_desc: "Menepati semua rukun dan syarat sah Hibah menurut perundangan Islam.",
    why_card4_title: "Terjamin",
    why_card4_desc: "Memberi ketenangan minda dengan menjamin masa depan keluarga secara sah.",

    // Services Section
    svc_label: "Pilihan Pakej",
    svc_title: "Pilih Perkhidmatan Hibah",
    svc_sub: "Solusi menyeluruh dari penetapan harta sehingga penyediaan dokumen fizikal.",
    svc_badge1: "Asas",
    svc_badge2: "Popular",
    svc_badge3: "Akan Datang",
    svc_btn: "Pilih Pakej",
    svc_btn_coming: "Akan Datang",
    svc_card1_desc: "Hibah ringkas untuk satu aset tertentu kepada sehingga empat penerima yang dipilih.",
    svc_card1_f1: "Jumlah Aset: 1 Aset Sahaja",
    svc_card1_f2: "Jenis Aset: Aset Alih atau Aset Tidak Alih",
    svc_card1_f3: "Penerima Hibah: Sehingga 4 Penerima",
    svc_card1_f4: "Kaedah Pembahagian: Pembahagian Jelas Untuk Satu Aset",
    svc_card1_f5: "Dokumen: Dokumen Hibah Ringkas",
    svc_card1_f6: "Sesuai Untuk: Satu Aset Penting",
    svc_card2_desc: "Hibah tersusun untuk beberapa aset, sesuai untuk perancangan keluarga yang lebih seimbang dan jelas.",
    svc_card2_f1: "Jumlah Aset: Sehingga 3 Aset",
    svc_card2_f2: "Jenis Aset: 1 Aset Tidak Alih + 2 Aset Alih",
    svc_card2_f3: "Penerima Hibah: Sehingga 4 Penerima",
    svc_card2_f4: "Kaedah Pembahagian: Pembahagian Sama Rata",
    svc_card2_f5: "Dokumen: Dokumen Hibah Berstruktur",
    svc_card2_f6: "Sesuai Untuk: Beberapa Aset Keluarga Yang Ingin Disusun Secara Seimbang",
    svc_card3_desc: "Hibah tersusun untuk beberapa aset, sesuai untuk perancangan keluarga yang lebih seimbang dan jelas.",
    svc_card3_f1: "Jumlah Aset: Sehingga 5 Aset",
    svc_card3_f2: "Jenis Aset: 2 Aset Tidak Alih + 3 Aset Alih",
    svc_card3_f3: "Penerima Hibah: Anak di bawah umur, boleh diberikan kepada sehingga 6 penerima.",
    svc_card3_f4: "Kaedah Pembahagian: Pembahagian Lebih Fleksibel",
    svc_card3_f5: "Dokumen: Dokumen Hibah Amanah lengkap",

    // Process Steps
    step_label: "Cara Ia Berfungsi",
    step_title: "Proses Mudah dalam 4 Langkah",
    step_sub: "Miliki dokumen rasmi tanpa urusan pejabat yang merumitkan.",
    step1_title: "Maklumat Aset",
    step1_desc: "Daftar dan senaraikan aset seperti rumah, tanah atau simpanan yang ingin dihibahkan.",
    step2_title: "Senarai Penerima",
    step2_desc: "Namakan individu (isteri, anak, anak angkat) yang akan menerima aset tersebut.",
    step3_title: "Penyediaan Dokumen",
    step3_desc: "Panel peguam kami akan menyediakan draf dokumen Deklarasi Hibah yang patuh Syariah.",
    step4_title: "Pengesahan Rasmi",
    step4_desc: "Semak dokumen, setuju terma, dan tandatangan bersama dua orang saksi yang layak.",

    // Audience Section
    aud_label: "Siapa Yang Memerlukan?",
    aud_title: "Sesuai Untuk Situasi Berikut",
    aud_sub: "Hibah adalah penyelesaian terbaik bagi mengelak risiko kehilangan hak milik orang yang anda sayang.",
    aud_card1_title: "Pasangan Suami Isteri",
    aud_card1_desc: "Melindungi rumah tangga dari tuntutan waris jauh",
    aud_card2_title: "Anak Perempuan Sahaja",
    aud_card2_desc: "Mengelak harta terpaksa dibahagi kepada waris asabah",
    aud_card3_title: "Anak Angkat/Tiri",
    aud_card3_desc: "Mereka yang tiada hak untuk menuntut Faraid secara sah",
    aud_card4_title: "Golongan Mualaf",
    aud_card4_desc: "Membantu memelihara kebajikan ahli keluarga yang belum Islam",
    aud_card5_title: "Pemilik Perniagaan",
    aud_card5_desc: "Mengelak krisis pemilikan syer dengan rakan kongsi selepas ketiadaan anda",

    // Video Showcase Section
    video_label: "",
    video_title: "Mengapa SmartHibah?",
    video_sub: "",

    // Documents Section
    docs_label: "Keperluan",
    docs_title: "Dokumen yang Diperlukan",
    docs_sub: "Sediakan salinan dokumen berikut untuk kelancaran penyediaan draf.",
    docs_item1_title: "Pengenalan Diri",
    docs_item1_desc: "MyKad bagi pihak Pemberi (anda) dan Penerima Hibah berserta saksi-saksi.",
    docs_item2_title: "Bukti Pemilikan Aset",
    docs_item2_desc: "Salinan Geran Tanah, Hakmilik Strata, buku akaun, atau geran kenderaan berkaitan.",
    docs_item3_title: "Dokumen Hubungan",
    docs_item3_desc: "Sijil Perkahwinan atau Sijil Kelahiran jika penerima adalah ahli keluarga kandung.",
    docs_item4_title: "Surat Pembiayaan (Hutang)",
    docs_item4_desc: "Penyata pinjaman terkini jika rumah/aset tersebut masih dalam pembiayaan bank.",
    docs_note: "Senarai khusus bergantung kepada jenis harta yang ingin dihibahkan.",

    // Bottom Banner
    banner_title: "Bertindak Hari Ini, Ketenangan Berpanjangan Untuk Mereka",
    banner_desc: "Hadiahkan kasih sayang anda secara rasmi. Mulakan SmartHibah sekarang.",
    banner_btn_create: "Mula Deklarasi Hibah",
    banner_btn_wa: "Tanya Penasihat Kami",

    // Panduan & Informasi Tambahan (BM)
    sec1_title: "Definisi & Rukun Sah Hibah",
    sec1_desc: "Dari segi bahasa, <strong>Hibah</strong> bermaksud pemberian hadiah. Manakala dari segi istilah undang-undang Syariah, ia merujuk kepada suatu akad pemindahan hak milik harta secara sukarela oleh pemilik (Pemberi) kepada pihak lain (Penerima) semasa hidupnya tanpa mengharapkan sebarang balasan (iwad).",
    sec1_subtitle: "4 Rukun Wajib Hibah (Syarat Sah Syarak)",
    r1_title: "Pemberi Hibah (Al-Wahib)",
    r1_desc: "Pemilik mutlak harta, berakal sihat, baligh, dan bertindak secara sukarela tanpa sebarang paksaan.",
    r2_title: "Penerima Hibah (Al-Mawhub lahu)",
    r2_desc: "Sesiapa sahaja yang dipilih (Waris Faraid atau bukan waris). Bagi penerima di bawah umur 18 tahun, ia akan diwakili oleh Pemegang Amanah atau Wali yang sah.",
    r3_title: "Harta Dihibahkan (Al-Mawhub)",
    r3_desc: "Harta yang bernilai, halal, wujud secara nyata sewaktu akad dibuat, dan bebas daripada sekatan hutang yang tidak dilindungi.",
    r4_title: "Lafaz Akad (Sighah Bertulis)",
    r4_desc: "Dokumen pengisytiharan yang mengandungi penawaran (Ijab) dan penerimaan (Qabul) secara rasmi, bertulis dan bertandatangan.",
    sec2_title: "Matlamat Perlindungan & Analisis Perbandingan",
    sec2_desc: "Berbeza dengan pengurusan Faraid atau Wasiat biasa, perancangan melalui SmartHibah memainkan peranan kritikal dalam sistem kewangan keluarga dengan objektif utama untuk mengelakkan pembekuan harta selepas kematian:",
    sec2_l1_bold: "Mengelakkan Pembekuan Harta:",
    sec2_l1_text: "Aset yang dihibahkan akan terus dipindahkan hak milik kepada penerima tanpa perlu melalui fasa pembekuan di institusi kewangan atau agensi pusaka.",
    sec2_l2_bold: "Melindungi Waris Tanggungan:",
    sec2_l2_text: "Sangat membantu bagi situasi pasangan yang tiada anak lelaki, bapa tunggal, keluarga angkat, mahupun pemberian khas kepada anak istimewa.",
    sec2_l3_bold: "Menjamin Keharmonian Keluarga:",
    sec2_l3_text: "Membantu meminimumkan risiko perbalahan, tuntutan bertindih, atau perebutan harta antara ahli keluarga terdekat selepas ketiadaan anda.",
    sec2_subtitle: "Jadual Perbandingan Ciri-Ciri Instrumen Pewarisan Harta",
    th_features: "Ciri-Ciri Utama",
    th_wasiat: "Wasiat Am",
    th_faraid: "Hukum Faraid",
    td_r1_f: "Penerima Harta",
    td_r1_h: "Sesiapa sahaja (Bebas)",
    td_r1_w: "Bukan waris sahaja (Maksimum 1/3)",
    td_r1_far: "Waris sah sahaja",
    td_r2_f: "Kadar Agihan",
    td_r2_h: "Ditentukan pemilik (0-100%)",
    td_r2_w: "Terhad kepada kadar wasiat",
    td_r2_far: "Mengikut ketetapan Syarak",
    td_r3_f: "Persetujuan Waris",
    td_r3_h: "Tidak Perlu (Hak Mutlak)",
    td_r3_w: "Perlu jika melebihi had 1/3",
    td_r3_far: "Mutlak mengikut hukum asal",
    td_r4_f: "Kelajuan Proses",
    td_r4_h: "Sangat Pantas & Terus",
    td_r4_w: "Melalui Prosedur Probet (Memakan Masa)",
    td_r4_far: "Mengambil masa (Sijil Faraid)",
    sec3_title: "Klasifikasi Jenis Harta",
    sec3_desc: "Pastikan aset yang ingin dirancang dikategorikan dengan betul bagi melancarkan proses pengesahan dokumentasi:",
    sec3_c1_title: "A. Harta Tak Alih (Hartanah)",
    sec3_c1_l1: "Rumah kediaman (Teres, Kondominium, Pangsapuri, Flat) sama ada masih bercagar atau telah bebas hutang.",
    sec3_c1_l2: "Tanah persendirian (Pertanian, Kedai, Komersial) atau tanah lot.",
    sec3_c1_l3: "*Nota: Status geran individu atau strata mestilah sah dan berdaftar.",
    sec3_c2_title: "B. Harta Alih (Kewangan & Fizikal)",
    sec3_c2_l1: "Akaun simpanan/semasa di institusi perbankan (Simpanan, Tabung Haji, ASB).",
    sec3_c2_l2: "Portfolio saham tersenarai, Unit Amanah (Unit Trust), dan dana pelaburan patuh syariah.",
    sec3_c2_l3: "Emas fizikal, emas digital, barangan berharga, serta kenderaan yang telah bebas hutang.",
    sec4_title: "Prosedur Pelaksanaan & Protokol Tuntutan",
    sec4_desc: "Proses penyediaan dokumentasi digital bersama kami kini dipermudahkan melalui 4 fasa utama berikut:",
    sec4_subtitle: "Prosedur Tuntutan Apabila Berlaku Kematian Pemberi",
    sec4_subdesc: "Apabila berlaku kematian pemberi hibah, penerima hanya perlu mengikut langkah mudah ini untuk urusan pindah milik aset:",
    claim_l1: "<strong>Pemberitahuan:</strong> Kemukakan Sijil Kematian rasmi kepada pihak pentadbir SmartHibah.",
    claim_l2: "<strong>Pengesahan Dokumen:</strong> Pihak kami akan mengeluarkan Dokumen Deklarasi asal yang telah disahkan.",
    claim_l3: "<strong>Pindah Milik Aset:</strong> Dokumen tersebut dibawa ke agensi berkaitan (Pejabat Tanah atau Bank) untuk penukaran nama secara terus tanpa melalui proses pembekuan harta pusaka.",
    sec5_title: "Senarai Dokumen Sokongan Pemfailan",
    sec5_desc: "Untuk melancarkan pengesahan draf deklarasi hibah, sila sediakan senarai semak dokumen bukti hak milik yang wajib dimuat naik mengikut kategori harta:",
    doc_l1: "<strong>Kategori Hartanah:</strong> Salinan Geran Hakmilik Sempurna, Perjanjian Jual Beli (SPA), dan Penyata Baki Pembiayaan Perumahan beserta bukti perlindungan MRTT/MLTT.",
    doc_l2: "<strong>Kategori Kewangan:</strong> Salinan buku bank atau penyata akaun rasmi yang memaparkan nombor akaun pemilik dengan jelas.",
    doc_l3: "<strong>Kategori Waris Bawah Umur:</strong> Salinan MyKid/Sijil Kelahiran penerima berserta Kad Pengenalan Pemegang Amanah (Pemegang Amanah) berdaftar yang dilantik.",

    // FAQ & Undang-undang (BM)
    sec6_title: "Arkib Soalan Lazim (FAQ) & Bidang Kuasa Undang-Undang",
    q1: "Adakah hibah boleh ditarik balik?",
    a1: "Secara umumnya, ketetapan hukum menetapkan bahawa hibah yang sudah diserahkan (Qabd) tidak boleh ditarik balik KECUALI hibah yang dibuat oleh ibu, bapa, datuk, atau nenek kepada anak atau cucu kandung mereka.",
    q2: "Apakah syarat sah barang atau aset yang ingin dihibahkan?",
    a2: "Aset mestilah wujud semasa akad dilakukan, merupakan milik mutlak pemberi hibah, tidak terikat dengan sebarang tuntutan mahkamah atau sekatan undang-undang, serta mempunyai nilai komersial atau manfaat menurut syarak.",
    q3: "Bolehkah rumah yang masih dalam pinjaman bank dihibahkan?",
    a3: "Boleh (atas status harta bercagar), dengan syarat pembiayaan perumahan tersebut dilindungi oleh polisi insurans atau takaful seperti MRTT atau MLTT yang akan melunaskan baki hutang secara automatik sekiranya berlaku kematian pemilik.",
    q4: "Bolehkah membuat dokumen hibah kepada anak angkat atau anak tiri?",
    a4: "<strong>Boleh dan amat digalakkan.</strong> Di bawah hukum Faraid, anak angkat dan anak tiri tidak dikategorikan sebagai waris mutlak (tiada hubungan darah), maka mereka tidak akan mendapat sebarang bahagian harta secara automatik. Melalui perancangan SmartHibah, anda mempunyai hak mutlak untuk menghibahkan sehingga 100% aset anda kepada mereka semasa anda masih hidup.",
    q5: "Apakah perbezaan antara dokumen draf Hibah dengan dokumen Wasiat?",
    a5: "Wasiat hanya berkuat kuasa <strong>selepas kematian</strong> pemilik harta, kadarnya terhad kepada maksimum 1/3 daripada baki harta, dan <em>hanya boleh diberikan kepada bukan waris Faraid</em>. Manakala Hibah dibuat dan berkuat kuasa <strong>semasa pemilik masih hidup</strong>, tiada had kadar agihan (0% - 100%), serta bebas diberikan kepada sesiapa sahaja.",
    q6: "Adakah penerima hibah yang masih bayi atau belum berumur 18 tahun boleh menerima aset?",
    a6: "<strong>Boleh.</strong> Bagi memenuhi syarat rukun Qabd (penerimaan atau kawalan harta), pengisytiharan hibah bagi waris di bawah umur (bawah 18 tahun) atau waris kurang upaya (OKU) wajib melantik seorang <strong>Pemegang Amanah</strong> yang akan menguruskan aset tersebut bagi pihak penerima sehingga mereka mencapai umur matang.",
    q7: "Bagaimana status dokumen hibah sekiranya penerima meninggal dunia terlebih dahulu sebelum pemberi?",
    a7: "Apabila akad hibah telah sempurna dimetrai (berlakunya penyerahan atau Qabd), aset tersebut secara rasminya telah bertukar hak milik kepada penerima. Sekiranya penerima meninggal dunia dahulu, aset tersebut akan dikategorikan sebagai harta pusaka penerima dan akan dibahagikan kepada waris-waris penerima mengikut hukum Faraid. Ia tidak akan kembali kepada pemberi asal (melainkan berlaku pembatalan hibah daripada ibu bapa kepada anak ketika masih hidup).",
    q8: "Adakah aset yang berada di luar negara boleh dimasukkan ke dalam sistem SmartHibah?",
    a8: "Sistem SmartHibah dirancang khusus mengikut Enakmen Hibah Kelantan 2022 <strong>di dalam Malaysia sahaja</strong>. Bagi aset di luar negara, ia tertakluk kepada undang-undang dan perlaksanaan di negara terbabit.",
    q9: "Adakah simpanan akaun bersama (Joint Account) di bank boleh dihibahkan?",
    a9: "Bagi akaun bersama, pemilik hanya dibenarkan menghibahkan kadar bahagian milikan beliau sahaja (biasanya dikira berasaskan anggaran 50% daripada jumlah baki simpanan, melainkan terdapat perjanjian bertulis yang lain). Proses ini memerlukan penelitian draf yang lebih spesifik bagi mengelakkan pertikaian hak milik dengan pihak bank.",
    q10: "Bolehkah saya membuat hibah sekiranya saya disahkan menghidap penyakit kritikal?",
    a10: "Sekiranya pemberi berada dalam fasa penyakit kritikal yang tenat atau fasa <em>Marad al-Mawt</em> (sakit yang membawa kepada kematian), kesahihan akad hibah boleh dicabar di Mahkamah Syariah kerana rukun kesihatan akal dan kesukarelaan pemberi boleh diragui. Oleh itu, perancangan ini amat digalakkan untuk dibuat sewaktu tubuh badan masih sihat.",
    q11: "Adakah dokumen deklarasi hibah digital ini perlu disahkan oleh Mahkamah Syariah dengan segera?",
    a11: "Dokumen deklarasi bertulis yang ditandatangani bersama 2 saksi Muslim yang adil sudah sah di sisi Syarak sebagai bukti niat dan akad. Proses pengesahan (isbat) di Mahkamah Syariah biasanya hanya akan dilakukan oleh penerima manfaat <strong>selepas berlakunya kematian pemberi</strong> (sebagai dokumen sokongan untuk perintah pindah milik agensi).",
    q12: "Apakah peranan 2 orang saksi lelaki Muslim di dalam Langkah 4 proses pelaksanaan?",
    a12: "Dua orang saksi berfungsi sebagai ejen pengesahan luaran. Mereka bertanggungjawab menyaksikan bahawa proses penawaran (Ijab) dan penerimaan (Qabul) dokumen berlaku tanpa paksaan, pemberi berada dalam keadaan sihat mental, serta tiada pemalsuan maklumat berlaku sewaktu cetakan fizikal ditandatangani.",
    disclaimer_text: "<strong>Nota Penafian Sempadan Perundangan:</strong> Senarai undang-undang khusus dan keperluan pengisytiharan rasmi adalah tertakluk kepada keputusan Mahkamah Syariah negeri masing-masing. Pihak SmartHibah menyediakan draf bertaraf profesional berdasarkan standard perundangan terkini dengan nota penafian bidang kuasa mutlak mahkamah tersebut.",

    // Footer
    footer_cs: "Perkhidmatan Pelanggan",
    footer_email: "Emel",
    footer_hq: "Alamat - Ibu Pejabat",
    footer_hq_val: "No 46A (First Floor), Jalan Ambong 1, Kepong Baru 52100, Kuala Lumpur, Malaysia",
    footer_hq_addr: "No 46A (First Floor), Jalan Ambong 1,<br />Kepong Baru 52100, Kuala Lumpur, Malaysia",
    footer_tc: "Alamat - Pusat Latihan",
    footer_tc_val: "B-2-19, Blok Bougainvilla, 10 Boulevard, Lebuhraya Sprint, PJU6A, 47400 Petaling Jaya, Selangor, Malaysia",
    footer_tc_addr: "B-2-19, Blok Bougainvilla, 10 Boulevard,<br />Lebuhraya Sprint, PJU6A, 47400 Petaling Jaya,<br />Selangor, Malaysia",
    footer_rights: "© 2023 - 2026 All rights reserved | WasiatKu.com.my",

    // Chatbot
    chat_status: "Sedia Membantu",
    chat_welcome: "Hai! Saya Suri, pembantu maya SmartWills. Ada apa-apa soalan mengenai penyediaan draf dokumen hibah atau perancangan harta yang boleh saya bantu? 😊",
    contact_title: "Hubungi Kami",
    contact_sub: "Jika anda mempunyai sebarang soalan tentang perkhidmatan, harga, atau perkara lain, pasukan kami sedia menjawab semua pertanyaan anda.",
    form_name_label: "Nama",
    form_name_placeholder: "Nama Penuh",
    form_email_label: "Emel",
    form_email_placeholder: "Alamat E-mel",
    form_msg_label: "Soalan",
    form_msg_placeholder: "Tulis soalan anda di sini...",
    form_btn_send: "Hantar Mesej",
    form_footer_notice: "Borang ini akan membuka aplikasi emel anda dengan maklumat yang telah diisi."
  },
  en: {
    // Navbar
    nav_home: "Home",
    nav_pakej: "Packages",
    nav_panduan: "Guide",
    nav_hubungi: "Contact Us",
    nav_login: "Login",
    nav_login_mobile: "Login",

    // Hero Section
    hero_badge: "100% Shariah Compliant",
    hero_title: "Protect the Future of Your Loved Ones Starting Today.",
    hero_desc: "SmartHibah helps you arrange the distribution of assets to your family or selected recipients more clearly, easily, and systematically. Prevent your heirs from being burdened by complex processes.",
    hero_btn_create: "Create Now",
    hero_btn_more: "Learn More",

    // Why Section
    why_label: "Why Make a Hibah Now?",
    why_title: "The Smartest Wealth Planning",
    why_sub: "Provide certainty to your loved ones without going through a long and arduous Faraid claim process.",
    why_card1_title: "Avoid Conflict",
    why_card1_desc: "Reduces the risk of asset disputes among heirs after your passing.",
    why_card2_title: "Highly Flexible",
    why_card2_desc: "Can be given to anyone, including adopted children or non-Faraid heirs.",
    why_card3_title: "Valid & Binding",
    why_card3_desc: "Meets all pillars and validity conditions of Hibah under Islamic legislation.",
    why_card4_title: "Secured",
    why_card4_desc: "Provides peace of mind by legally securing your family's future.",

    // Services Section
    svc_label: "Package Options",
    svc_title: "Choose Hibah Services",
    svc_sub: "Comprehensive solutions from asset allocation to physical document preparation.",
    svc_badge1: "Basic",
    svc_badge2: "Popular",
    svc_badge3: "Coming Soon",
    svc_btn: "Select Package",
    svc_btn_coming: "Coming Soon",
    svc_card1_desc: "A simple Hibah for one specific asset to up to four selected recipients.",
    svc_card1_f1: "Total Assets: 1 Asset Only",
    svc_card1_f2: "Asset Type: Movable or Immovable Asset",
    svc_card1_f3: "Hibah Recipients: Up to 4 Recipients",
    svc_card1_f4: "Distribution Method: Clear Distribution for One Asset",
    svc_card1_f5: "Document: Simplified Hibah Document",
    svc_card1_f6: "Best For: One Key Asset",
    svc_card2_desc: "Structured Hibah for multiple assets, ideal for a more balanced and clear family planning.",
    svc_card2_f1: "Total Assets: Up to 3 Assets",
    svc_card2_f2: "Asset Type: 1 Immovable + 2 Movable Assets",
    svc_card2_f3: "Hibah Recipients: Up to 4 Recipients",
    svc_card2_f4: "Distribution Method: Equal Distribution",
    svc_card2_f5: "Document: Structured Hibah Document",
    svc_card2_f6: "Best For: Setting up Family Assets to be Well-Balanced",
    svc_card3_desc: "Structured Hibah for multiple assets, ideal for a more balanced and clear family planning.",
    svc_card3_f1: "Total Assets: Up to 5 Assets",
    svc_card3_f2: "Asset Type: 2 Immovable + 3 Movable Assets",
    svc_card3_f3: "Hibah Recipients: Minor children. The hibah may be assigned to up to six (6) recipients.",
    svc_card3_f4: "Distribution Method: Highly Flexible Distribution",
    svc_card3_f5: "Document: Complete Trust Hibah Document",

    // Process Steps
    step_label: "How It Works",
    step_title: "Easy Process in 4 Steps",
    step_sub: "Get your official document without tedious administrative hassle.",
    step1_title: "Asset Information",
    step1_desc: "Register and list down assets like houses, land, or savings that you wish to gift.",
    step2_title: "Recipients List",
    step2_desc: "Name the individuals (spouse, children, adopted children) who will receive the assets.",
    step3_title: "Document Preparation",
    step3_desc: "Our panel of lawyers will prepare a Shariah-compliant draft of the Hibah Declaration.",
    step4_title: "Official Verification",
    step4_desc: "Review the document, agree to the terms, and sign it with two eligible witnesses.",

    // Audience Section
    aud_label: "Who Needs This?",
    aud_title: "Suitable for the Following Situations",
    aud_sub: "Hibah is the best solution to avoid the risk of your loved ones losing ownership of your assets.",
    aud_card1_title: "Married Couples",
    aud_card1_desc: "Protecting your household assets from claims by distant relatives.",
    aud_card2_title: "Daughters Only",
    aud_card2_desc: "Preventing assets from being divided to distant agnate heirs (asabah).",
    aud_card3_title: "Adopted/Stepchildren",
    aud_card3_desc: "Securing assets for those who have no legal right under Faraid.",
    aud_card4_title: "Muslim Converts",
    aud_card4_desc: "Helping to preserve the welfare of non-Muslim family members.",
    aud_card5_title: "Business Owners",
    aud_card5_desc: "Avoiding shareholding crises with business partners in your absence.",

    // Video Showcase Section
    video_label: "",
    video_title: "Why SmartHibah?",
    video_sub: "",

    // Documents Section
    docs_label: "Requirements",
    docs_title: "Required Documents",
    docs_sub: "Prepare copies of the following documents for smooth draft preparation.",
    docs_item1_title: "Identification",
    docs_item1_desc: "MyKad of the Donor (you), Hibah Recipients, and witnesses.",
    docs_item2_title: "Proof of Asset Ownership",
    docs_item2_desc: "Copies of Land Titles, Strata Titles, bank statements, or vehicle grants.",
    docs_item3_title: "Relationship Documents",
    docs_item3_desc: "Marriage Certificate or Birth Certificates if the recipient is an immediate family member.",
    docs_item4_title: "Financing Statement (Debt)",
    docs_item4_desc: "Latest loan statements if the house/asset is still under bank financing.",
    docs_note: "Specific list depends on the type of asset to be gifted.",

    // Bottom Banner
    banner_title: "Act Today, Secure Their Peace of Mind Forever",
    banner_desc: "Gift your love officially. Start your SmartHibah journey now.",
    banner_btn_create: "Start Hibah Declaration",
    banner_btn_wa: "Ask Our Consultant",

    // Panduan & Informasi Tambahan (EN)
    sec1_title: "Definition & Valid Pillars of Hibah",
    sec1_desc: "In terms of language, <strong>Hibah</strong> means gifting. In terms of Syariah legal context, it refers to a voluntary transfer of property ownership by the owner (Donor) to another party (Recipient) during their lifetime without expecting any consideration (iwad).",
    sec1_subtitle: "4 Essential Pillars of Hibah (Shariah Validity Requirements)",
    r1_title: "The Donor (Al-Wahib)",
    r1_desc: "Absolute owner of the asset, of sound mind, reached puberty (baligh), and acting voluntarily without any coercion.",
    r2_title: "The Recipient (Al-Mawhub lahu)",
    r2_desc: "Anyone chosen (Faraid heirs or non-heirs). For recipients under 18 years old, they will be represented by a legal Guardian.",
    r3_title: "The Asset (Al-Mawhub)",
    r3_desc: "Valuable, lawful (halal) asset, physically existing at the time of the contract, and free from any unprotected encumbrances.",
    r4_title: "Declaration of Contract (Written Sighah)",
    r4_desc: "A declaration document containing official offer (Ijab) and acceptance (Qabul) rendered in written and signed.",
    sec2_title: "Protection Objectives & Comparative Analysis",
    sec2_desc: "Unlike standard Faraid or Will administration, estate planning through SmartHibah plays a critical role in the family financial ecosystem with the primary goal of preventing frozen assets upon demise:",
    sec2_l1_bold: "Preventing Frozen Assets:",
    sec2_l1_text: "Hibah assets will be directly transferred to the beneficiary without undergoing freezing periods at financial institutions or estate agencies.",
    sec2_l2_bold: "Protecting Dependents:",
    sec2_l2_text: "Highly effective for couples without male heirs, single parents, adopted families, or special provisions for children with special needs.",
    sec2_l3_bold: "Ensuring Family Harmony:",
    sec2_l3_text: "Minimizes risks of disputes, overlapping legal claims, or property contentions among immediate family members after you are gone.",
    sec2_subtitle: "Comparison Table of Estate Inheritance Instruments",
    th_features: "Key Features",
    th_wasiat: "General Will",
    th_faraid: "Faraid Rules",
    td_r1_f: "Asset Beneficiary",
    td_r1_h: "Anyone (Unrestricted)",
    td_r1_w: "Non-heirs only (Maximum 1/3)",
    td_r1_far: "Legitimate Shariah heirs only",
    td_r2_f: "Distribution Rate",
    td_r2_h: "Determined by owner (0-100%)",
    td_r2_w: "Restricted to Will limitation",
    td_r2_far: "Fixed by Shariah rules",
    td_r3_f: "Consent of Heirs",
    td_r3_h: "Not Required (Absolute Right)",
    td_r3_w: "Required if exceeding 1/3 limit",
    td_r3_far: "Absolute according to original ruling",
    td_r4_f: "Process Speed",
    td_r4_h: "Very Fast & Direct",
    td_r4_w: "Subject to Probate Procedure (Time Consuming)",
    td_r4_far: "Takes time (Faraid Certificate process)",
    sec3_title: "Classification of Asset Types",
    sec3_desc: "Ensure assets are correctly categorized to streamline the verification of documentation:",
    sec3_c1_title: "A. Immovable Property (Real Estate)",
    sec3_c1_l1: "Residential homes (Terraced, Condominium, Apartment, Flat) whether encumbered under mortgage or fully settled.",
    sec3_c1_l2: "Private land (Agricultural, Shop lot, Commercial) or vacant lots.",
    sec3_c1_l3: "*Note: Status of individual or strata titles must be valid and registered.",
    sec3_c2_title: "B. Movable Property (Financial & Physical)",
    sec3_c2_l1: "Savings/current accounts in banking institutions (Savings, Tabung Haji, ASB).",
    sec3_c2_l2: "Listed stock portfolios, Unit Trusts, and shariah-compliant investment funds.",
    sec3_c2_l3: "Physical gold, digital gold, valuables, and motor vehicles that are debt-free.",
    sec4_title: "Execution Procedures & Claim Protocol",
    sec4_desc: "The digital documentation workflow with us is now simplified into 4 key phases:",
    sec4_subtitle: "Claim Procedure Upon Demise of the Donor",
    sec4_subdesc: "Upon the demise of the donor, the recipient only needs to follow these straightforward steps for ownership transfer:",
    claim_l1: "<strong>Notification:</strong> Submit the official Death Certificate to the SmartHibah administrator.",
    claim_l2: "<strong>Document Verification:</strong> Our team will issue the authenticated original Declaration Document.",
    claim_l3: "<strong>Asset Transfer:</strong> Bring the document to relevant agencies (Land Office or Bank) for title transfer, bypassing the estate freezing process.",
    sec5_title: "List of Supporting Filing Documents",
    sec5_desc: "To expedite validation of the draft hibah declaration, please prepare the mandatory ownership checklist for upload based on asset category:",
    doc_l1: "<strong>Real Estate Category:</strong> Copy of Perfected Land Title, Sale and Purchase Agreement (SPA), and Housing Loan Balance Statement with proof of MRTT/MLTT coverage.",
    doc_l2: "<strong>Financial Category:</strong> Copy of bank book or official account statement clearly displaying the owner's account number.",
    doc_l3: "<strong>Minor Beneficiary Category:</strong> Copy of recipient's MyKid/Birth Certificate alongside the Identity Card of the appointed registered Trustee.",

    // FAQ & Undang-undang (EN)
    sec6_title: "FAQ Archive & Legal Jurisdiction",
    q1: "Can a hibah be revoked?",
    a1: "Generally, Islamic law states that a hibah that has undergone delivery (Qabd) cannot be revoked EXCEPT for gifts made by parents, grandparents, or ancestors to their biological children or grandchildren.",
    q2: "What are the validity requirements for assets to be given as hibah?",
    a2: "The asset must exist during the execution of contract, must be under absolute ownership of the donor, free from court encumbrances or legal restrictions, and possess commercial value or utility in Shariah law.",
    q3: "Can a house still under a bank loan be given as hibah?",
    a3: "Yes (under mortgaged asset status), provided the housing financing is covered by insurance or takaful policies such as MRTT or MLTT which automatically clear outstanding debts upon the owner's demise.",
    q4: "Can a hibah document be made for an adopted or stepchild?",
    a4: "<strong>Yes, and it is highly encouraged.</strong> Under Faraid law, adopted and stepchildren are not categorized as absolute heirs (no blood relation), so they do not receive automatic shares. Through SmartHibah planning, you retain the absolute right to allocate up to 100% of your assets to them during your lifetime.",
    q5: "What is the difference between a draft Hibah document and a Will?",
    a5: "A Will only takes effect <strong>after the death</strong> of the asset owner, its rate is limited to a maximum of 1/3 of the remaining estate, and <em>can only be granted to non-Faraid heirs</em>. Conversely, Hibah is executed and takes effect <strong>while the owner is still alive</strong>, has no allocation limit (0% - 100%), and can be freely gifted to anyone.",
    q6: "Can a minor or an infant under 18 years old receive hibah assets?",
    a6: "<strong>Yes.</strong> To fulfill the requirement of Qabd (delivery or control of asset), a hibah declaration for minors (under 18) or disabled individuals (OKU) must appoint a <strong>Trustee</strong> to manage the assets until they reach maturity.",
    q7: "What happens to the hibah status if the recipient passes away before the donor?",
    a7: "Once the hibah contract is fully executed (upon delivery or Qabd), ownership officially passes to the recipient. If the recipient dies first, the asset becomes part of their estate and will be distributed to their heirs via Faraid. It does not revert to the original donor (unless the hibah is revoked by the parent in favour of the child during the parent's lifetime.).",
    q8: "Can overseas assets be registered into the SmartHibah system?",
    a8: "The SmartHibah system is structured Specifically structured based on the Kelantan Hibah Enactment 2022 and applicable <strong>within Malaysia only</strong>. For assets located outside Malaysia, the matter is subject to the laws and enforcement procedures of the relevant country.",
    q9: "Can a banking joint account be given as hibah?",
    a9: "For joint accounts, owners are only permitted to grant their specific share of ownership (typically calculated at an estimated 50% of the account balance, unless stated otherwise in a separate written agreement). This requires distinct draft configurations to prevent disputes with the bank.",
    q10: "Can I execute a hibah if I am diagnosed with a critical illness?",
    a10: "If the donor is in the terminal phase of a critical illness or the phase of <em>Marad al-Mawt</em> (illness leading to death), the validity of the contract can be contested in the Syariah Court as mental capacity and volunteerism may be compromised. Hence, it is highly advised to plan while in good health.",
    q11: "Does this digital hibah declaration document need immediate Syariah Court validation?",
    a11: "A written declaration signed before 2 just Muslim witnesses is legally valid under Shariah as proof of intent and contract. The confirmation process (isbat) in the Syariah Court is typically handled by the beneficiary <strong>after the demise of the donor</strong> (as a supporting document for agency transfer orders).",
    q12: "What is the role of the 2 Muslim male witnesses in Step 4 of the execution process?",
    a12: "The two witnesses function as external verification agents. They are responsible for testifying that the offer (Ijab) and acceptance (Qabul) occurred without coercion, the donor was of sound mind, and no falsification of data took place when the physical document was signed.",
    disclaimer_text: "<strong>Legal Jurisdiction Disclaimer Note:</strong> Specific legal lists and formal declaration requirements are subject to the rulings of the respective State Syariah Courts. SmartHibah provides professional-grade drafts based on current statutory standards, subject to the absolute discretion of the respective courts.",

    // Footer
    footer_cs: "Customer Service",
    footer_email: "Email",
    footer_hq: "Address - Head Office",
    footer_hq_val: "No 46A (First Floor), Jalan Ambong 1, Kepong Baru 52100, Kuala Lumpur, Malaysia",
    footer_hq_addr: "No 46A (First Floor), Jalan Ambong 1,<br />Kepong Baru 52100, Kuala Lumpur, Malaysia",
    footer_tc: "Address - Training Centre",
    footer_tc_val: "B-2-19, Block Bougainvilla, 10 Boulevard, Lebuhraya Sprint, PJU6A, 47400 Petaling Jaya, Selangor, Malaysia",
    footer_tc_addr: "B-2-19, Blok Bougainvilla, 10 Boulevard,<br />Lebuhraya Sprint, PJU6A, 47400 Petaling Jaya,<br />Selangor, Malaysia",
    footer_rights: "© 2023 - 2026 All rights reserved | WasiatKu.com.my",

    // Chatbot
    chat_status: "Online & Ready",
    chat_welcome: "Hi! I am Suri, SmartWills virtual assistant. Do you have any questions regarding the preparation of hibah document drafts or estate planning that I can help you with? 😊",
    contact_title: "Contact Us",
    contact_sub: "If you have any questions about services, pricing, or anything else, our team is ready to answer all your inquiries.",
    form_name_label: "Name",
    form_name_placeholder: "Full Name",
    form_email_label: "Email",
    form_email_placeholder: "Email Address",
    form_msg_label: "Questions",
    form_msg_placeholder: "Write your questions here...",
    form_btn_send: "Send Message",
    form_footer_notice: "This form will open your email application with the pre-filled information."
  }
};

/* ---------------------------------------------------------------------
   FUNGSI UTAMA PENUKARAN BAHASA
   --------------------------------------------------------------------- */
function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach(element => {
    const tokenKey = element.getAttribute('data-i18n');

    if (i18nTokens[lang] && i18nTokens[lang][tokenKey]) {
      let textValue = i18nTokens[lang][tokenKey];

      if (tokenKey === 'hero_title') {
        if (lang === 'bm') {
          textValue = textValue.replace("Bermula Hari Ini.", '<em style="color: var(--gold-lt); font-style: normal; text-shadow: 1px 1px 8px rgba(0,0,0,0.9);">Bermula Hari Ini.</em>');
        } else {
          textValue = textValue.replace("Starting Today.", '<em style="color: var(--gold-lt); font-style: normal; text-shadow: 1px 1px 8px rgba(0,0,0,0.9);">Starting Today.</em>');
        }
        element.innerHTML = textValue;
      }
      else if (textValue.includes('<')) {
        element.innerHTML = textValue;
      }
      else {
        element.textContent = textValue;
      }
    }
  });

  updateButtonUI(lang);

  try {
    localStorage.setItem('userLanguage', lang);
  } catch (e) {}
}

/* ---------------------------------------------------------------------
   UI BUTANG BM/EN — FIX: sekarang toggle KEDUA-DUA versi desktop
   (btn-bm/btn-en) DAN mobile (btn-bm-mobile/btn-en-mobile). Ini punca
   sebenar kenapa underline tak berpindah di telefon sebelum ni.
   --------------------------------------------------------------------- */
function updateButtonUI(lang) {
  const isBm = lang === 'bm';
  const idsBm = ['btn-bm', 'btn-bm-mobile'];
  const idsEn = ['btn-en', 'btn-en-mobile'];

  idsBm.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.classList.toggle('active-lang', isBm);
  });
  idsEn.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.classList.toggle('active-lang', !isBm);
  });
}

/* ---------------------------------------------------------------------
   AUTO-LOAD BAHASA TERSIMPAN — jalan di SETIAP halaman supaya pilihan
   bahasa "ikut" user bila dia navigate antara pages.
   --------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  let savedLang = 'bm';
  try {
    savedLang = localStorage.getItem('userLanguage') || 'bm';
  } catch (e) {}
  setLanguage(savedLang);
});

/* =======================================================================
   MENU HAMBURGER (mobile)
   ======================================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger');
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      const mobileNav = document.getElementById('navMobile');
      if (mobileNav) {
        mobileNav.classList.toggle('active');
      }
    });
  }
});

/* =======================================================================
   CHATBOT SURI & WHATSAPP
   ======================================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const chatTrigger = document.getElementById('chatTrigger');
  const chatWindow = document.getElementById('chatWindow');
  const closeChat = document.getElementById('closeChat');

  if (chatTrigger && chatWindow) {
    chatTrigger.addEventListener('click', () => {
      chatWindow.classList.toggle('open');
    });
  }

  if (closeChat && chatWindow) {
    closeChat.addEventListener('click', (e) => {
      e.stopPropagation();
      chatWindow.classList.remove('open');
    });
  }

  const chatInput = document.querySelector('.chat-input');
  const chatSendBtn = document.querySelector('.chat-send-btn');

  function sendMessage() {
    if (!chatInput) return;
    const messageText = chatInput.value.trim();
    if (messageText === '') return;

    const phoneNum = "60182209929";
    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${phoneNum}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
    chatInput.value = '';
  }

  if (chatSendBtn) {
    chatSendBtn.addEventListener('click', sendMessage);
  }

  if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  }
});

/* =======================================================================
   REVEAL ANIMASI (.anim) BILA SCROLL — untuk index.html terutamanya
   ======================================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const animElements = document.querySelectorAll('.anim');
  if (!animElements.length) return;

  if (!('IntersectionObserver' in window)) {
    animElements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animElements.forEach(el => observer.observe(el));
});
